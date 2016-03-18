'use strict';

const serviceDiscovery = require('./service-discovery');
const client = serviceDiscovery.getClient('catalog-service', 'v2');

const catalogService = {
  
  getCdList: (title) => {
    return client.get(`/cds?title=${encodeURIComponent(title)}`)
      .then((res) => res.body);
  },
  
  getCd: (id) => {
    return client.get(`/cd/${id}`)
      .then((res) => res.body);
  }  
  
};

module.exports = catalogService;