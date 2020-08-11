const express = require('express')
const router = express.Router()

//les fonction de callback 
const utilisateurController = require('../controllers/utilisateurController')

//route pour requete post de connexion
router.post('/connexion', utilisateurController.utilisateurConnexion)

// route pour creation de compte
router.post('/creation', utilisateurController.utilisateurCreation)

//route pour requete post de configuration utilisateur
router.put('/configuration', utilisateurController.utilisateurConfiguration)

//route pour requete get de recuperation utilisateur by id
router.get('/recuperation/:id', utilisateurController.utilisateurRecuperation)

//route pour requete get de suppression utilisateur by id
router.delete('/suppression/:id', utilisateurController.utilisateurRecuperation)

module.exports = router