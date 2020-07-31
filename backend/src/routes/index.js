var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<!DOCTYPE html>"+
            "<html>"+
            "<head>"+
            "<title>Pets_Friendly</title>"+
            "</head>"+
            "<body style='height: 90vh;'>"+
            "<h1 style='text-align:center; color: red; text-decoration: underline;'>Salut Tout Le Monde :D</h1>"+
            "<h2 style='text-align: center; text-shadow: 4px 4px 5px black;"+
				    "position: relative; top: 45%;'>SimOoO<sub style='font-size: 0.5em;'>v 1.0.1</sub></h2>"+
            "</body>"+
            "</html>");
});

module.exports = router;
