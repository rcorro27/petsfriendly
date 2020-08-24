const bd = require('../servers/bd')
const path = require('path');
const multer = require('multer')

// dossiers pour le storage
const dossierImagesProfiles = path.join("public/", "images/", "images_profiles/")
const dossierImageAnimaux = path.join("public/", "images/", "images_animaux/")

// objs storage utilises par multer
const storageImageProfile = multer.diskStorage({
    destination: dossierImagesProfiles,
    filename: async function (req, file, cb) {
        await sauvegarderUrlPhotoProfile(req, file)
        .then(urlPhoto => {

            cb(null, urlPhoto);
        })
        .catch(erreur => {

            cb(erreur, false)
        })
    }
})
const storageNouvelleImageAnimal = multer.diskStorage({
    destination: dossierImageAnimaux,
    filename: async function (req, file, cb) {
        const urlPhoto = req.params.id+"_"+Date.now()+"_"+file.originalname
        cb(null, urlPhoto)
    }
})
const storageModificationImageAnimal = multer.diskStorage({
    destination: dossierImageAnimaux,
    filename: async function (req, file, cb) {
        await sauvegarderUrlPhotoAnimal(req, file)
        .then(urlPhoto => {

            cb(null, urlPhoto);
        })
        .catch(erreur => {

            cb(erreur, false)
        })
    }
})

// objs utilises pour stocker les images
const uploadImageProfile = multer({ storage: storageImageProfile }).any()
const uploadNouvelleImageAnimal = multer({ storage: storageNouvelleImageAnimal }).any()
const uploadModificationImageAnimal = multer({ storage: storageModificationImageAnimal }).any()

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route suppression de service
function photoProfileAjout(req, res)
{
    uploadImageProfile(req, res, function (err) {
        if (err) {
            console.log(err)
            res.setHeader('Content-Type', 'text/html');
            res.end('Error uploading file.')
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"url_photo" : req.files[0].filename}))
        }
    })
    
}

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route suppression de service
function photoAnimalAjout(req, res)
{
    uploadNouvelleImageAnimal(req, res, function (err) {
        if (err) {
            console.log(err)
            res.setHeader('Content-Type', 'text/html');
            res.end('Error uploading file.')
        } else {
        
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"url_photo_animal" : req.files[0].filename}))
        }
    })
}

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route suppression de service
function photoAnimalModification(req, res)
{
    uploadModificationImageAnimal(req, res, function (err) {
        if (err) {
            console.log(err)
            res.setHeader('Content-Type', 'text/html');
            res.end('Error uploading file.')
        } else {
        
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"url_photo_animal" : req.files[0].filename}))
        }
    })
}

//-----------------------------------------------------------------------------------------------------------------------------

function sauvegarderUrlPhotoProfile(req, file)
{
    return new Promise((resolve, reject) => {
        let sqlUtilisateur = "SELECT url_photo FROM utilisateur WHERE id=$1" 

        //requete sql pour service
        bd.excuterRequete(sqlUtilisateur, [req.params.id]) 
        .then(async resultatRequeteSqlUtilisateur => { 

            let urlPhoto = ""
            /* si le user ne possede de photo donc on cree un nouvel url sinon on prends l'ancien*/
            if (resultatRequeteSqlUtilisateur.rows[0].url_photo === null)
            {
                // creation url photo
                 urlPhoto = req.params.id+"_"+Date.now()+"_"+file.originalname

                 let sqlPhoto = "UPDATE utilisateur SET url_photo=$1 WHERE id=$2" 

                    //requete sql pour service
                    await bd.excuterRequete(sqlPhoto, [urlPhoto, req.params.id]) 
                    .then(resultatRequeteSqlPhoto => { 
                        resolve(urlPhoto)
                    })
                    .catch(erreur => {
                        reject(erreur)
                    })

            } else {
                 urlPhoto = resultatRequeteSqlUtilisateur.rows[0].url_photo
                 resolve(urlPhoto)
            }

            
        })
        .catch(erreur => {
            reject(erreur)
        })
    })

}

//-----------------------------------------------------------------------------------------------------------------------------

function sauvegarderUrlPhotoAnimal(req, file)
{
    return new Promise((resolve, reject) => {
        let sqlUtilisateur = "SELECT url_photo_animal FROM animal WHERE id=$1" 

        //requete sql pour service
        bd.excuterRequete(sqlUtilisateur, [req.params.id]) 
        .then(async resultatRequeteSqlAnimal => { 

            let urlPhoto = ""
            /* si le user ne possede de photo donc on cree un nouvel url sinon on prends l'ancien*/
            if (resultatRequeteSqlAnimal.rows[0].url_photo_animal === null)
            {
                // creation url photo
                 urlPhoto = req.params.id+"_"+Date.now()+"_"+file.originalname

                 let sqlPhoto = "UPDATE animal SET url_photo_animal=$1 WHERE id=$2" 

                    //requete sql pour service
                    await bd.excuterRequete(sqlPhoto, [urlPhoto, req.params.id]) 
                    .then(resultatRequeteSqlPhoto => { 
                        resolve(urlPhoto)
                    })
                    .catch(erreur => {
                        reject(erreur)
                    })

            } else {
                 urlPhoto = resultatRequeteSqlAnimal.rows[0].url_photo_animal
                 resolve(urlPhoto)
            }

            
        })
        .catch(erreur => {
            reject(erreur)
        })
    })

}


module.exports = {
    photoProfileAjout,
    photoAnimalAjout,
    photoAnimalModification
}