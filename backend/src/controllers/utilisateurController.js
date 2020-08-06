const bd = require('../servers/bd')
const {Utilisateur} = require('../models/utilisateur')

//la fonction appelee par la route connexion d'utilisateur
function utilisateurConnexion(req, res)
{
    let sql = "SELECT * FROM utilisateur WHERE email=$1 and mot_de_passe=$2" //la req sql  executer

    /* a regler demain matin*/
    //let valeursRequetes = bd.transformerReqParamsAUnTableau(req.body) //pour transformer le body de la requete a un tableau
    //console.log(valeursRequetes)
    bd.excuterRequete(sql, ['rufin@nassim.com', 'abc123...']) //executer la req sql

    .then(resultatRequete => { 
        //si la requete s'est bien passe on recoit le resultat et on l'envoie dans la reponse
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(resultatRequete.rows))
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
    
}

//la fonction appelee par la route de suppression d'utilisateur
function utilisateurSuppression(req, res)
{
    
}

module.exports = {
    utilisateurConnexion,
    utilisateurCreation,    
    utilisateurConfiguration,
    utilisateurRecuperation,
    utilisateurSuppression
}