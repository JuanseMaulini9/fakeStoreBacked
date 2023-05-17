const express = require('express')
const db = require('./database')
const cors = require('cors')
const controllers = require('./controllers')
const loadData = require('./database/loadData')


const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

//gets
app.get('/allProducts', controllers.getAllProducts)
app.get('/product/:id', controllers.getProduct)

//patch
app.patch('/product/:id', controllers.updateProduct)

//delete
app.delete('/product/:id', controllers.deleteProduct)

//post
app.post('/createProduct', controllers.createProduct)

loadData()

app.listen(PORT, ()=>{
  console.log('escuchando en el puerto ', PORT)
  db()
})

module.exports = app