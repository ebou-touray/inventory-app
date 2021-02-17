const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    itemNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 2,
    },
    qty: {
      type: Number,
      required: true,
      minlength: 6,
    },
    dept: {
      type: String,
      required: true,
      minlength: 2,
    },
    registerDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports= mongoose.model('Item', itemSchema);


