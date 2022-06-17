const mongoose = require("mongoose");


const jeansSchema = new mongoose.Schema(
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



module.exports = mongoose.model("jeans", jeansSchema);
