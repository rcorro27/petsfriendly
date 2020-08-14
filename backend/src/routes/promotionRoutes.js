const express = require('express')
const router = express.Router()

//les fonctions de callback 
const promotionController = require('../controllers/promotionController')

// route pour ajouter une promotion
router.post("/ajout", promotionController.promotionAjout)

// route pour modifier une promotion
router.put("/modification", promotionController.promotionModification)

// route pour recuperer toutes les promotion
router.get("/recuperation/tout", promotionController.promotionRecuperationTout)

// route pour recuperer une promotion
router.get("/recuperation/:id", promotionController.promotionRecuperationByIdPromotion)

// route pour supprimer une promotion
router.delete("/suppression/:id", promotionController.promotionSuppression)

module.exports = router