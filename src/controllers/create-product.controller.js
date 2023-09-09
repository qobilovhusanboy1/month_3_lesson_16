const {v4} = require("uuid");
const {extname} = require("path");
const Products = require("../models/product.model")

const createProduct = async(req, res) => {
    try {
        const {product_name, product_title, product_price, cash, product_category} = req.body;
        const {photo} = req.files;
    
        const imageName = `${v4()}${extname(photo.name)}`;
        photo.mv(`${process.cwd()}/uploads/${imageName}`);

        const product = await Products.create({product_name, product_title, product_price, cash, product_category, photo_url: imageName});
    
        res.status(200).json({message: "Success", Product: product});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const getProducts = async(req, res) => {
    try {
        const products = await Products.find().countDocuments();

        res.status(200).json({message: "Success", ProductsCount: products});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const getProduct = async(req, res) => {
    try {
        const {id} = req.params;

        const product = await Products.findById(id);

        res.status(200).json({message: "Success", Product: product});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const updateProduct = async(req, res) => {
    try {
        const {product_name, product_title, product_price, cash, product_category} = req.body;
        const {id} = req.params;
        
        const updateDate = await Products.updateOne({_id: id}, {$set: {product_name, product_title, product_price, cash, product_category}, $setOnInsert: { dateAdded: new Date() }}, { upsert: true });

        res.status(201).json({message: "Success"});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const deleteProduct = async(req, res) => {
    try {
        const {id} = req.params;

        await Products.deleteMany({_id: id});
    
        res.status(201).json({message: "Success"});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = {createProduct, getProduct, getProducts, updateProduct, deleteProduct};