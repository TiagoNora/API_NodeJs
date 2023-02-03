const OpenSkyApi = require('../src/OpenSkyApi');
const debug = require('debug')('opensky-client');

const osClient = new OpenSkyApi();

osClient.getStates({ icao24: '3c6671' })
  .then((myStates) => {
    debug(myStates);
  })
  .catch((error) => {
    debug(error);
  });
