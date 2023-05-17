const Product = require("../models/Product");

async function createProduct(req,res){
  
  const {id, price, category, description} = req.body
  try{
    let productCount = await Product.countDocuments()

    const newProduct = new Product({
      id: id  || ++productCount,
      price: price,
      category: category,
      description: description
    })
    const savedProduct = await newProduct.save()
    res.json(savedProduct)
  }catch(error){
    console.error('NO SE PUEDO CREAR EL PRODUCTO', error)
    res.json({error: 'ERROR INTERNO EN EL SERVIDOR'})
  }
}

module.exports = createProduct;
