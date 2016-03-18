'use strict';

const catalogService = require('./catalog.service');
const randomService = require('./random.service');

function getSuggestions(releaseTitle, currentReleaseId, limit) {
  return catalogService
    .get('/cds?title=ereer')
    .then(res => {
      const filteredCds = res.body.filter((cd) => cd.id !== currentReleaseId);
      return randomService.getRandomItems(filteredCds, limit);
    })
    .catch(err => console.log(err));
}

module.exports = {
  getSuggestions
};