
'use strict';

let baseItem = {
  name: { type: String, required: true },
  code: { type: String },
  inventoryNumber: { type: String },
  unit: { type: String, required: true },
  price: { type: Number, min: 0 },
  quantity: { type: Number, min: 1, required: true },
  actualPlacement: { type: String },
  comment: { type: String }
};

module.exports = baseItem;
 