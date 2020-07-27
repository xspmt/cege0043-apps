var POILayer;

function getPOI(){
  var layerURL =
  "https://developer.cege.ucl.ac.uk:30277/getPOI";
  $.ajax({url:layerURL, crossDomain: true,success: function(result){
    console.log(result);
    var testMarkerRed =L.AwesomeMarkers.icon({
          icon:'play',
          markerColor:'red'
        });

        var testMarkerBlack = L.AwesomeMarkers.icon({
          icon:'play',
          markerColor:'black'
        });
    POILayer = L.geoJson(result,
      {
    
        pointToLayer:function(feature,latlng){
          var isParking = feature.properties.name.toLowerCase().indexOf("parking");
          console.log(isParking);
          switch(true){
            case(isParking>-1):
             return L.marker(latlng,{icon:testMarkerRed}).bindPopup("<b>"+feature.properties.name +"</b>");
             break;
            default:
             return L.marker(latlng,{icon:testMarkerBlack}).bindPopup("<b>"+feature.properties.name +"</b>");
              break;
            }
          }
      }).addTo(mymap);

        //change the map zoom so that all the data is shown
        mymap.fitBounds(POILayer.getBounds());
  }
  });
}

function removePOI(){
      alert("remove the POI data here");
      mymap.removeLayer(POILayer);
    }