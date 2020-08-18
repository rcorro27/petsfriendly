const bd = require('../servers/bd')
const { Service } = require('../models/service')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route ajout de contrat
function contratFin(req, res) {
    //facture
    let sqlFacture = "INSERT INTO facture (id_contrat,id_promotion, prix) VALUES ($1,$2) RETURNING *"

    bd.excuterRequete(sqlFacture, [req.body.contrat.id_contrat, req.body.promotion.id_promotion, req.body.facture.prix])
        .then(resultatRequete1 => {
            let sqlContrat = "UPDATE contrat SET id_facture=$1,est_termine=true where id=$2"

            bd.excuterRequete(sqlContrat, [resultatRequete1.rows[0].id_facture])
                .then(resultatRequete2 => {
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(resultatRequete2.rows))
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

    /* creer la bonne requete selon le json a envoyer*/

    let sqlReccupererContratParIdProprietaire = "SELECT * FROM contrat_utilisateur WHERE id = $1 RETURNING *"

    //execution de la requete
    bd.excuterRequete(sqlReccupererContratParIdProprietaire, [req.body.id, req.body.id_contrat])
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

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route recuperation de contrat avec l'id petsitter
function contratRecuperationByIdPetsitter(req, res) {

    /* creer la bonne requete selon le json a envoyer*/

    let sqlReccupererContratParIdPetsitter = "SELECT * FROM contrat_utilisateur WHERE id = $1 RETURNING *"

    //execution de la requete
    bd.excuterRequete(sqlReccupererContratParIdPetsitter, [req.body.id, req.body.id_contrat])
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