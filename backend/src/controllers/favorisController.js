

//la fonction appelee par la route ajout de favoris
function favorisAjout(req, res) {

    let sql = "insert into favoris (id, id_petsitter, id_proprietaire) values ($1,$2,$3)"

    bd.excuterRequete(sql, [req.body.id, req.body.id_petsitter, req.body.id_proprietaire])
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

    let sql = "update favoris set"

    bd.excuterRequete(sql, [])
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

    let sql = ""

    bd.excuterRequete(sql, [])
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

    let sql = ""

    bd.excuterRequete(sql, [])
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
    favorisAjout,
    favorisModification,
    factureRecuperationByIdUtilisateur,
    favorisSuppression
}