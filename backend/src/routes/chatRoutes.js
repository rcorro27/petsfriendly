const express = require('express')
const router = express.Router()

//les fonctions de callback 
const chatController = require('../controllers/chatController')

// route envoie message
router.post("/recuperation", chatController.messageRecuperation)

// route envoie message par id 
router.get("/recuperation/utilisateur/:id/:role", chatController.messageRecuperationParIdUtilisateur)

module.exports = router