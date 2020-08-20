const bd = require('../servers/bd')
const utilisateurController = require('./utilisateurController')

// l'api de google pour calculer la distance entre deux adresses
var distance = require('google-distance-matrix');
distance.key('AIzaSyDJhlulgLB-bGuLctWHRn7DoWdKcq2gJiQ');

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route recherche de petsitters
<<<<<<< HEAD
function recherchePetsitters(req, res) {
=======
function recherchePetsitters(req, res)
{   
    let servicesChecker = (arr, target) => target.every(v => arr.includes(v));

    let reponseRequeteHttp = []

    let sql = "SELECT * FROM utilisateur WHERE id_role=3 AND est_disponible=true" 

    //requete sql pour recuperer tout les petsitters
    bd.excuterRequete(sql, []) 
    .then(resultatRequeteSqlUtilisateur => { 

        //pour chaque petsitter on fais une requete pour trouver ces services
        resultatRequeteSqlUtilisateur.rows.map(async (petsitter, index) => {

            await trouverServicesPetsitter(petsitter.id)
            .then(async resultatRequeteSqlServicePetsitter => {
                // creer le tableau d'id de services
                let servicesPetsitter = []
                resultatRequeteSqlServicePetsitter.rows.map((service, index) => {
                servicesPetsitter.push(parseInt(service.id_service))
                })
                
                //on verifie si les services du petsitter contienent ce que le cilient demande
                if (servicesChecker(servicesPetsitter, req.body.services)) {

                    //on verifie si le client se retourve dans le secteur d'action du petsitter
                    try {
                        if (await verifierSecteurActionPetsitter(req, petsitter))
                        {              

                            //on recupere le rating des feedback du petsitter (la somme des etoiles)
                            await recupererRatingPetsitter(petsitter)
                            .then(resultatRating => {  

                                 //creer l'obj du petsitter
                                const petsitterObj = {
                                "id": petsitter.id,
                                "nom": petsitter.nom,
                                "prenom": petsitter.prenom,
                                "age": petsitter.age,
                                "sexe": petsitter.sexe,
                                "id_adresse": petsitter.id_adresse,
                                "telephone": petsitter.telephone,
                                "secteur_action": petsitter.secteur_action,
                                "url_photo": petsitter.url_photo,
                                "services": servicesPetsitter,
                                "rating": parseInt(resultatRating)
                                }

                                //on push le petsitter dans la reponse
                                reponseRequeteHttp.push(petsitterObj)

                            })
                            .catch(erreur => {
                                throw erreur
                            })
                        }
                    // erreur de verification
                    } catch (erreur) {
                        console.error(erreur.stack)
                        
                        res.setHeader('Content-Type', 'text/html');
                        res.end(erreur.stack)

                        return undefined
                    }
                    
                }
            })
            .catch(erreur => {
                console.error(erreur.stack)

                res.setHeader('Content-Type', 'text/html');
                res.end(erreur.stack)

                return undefined
            })


            // si tout les petsitter sont verifies on envoie la reponse
            if ((index + 1) === resultatRequeteSqlUtilisateur.rows.length) {
                // si on arrive ici donc envoie la reponse avec le tableau de tout les petsitter
                res.setHeader('Content-Type', 'application/json');
                console.log(reponseRequeteHttp)
                res.end(JSON.stringify(reponseRequeteHttp))
            }
        })
        
    })
    // erreur de recuperation de petsitter
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}

//-----------------------------------------------------------------------------------------------------------------------------

function trouverServicesPetsitter(id_petsitter)
{
    return new Promise(async (resolve, reject) => {
        let sql = "SELECT * FROM service_utilisateur WHERE id_petsitter=$1" 

        //requete sql pour service
        await bd.excuterRequete(sql, [id_petsitter]) 
        .then(resultatRequeteSqlServicePetsitter => { 

                resolve(resultatRequeteSqlServicePetsitter)
        })
        .catch(erreur => {
            console.error(erreur.stack)
>>>>>>> master

            reject(erreur)
        })
    })
}

<<<<<<< HEAD
=======
//-----------------------------------------------------------------------------------------------------------------------------

function verifierSecteurActionPetsitter(req, petsitter)
{
    return new Promise(async (resolve, reject) => {
            // les adresse de destination et origin
        const proprietaireAdresse = req.body.adresse.numero_rue + " " + req.body.adresse.nom_rue + " " + req.body.adresse.code_postal + " " + req.body.adresse.ville + " " + req.body.adresse.pays
        let petsitterAdresse = ""

        // on recupere l'adresse du pets en utilisant la requete sql
        await utilisateurController.recupererAdresseUtilisateur(petsitter.id_adresse)
        .then(resultatRequeteSqlAdresse => {
            petsitterAdresse = resultatRequeteSqlAdresse.rows[0].numero_rue + " " + resultatRequeteSqlAdresse.rows[0].nom_rue + " " + resultatRequeteSqlAdresse.rows[0].code_postal + " " + resultatRequeteSqlAdresse.rows[0].ville + " " + resultatRequeteSqlAdresse.rows[0].pays
                

            // on utilise l'api pour recuperer la distance entre les deux adresses
            var origins = [petsitterAdresse];
            var destinations = [proprietaireAdresse];
        
            distance.matrix(origins, destinations, function (err, distances) {
                if (!err)
                {
                    // si tout est correct on renvoie un true
                    if (distances.status === "OK" && distances.rows[0].elements[0].status === "OK" && distances.rows[0].elements[0].distance.value <= petsitter.secteur_action * 1000) {
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                }
                else 
                {
                    reject(err)
                }
            })
        })
        .catch(erreur => {
            reject(erreur)
        })

    })
}

//-----------------------------------------------------------------------------------------------------------------------------

function recupererRatingPetsitter(petsitter)
{
    return new Promise(async (resolve, reject) => {
        let sql = "SELECT SUM(etoile) as rating FROM feedback INNER JOIN contrat ON feedback.id_contrat=contrat.id INNER JOIN contrat_utilisateur ON contrat.id=contrat_utilisateur.id_contrat WHERE contrat_utilisateur.id_petsitter=$1" 
       
        //requete sql pour service
        await bd.excuterRequete(sql, [petsitter.id]) 
            .then(resultatRequeteSqlRatingPetsitter => { 

                resolve(resultatRequeteSqlRatingPetsitter.rows[0].rating)
            })
            .catch(erreur => {
                console.error(erreur.stack)

                reject(erreur)
            })
    })
}


>>>>>>> master
module.exports = {
    recherchePetsitters,
}