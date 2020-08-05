const { restart } = require('nodemon');

let MongoClient = require('mongodb').MongoClient

let urlMongodb = "mongodb+srv://petsFriendly:abc123...@cluster0.s3u73.mongodb.net/petsFriendly?retryWrites=true&w=majority"

// fonction pour trouver les messages entre un proprietaire et un petsitter
function recupererMessages(aTrouver)
{
    MongoClient.connect(urlMongodb,{ useUnifiedTopology: true } ,function(err, db) {
        if (err) throw err;
    
        let dbMongo = db.db('petsFriendly')
        
        dbMongo.collection('messages').find(aTrouver).toArray(function(err, res) {
            if (err) throw err

            db.close()
            return res
        })
    })
}

//fonction pour inserer un message dans la bd
function insererMessage(aInserer)
{
    MongoClient.connect(urlMongodb,{ useUnifiedTopology: true } ,function(err, db) {
        if (err) throw err;
    
        let dbMongo = db.db('petsFriendly')
        
        dbMongo.collection('messages').insertOne(aInserer, function(err, res) {
            if (err) throw err

            db.close()
            return res
        })
    })
}

// les modules a exporter
module.exports = {
    recupererMessages,
    insererMessage
}


