import express from "express";
import dotenv from "dotenv";
dotenv.config();
import db from "./db/conn.mjs";
import mongoose from "mongoose";



//Express application
const PORT = process.env.PORT;
const app = express();


app.use(express.json());


app.get("/", (req, res) => {
    res.send("Welcome to the API.");
});


// Global error handling
app.use((err, _req, res, next) => {
    res.status(500).send("seems like we messed up somewhere.")
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})