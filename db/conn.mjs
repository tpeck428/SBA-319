import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


//Global Config
let mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;


//Connecting to MongoDB
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to Mongo')
});


export default db;