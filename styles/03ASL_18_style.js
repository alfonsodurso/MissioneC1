var size = 0;
var placement = 'point';

var style_03ASL_18 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("''");
    var labelFont = "14.3px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 5.4;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("AZIENDA_SANITARIA") !== null) {
        labelText = String(feature.get("AZIENDA_SANITARIA"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};
