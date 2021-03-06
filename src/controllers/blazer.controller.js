const express = require("express");

const Blazer = require("../models/blazer.model");

const router = express.Router();

//---------------route post--------------
router.post("", async (req, res) => {
  try {
    const blazer = await Blazer.create(req.body);
    return res.status(200).send(blazer);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post("", async (req, res) => {
  try {
    const blazer = await Blazer.create(req.body);
    return res.status(200).send(blazer);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});


router.post("/cart", async (req, res) => {
  try {
    const blazer = await Blazer.create(req.body);
    console.log(blazer)
    return res.status(200).send(blazer);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});



//---------------route get--------------

router.get("", async (req, res) => {
  try {
    const blazer = await Blazer.find().lean().exec();
    return res.status(200).send(blazer);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//--------------- route get data by id--------------

router.get("/:id", async (req, res) => {
  try {
    const blazer = await Blazer.findById(req.params.id).lean().exec();
    return res.status(200).send(blazer);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
