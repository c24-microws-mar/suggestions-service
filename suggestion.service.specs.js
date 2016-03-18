'use strict';

const should = require('should');
const suggestionService = require('./suggestion.service');

describe('Suggestion service', function () {

  describe('When I have 6 albums from 3 artists, and request 4 cds', function () {
    
    const albums = [
      {
        artistId: 123
      },
      {
        artistId: 123123
      },
      {
        artistId: 123123
      },
      {
        artistId: 55555
      },
      {
        artistId: 123
      },
      {
        artistId: 55555
      },
    ];
    
    it('should return 4 cds from 3 different artists', function () {
      const result = suggestionService.pickCdsWithDifferentArtists(albums, 4);
      should(result).eql([
        {
          artistId: 123
        },
        {
          artistId: 55555
        },
        {
          artistId: 123123
        },
        {
          artistId: 123
        },
      ]);
      
    });
  });

});