let pg = require('pg');
const { path } = require('../app');

let pgClient = new pg.Client()

// fonction pour excuter une requete sur postgres
function excuterRequete(requeteSQL, valeursConditions) 
{
  return new Promise((resolve, reject) => {

    // creer un nouveau client vers la bd
    pgClient = new pg.Client({
      user: "dozjybzktpznaa",
      password: "0f08776f321c709a86a7c995de09e6b48a2a9a5a5d044f99856d3b61be77bbaa",
      database: "dsk6k1bd65nrt",
      port: 5432,
      host: "ec2-52-22-216-69.compute-1.amazonaws.com",
      ssl: { rejectUnauthorized: false }
    }); 

    pgClient.connect()//se connecter a la bd
 //---------------------------------------------
    .then(() =>{

      //excuter la requete sql
      pgClient.query(requeteSQL, valeursConditions)

      .then(res => {
          resolve(res.rows) //pour appeler then du promise si la requete est bonne

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


/*function transformerReqParamsAUnTableau(params) {
  let body = []
  let obj = JSON.parse(params)

  for (let i in obj) {
    body.push(obj[i])
  }

  return body
}*/

// les modules a exporter
module.exports = {
  pgClient,
  excuterRequete
}