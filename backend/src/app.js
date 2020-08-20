const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

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

module.exports = app
