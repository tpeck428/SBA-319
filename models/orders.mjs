import mongoose from "mongoose";

const ordersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    item: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
    },
    readytoShip: Boolean,
});

const Orders = mongoose.model('orders', ordersSchema);

export default Orders;