const mongo = require('../servers/MongoDb')

//-----------------------------------------------------------------------------------------------------------------------------

//la fonction appelee par la route recupration de des services avec l'id
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

//mongo.insererMessage({"idFrom": 37, "idTo": 2, "id_proprietaire": 2, "id_petsitter": 37, "message_entre":"2_37", "message": "yoooo ca marche"})