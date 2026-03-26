var size = 0;
var placement = 'point';

var style_1004ComuniInaccessibilitSpazialeFragili_22 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("IISF_Norm");
    var labelFont = "10.4px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.5999999999999996;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_1004ComuniInaccessibilitSpazialeFragili_22_eval_expression(context) !== null && resolution > 0 && resolution < 70) {
        labelText = String(exp_label_1004ComuniInaccessibilitSpazialeFragili_22_eval_expression(context));
    }
    if (value >= 0.000000 && value <= 0.333333) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,203,203,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(247,252,245,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.333333 && value <= 0.666667) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,203,203,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(123,199,124,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.666667 && value <= 1.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,203,203,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.76}),fill: new ol.style.Fill({color: 'rgba(0,68,27,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
