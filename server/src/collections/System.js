
'use strict';

const mongoose = require('mongoose'),
      baseItem = require('./abstract/BaseItem'),
      baseEquipment = require('./abstract/BaseEquipment'),
      Schema = mongoose.Schema;

let schemaObject = {}
Object.assign(schemaObject, baseItem, baseEquipment);
schemaObject.purpose = {
  type: String,
  required: true,
  enum: ['climatic', 'mechanic', 'vacuum'] 
};

let systemSchema = new Schema(schemaObject);

module.exports = {
  model: mongoose.model('system', systemSchema),
};
 