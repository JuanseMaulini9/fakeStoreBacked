const Product = require("../models/Product");

function deleteProduct(req, res) {
  const { id } = req.params;

  async function deleteP(id) {
    try {
      const product = await Product.findOneAndDelete({ id: id });
      if (!product) {
        console.log("NO SE ENCONTRO EL PRODUCTO");
        return res.json({ mensaje: "PRODUCTO NO ENCONTRADO" });
      }
      return product;
    } catch (error) {
      console.error("Error al actualizar el producto", error);
      return res.json({ error: "No se pudo actualizar el producto" });
    }
  }

  deleteP(id)
    .then((deleteProduct) => {
      if (deleteProduct) {
        console.log("PRODUCTO ELIMINADO", deleteProduct);
        res.json(deleteProduct);
      } else {
        console.log("PRODUCTO NO ENCONTRADO");
      }
    })
    .catch((error) => {
      console.error("Error al actualizar el producto: ", error);
    });
}

module.exports = deleteProduct;
