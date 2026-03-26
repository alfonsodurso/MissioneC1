var size = 0;
var placement = 'point';

var style_1001ComuniIndiceFragilit_19 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("IF_Norm");
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.5999999999999996;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.200000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,49,49,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(247,252,245,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.200000 && value <= 0.400000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,49,49,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(201,234,194,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.400000 && value <= 0.600000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,49,49,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(123,199,124,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.600000 && value <= 0.800000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,49,49,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(42,146,75,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.800000 && value <= 1.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(49,49,49,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(0,68,27,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
