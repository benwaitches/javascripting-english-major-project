let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
["introduction", "brussels-airport"].forEach(function(tab){
  $.ajax({
    url: "https://benwaitches.github.io/javascripting-english-major-project/" + tab + ".md",
    success: function(markdown){
      let html;
      html = md.render(markdown);
      $("#" + tab).html(html);
    }
  });
});
let mapNYC, mapBrussels, tileLayerNYC, tileLayerBrussels;
mapNYC = L.map("final-project-map-nyc");
tileLayerNYC = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(mapNYC);
mapNYC.setView([40.730833, -73.9975], 13);
mapBrussels = L.map("final-project-map-brussels");
tileLayerBrussels = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(mapBrussels);
mapBrussels.setView([50.848821, 4.352118], 13);
