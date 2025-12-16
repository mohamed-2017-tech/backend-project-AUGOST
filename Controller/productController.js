const Product = require('../Models/product');


// Create a new product
createProduct = async (req, res) => {
    try {
        const { name, price, description } = req.body;
        const newProduct = new Product({ name, price, description });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }       
}
// Get all products
getAllProducts = async (req, res) => {
    try {   
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Get a product by ID
getProductById = async (req, res) => {
    try {   
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Update a product by ID
updateProductById = async (req, res) => {
    try {   
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        const { name, price, description } = req.body;
        product.name = name;
        product.price = price;
        product.description = description;
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}   
// Delete a product by ID
deleteProductById = async (req, res) => {
    try {   
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await product.deleteOne();
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Search products by name
searchProductByName = async (req, res) => {
    try {
        const name = req.params.name;
        const products = await Product.find({ name: { $regex: name, $options: 'i' } });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// Export controller functions
module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
    searchProductByName
}   