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
    return pickCdsWithDifferentArtists(filteredCds, limit);
  });
}

function pickCdsWithDifferentArtists(cds, limit) {
  if (cds.length <= limit) {
    return cds;
  }
  const groups = _.groupBy(cds, (cd) => cd.artistId);
  let result = [];
  let index = 0;
  while (result.length < limit) {
    _.forEach(groups, (group, artistId) => {
      const cd = group[index];
      if (cd) {
        result.push(cd);
        return result.length < limit;
      }
    });
    index++;
  }
  return result;
}

module.exports = {
  getSuggestions,
  pickCdsWithDifferentArtists
};