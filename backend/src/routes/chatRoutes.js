const express = require('express')
const router = express.Router()

//les fonctions de callback 
const chatController = require('../controllers/chatController')

// route envoie message
router.post("/recuperation", chatController.messageRecuperation)

module.exports = router