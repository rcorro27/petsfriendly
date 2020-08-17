const express = require('express')
const router = express.Router()

//les fonctions de callback 
const contratCreationController = require('../controllers/contratCreationController')
const contratFinController = require('../controllers/contratFinController')

// route pour creation du contrat et tout ce qui va avec
router.post("/creation", contratCreationController.contratCreation)

// route pour fin du contrat et tout ce qui va avec
router.put("/fin", contratFinController.contratFin)

// route pour recuperer les contrats du proprietaire avec son id
router.get("/recuperation/proprietaire/:id", contratFinController.contratRecuperationByIdProprietaire)

// route pour recuperer les contrats du petsitter avec son id
router.get("/recuperation/petsitter/:id", contratFinController.contratRecuperationByIdPetsitter)

module.exports = router