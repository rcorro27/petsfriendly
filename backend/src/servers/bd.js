let pg = require('pg')

var pgClient = new pg.Client({
    user: "dozjybzktpznaa",
    password: "0f08776f321c709a86a7c995de09e6b48a2a9a5a5d044f99856d3b61be77bbaa",
    database: "dsk6k1bd65nrt",
    port: 5432,
    host: "ec2-52-22-216-69.compute-1.amazonaws.com",
    ssl: { rejectUnauthorized: false }
}); 

// fonction pour excuter une requete sur postgres
function excuterRequete(requeteSQL) 
{
  pgClient.connect()

  pgClient.query(requeteSQL).then(res => {
    pgClient.end()

    return res
        }).catch(e => {
    console.error(e.stack)
    pgClient.end()

         })
}
  
// les modules a exporter
module.exports = {
  pgClient,
  excuterRequete
}