const express = require('express')
const router = express.Router()

//les fonctions de callback 
const serviceController = require('../controllers/serviceController')


//route pour requete get pour recuperer tout les services
router.get('/recuperation/tout', serviceController.serviceRecuperationTout)

//route pour requete get pour recuperer un service avec son id
router.get('/recuperation/:id', serviceController.serviceRecuperationByIdService)

//route pour requete get de suppression service by id
router.delete('/suppression/:id', serviceController.serviceSuppression)

module.exports = router