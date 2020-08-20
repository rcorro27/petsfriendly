const bd = require('../servers/bd')
const {Service} = require('../models/promotion')

//-----------------------------------------------------------------------------------------------------------------------------


//la fonction appelee par la route ajout de promotion
function promotionAjout(req, res)
{
    let sql = "INSERT INTO promotion (code_promotion, pourcentage, date_fin) VALUES($1, $2, $3)" 

    //requete sql pour service
    bd.excuterRequete(sql, [req.body.promotion.code_promotion, req.body.promotion.pourcentage, req.body.promotion.date_fin]) 
    .then(resultatRequeteSqlPromotion => { 

        if (resultatRequeteSqlPromotion.rowCount >= 1) {

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({}))

        } else {

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"erreur" : 400}))
        }
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}

//la fonction appelee par la route ajout de promotion
function promotionModification(req, res)
{
    let sql = "UPDATE promotion SET code_promotion=$1 , pourcentage=$2 , date_fin=$3 WHERE id=$4" 

    //requete sql pour service
    bd.excuterRequete(sql, [req.body.promotion.code_promotion, req.body.promotion.pourcentage, req.body.promotion.date_fin, req.body.promotion.id]) 
    .then(resultatRequeteSqlPromotion => { 

        if (resultatRequeteSqlPromotion.rowCount >= 1) {

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({}))

        } else {

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"erreur" : 400}))
        }
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}

//la fonction appelee par la route recupration de tout les promotion
function promotionRecuperationTout(req, res)
{
    let sql = "SELECT * FROM promotion" 

    //requete sql pour service
    bd.excuterRequete(sql, []) 
    .then(resultatRequeteSqlPromotion => { 
        
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(resultatRequeteSqlPromotion.rows))
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}

//la fonction appelee par la route recupration de des promotions avec l'id
function promotionRecuperationByIdPromotion(req, res)
{
    let sql = "SELECT * FROM promotion WHERE id=$1" 

    //requete sql pour service
    bd.excuterRequete(sql, [req.params.id]) 
    .then(resultatRequeteSqlPromotion => { 

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(resultatRequeteSqlPromotion.rows))
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}

//la fonction appelee par la route suppression de promotion
function promotionSuppression(req, res)
{   
    let sql = "DELETE FROM promotion WHERE id=$1" 

    //requete sql pour utilisateur
    bd.excuterRequete(sql, [req.params.id]) 
    .then(resultatRequeteSqlService => { 

        if (resultatRequeteSqlService.rowCount >= 1)
        {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({}))
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"erreur": 400}))// erreur mauvaises informations
        }
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}


module.exports = {
    promotionAjout,
    promotionModification,
    promotionRecuperationTout,
    promotionRecuperationByIdPromotion,
    promotionSuppression
}