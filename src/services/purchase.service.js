const  Purchase  = require("../models/purchase.model");

const savePurchase = async (purchase)=>{
   return await Purchase.create(purchase);
}


module.exports={
   savePurchase
};