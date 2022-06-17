const { productService } = require("../services");

const getProducts = async (req, res) => {
    const products= await productService.getProducts();
    res.send(products);
};

const saveProduct = async (req, res) => {
    await productService.saveProduct(req.body);
    res.send('saved');
};

module.exports={
    getProducts,
    saveProduct
}