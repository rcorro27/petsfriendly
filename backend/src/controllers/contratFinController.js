const bd = require('../servers/bd')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route ajout de contrat
function contratFin(req, res) {
    //facture
    let sqlFacture = "INSERT INTO facture (id_promotion, prix) VALUES ($1,$2) RETURNING *"

    bd.excuterRequete(sqlFacture, [req.body.promotion.id_promotion, req.body.facture.prix])
        .then(resultatRequete1 => {
            let sqlContrat = "UPDATE contrat SET id_facture=$1,est_termine=true, encore_disponible=false, est_lu_proprietaire=false, est_lu_petsitter=false where id=$2"

            bd.excuterRequete(sqlContrat, [resultatRequete1.rows[0].id, req.body.contrat.id_contrat])
                .then(resultatRequete2 => {

                    let sqlContratUtilisateur = 'SELECT * FROM contrat_utilisateur WHERE id_contrat = $1'

                    bd.excuterRequete(sqlContratUtilisateur, [req.body.contrat.id_contrat])
                        .then(resultatRequete5 => {
                            let sqlFeedback = "INSERT INTO feedback (id_contrat, commentaire, etoile) VALUES ($1,$2,$3)"

                            bd.excuterRequete(sqlFeedback, [req.body.contrat.id_contrat, req.body.feedback.commentaire, req.body.feedback.etoile])
                                .then(resultatRequete3 => {

                                    let sqlGainPetsitter = "UPDATE utilisateur SET remuneration_petsitter=$1 FROM utilisateur u INNER JOIN contrat_utilisateur c ON u.id=c.id_petsitter WHERE c.id_contrat=$2"

                                    const remuneration_petsitter = req.body.facture.prix  - req.body.facture.prix * 20 / 100

                                    bd.excuterRequete(sqlGainPetsitter, [remuneration_petsitter, req.body.contrat.id_contrat])
                                        .then(resultatRequete4 => {
                                            res.setHeader('Content-Type', 'application/json')
                                            res.end(JSON.stringify({}))
                                        })
                                        .catch(erreur => {
                                            console.error(erreur.stack)
                                            res.setHeader('Content-Type', 'application/json')
                                            res.end(erreur)
                                        })
                                })
                                .catch(erreur => {
                                    console.error(erreur.stack)
                                    res.setHeader('Content-Type', 'application/json')
                                    res.end(erreur.stack)
                                })
                        })
                        .catch(erreur => {
                            console.error(erreur.stack)
                            res.setHeader('Content-Type', 'application/json')
                            res.end(erreur)
                        })
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

    let sqlReccupererContratParIdProprietaire = "SELECT c.id id_contrat, id_proprietaire, id_petsitter, date_debut, date_fin, date_creation, est_accepte, est_termine, est_lu_proprietaire, est_lu_petsitter, encore_disponible FROM contrat c INNER JOIN contrat_utilisateur u ON c.id=u.id_contrat WHERE u.id_proprietaire=$1 OR u.id_petsitter=$2"

    //execution de la requete
    bd.excuterRequete(sqlReccupererContratParIdProprietaire, [req.params.id])
        .then(resultatRequete => {

            let requeteSQLFinContratPetsitter = "SELECT * FROM contrat WHERE id_petsitter = $1"

            bd.excuterRequete(requeteSQLFinContratPetsitter, [resultatRequete.rows[0].id_contrat])
                .then(resultatRequeteContratPetsitter => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(resultatRequeteContratPetsitter.rows))
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

    let sqlReccupererContratParIdPetsitter = "SELECT * FROM contrat_utilisateur WHERE id = $1 RETURNING *"

    bd.excuterRequete(sqlReccupererContratParIdPetsitter, [req.params.id_contrat])
        .then(resultatRequete => {

            let requeteSQLFinContratPetsitter = "SELECT * FROM contrat WHERE id_petsitter = $1"

            bd.excuterRequete(requeteSQLFinContratPetsitter, [resultatRequete.rows[0].id])
                .then(resultatRequeteContratPetsitter => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(resultatRequeteContratPetsitter.rows))
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
function contratRecuperationByIdUtilisateur(req, res) {

    let sqlRecupererContratParIdUtilisateur = "SELECT c.id, r.nom as nom_proprietaire, r.prenom as prenom_proprietaire, t.nom as nom_petsitter, t.prenom as prenom_petsitter, id_contrat, id_proprietaire, id_petsitter, date_debut, date_fin, c.date_creation, est_accepte, est_termine, est_lu_proprietaire, est_lu_petsitter, encore_disponible " +
                                              " FROM contrat c INNER JOIN contrat_utilisateur u ON c.id=u.id_contrat INNER JOIN utilisateur r ON u.id_proprietaire=r.id INNER JOIN utilisateur t ON u.id_petsitter=t.id " +
                                              " WHERE u.id_proprietaire=$1 OR u.id_petsitter=$2"

    //execution de la requete
    bd.excuterRequete(sqlRecupererContratParIdUtilisateur, [req.params.id, req.params.id])
        .then(resultatRequeteContrat => {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(resultatRequeteContrat.rows))
        })
        .catch(erreur => {
            console.error(erreur.stack)
            res.setHeader('Content-Type', 'text/html')
            res.end(erreur.stack)
        })
}


module.exports = {
    contratFin,
    contratRecuperationByIdProprietaire,
    contratRecuperationByIdPetsitter,
    contratRecuperationByIdUtilisateur
}