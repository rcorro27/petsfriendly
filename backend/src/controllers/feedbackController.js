
//feedback se cree a la fin du contrat (voir contrat fin)

//la fonction appelee par la route recupration de feedback avec l'id d'utilisateur
function feedbackRecuperationByIdUtilisateur(req, res) {

    let sql = "SELECT * FROM feedback WHERE id_contrat =$1" //requete contrat

    bd.excuterRequete(sql, [req.params.id, req.params.id_contrat, req.params.commentaire, req.params.etoile])
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

    let sql = "DELETE FROM feedback WHERE id=$1"

    bd.excuterRequete(sql, [req.body.id])
        .then(resultatRequete => {
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
    feedbackAjout,
    feedbackRecuperationByIdUtilisateur,
    feedbackSuppression
}