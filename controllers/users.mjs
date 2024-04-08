import express from "express";
const router = express.Router();
import Users from "../models/users.mjs";
import db from "../db/conn.mjs";


//Seed Route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try{
        await Users.create([
                {
                    id: 1,
                    name: "Guinevere Mathews",
                    email: "adipiscing@aol.edu",
                    title: "Gobble"
                },
                {
                    id: 2,
                    name: "Ferdinand Chandler",
                    email: "at.egestas.a@aol.com",
                    title: "Gobble"
                },
                {
                    id:3,
                    name: "Indigo Parrish",
                    email: "sed.tortor@protonmail.edu",
                    title: "Goblin"
                },
                {
                    id: 4,
                    name: "Olga Solomon",
                    email: "nunc.sed@protonmail.net",
                    title: "Goblin"
                },
                {
                    id: 5,
                    name: "Kai Deleon",
                    email: "a.nunc.in@aol.org",
                    title: "Gobble"
                },
                {
                    id: 6,
                    name: "Teesa Gaskins",
                    email: "tees.ga@email.org",
                    title: "",
                },
        ])
        // res.status(200).res.send(req.body)
        res.status(200).redirect('/users');
    } catch (err) {
        res.status(400).send(err)
    }
});


//INDEX/GET Route
router.get('/', async (req, res) => {
    try {
        const foundUsers = await Users.find({});
        res.status(200).send(foundUsers);
    } catch (err) {
        res.status(400).send(err);
    }
})

//NEW Route
// router.get('/new', (req, res) => {
//     res.render('users/New'); //does this require a view?
// })


//DELETE Route



//UPDATE/PUT Route
router.put('/:id', async (req, res) => {
    try {
        const updatedUsers = await Users.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true},
        );

        res.redirect(`/users/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})



//CREATE/POST Route
router.post('/', async (req, res) => {
try {
    const createdUser = await Users.create(req.body);
    // res.status(200).send(createdUser);
    res.status(200).redirect('/users')
} catch (err) {
    res.status(400).send(err);
}
});

//SHOW - Pulling a user by ID using a get route
router.get('/:id', async (req, res) => {
    try {
        const foundUsers = await Users.findById(req.params.id);
        res.status(200).json(foundUsers)
    } catch (err) {
        res.status(404).send(err);
    }
})


export default router;
