const express = require("express");

const Pant= require("../models/pant.model");

const router = express.Router();

//---------------post route--------------
router.post("", async (req, res) => {
  try {
    const pant = await Pant.create(req.body);
    return res.status(200).send(pant);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------get route--------

router.get("", async (req, res) => {
  try {
    const pant = await Pant.find().lean().exec();
    return res.status(200).send(pant);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------route get by id---------
router.get("/:id", async (req, res) => {
  try {
    const kurti = await Pant.findById(req.params.id).lean().exec();
    return res.status(200).send(pant);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
