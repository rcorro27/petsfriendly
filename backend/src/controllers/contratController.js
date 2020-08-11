

//la fonction appelee par la route ajout de contrat
function contratAjout(req, res) {
    let sql = "insert into contrat (id, id_facture, date_debut, date_fin, est_accepte, est_termine, est_lu_proprietaire, est_lu_petsitter, encore_disponible,date_creation) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)"

    bd.excuterRequete(sql, [req.body.id, req.body.id_facture, req.body.date_debut, req.body.date_fin, req.body.est_accepte, req.body.est_termine, req.body.est_lu_proprietaire, req.body.est_lu_petsitter, req.body.encore_disponible, req.body.date_creation])
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

//la fonction appelee par la route recuperation de contrat avec l'id d'utilisateur
function contratRecuperationByIdUtilisateur(req, res) {

    let sql = "select * from contrat where id = $1" //pas acces a l'id utilisateur

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
    contratAjout,
    contratRecuperation,
}