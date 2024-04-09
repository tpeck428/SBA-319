import express from "express";
const router = express.Router();
import Inventory from "../models/inventory.mjs";
import db from "../db/conn.mjs";


//Seed Route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try{
        await Inventory.create([
                {
                    item: "Solid Dice Bag",
                    description: "Solid colored crocheted dice bag",
                    quantity: 25,
                },
                {
                    item: "Translucent Dice",
                    description: "See through polyhedral dice set with various figurines floating inside",
                    quantity: 50,
                },
                {
                    item: "Dice Tray",
                    description: "Plastic hexagonal tray with felt bottom",
                    quantity: 100,
                },
                
        ])
        // res.status(200).res.send(req.body)
        res.status(200).redirect('/inventory');
    } catch (err) {
        res.status(400).send(err)
    }
});

//INDEX/GET Route
router.get('/', async (req, res) => {
    try {
        const foundItems = await Inventory.find({});
        res.status(200).send(foundItems);
    } catch (err) {
        res.status(400).send(err);
    }
});


//CREATE/POST Route
router.post('/', async (req, res) => {
    try {
        const createdInventory = await Inventory.create(req.body);
        
        res.status(200).redirect('/inventory')
    } catch (err) {
        res.status(400).send(err);
    }
    });


export default router;