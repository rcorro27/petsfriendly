//la fonction appelee par la route recupration de facture avec l'id d'utilisateur
function factureRecuperationByIdUtilisateur(req, res) {

    let sql = "SELECT * FROM facture WHERE id=$1"

    bd.excuterRequete(sql, [req.params.id, req.params.id_promotion, req.params.prix])
        .then(resultatRequete => {
            if (resultatRequete.rowCount >= 1) {
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(resultatRequete.rows))
            }
            else {
                res.setHeader('Content-Type', 'text/html')
                res.end(erreur.stack)
            }
        })
        .catch(erreur => {
            console.error(erreur.stack)
            res.setHeader('Content-Type', 'text/html')
            res.end(JSON.stringify({}))
        })
}
function factureSuppression(req, res) {

    let sql = "DELETE FROM facture where id=$1"
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
    factureRecuperationByIdUtilisateur,
    factureSuppression
}