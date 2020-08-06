const express = require('express')
const router = express.Router()

//les fonction de callback 
const utilisateurController = require('../controllers/utilisateurController')

//route pour requete post de connexion
router.post('/connexion', utilisateurController.utilisateurConnexion)


module.exports = router