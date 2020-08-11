const express = require('express')
const router = express.Router()

//les fonction de callback 
const animalController = require('../controllers/animalController')

//route pour requete post de connexion
router.post('/connexion', utilisateurController.utilisateurConnexion)

//route pour requete get de recuperation utilisateur by id
router.get('/recuperation/:id', utilisateurController.utilisateurRecuperation)

module.exports = router