const Product = require("../models/Product");

function updateProduct(req, res) {
  const id = req.params.id
  const dataUpdate = req.body

  async function update(id, update){
    try {
      const product = await Product.findOneAndUpdate(
        {id: id},
        update
      )
      if(!product){
        console.log('NO SE ENCONTRO EL PRODUCTO')
        return res.json({mensaje: 'PRODUCTO NO ENCONTRADO'})
      }
      return product
    } catch (error) {
      console.error('Error al actualizar el producto', error)
      return res.json({error: 'No se pudo actualizar el producto'})  
    }
  }
  
  update(id, dataUpdate)
    .then((updateProduct)=>{
      if(updateProduct){
        console.log('PRODUCTO ACTUALIZADO', updateProduct)
        res.json(updateProduct)
      }else{
        console.log('PRODUCTO NO ENCONTRADO')
      }
      
    }).catch((error)=>{
      console.error('Error al actualizar el producto: ', error)
    })

}

module.exports = updateProduct;
