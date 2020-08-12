const bd = require('../servers/bd')
const { Animal } = require('../models/animal')

// GET = req.params. pcq dans url
// POST req.body. 
// une fonction
//la fonction appelee par la route ajout d'animal   
function animalAjout(req, res) {// pas ajouter id pcq auto increment de la bd

    //requete sql
    let sql = "INSERT INTO animal (race, type_animal, poids_animal, sexe_animal, nom_animal, age_animal, url_photo_animal, tarif_supplementaire) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)"

    //execution de la requete
    bd.excuterRequete(sql, [req.body.race, req.body.type_animal, req.body.poids_animal, req.body.sexe_animal, req.body.nom_animal, req.body.age_animal, req.body.url_photo_animal, req.body.tarif_supplementaire])//reqccuperer req.body
        .then(resultatRequete => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(resultatRequete.rows))
        })
        .catch(erreur => { // si erreur on affiche les details et et on l'envois --- developpement seulement
            console.error(erreur.stack)
            res.setHeader('Content-Type', 'text/html')
            res.end(erreur.stack)
        })
}

//la fonction appelee par la route modification d'animal
function animalModification(req, res) {

    let sql = "update animal set column1 = value1, value2,value3 etc. where id = $1"

    bd.excuterRequete(sql, [req.body.id])
        .then(resultatRequete => {


            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(resultatRequete.rows))
        })
        .catch(erreur => {
            console.error(erreur.stack)

            res.setHeader('COntent-Type', 'text/html');
            res.end(erreur.stack)
        })

}

//la fonction appelee par la route recuperation d'animal avec l'id de l'utilisateur
function AnimalRecuperationByIdUtilisateur(req, res) {

    //reccupere l'utilisateur
    let sql = "select * from utilisateur where id = $1"

    bd.excuterRequete(sql, [req.params.id])
        .then(resultatRequete => {
            //avec l'id de l'utilisateur on reccupere animal_utilisateur
            let sqlAnimal = "select * from animal_utilisateur where id_proprietaire = " + req.params.id

            //avec animal_utilisateur on reccupere les données de la table animal
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(resultatRequete.rows))
        })
        .catch(erreur => {
            console.error(erreur.stack)
            res.setHeader('Content-Type', 'text/html')
            res.end(erreur.stack)
        })
}

//la fonction appelee par la route recuperation d'animal avec l'id de l'animal
function AnimalRecuperationByIdAnimal(req, res) {

    let sql = "select * from animal where id = $1"

    bd.excuterRequete(sql, [req.params.id])
        .then(resultatRequete => {
            //verifier s'il y a un resultat
            if (resultatRequete.rowCount >= 1) {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(resultatRequete.rows))
            }
            else {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ "erreur": 400 }))
            }
        })
        .catch(erreur => {
            console.error(erreur.stack)
            res.setHeader('Content-Type', 'text/html')
            res.end(erreur.stack)
        })
}

//la fonction appelee par la route de suppression d'animal
function AnimalSuppression(req, res) {

    let sql = "delete from animal where id = $1"

    bd.excuterRequete(sql, [req.body.id])
        .then(resultatRequete => {
            //verifie s'il y a un resultat a supprimer
            if (resultatRequete.rowCount >= 1) {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(resultatRequete.rows))
            }
            else {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ "erreur": 400 }))
            }
        })
        .catch(erreur => {
            console.error(erreur.stack)
            res.setHeader('Content-Type', 'text/html')
            res.end(erreur.stack)
        })
}

module.exports = {
    animalAjout,
    animalModification,
    AnimalRecuperationByIdUtilisateur,
    AnimalRecuperationByIdAnimal,
    AnimalSuppression
}