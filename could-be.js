let map, tileLayer;
map = L.map("could-be-map");
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(map);
map.setView([40.730833, -73.9975], 16);
let couldBeFeatures;
$.getJSON("https://the-javascripting-english-major.org/could-be.geo.json", function(data){
  let couldBeLayer;
  couldBeFeatures = data.features.map(function(feature){
    return {
      name: feature.properties.name,
      html: feature.properties.html,
      tab: feature.properties.tab,
      mentions: feature.properties.mentions,
      lines: feature.properties.lines,
      wikipedia: feature.properties.wikipedia,
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    };
  });
  couldBeLayer = L.featureGroup(couldBeFeatures.map(function(feature){
    return L.marker(feature.latLng);
    })
  );
  couldBeLayer.addTo(map);
  map.fitBounds(couldBeLayer.getBounds());
  map.zoomOut(1);
});
