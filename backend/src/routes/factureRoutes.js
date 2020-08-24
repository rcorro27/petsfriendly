const express = require('express')
const router = express.Router()

//les fonction de callback 
const factureController = require('../controllers/factureController')

// facture recuperer
router.get('/recuperation/utilisateur/:id', factureController.factureRecuperationByIdUtilisateur)

//supprimer facture
router.delete('/suppression', factureController.factureSuppression)

module.exports = router