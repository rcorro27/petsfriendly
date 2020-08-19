const bd = require('../servers/bd')
const {Service} = require('../models/service')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route ajout de contrat
function contratCreation(req, res) {

                    // ***************  ajout du contrat  ****************
            ajoutContrat(req)
            .then(resultatRequeteContrat => {

                             // ***************  ajout du contrat_utilisateur  ****************
                    ajoutContratUtilisateur(req, resultatRequeteContrat.rows[0].id)
                    .then(resultatRequeteContratUtilisateur => {

                                     // ***************  ajout du promotion_utilisateur  ****************
                            ajoutPromotionUtilisateur(req)
                            .then(resultatRequetePromotionUtilisateur => {
                                                    
                                             // ***************  ajout des service_contrat  ****************
                                   ajoutServiceContrat(req, resultatRequeteContrat.rows[0].id)
                                   .then(resultatRequeteServiceContrat => {
                                         res.setHeader('Content-Type', 'application/json');
                                         res.end(JSON.stringify({}))
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

function contratAcceptation(req, res) 
{                               
                 // ***************  ajout du planning  ****************
        ajoutPlanning(req)
        .then(resultatRequetePlanning => {

                         // ***************  desactivation du contrat pour les autres petsitters  ****************
                    contratDesactivation(req)
                    .then(resultatRequeteContrat => {
                        
                                         // ***************  activation du contrat pour  ce petsitter ****************
                                    contratActivation(req)
                                    .then(contratActivation => {
                                        res.setHeader('Content-Type', 'application/json');
                                        res.end(JSON.stringify({}))
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

        })
       .catch(erreur => {
       console.error(erreur.stack)
        res.setHeader('Content-Type', 'text/html')
        res.end(erreur.stack)
         })
}

//----------------------------------------------------------------------------------------------------------------------------

function contratDesactivation(req)
{
    return new Promise((resolve, reject) => {
        let sql = "UPDATE contrat SET est_accepte=false, est_lu_proprietaire=false, est_lu_petsitter=false, encore_disponible=false" 
                 + "FROM contrat c INNER JOIN contrat_utilisateur t ON c.id=t.id_contrat"
                 +" WHERE t.id_proprietaire=$1 AND t.id_petsitter!=$4 AND c.date_debut=$2 AND c.date_fin=$3 RETURNING *"

        bd.excuterRequete(sql, [req.body.utilisateur.id_proprietaire, req.body.utilisateur.id_petsitter, req.body.contrat.date_debut, req.body.contrat.date_fin])
            .then(resultatRequeteContrat => {
                if (resultatRequeteContrat.rowCount >= 1) {
                    resolve(resultatRequeteContrat)
                } else {
                    reject ({"erreur" : 400})
                }
            })
            .catch(erreur => {
                reject(erreur)
            })
        })
}
function contratActivation(req)
{
    return new Promise((resolve, reject) => {
        let sql = "UPDATE contrat SET est_accepte=true, est_lu_proprietaire=false, est_lu_petsitter=false, encore_disponible=false" 
                 +" WHERE id=$1"

        bd.excuterRequete(sql, [req.body.contrat.id_contrat])
            .then(resultatRequeteContrat => {
                if (resultatRequeteContrat.rowCount >= 1) {
                    resolve(resultatRequeteContrat)
                } else {
                    reject ({"erreur" : 400})
                }
            })
            .catch(erreur => {
                reject(erreur)
            })
        })
}

//-----------------------------------------------------------------------------------------------------------------------------

function ajoutFacture(req) 
{
    return new Promise((resolve, reject) => {
        let sql = "INSERT INTO facture (id_promotion, prix) VALUES ($1,$2) RETURNING *"

        bd.excuterRequete(sql, [req.body.promotion.id_promotion, req.body.facture.prix])
            .then(resultatRequeteFacture => {
                if (resultatRequeteFacture.rowCount >= 1) {
                    resolve(resultatRequeteFacture)
                } else {
                    reject ({"erreur" : 400})
                }
            })
            .catch(erreur => {
                reject(erreur)
            })
        })
}

function ajoutContrat(req)
{
    return new Promise((resolve, reject) => {
    
        let sql = "INSERT INTO contrat (date_debut, date_fin) VALUES ($1,$2) RETURNING *"

        bd.excuterRequete(sql, [req.body.contrat.date_debut, req.body.contrat.date_fin])
            .then(resultatRequeteContrat => {
                if (resultatRequeteContrat.rowCount >= 1) {
                    resolve(resultatRequeteContrat)
                } else {
                    reject ({"erreur" : 400})
                }      
            })
            .catch(erreur => {
                reject(erreur)
            })
        }) 
}

function ajoutContratUtilisateur(req, id_contrat) 
{
    return new Promise((resolve, reject) => {
    
        let sql = "INSERT INTO contrat_utilisateur (id_contrat, id_proprietaire, id_petsitter) VALUES ($1,$2,$3) RETURNING *"

        bd.excuterRequete(sql, [id_contrat, req.body.utilisateur.id_proprietaire, req.body.utilisateur.id_petsitter])
            .then(resultatRequeteContratUtilisateur => {
                if (resultatRequeteContratUtilisateur.rowCount >= 1) {
                    resolve(resultatRequeteContratUtilisateur)
                } else {
                    reject ({"erreur" : 400})
                }        })
            .catch(erreur => {
                reject(erreur)
            })
        }) 
}

function ajoutPromotionUtilisateur(req)
{
    return new Promise((resolve, reject) => {
    
        let sql = "INSERT INTO promotion_utilisateur (id_promotion, id_proprietaire) VALUES ($1,$2) RETURNING *"
    
        bd.excuterRequete(sql, [req.body.promotion.id_promotion, req.body.utilisateur.id_proprietaire])
            .then(resultatRequetePromotionUtilisateur => {
                if (resultatRequetePromotionUtilisateur.rowCount >= 1) {
                    resolve(resultatRequetePromotionUtilisateur)
                } else {
                    reject ({"erreur" : 400})
                }        })
            .catch(erreur => {
                reject(erreur)
            })
        }) 
}

function ajoutPlanning(req, id_contrat)
{
    return new Promise((resolve, reject) => {
    
        let sql = "INSERT INTO planning (id_contrat, id_proprietaire, id_petsitter, date_debut, date_fin) VALUES ($1,$2,$3,$4,$5) RETURNING *"
    
        bd.excuterRequete(sql, [req.body.contrat.id_contrat, req.body.utilisateur.id_proprietaire, req.body.utilisateur.id_petsitter, req.body.contrat.date_debut, req.body.contrat.date_fin])
            .then(resultatRequetePlanning => {
                if (resultatRequetePlanning.rowCount >= 1) {
                    resolve(resultatRequetePlanning)
                } else {
                    reject ({"erreur" : 400})
                }        })
            .catch(erreur => {
                reject(erreur)
            })
        }) 
}


function ajoutServiceContrat(req, id_contrat)
{
    return new Promise((resolve, reject) => {
    
        let sql = "INSERT INTO service_contrat (id_contrat, id_service) VALUES "
        let sqlValeur = []
        let i = 1
        req.body.service.map((id_service, index) => {
            // on prepare le tableau de valeur a ajouter a la place des $
            sqlValeur.push(id_contrat)
            sqlValeur.push(id_service)

            // on ajoute les $1 $2 ..etc a la requete sql
            sql += "($" + (i)
            i++
            sql += ", $" + (i) + "),"
            i++
        })

    //enlever la derniere virgule de la requete sql
    sql = sql.substring(0, sql.length - 1);
    
        bd.excuterRequete(sql, sqlValeur)
            .then(resultatRequeteServiceContrat => {
                if (resultatRequeteServiceContrat.rowCount >= 1) {
                    resolve(resultatRequeteServiceContrat)
                } else {
                    reject ({"erreur" : 400})
                }        })
            .catch(erreur => {
                reject(erreur)
            })
        }) 
}



module.exports = {
    contratCreation,
    contratAcceptation,
    contratDesactivation,
    ajoutFacture
}