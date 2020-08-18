const express = require('express')
const router = express.Router()

//les fonctions de callback 
const planningController = require('../controllers/planningController')

// route pour recuperer tout les planning du petsitter
router.get('/recuperation/utilisateur/:id', planningController.planningRecuperationByIdUtilisateur)


module.exports = router