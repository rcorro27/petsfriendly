const bd = require('../servers/bd')
const { Service } = require('../models/service')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route ajout de contrat
function contratFin(req, res) {

    /* creer la bonne structure pour la fin du contrat et tout ce qui va avec*/

    let sql = "insert into contrat (id_facture, date_debut, date_fin, est_accepte, est_termine, est_lu_proprietaire, est_lu_petsitter, encore_disponible,date_creation) values ($1,$2,$3,$4,$5,$6,$7,$8,$9  )"

    bd.excuterRequete(sql, [req.body.id_facture, req.body.date_debut, req.body.date_fin, req.body.est_accepte, req.body.est_termine, req.body.est_lu_proprietaire, req.body.est_lu_petsitter, req.body.encore_disponible, req.body.date_creation])
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

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route recuperation de contrat avec l'id du proprietaire
function contratRecuperationByIdProprietaire(req, res) {

    /*reccuperer id du proprietaire*/

    let sql = "SELECT * FROM contrat_utilisateur WHERE id = $1 RETURNING *"

    //execution de la requete
    bd.excuterRequete(sql, [req.body.id, req.body.id_contrat])//reqccuperer req.body
        .then(resultatRequete => {

            //reccuperer contrat par l'id user
            let requeteSQLFinContratProprietaire = "SELECT * FROM contrat WHERE id_proprietaire = $1"

            bd.excuterRequete(requeteSQLFinContratProprietaire, [req.body.utilisateur.id, resultatRequete.rows[0].id])
                .then(resultatRequeteContratProprietaire => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(resultatRequeteContratProprietaire.rows))
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

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route recuperation de contrat avec l'id petsitter
function contratRecuperationByIdPetsitter(req, res) {

    /* creer la bonne requete selon le json a envoyer*/

    let sql = "select * from contrat_utilisateur where id = $1 RETURNING *"

    //execution de la requete
    bd.excuterRequete(sql, [req.body.id, req.body.id_contrat])
        .then(resultatRequete => {

            let requeteSQLFinContratPetsitter = "SELECT * FROM contrat WHERE id_petsitter = $1"

            bd.excuterRequete(requeteSQLFinContratPetsitter, [req.body.utilisateur.id, resultatRequete.rows[0].id])
                .then(resultatRequeteContratPetsitter => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(resultatRequeteContratPetsitter.rows))
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
module.exports = {
    contratFin,
    contratRecuperationByIdProprietaire,
    contratRecuperationByIdPetsitter
}