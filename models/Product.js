const {model, Schema} = require('mongoose')

const ProductSchema = new Schema({
  id: {type: Number,  unique: true},
  title: {trype: String},
  price: {type: String },
  category: {type: String},
  description: {type: String},
  image: {type: String},
})

module.exports = model('Product', ProductSchema)