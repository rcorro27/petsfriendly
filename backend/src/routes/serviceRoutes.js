const express = require('express')
const router = express.Router()

//les fonctions de callback 
const serviceController = require('../controllers/serviceController')

//route pour requete post pour ajouter un service
router.post('/ajout', serviceController.serviceAjout)

//route pour requete post pour ajouter un service a un petsitter
router.post('/ajout/petsitter', serviceController.serviceAjoutAPetsitter)

//route pour requete post pour modifier un service
router.put('/modification', serviceController.serviceModification)

//route pour requete get pour recuperer tout les services
router.get('/recuperation/tout', serviceController.serviceRecuperationTout)

//route pour requete get pour recuperer un service avec son id
router.get('/recuperation/:id', serviceController.serviceRecuperationByIdService)

//route pour requete get pour recuperer les service acceptes par un petsitter en utilisant son id
router.get('/recuperation/petsitter/:id', serviceController.serviceRecuperationByIdPetsitter)

//route pour requete get de suppression service by id
router.delete('/suppression/:id', serviceController.serviceSuppression)

module.exports = router