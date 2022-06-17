const express = require("express");

const Jeans= require("../models/jeans.model");

const router = express.Router();

//---------------post route--------------
router.post("", async (req, res) => {
  try {
    const jeans = await Jeans.create(req.body);
    return res.status(200).send(jeans);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------get route--------

router.get("", async (req, res) => {
  try {
    const jeans= await jeans.find().lean().exec();
    return res.status(200).send(jeans);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//----------route get by id---------
router.get("/:id", async (req, res) => {
  try {
    const jeans = await Jeans.findById(req.params.id).lean().exec();
    return res.status(200).send(jeans);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
