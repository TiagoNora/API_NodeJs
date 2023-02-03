/* eslint-env mocha */

const expect = require('chai').expect;
const StateVector = require('../src/StateVector');

describe('#StateVector', function () {
  describe('when passed no data', function () {
    it('throws an error', function () {
      function mySVThrow() { new StateVector(); }
      expect(mySVThrow).to.throw(Error);
    });
  });

  describe('when passed bad data', function () {
    it('when it receives less data than expected, it should throw an error', function () {
      const littleData = [
        '3c6444',
        'DLH9LF  ',
        'Germany',
        1458564120,
        1458564120,
        6.1546,
        50.1964,
        9639.3,
        false,
        232.88,
        98.26,
        4.55,
      ];

      function mySVThrow() { new StateVector(littleData); }
      expect(mySVThrow).to.throw(Error);
    });

    it('when it receives data that is not an array, it should throw an error', function () {
      function mySVThrow() { new StateVector({ hello: true }); }
      expect(mySVThrow).to.throw(Error);
    });
  });

  describe('when everything is fine', function () {
    it('should return a StateVector instance, with the expected properties', function () {
      const goodAPIData = [
        '3c6444',
        'DLH9LF  ',
        'Germany',
        1458564120,
        1458564120,
        6.1546,
        50.1964,
        9639.3,
        false,
        232.88,
        98.26,
        4.55,
        null,
        9547.86,
        '1000',
        false,
        0,
      ];

      const goodStateVectorProps = {
        icao24: '3c6444',
        callsign: 'DLH9LF  ',
        originCountry: 'Germany',
        lastPositionUpdate: 1458564120,
        lastContact: 1458564120,
        longitude: 6.1546,
        latitude: 50.1964,
        baroAltitude: 9639.3,
        isOnGround: false,
        velocityOverGround: 232.88,
        heading: 98.26,
        verticalRate: 4.55,
        sensorSerials: null,
        geoAltitude: 9547.86,
        squawk: '1000',
        isSpi: false,
        positionSource: 0,
      };

      const myGoodSV = new StateVector(goodAPIData);

      expect(myGoodSV).to.be.an.instanceOf(StateVector);
      expect(myGoodSV).to.deep.equal(goodStateVectorProps);
    });
  });
});
