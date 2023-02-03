/* eslint-env mocha */

const expect = require('chai').expect;
const OpenSkyStates = require('../src/OpenSkyStates');
const StateVector = require('../src/StateVector');
const dataGoodAllStates = require('./mockData/good_allStates');

describe('#OpenSkyStates', function () {
  describe('when passed bad data', function () {
    it('when data.time does not exist, it should throw an error', function () {
      function throwFunc() { new OpenSkyStates({ states: [] }); }
      expect(throwFunc).to.throw(TypeError, 'data should have a time and a states property');
    });

    it('when data.states does not exist, it should throw an error',
      function () {
        function throwFunc() { new OpenSkyStates({ time: 123 }); }
        expect(throwFunc).to.throw(TypeError, 'data should have a time and a states property');
      });

    it('when data.states is not an Array, it should throw an error', function () {
      function throwFunc() {
        new OpenSkyStates({ time: 123, states: 'states' });
      }
      expect(throwFunc).to.throw(TypeError, 'data.states should be an Array');
    });
  });

  describe('when passed good data', function () {
    let inst = null;

    before(function () {
      inst = new OpenSkyStates(dataGoodAllStates);
    });

    it('should return an OpenSkyStates instance', function () {
      expect(inst).to.be.an.instanceOf(OpenSkyStates);
    });

    it('the instance should return a time property', function () {
      expect(inst).to.have.property('time', 1501935200);
    });

    it('the instance should return a states property, which is an array of StateVectors', function () {
      expect(inst).to.have.property('states').that.is.an('Array');
      inst.states.forEach(function (states) {
        expect(states).to.be.an.instanceOf(StateVector);
      });
    });
  });
});
