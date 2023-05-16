const {model, Schema} = require('mongoose')

const ProductSchema = new Schema({
  id: {type: Number,  unique: true},
  name: {trype: String},
  price: {type: String },
  category: {type: String},
  description: {type: String},
  img: {type: String},
})

module.exports = model('Product', ProductSchema)