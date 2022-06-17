const { Product } = require("../models");


const getProducts =async ()=>{
   return await Product.find();
};

const saveProduct = async (product)=>{
   return await Product.create(product);
}

module.exports={
    getProducts,
    saveProduct
};