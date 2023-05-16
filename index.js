const express = require('express')
const db = require('./database')
const cors = require('cors')
const controllers = require('./controllers')

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

app.get('/allProducts', controllers.getAllProducts)

app.listen(PORT, ()=>{
  console.log('escuchando en el puerto ', PORT)
  db()
})

module.exports = app