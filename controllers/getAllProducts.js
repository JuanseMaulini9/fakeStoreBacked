const Product = require("../models/Product");

function getAllProducts(req, res) {
  Product.find()
    .then((products) => {
      res.send(products);
    })
    .catch((error) => {
      console.error("Error al obtener todos los productos", error
      );
    });
}

module.exports = getAllProducts;
