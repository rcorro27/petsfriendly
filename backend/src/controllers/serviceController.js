const bd = require('../servers/bd')
const {Service} = require('../models/service')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route ajout de service
function serviceAjout(req, res)
{
    let sql = "INSERT INTO service(description_service, prix_service) VALUES($1, $2)" 

    //requete sql pour service
    bd.excuterRequete(sql, [req.body.service.description_service, req.body.service.prix_service]) 
    .then(resultatRequeteSqlService => { 

        if (resultatRequeteSqlService.rowCount >= 1) {

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

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route ajout de service
function serviceAjoutAPetsitter(req, res)
{
    /* parcourir la table dans la request pour creer la requete sql pour ajouter tout 
        les services des petsiter dans la table service_utilisateur*/
        
    let sql = "INSERT INTO service_utilisateur(id_service, id_petsitter) VALUES($1, $2)" 

    //requete sql pour service
    bd.excuterRequete(sql, [req.body.id_service, req.body.id_petsitter]) 
    .then(resultatRequeteSqlService => { 

        if (resultatRequeteSqlService.rowCount >= 1) {

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

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route ajout de service
function serviceModification(req, res)
{
    let sql = "UPDATE service SET description_service=$1, prix_service=$2 WHERE id=$3" 

    //requete sql pour service
    bd.excuterRequete(sql, [req.body.service.description_service, req.body.service.prix_service, req.body.service.id]) 
    .then(resultatRequeteSqlService => { 

        if (resultatRequeteSqlService.rowCount >= 1) {

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

//-----------------------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------------------------------------------

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
    })
}


module.exports = {
    serviceAjout,
    serviceAjoutAPetsitter,
    serviceModification,
    serviceRecuperationTout,
    serviceRecuperationByIdService,
    serviceSuppression
}