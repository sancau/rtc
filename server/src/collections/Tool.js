
'use strict';

const mongoose = require('mongoose'),
      baseItem = require('./abstract/BaseItem'),
      baseEquipment = require('./abstract/BaseEquipment'),
      Schema = mongoose.Schema;

let schemaObject = {}
Object.assign(schemaObject, baseItem, baseEquipment);
let toolSchema = new Schema(schemaObject);

module.exports = {
  model: mongoose.model('tool', toolSchema),
};
 