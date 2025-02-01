const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
  img: { type: String, required: true },
  country: { type: String, required: true },
  region: { type: String, required: true },
  descriptors: { type: Array, required: true },
  type: { type: String, required: true },
  processing: { type: String, required: true },
  roasting: { type: String, required: true },
  score: { type: Number, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  isPartnership: { type: Boolean, required: true }
});

const CoffeeModel = mongoose.model('coffeeItems', coffeeSchema, 'coffeeItems');
module.exports = { CoffeeModel };