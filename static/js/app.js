// Creating map object
var myMap = L.map("map", {
    center: [0.000000, 0.000000],
    zoom: 10
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Link to GeoJSON
var APILink = "http://data.beta.nyc//dataset/d6ffa9a4-c598-4b18-8caf-14abde6a5755/resource/74cdcc33-512f-439c-" +
"a43e-c09588c4b391/download/60dbe69bcd3640d5bedde86d69ba7666geojsonmedianhouseholdincomecensustract.geojson";

var geojson;

// Grab data with d3 
d3.json(APULink, function(data) {

    // Create data with d3
    d3.json(APILink, function(data) {

        // Create a new 
    })
})