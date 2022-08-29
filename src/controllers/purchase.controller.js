const { purchaseService } = require("../services");

const savePurchase = async (req, res) => {
    await purchaseService.savePurchase(req.body);
    res.status(200).json({
        'data': req.body
    });
};



module.exports={
    savePurchase,
}