
require('dotenv/config');
const express = require('express');
const Item = require('../models/Item');
const itemController = express.Router();


module.exports = {
  // get all items from the database
  getAllItemss: async (req, res) => {
    try {
      const allItems = await Item.find();
      res.json(allItems);
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: error.message,
      });
    }
  },

  //post a new item
  addItem: async (req, res) => {
    try {
      const { itemNumber, description, qty, dept, registerDate } = req.body;

      // save data to the mongodb

      const newItem = await new Item({
        itemNumber,
        description,
        qty,
        dept,
        registerDate,
      });

      const savedItem = await newItem.save();
      res.status(200).json({
        success: true,
        data: savedItem,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        msg: error.message,
      });
    }
  },

  //DELETE items
  deleteItems: async (req, res) => {
    try {
      await Item.findByIdAndDelete(req.params.id);
      res.json({ msg: 'Deleted Item Successfully' });
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  //Find item by id
  findItemsById: async (req, res) => {
    try {
      const findItem = await Item.findById(req.params.id);
      res.json(findItem);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  },

  //EDIT items
  editItems: async (req, res) => {
    try {
      const { itemNumber, description, qty, dept, registerDate } = req.body;

      const updatedItems = {};
      if (itemNumber) updatedItems.itemNumber = itemNumber;
      if (description) updatedItems.description = description;
      if (qty) updatedItems.qty = qty;
      if (dept) updatedItems.dept = dept;
      if (registerDate) updatedItems.registerDate = registerDate;

      const editItem = await Item.findByIdAndUpdate(
        req.params.id,
        {
          $set: updatedItems,
        },
        { new: true }
      );

      res.json(editItem);
    } catch (error) {
      res.status(422).json(error.message);
    }
  },
};

module.exports = itemController;