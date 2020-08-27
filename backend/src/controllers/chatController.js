const mongo = require('../servers/MongoDb')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route recupration de message
function messageRecuperation(req, res) {
    // donnees de message a trouver
    const aTrouver = {"message_entre": req.body.id_proprietaire+"_"+req.body.id_petsitter}

    // recuperer les message des utilisateur
    mongo.recupererMessages(aTrouver)
    .then(resultatMessages => {
        
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(resultatMessages))
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}

module.exports = {
    messageRecuperation
}

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route recupration de message avec l'id
function messageRecuperationParIdUtilisateur(req, res) {
    // donnees de message a trouver
    
    let query = {}
  //  let group = {}
    if (req.params.role === 2) {
        query = {id_proprietaire : req.params.id}
       // group = { $group: { _id: "$id_petsitter" } }
    }else if (req.params.role === 3) {
        query = {id_petsitter : req.params.id}
      //  group = { $group: { _id: "$id_proprietaire" } }
    }
    
    // recuperer les message des utilisateur
    mongo.recupererMessages(query)
    .then(resultatMessages => {
        
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(resultatMessages))
    })
    .catch(erreur => {
        console.error(erreur.stack)

        res.setHeader('Content-Type', 'text/html');
        res.end(erreur.stack)
    })
}

module.exports = {
    messageRecuperation,
    messageRecuperationParIdUtilisateur
}

//mongo.insererMessage({"idFrom": 37, "idTo": 2, "id_proprietaire": 2, "id_petsitter": 37, "message_entre":"2_37", "message": "yoooo ca marche"})