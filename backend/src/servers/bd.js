let pg = require('pg');
const { path } = require('../app');
const { connect } = require('mongodb');

let pgClient = new pg.Client()

// fonction pour excuter une requete sur postgres
function excuterRequete(requeteSQL, valeursConditions) 
{
  return new Promise((resolve, reject) => {

        // creer un nouveau client vers la bd
    pgClient = new pg.Client({
      user: "vyimtahkffwmmm",
      password: "c8ac1bc05e9328da3efda1d13a6addaabe3fb6b23719e5741b53309275dcbf9e",
      database: "d79f57gatmj3o9",
      port: 5432,
      host: "ec2-184-72-162-198.compute-1.amazonaws.com",
      ssl: { rejectUnauthorized: false }
    }); 

    pgClient.connect()//se connecter a la bd
 //---------------------------------------------
    .then(() =>{

      //excuter la requete sql
      pgClient.query(requeteSQL, valeursConditions)

      .then(res => {
          resolve(res) //pour appeler then du promise si la requete est bonne

          // fermer la connexion vers la bd
          pgClient.end()
          })
      .catch(e => {
          reject(e) //pour appeler catch du promise si il ya une erreur dans la requete
         
          // fermer la connexion vers la bd
          pgClient.end()
        })
  })
//---------------------------------------------
    .catch (err => {

      reject(err) //pour appeler catch du promise si il ya une erreur dans la connexion

      // fermer la connexion vers la bd
      pgClient.end()
    })

})
}

// les modules a exporter
module.exports = {
  pgClient,
  excuterRequete
}