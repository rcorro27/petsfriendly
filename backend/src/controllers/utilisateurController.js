const bd = require('../servers/bd')
const {Utilisateur} = require('../models/utilisateur')

//la fonction appelee par la route connexion d'utilisateur
function utilisateurConnexion(req, res)
{
    let sql = "SELECT * FROM utilisateur WHERE email=$1 and mot_de_passe=$2" //la req sql  executer

    bd.excuterRequete(sql, [req.body.email, req.body.mot_de_passe]) //executer la req sql
    .then(resultatRequeteSqlUtilisateur => { 

        /* si l'utilisateur n'existe pas on envoie une reponse vide*/
        if (resultatRequeteSqlUtilisateur[0] === undefined)
        {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({}))
        }

        //requete sql pour adresse
        recupererAdresseUtilisateur(resultatRequeteSqlUtilisateur[0].id_adresse)
        .then(resultatRequeteSqlAdresse => {

            //remplir l'objet a envoyer dans la reponse http
            let reponseRequeteHttp = {"utilisateur" : resultatRequeteSqlUtilisateur[0], "adresse" : resultatRequeteSqlAdresse[0]}

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(reponseRequeteHttp))
        })
        .catch(erreur => {
            console.error(erreur.stack)

            res.setHeader('Content-Type', 'text/html');
            res.end(erreur.stack)
        })

    })
    .catch(erreur => {
        console.error(erreur.stack)

        //en cas d'erreur on l'envoie pour l'instant
        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}

//la fonction appelee par la route creation d'utilisateur
function utilisateurCreation(req, res)
{
    
}

//la fonction appelee par la route configuration d'utilisateur
function utilisateurConfiguration(req, res)
{

}

//la fonction appelee par la route recuperation d'utilisateur
function utilisateurRecuperation(req, res)
{
    let sql = "SELECT * FROM utilisateur WHERE id=$1" 

    //requete sql pour utilisateur
    bd.excuterRequete(sql, [req.params.id]) 
    .then(resultatRequeteSqlUtilisateur => { 

        /* si l'utilisateur n'existe pas on envoie une reponse vide*/
        if (resultatRequeteSqlUtilisateur[0] === undefined)
        {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({}))
        }

        //requete sql pour adresse
        recupererAdresseUtilisateur(resultatRequeteSqlUtilisateur[0].id_adresse)
        .then(resultatRequeteSqlAdresse => {

            //remplir l'objet a envoyer dans la reponse http
            let reponseRequeteHttp = {"utilisateur" : resultatRequeteSqlUtilisateur[0], "adresse" : resultatRequeteSqlAdresse[0]}

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(reponseRequeteHttp))
        })
        .catch(erreur => {
            console.error(erreur.stack)

            res.setHeader('Content-Type', 'text/html');
            res.end(erreur.stack)
        })

    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}

//la fonction appelee par la route de suppression d'utilisateur
function utilisateurSuppression(req, res)
{
    
}

// la fonction pour la recuperation d'adresse d'utilisateur
function recupererAdresseUtilisateur(id_adresse) 
{
    return new Promise((resolve, reject)=> {
        let sql = "SELECT * FROM adresse WHERE id=$1" 

        bd.excuterRequete(sql, [id_adresse]) 
        .then(resultatRequeteSql => { 
            resolve(resultatRequeteSql)
        })
        .catch(erreur => {
            console.error(erreur.stack)
            reject(erreur)
        })
    })
}


module.exports = {
    utilisateurConnexion,
    utilisateurCreation,    
    utilisateurConfiguration,
    utilisateurRecuperation,
    utilisateurSuppression
}