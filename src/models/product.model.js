const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        id: {
          type: Number,
          required: true,
          unique: true,
        },
        date: {
          type: Date,
          required: true,
        },
        shipTo: {
          type: String,
          required: true,
        },
        paymentMethod: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        }
      },
      {
        timestamps: true,
      }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;