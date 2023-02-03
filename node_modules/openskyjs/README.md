# OpenSky-js

This is a Node Promise-based client for the [OpenSky Network](https://opensky-network.org/) API.

By using the OpenSky API, you agree with their [terms of use](https://opensky-network.org/about/terms-of-use).

## Installation
```shell
$ npm install openskyjs --save
```

## Usage
To see the request parameters that are available, refer to [OpenSky's REST API documentation](https://opensky-network.org/apidoc/rest.html#).

```javascript
import OpenSkyApi from 'openskyjs';

// Prepare client with auth
const openSky = new OpenSkyApi('username', 'pass123');

// Get All States
openSky.getStates()
  .then((data) => {
    console.log(data.time);
  })
  .catch((error) => {
    console.log(error);
  });

// Get States with params
openSky.getStates({ icao24: 'plane123' })
.then((data) => {
  const plane = data.states[0];
  console.log(data.time);
  console.log(plane.longitude, plane.latitude, plane.altitude);
})
.catch((error) => {
  console.log(error);
});

// Get Own States (needs auth)
openSky.getOwnStates();


```
