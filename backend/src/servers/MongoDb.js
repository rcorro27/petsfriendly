let MongoClient = require('mongodb').MongoClient

let urlMongodb = "mongodb+srv://petsFriendly:abc123...@cluster0.s3u73.mongodb.net/petsFriendly?retryWrites=true&w=majority"

// fonction pour trouver les messages entre un proprietaire et un petsitter
function recupererMessages(aTrouver)
{
    return new Promise((resolve, reject) => {
        MongoClient.connect(urlMongodb,{ useUnifiedTopology: true } ,function(err, db) {
            if (err) reject(err); //appeler catch du promise si la connexion et mal faite
        
            let dbMongo = db.db('petsFriendly')
            
            dbMongo.collection('messages').find(aTrouver).toArray(function(err, res) {
                if (err) reject(err) //appeler catch du promise si la requete n'est pas bonne
    
                db.close()
                resolve(res) //pour appeler catch du promise si tout est bien passe
            })
        })
    })
}

//fonction pour inserer un message dans la bd
function insererMessage(aInserer)
{
    return new Promise((resolve, reject) => {
        MongoClient.connect(urlMongodb,{ useUnifiedTopology: true } ,function(err, db) {
            if (err) reject(err); //appeler catch du promise si la connexion et mal faite
        
            let dbMongo = db.db('petsFriendly')
            
            dbMongo.collection('messages').insertOne(aInserer, function(err, res) {
                if (err) reject(err) //appeler catch du promise si la requete n'est pas bonne
    
                db.close()
                resolve(res) //pour appeler then du promise si tout est bien passe
            })
        })
    })
}

// les modules a exporter
module.exports = {
    recupererMessages,
    insererMessage
}

