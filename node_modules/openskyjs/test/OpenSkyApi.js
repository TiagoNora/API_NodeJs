/* eslint-env mocha */

const expect = require('chai').expect;

describe('#OpenSkyApi', function () {
  describe('when using getStates', function () {
    it('should call the /states/all endpoint of the OpenSkyNetwork API');
    it('should call return an OpenSkyStates class');
    it('should block the calls based on rate limits');
  });

  describe('when using getOwnStates', function () {
    it('should call the /states/own endpoint of the OpenSkyNetwork API');
    it('should call return an OpenSkyStates class');
    it('should block the calls based on rate limits');
  });
});
