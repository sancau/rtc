
'use strict';

const mongoose = require('mongoose'),
      baseItem = require('./abstract/BaseItem'),
      Schema = mongoose.Schema;

let schemaObject = {}
Object.assign(schemaObject, baseItem);
schemaObject.category = {
  type: String,
  required: true,
  enum: ['instrument', 'furniture', 'computer'] 
};

let itemSchema = new Schema(schemaObject);

module.exports = {
  model: mongoose.model('item', itemSchema),
};
 