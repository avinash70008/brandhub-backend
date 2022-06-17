const mongoose = require("mongoose");


const pantSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: true },
    colour: { type: String, required: true },
  
  },
  {
    versionKey: false,
    timestamps: true,
  }
);



module.exports = mongoose.model("pant", pantSchema);
