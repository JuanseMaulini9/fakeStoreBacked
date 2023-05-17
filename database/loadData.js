const mongoose  = require('mongoose')
const Products = require('../models/Product')
const charge = require('./charge')


async function loadData(){
try{
   const existingData = await Products.find()
  if(existingData.length > 0){
    console.log('base de datos ya cargada')
    return false
  }

  const apiData = await charge()

  await Products.insertMany(apiData)
  console.log('Datos cargados exitosamente')
  
}catch{
  console.error('Error en la carga de datos', error)
}
 
}

module.exports = loadData