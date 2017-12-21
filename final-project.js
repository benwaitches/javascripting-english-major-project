let mapNYC, mapBrussels, tileLayerNYC, tileLayerBrussels;
mapNYC = L.map("final-project-map-nyc");
tileLayerNYC = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(mapNYC);
mapNYC.setView([40.683859, -73.894805], 12);
mapBrussels = L.map("final-project-map-brussels");
tileLayerBrussels = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(mapBrussels);
mapBrussels.setView([50.877565, 4.422582], 13);
let brusselsFeatures;
$.getJSON("https://benwaitches.github.io/javascripting-english-major-project/final-project-data.geo.json", function(data){
  let brusselsLayer;
  brusselsFeatures = data.features.map(function(feature){
    return {
      name: feature.properties.name,
      html: feature.properties.html,
      tab: feature.properties.tab,
      wikipedia: feature.properties.wikipedia,
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    };
  });
  brusselsLayer = L.featureGroup(brusselsFeatures.map(function(feature){
    return L.marker(feature.latLng);
    })
  );
  brusselsLayer = L.featureGroup(brusselsFeatures.map(function(feature){
    let popupContent;
    popupContent = "<h4>" + feature.name + "</h4>";
    return L.marker(feature.latLng).bindPopup(popupContent);
    })
  );
  brusselsLayer.addTo(mapBrussels);
  mapBrussels.fitBounds(brusselsLayer.getBounds());
  mapBrussels.zoomOut(1);
});

let NYCFeatures;
$.getJSON("https://benwaitches.github.io/javascripting-english-major-project/nyc-data.geo.JSON", function(data){
  let NYCLayer;
  NYCFeatures = data.features.map(function(feature){
    return {
      name: feature.properties.name,
      html: feature.properties.html,
      tab: feature.properties.tab,
      wikipedia: feature.properties.wikipedia,
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    };
  });
  NYCLayer = L.featureGroup(NYCFeatures.map(function(feature){
    return L.marker(feature.latLng);
    })
  );
  NYCLayer = L.featureGroup(NYCFeatures.map(function(feature){
    let popupContent;
    popupContent = "<h4>" + feature.name + "</h4>";
    return L.marker(feature.latLng).bindPopup(popupContent);
    })
  );
  NYCLayer.addTo(mapNYC);
  mapNYC.fitBounds(NYCLayer.getBounds());
  mapNYC.zoomOut(1);
});

let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
["introduction", "brussels-airport", "internet-shop", "cafe-grand-sablon", "jfk", "archway-cafe", "waypoint-cafe"].forEach(function(tab){
  $.ajax({
    url: "https://benwaitches.github.io/javascripting-english-major-project/" + tab + ".md",
    success: function(markdown){
      let html;
      html = md.render(markdown);
      $("#" + tab).html(html);
    }
  });
});
