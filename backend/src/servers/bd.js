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
      user: "eutrnirrbxtpvl",
      password: "c86907c919017bf1cf09ed88a1da21cb7ce772215725b8db28c169798d9a8b00",
      database: "ds2hr72h39mi3",
      port: 5432,
      host: "ec2-52-200-111-186.compute-1.amazonaws.com",
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