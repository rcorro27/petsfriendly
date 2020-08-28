const mongo = require('../servers/MongoDb')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route recupration de message
function messageRecuperation(req, res) {
    // donnees de message a trouver
    const aTrouver = { $match: {"message_entre" : req.body.id_proprietaire+"_"+req.body.id_petsitter } }
    const group = {}

    // recuperer les message des utilisateur
    mongo.recupererMessages(aTrouver, group)
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
    let aTrouver = {}
    let group = {}

    if (parseInt(req.params.role) === 2) {
        aTrouver = { $match: { "id_proprietaire" : parseInt(req.params.id)} }
        group = { $group: { _id : "$id_petsitter" } }
    }else if (parseInt(req.params.role) === 3) {
        aTrouver = { $match: { "id_petsitter" : parseInt(req.params.id)} }
        group = { $group: { _id : "$id_proprietaire" } }
    }

    // recuperer les message des utilisateur
    mongo.recupererMessages(aTrouver, group)
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