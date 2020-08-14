

//la fonction appelee par la route ajout de feedback
function feedbackAjout(req, res) { //returning * >> retourne ce que j<ai inserer dans la bd

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

//la fonction appelee par la route recupration de feedback avec l'id d'utilisateur
function feedbackRecuperationByIdUtilisateur(req, res) {

    let sql = "" //requete contrat

    bd.excuterRequete(sql, [])
        .then(resultatRequete => { //execute requete feedback
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(resultatRequete.rows))
        })
        .catch(erreur => {
            console.error(erreur.stack)
            res.setHeader('Content-Type', 'text/html')
            res.end(erreur.stack)
        })
}

//la fonction appelee par la route suppression de feedback
function feedbackSuppression(req, res) {

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
    feedbackAjout,
    feedbackRecuperationByIdUtilisateur,
    feedbackSuppression
}