const Product = require('../models/Product')
const axios = require('axios')

const getAllProducts = (req, res) =>{

    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        const data = response.data;
        return Product.insertMany(data);
      })
      .then(result => {
        console.log('Productos insertados en MongoDB:', result.length);
        res.status(200).send('Productos insertados en MongoDB');
      })
      .catch(err => {
        console.error('Error al obtener productos de la API o insertar en MongoDB:', err);
        res.status(500).send('Error al obtener productos de la API o insertar en MongoDB');
      });
  };

    
    


module.exports = getAllProducts