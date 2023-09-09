const Products = require("../models/product.model");

const filterByID = async (req, res) => {
    try {
        const {id} = req.params;

        const product = await Products.findById(id);

        res.status(200).json({message: "Success", Product: product});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const filterByCategory = async (req, res) => {
    try {
        const {category_name} = req.query;

        const products = await Products.find({product_category: category_name});
    
        res.status(200).json({message: "Success", Products: products});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

const filterByCount = async (req, res) => {
    try {
        const {limit} = req.query;

        const products = await Products.find().limit(limit);
    
        res.status(200).json({message: "Success", Products: products});
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
};

module.exports = {filterByID, filterByCategory, filterByCount};