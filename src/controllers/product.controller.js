const { productService } = require("../services");

const getProducts = async (req, res) => {
    const products= productService.getProducts();
    res.send(products);
};

module.exports={
    getProducts
}