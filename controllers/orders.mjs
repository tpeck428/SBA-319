import express from "express";
const router = express.Router();
import Orders from "../models/orders.mjs";
import db from "../db/conn.mjs";


//Seed Route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try{
        await Orders.create([
                {
                    name: "Burton Briggs",
                    email: "blandit@outlook.edu",
                    address: "533-4872 Nunc St.",
                    item: "Solid Dice Bag",
                    quantity: 1,
                    readytoShip: true,
                },
                {
                    name: "Garrett Hernandez",
                    email: "etiam.gravida@yahoo.org",
                    address: "6972 Vitae Road",
                    item: "Translucent Dice, Mystery Dice",
                    quantity: 2,
                    readytoShip: false,
                },
                {
                    name: "Ori Ray",
                    email: "diam@google.couk",
                    address: "Ap #989-4987 Massa. Rd.",
                    item: "Dice Tray",
                    quantity: 1,
                    readytoShip: true,
                },
                {
                    name: "Olga Solomon",
                    email: "nunc.sed@protonmail.net",
                    address: "Ap #472-9472 Ligula. Av.",
                    item: "Mystery Dice",
                    quantity: 4,
                    readytoShip: false,
                },
        ])
        // res.status(200).res.send(req.body)
        res.status(200).redirect('/orders');
    } catch (err) {
        res.status(400).send(err)
    }
});


//INDEX/GET Route
router.get('/', async (req, res) => {
    try {
        const foundOrders = await Orders.find({});
        res.status(200).send(foundOrders);
    } catch (err) {
        res.status(400).send(err);
    }
});

//DELETE ROUTE


//UPDATE/PUT Route
//U- Update
router.put('/:id', async (req, res) => {
    if (req.body.readytoShip === 'on') {
        req.body.readytoShip = true;
    } else {
        req.body.readytoShip = false;
    }
    try {
        const updatedOrders = await Orders.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true},
        );

        res.redirect(`/orders/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})


//CREATE/POST Route
router.post('/', async (req, res) => {
    try {
        const createdOrders = await Orders.create(req.body);
        // res.status(200).send(createdUser);
        res.status(200).redirect('/orders')
    } catch (err) {
        res.status(400).send(err);
    }
    });


//SHOW - Pulling an order by ID using a get route
router.get('/:id', async (req, res) => {
    try {
        const foundOrders = await Orders.findById(req.params.id);
        res.status(200).json(foundOrders)
    } catch (err) {
        res.status(404).send(err);
    }
})


export default router;
