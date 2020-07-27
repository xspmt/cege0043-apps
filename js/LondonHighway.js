var mymap;
var HighwayLayer;

function getHighwayData(){
  var layerURL =
  "https://developer.cege.ucl.ac.uk:30277/getGeoJSON/london_highway/geom";
  $.ajax({url:layerURL, crossDomain: true,success: function(result){
    console.log(result);
    var style1 = {
      "color": "#00cddb",
      "weight": 4,
      "opacity":0.5 };
    var style2 = {
      "color": "#faa700",
      "weight": 4,
      "opacity":0.5 };
    var style3 = {
      "color": "#700aff",
      "weight": 4,
      "opacity":0.5 };

  HighwayLayer = L.geoJson(result).addTo(mymap);
  HighwayLayer.addData(result);
  HighwayLayer.eachLayer(function(layer) {
    console.log(layer);
    var nullName = false;
    if (!layer.feature.properties.name){
    nullName = true; }
    switch (true) {
    case (nullName === true):
      layer.setStyle(style3); 
      break;
        default:
        
          var highStreet = layer.feature.properties.name.toLowerCase().indexOf("high");
          switch (true) {
          case (highStreet > -1) :
            layer.setStyle(style1); 
            break;
              default: layer.setStyle(style2);
               }
} // end outer switch
});
        mymap.fitBounds(HighwayLayer.getBounds());
      }
    });
}
 

function removeHighwayData(){
      alert("remove the Highway data here");
      mymap.removeLayer(HighwayLayer);
    }