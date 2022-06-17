const { Product } = require("../models");


const getProducts =async ()=>{
   return await Product.find();
};

const saveProduct = async ()=>{
   const product = new Product({      
      id: 0,
      date: "16 Mar, 2019",
      name: "Elvis Presley",
      shipTo: "Tupelo, MS",
      paymentMethod: "VISA ⠀•••• 3719",
      amount: 312.44
   });

   await product.save();
}

module.exports={
    getProducts,
    saveProduct
};