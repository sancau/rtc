
'use strict';

let baseEquipment = {
  lastTest: {
    date: { type: Date, required: true },
    sertificate: { type: String, required: true }
  },
  testPeriod: { type: Number, required: true },
  manufacturer: { type: String },
  yearOfProduction: { type: Number, min: 1950, max: 2020 },
  techDetails: { type: String },
};

module.exports = baseEquipment;