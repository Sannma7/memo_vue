'use strict'

const express = require('express')
const path = require(`path`)
const bodyParser = require('body-parser')
const history = require('connect-history-api-fallback')
const { Datastore } = require('@google-cloud/datastore')

const app = express()

// Instantiate a datastore client
const ds = new Datastore()
var key

app.enable('trust proxy')

// const datastore = new Datastore();

app.use(express.static('dist'))
app.use(history())

app.get('/', async (req, res) => {
  res.rander(path.join(__dirname, 'home'))
})

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/submit', async (req, res) => {
  console.log({
    title: req.body.title,
    amount: req.body.amount
  })
  key = ds.key(['sanma7'])
  var entity = {
    key: key,
    data: { title: req.body.title, current: 0, total: req.body.amount, type: 0 }
  }
  console.log(entity)
  res.status(200).send('ADDED！')
})
