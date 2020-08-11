const bd = require('../servers/bd')
const {Utilisateur} = require('../models/utilisateur')
const { v4: uuidv4 } = require('uuid')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route connexion d'utilisateur
function utilisateurConnexion(req, res)
{
    let sql = "SELECT * FROM utilisateur WHERE email=$1 and mot_de_passe=$2" //la req sql  executer

    bd.excuterRequete(sql, [req.body.email, req.body.mot_de_passe]) //executer la req sql
    .then(resultatRequeteSqlUtilisateur => { 

        /* si l'utilisateur n'existe pas on envoie une reponse vide*/
        if (resultatRequeteSqlUtilisateur.rows[0] === undefined)
        {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"erreur" : 400}))
            return undefined
        }

        //requete sql pour adresse
        recupererAdresseUtilisateur(resultatRequeteSqlUtilisateur.rows[0].id_adresse)
        .then(resultatRequeteSqlAdresse => {

            //remplir l'objet a envoyer dans la reponse http
            let reponseRequeteHttp = {"utilisateur" : resultatRequeteSqlUtilisateur.rows[0], "adresse" : resultatRequeteSqlAdresse.rows[0]}

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

        return undefined
    })
}

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route creation d'utilisateur
function utilisateurCreation(req, res)
{

    // ***************  verifier si l'utilisateur existe avec cet email ****************

    let sql = "SELECT * FROM utilisateur WHERE email=$1"

    bd.excuterRequete(sql, [req.body.utilisateur.email])
    .then(resultatRequeteSqlUtilisateur => { 

        /* si l'utilisateur existe on coupe la requete*/
        if (resultatRequeteSqlUtilisateur.rows[0] !== undefined)
        {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"erreur" : 300}))
            return undefined

            // sinon on ajoute l'adresse et apres l'utilisateur
        } else {
            
            // ***************  requete de creation adresse si le compte existe ****************

            let sqlAdresse = "INSERT INTO adresse (numero_rue, nom_rue, code_postal, ville, province, pays, numero_appt) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *" 

            //requete sql pour adresse
            bd.excuterRequete(sqlAdresse, [req.body.adresse.numero_rue, req.body.adresse.nom_rue, req.body.adresse.code_postal, req.body.adresse.ville, req.body.adresse.province, req.body.adresse.pays, req.body.adresse.numero_appt]) 
            .then(resultatRequeteSqlAdresse => { 

                    // l'adresse est ajoute a la bd
                if (resultatRequeteSqlAdresse.rowCount >= 1)
                {
                    // ***************  requete de creation utilisateur si l'adresse est cree ****************
                    let uuidActivationUtilisateur = uuidv4() //generer un id aleatoire en utilisant la biblio uuid

                    let sqlUtilisateur = "INSERT INTO utilisateur (id_role, nom, prenom, age, email, mot_de_passe, sexe, id_adresse, telephone, id_activation) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)" 

                    //requete sql pour utilisateur
                    bd.excuterRequete(sqlUtilisateur, [req.body.utilisateur.id_role, req.body.utilisateur.nom, req.body.utilisateur.prenom, req.body.utilisateur.age, req.body.utilisateur.email, req.body.utilisateur.mot_de_passe, req.body.utilisateur.sexe, resultatRequeteSqlAdresse.rows[0].id, req.body.utilisateur.telephone, uuidActivationUtilisateur]) 
                    .then(resultatRequeteSqlUtilisateur => { 

                        if (resultatRequeteSqlUtilisateur.rowCount >= 1)
                        {
                            res.setHeader('Content-Type', 'application/json');
                            res.end(JSON.stringify({}))

                            return undefined
                        } else {
                            res.setHeader('Content-Type', 'application/json');
                            res.end(JSON.stringify({"erreur" : 400}))

                            return undefined
                        }
                    })
                    .catch(erreur => {
                        console.error(erreur.stack)

                        res.setHeader('Content-Type', 'text/html');
                        res.end(erreur.stack)
                        
                        return undefined
                    })
                    // l'adresse n'est pas ajoute a la bd
                } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({"erreur": 400}))// pour simuler l'erreur
                }
            })
            .catch(erreur => {
                console.error(erreur.stack)

                res.setHeader('Content-Type', 'text/html');
                res.end(erreur.stack)

                return undefined
            })
        }
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)

        return undefined
    })
}

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route configuration d'utilisateur
function utilisateurConfiguration(req, res)
{
    // ***************  verifier si l'utilisateur existe avec cet email ****************

    let sql = "SELECT * FROM utilisateur WHERE id=$1"

    bd.excuterRequete(sql, [req.body.utilisateur.id])
    .then(resultatRequeteSqlUtilisateur => { 

        /* si l'utilisateur existe on coupe la requete*/
        if (resultatRequeteSqlUtilisateur.rows[0] === undefined)
        {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"erreur" : 300}))
            return undefined

            // sinon on ajoute l'adresse et apres l'utilisateur
        } else {
            
            // ***************  requete de configuration adresse si le compte existe ****************

            let sqlAdresse = "UPDATE adresse SET numero_rue=$1, nom_rue=$2, code_postal=$3, ville=$4, province=$5, pays=$6, numero_appt=$7 WHERE id=$8 RETURNING *" 

            //requete sql pour adresse
            bd.excuterRequete(sqlAdresse, [req.body.adresse.numero_rue, req.body.adresse.nom_rue, req.body.adresse.code_postal, req.body.adresse.ville, req.body.adresse.province, req.body.adresse.pays, req.body.adresse.numero_appt, req.body.adresse.id]) 
            .then(resultatRequeteSqlAdresse => { 

                    // l'adresse est ajoute a la bd
                if (resultatRequeteSqlAdresse.rowCount >= 1)
                {
                    // ***************  requete de configuration utilisateur si l'adresse est cree ****************

                    let sqlUtilisateur = "UPDATE utilisateur SET id_role=$1, nom=$2, prenom=$3, age=$4, email=$5, mot_de_passe=$6, sexe=$7, id_adresse=$8, telephone=$9  WHERE id=$10" 

                    //requete sql pour utilisateur
                    bd.excuterRequete(sqlUtilisateur, [req.body.utilisateur.id_role, req.body.utilisateur.nom, req.body.utilisateur.prenom, req.body.utilisateur.age, req.body.utilisateur.email, req.body.utilisateur.mot_de_passe, req.body.utilisateur.sexe, req.body.adresse.id, req.body.utilisateur.telephone, req.body.utilisateur.id]) 
                    .then(resultatRequeteSqlUtilisateur => { 

                        if (resultatRequeteSqlUtilisateur.rowCount >= 1)
                        {
                            res.setHeader('Content-Type', 'application/json');
                            res.end(JSON.stringify({}))

                            return undefined
                        } else {
                            res.setHeader('Content-Type', 'application/json');
                            res.end(JSON.stringify({"erreur" : 400}))

                            return undefined
                        }
                    })
                    .catch(erreur => {
                        console.error(erreur.stack)

                        res.setHeader('Content-Type', 'text/html');
                        res.end(erreur.stack)
                        
                        return undefined
                    })
                    // l'adresse n'est pas ajoute a la bd
                } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({"erreur": 400}))// pour simuler l'erreur
                }
            })
            .catch(erreur => {
                console.error(erreur.stack)

                res.setHeader('Content-Type', 'text/html');
                res.end(erreur.stack)

                return undefined
            })
        }
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)

        return undefined
    })
}

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route recuperation d'utilisateur
function utilisateurRecuperation(req, res)
{
    let sql = "SELECT * FROM utilisateur WHERE id=$1" 

    //requete sql pour utilisateur
    bd.excuterRequete(sql, [req.params.id]) 
    .then(resultatRequeteSqlUtilisateur => { 

        /* si l'utilisateur n'existe pas on envoie une erreur*/
        if (resultatRequeteSqlUtilisateur.rows[0] === undefined)
        {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({"erreur" : 400}))
            return undefined
        }
        //requete sql pour adresse
        recupererAdresseUtilisateur(resultatRequeteSqlUtilisateur.rows[0].id_adresse)
        .then(resultatRequeteSqlAdresse => {


            /* si l'adresse n'existe pas on envoie une erreur 400*/
            if (resultatRequeteSqlUtilisateur.rows[0] === undefined)
            {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({"erreur" : 400}))
                return undefined
            }
            //remplir l'objet a envoyer dans la reponse http
            let reponseRequeteHttp = {"utilisateur" : resultatRequeteSqlUtilisateur.rows[0], "adresse" : resultatRequeteSqlAdresse.rows[0]}

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(reponseRequeteHttp))
        })
        .catch(erreur => {
            console.error(erreur.stack)

            res.setHeader('Content-Type', 'text/html');
            res.end(erreur.stack)

            return undefined
        })

    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)

        return undefined
    })
}

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route de suppression d'utilisateur
function utilisateurSuppression(req, res)
{
    let sql = "DELETE FROM utilisateur WHERE id=$1" 

    //requete sql pour utilisateur
    bd.excuterRequete(sql, [req.params.id]) 
    .then(resultatRequeteSqlUtilisateur => { 

        if (resultatRequeteSqlUtilisateur.rowCount >= 1)
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

//-----------------------------------------------------------------------------------------------------------------------------

// la fonction pour la recuperation d'adresse d'utilisateur
function recupererAdresseUtilisateur(id_adresse) 
{
    return new Promise((resolve, reject)=> {
        let sql = "SELECT * FROM adresse WHERE id=$1" 

        bd.excuterRequete(sql, [id_adresse]) 
        .then(resultatRequeteSqlAdresse => { 
            resolve(resultatRequeteSqlAdresse)
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