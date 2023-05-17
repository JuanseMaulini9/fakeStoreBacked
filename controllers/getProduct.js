const Product = require("../models/Product");

function getProduct(req, res) {
  const {id} = req.params

  Product.findOne({id:id})
    .then((product)=>{
      if(!product){
        return res.json({error: 'USUARIO NO ENCONTRADO'})
      }
      return res.json(product)
    })
    .catch((error)=>{
      console.error('No se encontro el id del producto', error)
      return res.json({error: 'ERROR INTERNO DEL SERVIDOR'})
    })
    

}

module.exports = getProduct;
