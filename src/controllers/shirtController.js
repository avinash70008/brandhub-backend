
const express = require("express");
const router = express.Router();

const Shirt = require("../models/shirtModel");

router.post("",async(req,res)=>{

    try {
        let shirt = await Shirt.create(req.body);
        return res.status(200).send(shirt)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.get("",async(req,res)=>{

    try {
        let shirt = await Shirt.find().lean().exec();
        return res.status(200).send(shirt)


    } catch (e) {
        return res.status(500).send(e.message)
    }
})
router.get("/:id",async(req,res)=>{

    try {
        let shirt = await Shirt.findById({_id:req.params.id}).lean().exec();
        return res.status(200).send(shirt)


    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.patch("/:id",async(req,res)=>{

    try {
        let shirt = await Shirt.findByIdAndUpdate(req.params.id , req.body ,{new : true}).lean().exec();
        return res.status(200).send(shirt)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

router.delete("/:id",async(req,res)=>{

    try {
        let shirt = await Shirt.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send(shirt)

    } catch (e) {
        return res.status(500).send(e.message)
    }
})

module.exports = router;