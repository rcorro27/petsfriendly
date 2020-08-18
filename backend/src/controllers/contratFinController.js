const bd = require('../servers/bd')
const { Service } = require('../models/service')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route ajout de contrat
function contratFin(req, res) {
    //facture
    let sqlFacture = "INSERT INTO facture (id_promotion, prix) VALUES ($1,$2) RETURNING *"

    bd.excuterRequete(sqlFacture, [req.body.id_promotion, req.body.prix])
        .then(resultatRequete1 => {
            let sqlContrat = "UPDATE contrat SET id_facture=$1,est_termine=true where id=$2"

            bd.excuterRequete(sqlContrat, [resultatRequete1.rows[0].id_facture])
                .then(resultatRequete2 => {
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(resultatRequete.rows))
                })
                .catch(erreur => {
                    console.error(erreur.stack)
                    res.setHeader('Content-Type', 'text/html')
                    res.end(erreur.stack)
                })
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

    //facture
    let sqlFacture = "INSERT INTO facture (id_promotion, prix) VALUES ($1,$2) RETURNING *"

    bd.excuterRequete(sqlFacture, [req.body.id_promotion, req.body.prix])
        .then(resultatRequete1 => {
            let sqlContrat = "UPDATE contrat SET id=$1,id_facture=$2,date_debut=$3,date_fin=$4,est_accepte=$5,est_termine=$6,est_lu_proprietaire=$7,est_lu_disponible=$8,encore_disponible=$9,date_creation=$10"

            bd.excuterRequete(sql, [req.body.id_facture, req.body.date_debut, req.body.date_fin, req.body.est_accepte, req.body.est_termine, req.body.est_lu_proprietaire, req.body.est_lu_petsitter, req.body.encore_disponible, req.body.date_creation])
                .then(resultatRequete2 => {
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(resultatRequete.rows))
                })
                .catch(erreur => {
                    console.error(erreur.stack)
                    res.setHeader('Content-Type', 'text/html')
                    res.end(erreur.stack)
                })
        })
        .catch(erreur => {
            console.error(erreur.stack)
            res.setHeader('Content-Type', 'text/html')
            res.end(erreur.stack)
        })
}

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route recuperation de contrat avec l'id petsitter
function contratRecuperationByIdPetsitter(req, res) {

    /* creer la bonne requete selon le json a envoyer*/

    let sql = "SELECT * FROM contrat_utilisateur WHERE id = $1 RETURNING *"

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