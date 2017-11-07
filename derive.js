let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.74114, -73.98957], 13);
let startLocationTwo, startLocationMarkerTwo, endLocationTwo;
let pathTwo, pathTwoPolyline;
startLocationTwo = L.marker([40.75130, -74.00721]);
startLocationTwo.addTo(firstMap);
startLocationTwo.bindPopup("This is the start of my second derive.");
endLocationTwo = L.marker([40.74845, -73.98456]);
endLocationTwo.addTo(firstMap);
endLocationTwo.bindPopup("This is the end of my second derive.");
pathTwo = [[40.75130, -74.00721], [40.75173, -74.00783], [40.75381, -74.00704], [40.75450, -74.00662], [40.75328, -74.00382],
[40.75265, -74.00426], [40.75145, -74.00142], [40.75392, -73.9996], [40.75152, -73.99396], [40.75348, -73.99253], [40.75485, -73.99578],
[40.75469, -73.99537], [40.75469, -73.99537], [40.75714, -73.99357], [40.75477, -73.98789], [40.75538, -73.98746], [40.75418, -73.98459],
[40.74981, -73.98776], [40.74845, -73.98456]];
pathTwoPolyline = L.polyline(pathTwo, {
                                  color: "#EC33FF",
                                  fillColor: "#fdf6e3"
                                }
                        ).addTo(firstMap);
let startLocationOne, startLocationOneMarker, endLocationOne, endLocationOneMarker;
let pathOne, pathOnePolyline;
startLocationOne = L.marker([40.72349, -73.99111]);
startLocationOne.addTo(firstMap);
startLocationOne.bindPopup("This is the start of my first derive.");
endLocationOne = L.marker([40.73633, -73.99029]);
endLocationOne.addTo(firstMap);
endLocationOne.bindPopup("This is the end of my first derive.");
pathOne = [[40.72349, -73.99111], [40.72125,-73.99222], [40.72162, -73.99346], [40.72031, -73.98911], [40.71929, -73.98964], [40.72298, -73.98774],
[40.72298, -73.98774], [40.72327, -73.98845], [40.73754, -73.97806], [40.73795, -73.97896], [40.73756, -73.97805], [40.73819, -73.97759], [40.73706, -73.97493],
[40.73686, -73.97439], [40.73899, -73.97292], [40.74162, -73.97222], [40.74317, -73.97205], [40.74571, -73.97808], [40.74074, -73.98175], [40.74209, -73.98504],
[40.74088, -73.98594], [40.74154, -73.98749], [40.74231, -73.98897], [40.73733, -73.99266], [40.73654, -73.99075], [40.73633, -73.99029]];
pathOnePolyline = L.polyline(pathOne, {
                                  color: "#33CAFF",
                                  fillColor: "#fdf6e3"
                                }
                        ).addTo(firstMap);
