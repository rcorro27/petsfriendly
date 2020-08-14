const bd = require('../servers/bd')
const { Animal } = require('../models/animal')

// GET = req.params. pcq dans url
// POST req.body. 

//la fonction appelee par la route ajout d'animal   
function animalAjout(req, res) {

    //requete sql
    let sql = "INSERT INTO animal (race, type_animal, poids_animal, sexe_animal, nom_animal, age_animal, url_photo_animal, tarif_supplementaire) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)"

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
    //########################################## A VERIFIER ###########################################//
    let sql = "update animal set race=$1, type_animal=$2, poids_animal=$3,sexe_animal=$4, nom_animal=$5,age_animal=$6,url_photo_animal=$7,tarif_supplementaire=$8"

    bd.excuterRequete(sql, [req.body.id])
        .then(resultatRequete => {

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(resultatRequete.rows))
        })
        .catch(erreur => {
            console.error(erreur.stack)

            res.setHeader('Content-Type', 'text/html');
            res.end(erreur.stack)
        })
}

//la fonction appelee par la route recuperation d'animal avec l'id de l'utilisateur
// ############################################ A FAIRE ######################################
function AnimalRecuperationByIdUtilisateur(req, res) {

    //reccupere l'utilisateur
    let sql = "select * from utilisateur where id_proprietaire = $1"

    bd.excuterRequete(sql, [req.params.id])
        .then(resultatRequete => {
            //verifie si utilisateur existe
            if (resultatRequete.rowCount < 1) {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ 'erreur': 400 }))
                return undefined
            }
            //avec l'id de l'utilisateur on reccupere animal_utilisateur
            reccupererAnimalUtilisateur(req.params.id)
                .then(resultatRequeteAnimalUtilisateur => {
                    //verifier si un resultat existe

                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(resultatRequete.rows))
                })
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

// fonction pour reccuperer animal_utisateur
function reccupererAnimalUtilisateur(id_proprietaire) {
    return new Promise((resolve, reject) => {
        let requeteSql = "SELECT * FROM animal_utilisateur WHERE id_proprietaire=$1"

        bd.excuterRequete(requeteSql, [id_proprietaire])
            .then(resultatSqlAnimalUtilisateur => {
                resolve(resultatSqlAnimalUtilisateur)
            })
            .catch(erreur => {
                console.error(erreur.stack)
                reject(erreur)
            })
    })
}

module.exports = {
    animalAjout,
    animalModification,
    AnimalRecuperationByIdUtilisateur,
    AnimalRecuperationByIdAnimal,
    AnimalSuppression
}