
'use strict';

let baseEquipment = {
  lastTestDate: { type: Date, required: true },
  sertificateNumber: { type: [String], required: true },
  testPeriod: { type: Date, required: true },
  manufacturer: { type: String },
  yearOfProduction: { type: Number, min: 1980, max: 2020 },
  techDetails: { type: String },
};

module.exports = baseEquipment;