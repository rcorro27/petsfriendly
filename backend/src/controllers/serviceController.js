const bd = require('../servers/bd')
const {Service} = require('../models/service')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route ajout de service
function serviceAjout(req, res)
{

}

//la fonction appelee par la route ajout de service
function serviceModification(req, res)
{

}

//la fonction appelee par la route recupration de tout les services
function serviceRecuperationTout(req, res)
{
    let sql = "SELECT * FROM service" 

    //requete sql pour service
    bd.excuterRequete(sql, []) 
    .then(resultatRequeteSqlService => { 

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(resultatRequeteSqlService.rows))
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}

//la fonction appelee par la route recupration de des services avec l'id
function serviceRecuperationByIdService(req, res)
{
    let sql = "SELECT * FROM service WHERE id=$1" 

    //requete sql pour service
    bd.excuterRequete(sql, [req.params.id]) 
    .then(resultatRequeteSqlService => { 

        /* si le service n'existe pas on envoie une erreur*/
        if (resultatRequeteSqlService.rows[0] === undefined)
        {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"erreur" : 400}))

        } else {
            //remplir l'objet a envoyer dans la reponse http
            let reponseRequeteHttp = {"service" : resultatRequeteSqlService.rows[0]}

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(reponseRequeteHttp))
        }
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}

//la fonction appelee par la route suppression de service
function serviceSuppression(req, res)
{
    let sql = "DELETE FROM service WHERE id=$1" 
 console.log("hete")
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

        return undefined
    })
}


module.exports = {
    serviceAjout,
    serviceModification,
    serviceRecuperationTout,
    serviceRecuperationByIdService,
    serviceSuppression
}