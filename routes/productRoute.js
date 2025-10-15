// Importing modules for Routes AND APIs

const express = require ('express');
const router = express.Router();
const Product = require("../Models/products");

// Getting all products

router.get("/api/products", async(req, res)=>{
    try {
       const product = await Product.find();
       res.json(product)       
    } catch (error) {
        res.staus(500).json({ message: message.error });
    }
});


// Get a specific product

router.get("/api/products/:id", async(req, res)=>{
    try {
        const product = await Product.findById(req.params.id);

        // Check if the product is there

        if(!product){
            return res.status(404).json({ message: "Product not Found" });
        };
        res.json(product);
       
    } catch (error) {


        // Handling invalid IDs

        if(error.name === 'CastError'){
            return res.status(400).json({ message: "Invalid ID" });
        };

        // Output other Errors
        res.status(500).json({ message: message.error });
        
    }
});


// Creating a new product

router.post("/api/products", async(req, res)=>{
    const { id, name, description, price, category, in_stock } = req.body;
    try {
        // Adding a new product and Saving
        const product = new Product({ id, name, description, price, category, in_stock });
        const saved = product.save();
        res.status(201).json(saved);
    } catch (error) {
        res.status(400).json({ message: message.error });
        
    }
});

// Updating a product by id

router.put("/api/products/:id", async(req, res)=>{
    try {
        const UpdateProduct = await Product.findByIdAndUpdate();
        req.params.id,
        req.body,
        { new: true }

        // Error if product not available
        if(!Product){
            res.status(404).json("Product does not exist");
        }
    } catch (error) {
        res.status(400).json({ message: message.error });
        
    }
});


// Deleting an element

router.delete("/api/products/:id", async(req, res)=>{
    try {
        await Product.findByIdAndDelete()
        req.params.id
        console.log(" Product deleted. Bye! ");        
    } catch (error) {
        res.status(500).json({ message: message.error });
    }
});

// Exporting the API
module.exports = router;


