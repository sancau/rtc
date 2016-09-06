
'use strict';

const request = require('request');

const items   = require('./json/misc_items.json'),
      tools   = require('./json/tools.json'),
      systems = require('./json/test_systems.json');

// posting items
let counter = 0;
for (let item of items) {
  let data = {};
  data.name = item.name;
  data.code = item.code;
  data.inventoryNumber = item.inventory_number;
  data.unit = item.unit;
  data.price = item.price === '-' ? null :
    item.price.replace(',', '.').replace(' ', '');
  data.quantity = item.quantity == 0 ? 1 : item.quantity;
  data.actualPlacement = item.actual_placement;
  data.comment = item.comment;
  data.category = function(item) {
    return item.category === 'М' ?
      'computer' : item.category === 'К' ?
      'furniture' : 'instrument';
  }(item);

  let url = 'http://localhost:5000/inventory/items';
  request.post(url, { form: data }, (e, r, body) => {
    if (e) {
      console.error(e);
    }
    else {
      if ([400, 404, 500].indexOf(r.statusCode) > -1) {
        console.error(`ERROR WITH ${data.name}`);
        console.log(data);
      }
      else {
        console.log('DONE' + ' ' + data.name);
        counter += 1;
        console.log(counter);
      }
    }
  });
}

// posting tools
for (let tool of tools) {
  let data = {};
  data.name = tool.name;
  data.code = tool.code;
  data.inventoryNumber = tool.inventory_number;
  data.unit = tool.unit;
  data.price = tool.price === '-' ? null :
    tool.price.replace(',', '.').replace(' ', '');
  data.quantity = tool.quantity == 0 ? 1 : tool.quantity;
  data.actualPlacement = tool.actual_placement;
  data.comment = tool.comment;

  data.tests = [{
    date: tool.last_test_date,
    sertificate: 'ОБЯЗАТЕЛЬНО ЗАПОЛНИТЬ!' // можно брать из description
  }];
  data.testPeriod = 1;
  data.manufacturer = tool.manufacturer;
  data.yearOfProduction = tool.year_of_production === 0 ?
    null : tool.year_of_production;
  data.techDetails = tool.specification;

  let url = 'http://localhost:5000/inventory/tools';
  request.post(url, { form: data }, (e, r, body) => {
    if (e) {
      console.error(e);
    }
    else {
      if ([400, 404, 500].indexOf(r.statusCode) > -1) {
        console.error(`ERROR WITH ${data.name}`);
        console.log(data);
      }
      else {
        console.log('DONE' + ' ' + data.name);
        counter += 1;
        console.log(counter);
      }
    }
  });
}

// posting systems
for (let system of systems) {

  let data = {};
  data.name = system.name;
  data.code = system.code;
  data.inventoryNumber = system.inventory_number;
  data.unit = system.unit;
  data.price = system.price === '-' ? null :
    system.price.replace(',', '.').replace(' ', '');
  data.quantity = system.quantity == 0 ? 1 : system.quantity;
  data.actualPlacement = system.actual_placement;
  data.comment = system.comment;

  data.tests = [{
    date: system.last_test_date,
    sertificate: 'ОБЯЗАТЕЛЬНО ЗАПОЛНИТЬ!'
  }];
  data.testPeriod = 1;
  data.manufacturer = system.manufacturer;
  data.yearOfProduction = system.year_of_production === 0 ?
    null : system.year_of_production;
  data.techDetails = system.specification;

  switch (system.purpose) {
    case 'К':
      data.purpose = 'climatic';
      break;
    case 'П':
      data.purpose = 'climatic';
      break;
    case 'В':
      data.purpose = 'vacuum';
      break;
    case 'М':
      data.purpose = 'mechanic';
      break;
  }

  let url = 'http://localhost:5000/inventory/systems';
  request.post(url, { form: data }, (e, r, body) => {
    if (e) {
      console.error(e);
    }
    else {
      if ([400, 404, 500].indexOf(r.statusCode) > -1) {
        console.error(`ERROR WITH ${data.name}`);
        console.log(data);
      }
      else {
        console.log('DONE' + ' ' + data.name);
        counter += 1;
        console.log(counter);
      }
    }
  });
}
