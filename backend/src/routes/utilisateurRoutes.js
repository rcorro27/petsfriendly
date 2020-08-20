const express = require('express')
const router = express.Router()

//les fonctions de callback 
const utilisateurController = require('../controllers/utilisateurController')

//route pour requete post de connexion
router.post('/connexion', utilisateurController.utilisateurConnexion)

// route pour creation de compte
router.post('/creation', utilisateurController.utilisateurCreation)

//route pour requete post de configuration utilisateur
router.put('/configuration', utilisateurController.utilisateurConfiguration)

//route pour requete get de recuperation utilisateur by id
router.get('/recuperation/:id', utilisateurController.utilisateurRecuperation)

//route pour requete get de recuperation de tout les utilisateur
router.get('/tout', utilisateurController.utilisateurRecuperationTout)

//route pour requete get pour recuperer les petsitter
router.get('/recuperation/petsitters/tout', utilisateurController.petsittersRecuperation)

//route pour requete get de suppression utilisateur by id
router.delete('/suppression/:id', utilisateurController.utilisateurSuppression)

//route pour requete put pour valider les petsitter
router.put('/validation/petsitter/:id', utilisateurController.petsitterValidation)

//route pour activation du petsitter
router.get('/activation/petsitter/:email/:idactivation', utilisateurController.petsitterValidation)

//route pour activation du proprietaire
router.get('/activation/proprietaire/:email/:idactivation', utilisateurController.proprietaireActivation)

module.exports = router