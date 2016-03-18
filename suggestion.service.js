'use strict';

const catalogService = require('./catalog.service');
const randomService = require('./random.service');

function getSuggestions(releaseId, limit) {
  
  return catalogService.getCd(releaseId)
    .then((cd) => {
      return catalogService
        .getCdList(cd.albumTitle)
        .then(cdList => {
          const filteredCds = cdList.filter((cd) => cd.id !== releaseId);
          return randomService.getRandomItems(filteredCds, limit);
        })
        .catch(err => console.log(err));    
    });
}

module.exports = {
  getSuggestions
};