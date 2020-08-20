const bd = require('../servers/bd')

//la fonction appelee par la route ajout de favoris
function favorisAjout(req, res) {

    let sql = "INSERT INTO favoris (id_petsitter, id_proprietaire) VALUES ($1,$2)"

    bd.excuterRequete(sql, [req.body.favoris.id_petsitter, req.body.favoris.id_proprietaire])
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

//la fonction appelee par la route ajout de favoris
function favorisModification(req, res) {

    let sql = "UPDATE favoris SET id_petsitter=$1, id_proprietaire=$2 WHERE id=$3"

    bd.excuterRequete(sql, [req.body.favoris.id_petsitter, req.body.favoris.id_proprietaire, req.params.id])
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

//la fonction appelee par la route recupration de favoris avec l'id d'utilisateur
function favorisRecuperationByIdUtilisateur(req, res) {

    let sql = "SELECT * FROM favoris WHERE id=$1"

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

//la fonction appelee par la route suppression de favoris
function favorisSuppression(req, res) {

    let sql = "DELETE FROM favoris WHERE id = $1"

    bd.excuterRequete(sql, [req.body.id])
        .then(resultatRequete => {
            //verifie s'il y a une ligne a supprimer
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
module.exports = {
    favorisAjout,
    favorisModification,
    favorisRecuperationByIdUtilisateur,
    favorisSuppression
}