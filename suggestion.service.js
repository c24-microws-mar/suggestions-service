const catalogService = require('./catalog.service.js');

function getSuggestions(releaseTitle, currentReleaseId) {
  return catalogService
    .get('/cds')
    .then(res => res.body.filter((cd) => cd.id !== currentReleaseId))
    .catch(err => console.log(err));
}

module.exports = {
  getSuggestions
};