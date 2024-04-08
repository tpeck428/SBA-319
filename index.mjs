import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./db/conn.mjs";
import mongoose from "mongoose";
import userRoutes from './controllers/users.mjs';
import ordersRoutes from './controllers/orders.mjs';


//Express application
const PORT = process.env.PORT;
const app = express();


app.use(express.json());

//Routes
app.use("/users", userRoutes);
app.use("/orders", ordersRoutes);


app.get("/", (req, res) => {
    res.send(`<div><h2>Gobblin' Dice Admin Page</h2><br><a href='/users'>Users</a><br><br><a href='/orders'>Orders</a><br><br><a href='/inventory'>Inventory</a></div>`);
});


// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("seems like we messed up somewhere.")
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})