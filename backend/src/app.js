const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const mongo = require("./servers/MongoDb")

// les routes a utiliser
let indexRouter = require('./routes/index')
let utilisateurRouter = require('./routes/utilisateurRoutes')
let animalRouter = require('./routes/animalRoutes')
let serviceRouter = require('./routes/serviceRoutes')
let promotionRouter = require('./routes/promotionRoutes')
let contratRouter = require('./routes/contratRoutes')
let planningRouter = require('./routes/planningRoutes')
let rechercheRouter = require('./routes/rechercheRoutes')
let favorisRouter = require('./routes/favorisRoutes')
let photoRouter = require('./routes/photoRoute')
let chatRouter = require('./routes/chatRoutes')

//instancier le serveur
let app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())

//les routes du serveur
app.use('/', indexRouter)
app.use('/utilisateurs', utilisateurRouter)
app.use('/animaux', animalRouter)
app.use('/services', serviceRouter)
app.use('/promotions', promotionRouter)
app.use('/contrats', contratRouter)
app.use('/favoris', favorisRouter)
app.use('/plannings',  planningRouter)
app.use('/recherche', rechercheRouter)
app.use('/photos', photoRouter)
app.use('/chats', chatRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

//-----------------------------------------------------------------------------------------------------------------------------
const io = require('socket.io')(app.http) // obj pour gerer le chat


// gerer la connexion des sockets des utilisateurs
io.on("join", function(data) {

    io.join(data.id)
})

// gerer l'envoie des messages
io.on("nouveau_message", function(data){

    mongo.insererMessage(data)
    .then(resultatMessages => {
        io.in(data.idTo).emit("nouveau_message", data.message) // envoyer le msg au destinataire 
    })
    .catch(erreur => {
        io.in(data.idFrom).emit("nouveau_message", erreur) // changer nouveau_message et parler avec les gars d'Android de ca
    })
})

//-----------------------------------------------------------------------------------------------------------------------------

module.exports = app
