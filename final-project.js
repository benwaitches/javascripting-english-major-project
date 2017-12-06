let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
["introduction"].forEach(function(tab){
  $.ajax({
    url: "https://benwaitches.github.io/javascripting-english-major-project/final-project.html" + tab + ".md",
    success: function(markdown){
      let html;
      html = md.render(markdown);
      $("#" + tab).html(html);
    }
  });
});
let map, tileLayer;
map = L.map("final-project-map");
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(map);
map.setView([40.730833, -73.9975], 16);
