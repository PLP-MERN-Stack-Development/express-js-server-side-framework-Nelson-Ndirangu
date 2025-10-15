// Importing modules for models
const mongoose = require ('mongoose');
const Schema = mongoose;


// Defining the Product Schema
const productSchema = new mongoose.Schema({
    id : Number,
    name : [{ type: String, required: true }],
    description: [{ type: String, required: true }],
    price: [{
    type: Number,
    required: true,
    min: 0,
    set: v => Math.round(v * 100) / 100 }],
    category: [{ type: String, required: true }],
    inStock: [{ type: Boolean, default: true }]
}, {timestamps: true });

// Creating the Product model
const Product = mongoose.model('Product', productSchema);

// Exporting the model
module.exports = Product;