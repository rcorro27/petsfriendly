
const bd = require('../servers/bd')

//-----------------------------------------------------------------------------------------------------------------------------


//la fonction appelee par la route recupration de planning avec l'id d'utilisateur
function planningRecuperationByIdUtilisateur(req, res)
{
    let sql = "SELECT planning.id, id_contrat, id_proprietaire, id_petsitter , planning.date_debut, planning.date_fin FROM planning INNER JOIN contrat ON planning.id_contrat=contrat.id WHERE planning.id_petsitter=$1 AND contrat.est_termine=false" 

    //requete sql pour service
    bd.excuterRequete(sql, [req.params.id]) 
    .then(resultatRequeteSqlPlanning => { 
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(resultatRequeteSqlPlanning.rows))
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}


module.exports = {
    planningRecuperationByIdUtilisateur
}