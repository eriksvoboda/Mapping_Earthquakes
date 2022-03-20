// add console.log to check to see if our code is working
console.log("working");

// create the map object with a center and zoom level
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

/* alternative version to write it

let map = L.map("mapid", {
    center: [
        40.7, -94.5
    ],
    zoom: 4
});*/

// add a marker to the map for LA 
//let marker = L.marker([34.0522, -118.2437]).addTo(map);


// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];
// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);

// We createe the tile Layer that will be the backgroud of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// then we add our 'graymap' tile layer to the map
streets.addTo(map);