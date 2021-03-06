const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  aadhar: { type: String, require: true, unique: true },
  phone: { type: Number, require: true },
  // password: { type: String, require: true },
  name: { type: String, require: true },
  cart: [{ name: String, farmerId: String }],
  //  type:String,
  // googleId: String,
});

module.exports = mongoose.model('Buyer', BuyerSchema);
