import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
    item: {
        type: String,
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
    },
});

const Inventory = mongoose.model('inventory', inventorySchema);

export default Inventory;