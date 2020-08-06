const bd = require('../servers/bd')
const { Animal } = require('../models/animal')


//la fonction appelee par la route ajout d'animal
function animalAjout(req, res) {
    //requete sql
    let sql = "INSERT INTO animal (id, race, type_animal, poids_animal, sexe_animal, nom_animal, age_animal, url_photo_animal, tarif_supplementaire) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)"

    //execution de la requete
    bd.excuterRequete(sql, [])//reqccuperer req.body
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

    bd.excuterRequete(sql, ['1'])
        .then(resultatRequete => {

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(resultatRequete.rows))
        })
        .catch(erreur => {
            console.error(erreur.stack)

            res.setHeader('COntent-Type', 'text/html');
            res.end(erreur.stack)
        })
    //
}

//la fonction appelee par la route recuperation d'animal avec l'id de l'utilisateur
function AnimalRecuperationByIdUtilisateur(req, res) {

    let sql = "INSERT INTO animal ($1, %2, $3, ...) VALUES($4, $5, $6, ...)"



    bd.excuterRequete(sql, ['race', 'type_animal', 'poids_animal', 'labrador', 'chien', '40'])
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

//la fonction appelee par la route recuperation d'animal avec l'id de l'animal
function AnimalRecuperationByIdAnimal(req, res) {

    let sql = "INSERT INTO animal ($1, %2, $3, ...) VALUES($4, $5, $6, ...)"


    bd.excuterRequete(sql, ['race', 'type_animal', 'poids_animal', 'labrador', 'chien', '40'])//reqccuperer req
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

    let sql = "INSERT INTO animal ($1, %2, $3, ...) VALUES($4, $5, $6, ...)"


    bd.excuterRequete(sql, ['race', 'type_animal', 'poids_animal', 'labrador', 'chien', '40'])
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


module.exports = {
    animalAjout,
    animalModification,
    AnimalRecuperationByIdUtilisateur,
    AnimalRecuperationByIdAnimal,
    AnimalSuppression
}