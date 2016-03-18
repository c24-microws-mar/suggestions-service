'use strict';

const catalogService = require('./catalog.service');
const randomService = require('./random.service');
const _ = require('lodash');

function getSuggestions(releaseIds, limit) { 
  releaseIds = [].concat(releaseIds);
  
  const promises = releaseIds.map((releaseId) => catalogService.getCd(releaseId)
    .then((cd) => catalogService.getCdListByArtistId(cd.artistId))
  );
  
  return Promise.all(promises).then((lists) => {
    const cdList = _.uniqBy(_.flatten(lists), (cd) => cd.albumId);
    const filteredCds = cdList.filter((cd) => releaseIds.indexOf(cd.albumId) === -1);
    return randomService.getRandomItems(filteredCds, limit);
  });
}

function pickCdsWithDifferentArtists(cds, limit) {
}

module.exports = {
  getSuggestions
};