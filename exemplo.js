
//import OpenSkyApi from 'openskyjs';
//const openSky = new OpenSkyApi('username', 'pass123');
// const api = require('opensky-js')
const hostname = '192.168.1.220';
const port = 3000;
const express = require('express');
const app = express();
//import {fetch} from 'node-fetch'
//const fetch = require('node-fetch');
const axios = require('axios');

//exemplo

var icao24;
var callsign;
var longitude;
var latitude;
var squawk;

/*
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
openSky.getOwnStates();*/

app.get('/', (req, res) => {
	res.send('Hello World');	

});

app.listen(port,hostname, () => {
	console.log('Hello')
});

app.get('/airplane/:icao', (req, res) => {
	var icao = req.param('icao');
	/*
	opensky.getStates({ icao24: icao }).then((data) => {
  		const plane = data.states[0];
  		console.log(data.time);
  		console.log(plane.longitude, plane.latitude, plane.altitude);
	})
	.catch((error) => {
  		console.log(error);
	});
	*/
	obterDados(icao);

 	res.send(JSON.stringify({icao:icao24,callsign:callsign,longitude:longitude,latitude:latitude,squawk:squawk}));


})



function obterDados(icaoQuery){
    var link = "https://opensky-network.org/api/states/all?icao24=" + icaoQuery;
    console.log(link);
    axios.get(link)
    .then(res => {
      var objeto = res.data.states[0];
      organizarStates(objeto);
    })
}

function organizarStates(objeto){
    objeto.forEach(function (valor, i) {
        if(i === 0){
            icao24 = valor;
        }
        else if(i === 1){
            callsign = valor;
        }
        else if(i === 5){
            longitude = valor;
        }
        else if(i === 6){
            latitude = valor
        }
        else if(i === 14){
            squawk = valor;
        }
    });
}
