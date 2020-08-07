

//la fonction appelee par la route ajout de facture
function factureAjout(req, res) {

    let sql = "insert into facture (id, id_promotion,prix) values ($1,$2,$3)"

    bd.excuterRequete(sql, [req.body.id, req.body.id_promotion, req.body.prix])
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

//la fonction appelee par la route recupration de facture avec l'id d'utilisateur
function factureRecuperationByIdUtilisateur(req, res) {

    let sql = "select * from animal where id_proprietaire = $1"

    bd.excuterRequete(sql, [req.params.id_proprietaire])
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
    factureAjout,
    factureRecuperationByIdUtilisateur,
}