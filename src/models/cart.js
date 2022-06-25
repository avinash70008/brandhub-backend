const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    colour: { type: String, required: true },
    qty: { type: Number, required: true }
 
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



module.exports =  mongoose.model('cart', cartSchema);