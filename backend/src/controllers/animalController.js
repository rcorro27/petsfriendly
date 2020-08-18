const bd = require('../servers/bd')
const { Animal } = require('../models/animal')

//la fonction appelee par la route ajout d'animal   
function animalAjout(req, res) {

    let sql = "INSERT INTO animal (race, type_animal, poids_animal, sexe_animal, nom_animal, age_animal, url_photo_animal) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *"

    //execution de la requete
    bd.excuterRequete(sql, [req.body.animal.race, req.body.animal.type_animal, req.body.animal.poids_animal, req.body.animal.sexe_animal, req.body.nom_animal, req.body.age_animal, req.body.url_photo_animal])//reqccuperer req.body
        .then(resultatRequete => {

            let requeteSQLAnimalUtilisateur = "INSERT INTO animal_utilisateur (id_proprietaire, id_animal) VALUES ($1,$2)"

            bd.excuterRequete(requeteSQLAnimalUtilisateur, [req.body.utilisateur.id, resultatRequete.rows[0].id])
                .then(resultatRequeteAnimal => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(resultatRequeteAnimal.rows))
                })
                .catch(erreur => {
                    console.error(erreur.stack)
                    res.setHeader('Content-Type', 'text/html')
                    res.end(erreur.stack)
                })

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

    let sql = "UPDATE animal SET race=$1, type_animal=$2, poids_animal=$3,sexe_animal=$4, nom_animal=$5,age_animal=$6,url_photo_animal=$7 WHERE id = $8"

    bd.excuterRequete(sql, [req.body.race, req.body.type_animal, req.body.poids_animal, req.body.sexe_animal, req.body.nom_animal, req.body.age_animal, req.body.url_photo_animal])//mettre toutes les valeurs)
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
function AnimalRecuperationByIdUtilisateur(req, res) {

    //reccupere l'utilisateur
    let sql = "SELECT * FROM animal_utilisateur WHERE id_proprietaire = $1"

    bd.excuterRequete(sql, [req.params.id])
        .then(resultatRequete => {
            res.setHeader('Content-Type', 'application/json');
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

    let sql = "SELECT * FROM animal WHERE id = $1"

    bd.excuterRequete(sql, [req.params.id])
        .then(resultatRequete => {
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(resultatRequete.rows))
        })
        .catch(erreur => {
            console.error(erreur.stack)
            res.setHeader('Content-Type', 'text/html')
            res.end(erreur.stack)
        })
}

//la fonction appelee par la route de suppression d'animal
function AnimalSuppression(req, res) {

    let sql = "DELETE FROM animal WHERE id = $1"

    bd.excuterRequete(sql, [req.body.id])
        .then(resultatRequete => {
            //verifie s'il y a un resultat a supprimer
            if (resultatRequete.rowCount >= 1) {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({}))
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

/*
 fonction pour reccuperer animal_utilisateur
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

*/

module.exports = {
    animalAjout,
    animalModification,
    AnimalRecuperationByIdUtilisateur,
    AnimalRecuperationByIdAnimal,
    AnimalSuppression
}