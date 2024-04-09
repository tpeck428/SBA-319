import express from "express";
const router = express.Router();
import Inventory from "../models/inventory.mjs";
import db from "../db/conn.mjs";


//Seed Route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
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

//DELETE Route
router.delete('/:id', async(req, res) => {
    try{
        const deletedInventory = await Inventory.findByIdAndDelete(req.params.id);
        console.log(deletedInventory);
        res.status(200).redirect('/users');
    } catch (err) {
        res.status(400).send(err);
    }
})


//UPDATE/PUT Route
router.put('/:id', async (req, res) => {
    try {
        const updatedItems = await Inventory.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );

        res.redirect(`/inventory/${req.params.id}`);
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


//READ Route - Pulling an item by ID 
router.get('/:id', async (req, res) => {
    try {
        const foundInventory = await Inventory.findById(req.params.id);
        res.status(200).json(foundInventory)
    } catch (err) {
        res.status(404).send(err);
    }
})

//Compound Index -- unsure how to test
// db.Inventory.createIndex( {
//     name: 1,
//     quantity: -1
//  } )


export default router;