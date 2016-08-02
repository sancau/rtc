
'use strict';

const routers = require('./routers');
const collections = require('./collections');

const baseUrl = '/inventory';

const endpoints = {

  items: {
    url: `${baseUrl}/items`,
    router: routers.generic.crud,
    collection: collections.Item
  },

  systems: {
    url: `${baseUrl}/systems`,
    router: routers.generic.crud,
    collection: collections.System
  },
  
  tools: {
    url: `${baseUrl}/tools`,
    router: routers.generic.crud,
    collection: collections.Tool
  }

};

module.exports = endpoints;