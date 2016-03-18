'use strict';

const agent = require('multiagent');
const DISCOVERY_SERVERS = process.env.DISCOVERY_SERVERS
  ? process.env.DISCOVERY_SERVERS.split(',')
  : ['http://46.101.245.190:8500', 'http://46.101.132.55:8500', 'http://46.101.193.82:8500'];
  
const catalogService = agent.client({
  discovery: 'consul',
  discoveryServers: DISCOVERY_SERVERS,
  serviceName: 'catalog-service'
});

module.exports = catalogService;