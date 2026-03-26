var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.300000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_0001Comuni_1 = new ol.format.GeoJSON();
var features_0001Comuni_1 = format_0001Comuni_1.readFeatures(json_0001Comuni_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0001Comuni_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0001Comuni_1.addFeatures(features_0001Comuni_1);
var lyr_0001Comuni_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0001Comuni_1,
maxResolution:56.00893230452392,
 
                style: style_0001Comuni_1,
                popuplayertitle: '00.01.Comuni',
                interactive: false,
    title: '00.01.Comuni<br />\
    <img src="styles/legend/0001Comuni_1_0.png" /> Distretto Sanitario n. 01 Ariano Irpino<br />\
    <img src="styles/legend/0001Comuni_1_1.png" /> Distretto Sanitario n. 02 Monteforte Irpino<br />\
    <img src="styles/legend/0001Comuni_1_2.png" /> Distretto Sanitario n. 03 Sant\'Angelo dei Lombardi<br />\
    <img src="styles/legend/0001Comuni_1_3.png" /> Distretto Sanitario n. 04 Avellino<br />\
    <img src="styles/legend/0001Comuni_1_4.png" /> Distretto Sanitario n. 05 Atripalda<br />\
    <img src="styles/legend/0001Comuni_1_5.png" /> Distretto Sanitario n. 06 Baiano<br />\
    <img src="styles/legend/0001Comuni_1_6.png" /> Distretto Sanitario n. 07 Benevento<br />\
    <img src="styles/legend/0001Comuni_1_7.png" /> Distretto Sanitario n. 08 San Giorgio del Sannio<br />\
    <img src="styles/legend/0001Comuni_1_8.png" /> Distretto Sanitario n. 09 Montesarchio<br />\
    <img src="styles/legend/0001Comuni_1_9.png" /> Distretto Sanitario n. 10 Telese Terme<br />\
    <img src="styles/legend/0001Comuni_1_10.png" /> Distretto Sanitario n. 11 Alto Sannio Fortore<br />\
    <img src="styles/legend/0001Comuni_1_11.png" /> Distretto Sanitario n. 12 Caserta<br />\
    <img src="styles/legend/0001Comuni_1_12.png" /> Distretto Sanitario n. 13 Maddaloni<br />\
    <img src="styles/legend/0001Comuni_1_13.png" /> Distretto Sanitario n. 14 Teano<br />\
    <img src="styles/legend/0001Comuni_1_14.png" /> Distretto Sanitario n. 15 Piedimonte<br />\
    <img src="styles/legend/0001Comuni_1_15.png" /> Distretto Sanitario n. 16 Marcianise<br />\
    <img src="styles/legend/0001Comuni_1_16.png" /> Distretto Sanitario n. 17 Aversa<br />\
    <img src="styles/legend/0001Comuni_1_17.png" /> Distretto Sanitario n. 18 Succivo<br />\
    <img src="styles/legend/0001Comuni_1_18.png" /> Distretto Sanitario n. 19 Lusciano<br />\
    <img src="styles/legend/0001Comuni_1_19.png" /> Distretto Sanitario n. 20 Casal di Principe<br />\
    <img src="styles/legend/0001Comuni_1_20.png" /> Distretto Sanitario n. 21 Santa Maria Capua Vetere<br />\
    <img src="styles/legend/0001Comuni_1_21.png" /> Distretto Sanitario n. 22 Capua<br />\
    <img src="styles/legend/0001Comuni_1_22.png" /> Distretto Sanitario n. 23 Mondragone<br />\
    <img src="styles/legend/0001Comuni_1_23.png" /> Distretto Sanitario n. 24/73<br />\
    <img src="styles/legend/0001Comuni_1_24.png" /> Distretto Sanitario n. 24/74<br />\
    <img src="styles/legend/0001Comuni_1_25.png" /> Distretto Sanitario n. 34<br />\
    <img src="styles/legend/0001Comuni_1_26.png" /> Distretto Sanitario n. 35<br />\
    <img src="styles/legend/0001Comuni_1_27.png" /> Distretto Sanitario n. 36<br />\
    <img src="styles/legend/0001Comuni_1_28.png" /> Distretto Sanitario n. 37<br />\
    <img src="styles/legend/0001Comuni_1_29.png" /> Distretto Sanitario n. 38<br />\
    <img src="styles/legend/0001Comuni_1_30.png" /> Distretto Sanitario n. 39<br />\
    <img src="styles/legend/0001Comuni_1_31.png" /> Distretto Sanitario n. 40<br />\
    <img src="styles/legend/0001Comuni_1_32.png" /> Distretto Sanitario n. 41<br />\
    <img src="styles/legend/0001Comuni_1_33.png" /> Distretto Sanitario n. 42<br />\
    <img src="styles/legend/0001Comuni_1_34.png" /> Distretto Sanitario n. 43<br />\
    <img src="styles/legend/0001Comuni_1_35.png" /> Distretto Sanitario n. 44<br />\
    <img src="styles/legend/0001Comuni_1_36.png" /> Distretto Sanitario n. 45<br />\
    <img src="styles/legend/0001Comuni_1_37.png" /> Distretto Sanitario n. 46<br />\
    <img src="styles/legend/0001Comuni_1_38.png" /> Distretto Sanitario n. 47<br />\
    <img src="styles/legend/0001Comuni_1_39.png" /> Distretto Sanitario n. 48<br />\
    <img src="styles/legend/0001Comuni_1_40.png" /> Distretto Sanitario n. 49<br />\
    <img src="styles/legend/0001Comuni_1_41.png" /> Distretto Sanitario n. 50<br />\
    <img src="styles/legend/0001Comuni_1_42.png" /> Distretto Sanitario n. 51<br />\
    <img src="styles/legend/0001Comuni_1_43.png" /> Distretto Sanitario n. 52<br />\
    <img src="styles/legend/0001Comuni_1_44.png" /> Distretto Sanitario n. 53<br />\
    <img src="styles/legend/0001Comuni_1_45.png" /> Distretto Sanitario n. 54<br />\
    <img src="styles/legend/0001Comuni_1_46.png" /> Distretto Sanitario n. 55<br />\
    <img src="styles/legend/0001Comuni_1_47.png" /> Distretto Sanitario n. 56<br />\
    <img src="styles/legend/0001Comuni_1_48.png" /> Distretto Sanitario n. 57<br />\
    <img src="styles/legend/0001Comuni_1_49.png" /> Distretto Sanitario n. 58<br />\
    <img src="styles/legend/0001Comuni_1_50.png" /> Distretto Sanitario n. 59<br />\
    <img src="styles/legend/0001Comuni_1_51.png" /> Distretto Sanitario n. 60 Nocera<br />\
    <img src="styles/legend/0001Comuni_1_52.png" /> Distretto Sanitario n. 61 Angri<br />\
    <img src="styles/legend/0001Comuni_1_53.png" /> Distretto Sanitario n. 62 Sarno-Pagani<br />\
    <img src="styles/legend/0001Comuni_1_54.png" /> Distretto Sanitario n. 63 Cava-Costa d\'Amalfi<br />\
    <img src="styles/legend/0001Comuni_1_55.png" /> Distretto Sanitario n. 64 Eboli<br />\
    <img src="styles/legend/0001Comuni_1_56.png" /> Distretto Sanitario n. 65 Battipaglia<br />\
    <img src="styles/legend/0001Comuni_1_57.png" /> Distretto Sanitario n. 66 Salerno<br />\
    <img src="styles/legend/0001Comuni_1_58.png" /> Distretto Sanitario n. 67 Mercato San Severino<br />\
    <img src="styles/legend/0001Comuni_1_59.png" /> Distretto Sanitario n. 68 Giffoni Valle Piana<br />\
    <img src="styles/legend/0001Comuni_1_60.png" /> Distretto Sanitario n. 69 Capaccio-Roccadaspide<br />\
    <img src="styles/legend/0001Comuni_1_61.png" /> Distretto Sanitario n. 70 Vallo della Lucania - Agropoli<br />\
    <img src="styles/legend/0001Comuni_1_62.png" /> Distretto Sanitario n. 71 Sapri<br />\
    <img src="styles/legend/0001Comuni_1_63.png" /> Distretto Sanitario n. 72 Sala Consilina<br />\
    <img src="styles/legend/0001Comuni_1_64.png" /> <br />' });
var format_0001Distretti_2 = new ol.format.GeoJSON();
var features_0001Distretti_2 = format_0001Distretti_2.readFeatures(json_0001Distretti_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0001Distretti_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0001Distretti_2.addFeatures(features_0001Distretti_2);
var lyr_0001Distretti_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0001Distretti_2,
maxResolution:210.03349614196472,
 minResolution:56.009212349185454,

                style: style_0001Distretti_2,
                popuplayertitle: '00.01.Distretti',
                interactive: false,
    title: '00.01.Distretti<br />\
    <img src="styles/legend/0001Distretti_2_0.png" /> Distretto Sanitario n. 01 Ariano Irpino<br />\
    <img src="styles/legend/0001Distretti_2_1.png" /> Distretto Sanitario n. 02 Monteforte Irpino<br />\
    <img src="styles/legend/0001Distretti_2_2.png" /> Distretto Sanitario n. 03 Sant\'Angelo dei Lombardi<br />\
    <img src="styles/legend/0001Distretti_2_3.png" /> Distretto Sanitario n. 04 Avellino<br />\
    <img src="styles/legend/0001Distretti_2_4.png" /> Distretto Sanitario n. 05 Atripalda<br />\
    <img src="styles/legend/0001Distretti_2_5.png" /> Distretto Sanitario n. 06 Baiano<br />\
    <img src="styles/legend/0001Distretti_2_6.png" /> Distretto Sanitario n. 07 Benevento<br />\
    <img src="styles/legend/0001Distretti_2_7.png" /> Distretto Sanitario n. 08 San Giorgio del Sannio<br />\
    <img src="styles/legend/0001Distretti_2_8.png" /> Distretto Sanitario n. 09 Montesarchio<br />\
    <img src="styles/legend/0001Distretti_2_9.png" /> Distretto Sanitario n. 10 Telese Terme<br />\
    <img src="styles/legend/0001Distretti_2_10.png" /> Distretto Sanitario n. 11 Alto Sannio Fortore<br />\
    <img src="styles/legend/0001Distretti_2_11.png" /> Distretto Sanitario n. 12 Caserta<br />\
    <img src="styles/legend/0001Distretti_2_12.png" /> Distretto Sanitario n. 13 Maddaloni<br />\
    <img src="styles/legend/0001Distretti_2_13.png" /> Distretto Sanitario n. 14 Teano<br />\
    <img src="styles/legend/0001Distretti_2_14.png" /> Distretto Sanitario n. 15 Piedimonte<br />\
    <img src="styles/legend/0001Distretti_2_15.png" /> Distretto Sanitario n. 16 Marcianise<br />\
    <img src="styles/legend/0001Distretti_2_16.png" /> Distretto Sanitario n. 17 Aversa<br />\
    <img src="styles/legend/0001Distretti_2_17.png" /> Distretto Sanitario n. 18 Succivo<br />\
    <img src="styles/legend/0001Distretti_2_18.png" /> Distretto Sanitario n. 19 Lusciano<br />\
    <img src="styles/legend/0001Distretti_2_19.png" /> Distretto Sanitario n. 20 Casal di Principe<br />\
    <img src="styles/legend/0001Distretti_2_20.png" /> Distretto Sanitario n. 21 Santa Maria Capua Vetere<br />\
    <img src="styles/legend/0001Distretti_2_21.png" /> Distretto Sanitario n. 22 Capua<br />\
    <img src="styles/legend/0001Distretti_2_22.png" /> Distretto Sanitario n. 23 Mondragone<br />\
    <img src="styles/legend/0001Distretti_2_23.png" /> Distretto Sanitario n. 24/73<br />\
    <img src="styles/legend/0001Distretti_2_24.png" /> Distretto Sanitario n. 24/74<br />\
    <img src="styles/legend/0001Distretti_2_25.png" /> Distretto Sanitario n. 34<br />\
    <img src="styles/legend/0001Distretti_2_26.png" /> Distretto Sanitario n. 35<br />\
    <img src="styles/legend/0001Distretti_2_27.png" /> Distretto Sanitario n. 36<br />\
    <img src="styles/legend/0001Distretti_2_28.png" /> Distretto Sanitario n. 37<br />\
    <img src="styles/legend/0001Distretti_2_29.png" /> Distretto Sanitario n. 38<br />\
    <img src="styles/legend/0001Distretti_2_30.png" /> Distretto Sanitario n. 39<br />\
    <img src="styles/legend/0001Distretti_2_31.png" /> Distretto Sanitario n. 40<br />\
    <img src="styles/legend/0001Distretti_2_32.png" /> Distretto Sanitario n. 41<br />\
    <img src="styles/legend/0001Distretti_2_33.png" /> Distretto Sanitario n. 42<br />\
    <img src="styles/legend/0001Distretti_2_34.png" /> Distretto Sanitario n. 43<br />\
    <img src="styles/legend/0001Distretti_2_35.png" /> Distretto Sanitario n. 44<br />\
    <img src="styles/legend/0001Distretti_2_36.png" /> Distretto Sanitario n. 45<br />\
    <img src="styles/legend/0001Distretti_2_37.png" /> Distretto Sanitario n. 46<br />\
    <img src="styles/legend/0001Distretti_2_38.png" /> Distretto Sanitario n. 47<br />\
    <img src="styles/legend/0001Distretti_2_39.png" /> Distretto Sanitario n. 48<br />\
    <img src="styles/legend/0001Distretti_2_40.png" /> Distretto Sanitario n. 49<br />\
    <img src="styles/legend/0001Distretti_2_41.png" /> Distretto Sanitario n. 50<br />\
    <img src="styles/legend/0001Distretti_2_42.png" /> Distretto Sanitario n. 51<br />\
    <img src="styles/legend/0001Distretti_2_43.png" /> Distretto Sanitario n. 52<br />\
    <img src="styles/legend/0001Distretti_2_44.png" /> Distretto Sanitario n. 53<br />\
    <img src="styles/legend/0001Distretti_2_45.png" /> Distretto Sanitario n. 54<br />\
    <img src="styles/legend/0001Distretti_2_46.png" /> Distretto Sanitario n. 55<br />\
    <img src="styles/legend/0001Distretti_2_47.png" /> Distretto Sanitario n. 56<br />\
    <img src="styles/legend/0001Distretti_2_48.png" /> Distretto Sanitario n. 57<br />\
    <img src="styles/legend/0001Distretti_2_49.png" /> Distretto Sanitario n. 58<br />\
    <img src="styles/legend/0001Distretti_2_50.png" /> Distretto Sanitario n. 59<br />\
    <img src="styles/legend/0001Distretti_2_51.png" /> Distretto Sanitario n. 60 Nocera<br />\
    <img src="styles/legend/0001Distretti_2_52.png" /> Distretto Sanitario n. 61 Angri<br />\
    <img src="styles/legend/0001Distretti_2_53.png" /> Distretto Sanitario n. 62 Sarno-Pagani<br />\
    <img src="styles/legend/0001Distretti_2_54.png" /> Distretto Sanitario n. 63 Cava-Costa d\'Amalfi<br />\
    <img src="styles/legend/0001Distretti_2_55.png" /> Distretto Sanitario n. 64 Eboli<br />\
    <img src="styles/legend/0001Distretti_2_56.png" /> Distretto Sanitario n. 65 Battipaglia<br />\
    <img src="styles/legend/0001Distretti_2_57.png" /> Distretto Sanitario n. 66 Salerno<br />\
    <img src="styles/legend/0001Distretti_2_58.png" /> Distretto Sanitario n. 67 Mercato San Severino<br />\
    <img src="styles/legend/0001Distretti_2_59.png" /> Distretto Sanitario n. 68 Giffoni Valle Piana<br />\
    <img src="styles/legend/0001Distretti_2_60.png" /> Distretto Sanitario n. 69 Capaccio-Roccadaspide<br />\
    <img src="styles/legend/0001Distretti_2_61.png" /> Distretto Sanitario n. 70 Vallo della Lucania - Agropoli<br />\
    <img src="styles/legend/0001Distretti_2_62.png" /> Distretto Sanitario n. 71 Sapri<br />\
    <img src="styles/legend/0001Distretti_2_63.png" /> Distretto Sanitario n. 72 Sala Consilina<br />\
    <img src="styles/legend/0001Distretti_2_64.png" /> <br />' });
var format_0001ASL_3 = new ol.format.GeoJSON();
var features_0001ASL_3 = format_0001ASL_3.readFeatures(json_0001ASL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0001ASL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0001ASL_3.addFeatures(features_0001ASL_3);
var lyr_0001ASL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0001ASL_3,
maxResolution:28004.466152261964,
 minResolution:210.03377618662623,

                style: style_0001ASL_3,
                popuplayertitle: '00.01.ASL',
                interactive: false,
    title: '00.01.ASL<br />\
    <img src="styles/legend/0001ASL_3_0.png" /> ASL AVELLINO<br />\
    <img src="styles/legend/0001ASL_3_1.png" /> ASL BENEVENTO<br />\
    <img src="styles/legend/0001ASL_3_2.png" /> ASL CASERTA<br />\
    <img src="styles/legend/0001ASL_3_3.png" /> ASL NAPOLI 1<br />\
    <img src="styles/legend/0001ASL_3_4.png" /> ASL NAPOLI 2 NORD<br />\
    <img src="styles/legend/0001ASL_3_5.png" /> ASL NAPOLI 3 NORD<br />\
    <img src="styles/legend/0001ASL_3_6.png" /> ASL SALERNO<br />' });
var format_0002Comuni_4 = new ol.format.GeoJSON();
var features_0002Comuni_4 = format_0002Comuni_4.readFeatures(json_0002Comuni_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0002Comuni_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0002Comuni_4.addFeatures(features_0002Comuni_4);
var lyr_0002Comuni_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0002Comuni_4,
maxResolution:56.00893230452392,
 
                style: style_0002Comuni_4,
                popuplayertitle: '00.02.Comuni',
                interactive: false,
                title: '<img src="styles/legend/0002Comuni_4.png" /> 00.02.Comuni'
            });
var format_0002Distretti_5 = new ol.format.GeoJSON();
var features_0002Distretti_5 = format_0002Distretti_5.readFeatures(json_0002Distretti_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0002Distretti_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0002Distretti_5.addFeatures(features_0002Distretti_5);
var lyr_0002Distretti_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0002Distretti_5, 
                style: style_0002Distretti_5,
                popuplayertitle: '00.02.Distretti',
                interactive: false,
                title: '<img src="styles/legend/0002Distretti_5.png" /> 00.02.Distretti'
            });
var format_0002ASL_6 = new ol.format.GeoJSON();
var features_0002ASL_6 = format_0002ASL_6.readFeatures(json_0002ASL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0002ASL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0002ASL_6.addFeatures(features_0002ASL_6);
var lyr_0002ASL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0002ASL_6, 
                style: style_0002ASL_6,
                popuplayertitle: '00.02.ASL',
                interactive: false,
                title: '<img src="styles/legend/0002ASL_6.png" /> 00.02.ASL'
            });
var format_0103PNRROdCSUMDistretti_7 = new ol.format.GeoJSON();
var features_0103PNRROdCSUMDistretti_7 = format_0103PNRROdCSUMDistretti_7.readFeatures(json_0103PNRROdCSUMDistretti_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0103PNRROdCSUMDistretti_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0103PNRROdCSUMDistretti_7.addFeatures(features_0103PNRROdCSUMDistretti_7);
var lyr_0103PNRROdCSUMDistretti_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0103PNRROdCSUMDistretti_7, 
                style: style_0103PNRROdCSUMDistretti_7,
                popuplayertitle: '01.03.PNRR \ OdC - SUM Distretti',
                interactive: false,
    title: '01.03.PNRR \ OdC - SUM Distretti<br />\
    <img src="styles/legend/0103PNRROdCSUMDistretti_7_0.png" /> 0<br />\
    <img src="styles/legend/0103PNRROdCSUMDistretti_7_1.png" /> 1<br />\
    <img src="styles/legend/0103PNRROdCSUMDistretti_7_2.png" /> 2<br />\
    <img src="styles/legend/0103PNRROdCSUMDistretti_7_3.png" /> 3<br />\
    <img src="styles/legend/0103PNRROdCSUMDistretti_7_4.png" /> 6<br />' });
var format_0103PNRROdCStrutture_8 = new ol.format.GeoJSON();
var features_0103PNRROdCStrutture_8 = format_0103PNRROdCStrutture_8.readFeatures(json_0103PNRROdCStrutture_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0103PNRROdCStrutture_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0103PNRROdCStrutture_8.addFeatures(features_0103PNRROdCStrutture_8);
cluster_0103PNRROdCStrutture_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_0103PNRROdCStrutture_8
});
var lyr_0103PNRROdCStrutture_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_0103PNRROdCStrutture_8,
maxResolution:280.0446615226196,
 
                style: style_0103PNRROdCStrutture_8,
                popuplayertitle: '01.03.PNRR \ OdC - Strutture',
                interactive: true,
                title: '<img src="styles/legend/0103PNRROdCStrutture_8.png" /> 01.03.PNRR \ OdC - Strutture'
            });
var format_0102PNRRCoTSUMDistretti_9 = new ol.format.GeoJSON();
var features_0102PNRRCoTSUMDistretti_9 = format_0102PNRRCoTSUMDistretti_9.readFeatures(json_0102PNRRCoTSUMDistretti_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0102PNRRCoTSUMDistretti_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0102PNRRCoTSUMDistretti_9.addFeatures(features_0102PNRRCoTSUMDistretti_9);
var lyr_0102PNRRCoTSUMDistretti_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0102PNRRCoTSUMDistretti_9, 
                style: style_0102PNRRCoTSUMDistretti_9,
                popuplayertitle: '01.02. PNRR \ CoT - SUM Distretti',
                interactive: false,
    title: '01.02. PNRR \ CoT - SUM Distretti<br />\
    <img src="styles/legend/0102PNRRCoTSUMDistretti_9_0.png" /> 0<br />\
    <img src="styles/legend/0102PNRRCoTSUMDistretti_9_1.png" /> 1<br />\
    <img src="styles/legend/0102PNRRCoTSUMDistretti_9_2.png" /> 2<br />\
    <img src="styles/legend/0102PNRRCoTSUMDistretti_9_3.png" /> 3<br />\
    <img src="styles/legend/0102PNRRCoTSUMDistretti_9_4.png" /> 10<br />' });
var format_0102PNRRCoTStrutture_10 = new ol.format.GeoJSON();
var features_0102PNRRCoTStrutture_10 = format_0102PNRRCoTStrutture_10.readFeatures(json_0102PNRRCoTStrutture_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0102PNRRCoTStrutture_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0102PNRRCoTStrutture_10.addFeatures(features_0102PNRRCoTStrutture_10);
cluster_0102PNRRCoTStrutture_10 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_0102PNRRCoTStrutture_10
});
var lyr_0102PNRRCoTStrutture_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_0102PNRRCoTStrutture_10,
maxResolution:210.03349614196472,
 
                style: style_0102PNRRCoTStrutture_10,
                popuplayertitle: '01.02.PNRR \ CoT  Strutture',
                interactive: true,
                title: '<img src="styles/legend/0102PNRRCoTStrutture_10.png" /> 01.02.PNRR \ CoT  Strutture'
            });
var format_0102PNRRCdCSUMDistretti_11 = new ol.format.GeoJSON();
var features_0102PNRRCdCSUMDistretti_11 = format_0102PNRRCdCSUMDistretti_11.readFeatures(json_0102PNRRCdCSUMDistretti_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0102PNRRCdCSUMDistretti_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0102PNRRCdCSUMDistretti_11.addFeatures(features_0102PNRRCdCSUMDistretti_11);
var lyr_0102PNRRCdCSUMDistretti_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_0102PNRRCdCSUMDistretti_11, 
                style: style_0102PNRRCdCSUMDistretti_11,
                popuplayertitle: '01.02. PNRR \ CdC - SUM Distretti',
                interactive: false,
    title: '01.02. PNRR \ CdC - SUM Distretti<br />\
    <img src="styles/legend/0102PNRRCdCSUMDistretti_11_0.png" /> 0<br />\
    <img src="styles/legend/0102PNRRCdCSUMDistretti_11_1.png" /> 1<br />\
    <img src="styles/legend/0102PNRRCdCSUMDistretti_11_2.png" /> 2<br />\
    <img src="styles/legend/0102PNRRCdCSUMDistretti_11_3.png" /> 3<br />\
    <img src="styles/legend/0102PNRRCdCSUMDistretti_11_4.png" /> 4<br />\
    <img src="styles/legend/0102PNRRCdCSUMDistretti_11_5.png" /> 5<br />\
    <img src="styles/legend/0102PNRRCdCSUMDistretti_11_6.png" /> 31<br />' });
var format_0101PNRRCdCStrutture_12 = new ol.format.GeoJSON();
var features_0101PNRRCdCStrutture_12 = format_0101PNRRCdCStrutture_12.readFeatures(json_0101PNRRCdCStrutture_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_0101PNRRCdCStrutture_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_0101PNRRCdCStrutture_12.addFeatures(features_0101PNRRCdCStrutture_12);
cluster_0101PNRRCdCStrutture_12 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_0101PNRRCdCStrutture_12
});
var lyr_0101PNRRCdCStrutture_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_0101PNRRCdCStrutture_12,
maxResolution:140.0223307613098,
 
                style: style_0101PNRRCdCStrutture_12,
                popuplayertitle: '01.01.PNRR \ CdC - Strutture',
                interactive: true,
                title: '<img src="styles/legend/0101PNRRCdCStrutture_12.png" /> 01.01.PNRR \ CdC - Strutture'
            });
var format_02OVEROdC_13 = new ol.format.GeoJSON();
var features_02OVEROdC_13 = format_02OVEROdC_13.readFeatures(json_02OVEROdC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02OVEROdC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02OVEROdC_13.addFeatures(features_02OVEROdC_13);
cluster_02OVEROdC_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_02OVEROdC_13
});
var lyr_02OVEROdC_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_02OVEROdC_13,
maxResolution:280.0446615226196,
 
                style: style_02OVEROdC_13,
                popuplayertitle: '02.OVER \ OdC',
                interactive: true,
                title: '<img src="styles/legend/02OVEROdC_13.png" /> 02.OVER \ OdC'
            });
var format_02OVERCoT_14 = new ol.format.GeoJSON();
var features_02OVERCoT_14 = format_02OVERCoT_14.readFeatures(json_02OVERCoT_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02OVERCoT_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02OVERCoT_14.addFeatures(features_02OVERCoT_14);
cluster_02OVERCoT_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_02OVERCoT_14
});
var lyr_02OVERCoT_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_02OVERCoT_14,
maxResolution:210.03349614196472,
 
                style: style_02OVERCoT_14,
                popuplayertitle: '02.OVER \ CoT',
                interactive: true,
                title: '<img src="styles/legend/02OVERCoT_14.png" /> 02.OVER \ CoT'
            });
var format_02OVERCdC_15 = new ol.format.GeoJSON();
var features_02OVERCdC_15 = format_02OVERCdC_15.readFeatures(json_02OVERCdC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_02OVERCdC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_02OVERCdC_15.addFeatures(features_02OVERCdC_15);
cluster_02OVERCdC_15 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_02OVERCdC_15
});
var lyr_02OVERCdC_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_02OVERCdC_15,
maxResolution:140.0223307613098,
 
                style: style_02OVERCdC_15,
                popuplayertitle: '02.OVER \ CdC',
                interactive: true,
                title: '<img src="styles/legend/02OVERCdC_15.png" /> 02.OVER \ CdC'
            });
var format_03Comuni_16 = new ol.format.GeoJSON();
var features_03Comuni_16 = format_03Comuni_16.readFeatures(json_03Comuni_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03Comuni_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03Comuni_16.addFeatures(features_03Comuni_16);
var lyr_03Comuni_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03Comuni_16,
maxResolution:56.00893230452392,
 
                style: style_03Comuni_16,
                popuplayertitle: '03.Comuni',
                interactive: false,
                title: '03.Comuni'
            });
var format_03Distretti_17 = new ol.format.GeoJSON();
var features_03Distretti_17 = format_03Distretti_17.readFeatures(json_03Distretti_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03Distretti_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03Distretti_17.addFeatures(features_03Distretti_17);
var lyr_03Distretti_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03Distretti_17,
maxResolution:140.02261080597134,
 minResolution:56.009212349185454,

                style: style_03Distretti_17,
                popuplayertitle: '03.Distretti',
                interactive: false,
                title: '03.Distretti'
            });
var format_03ASL_18 = new ol.format.GeoJSON();
var features_03ASL_18 = format_03ASL_18.readFeatures(json_03ASL_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_03ASL_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_03ASL_18.addFeatures(features_03ASL_18);
var lyr_03ASL_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_03ASL_18,
maxResolution:28004.466152261964,
 minResolution:140.02261080597134,

                style: style_03ASL_18,
                popuplayertitle: '03.ASL',
                interactive: false,
                title: '03.ASL'
            });
var format_1001ComuniIndiceFragilit_19 = new ol.format.GeoJSON();
var features_1001ComuniIndiceFragilit_19 = format_1001ComuniIndiceFragilit_19.readFeatures(json_1001ComuniIndiceFragilit_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1001ComuniIndiceFragilit_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1001ComuniIndiceFragilit_19.addFeatures(features_1001ComuniIndiceFragilit_19);
var lyr_1001ComuniIndiceFragilit_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1001ComuniIndiceFragilit_19, 
                style: style_1001ComuniIndiceFragilit_19,
                popuplayertitle: '10.01.Comuni \ Indice Fragilità',
                interactive: true,
    title: '10.01.Comuni \ Indice Fragilità<br />\
    <img src="styles/legend/1001ComuniIndiceFragilit_19_0.png" /> IFN 0,0 - 0,2<br />\
    <img src="styles/legend/1001ComuniIndiceFragilit_19_1.png" /> IFN 0,2 - 0,4<br />\
    <img src="styles/legend/1001ComuniIndiceFragilit_19_2.png" /> IFN 0,4 - 0,6<br />\
    <img src="styles/legend/1001ComuniIndiceFragilit_19_3.png" /> IFN 0,6 - 0,8<br />\
    <img src="styles/legend/1001ComuniIndiceFragilit_19_4.png" /> IFN 0,8 - 1,0<br />' });
var format_1003ComuniAccessibili_20 = new ol.format.GeoJSON();
var features_1003ComuniAccessibili_20 = format_1003ComuniAccessibili_20.readFeatures(json_1003ComuniAccessibili_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1003ComuniAccessibili_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1003ComuniAccessibili_20.addFeatures(features_1003ComuniAccessibili_20);
var lyr_1003ComuniAccessibili_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1003ComuniAccessibili_20, 
                style: style_1003ComuniAccessibili_20,
                popuplayertitle: '10.03.Comuni \ Accessibili',
                interactive: false,
                title: '<img src="styles/legend/1003ComuniAccessibili_20.png" /> 10.03.Comuni \ Accessibili'
            });
var format_1003ComuniIsolatiIndiceFragilit_21 = new ol.format.GeoJSON();
var features_1003ComuniIsolatiIndiceFragilit_21 = format_1003ComuniIsolatiIndiceFragilit_21.readFeatures(json_1003ComuniIsolatiIndiceFragilit_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1003ComuniIsolatiIndiceFragilit_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1003ComuniIsolatiIndiceFragilit_21.addFeatures(features_1003ComuniIsolatiIndiceFragilit_21);
var lyr_1003ComuniIsolatiIndiceFragilit_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1003ComuniIsolatiIndiceFragilit_21, 
                style: style_1003ComuniIsolatiIndiceFragilit_21,
                popuplayertitle: '10.03.Comuni \ Isolati - Indice Fragilità',
                interactive: true,
    title: '10.03.Comuni \ Isolati - Indice Fragilità<br />\
    <img src="styles/legend/1003ComuniIsolatiIndiceFragilit_21_0.png" /> IFN 0,0 - 0,2<br />\
    <img src="styles/legend/1003ComuniIsolatiIndiceFragilit_21_1.png" /> IFN 0,2 - 0,4<br />\
    <img src="styles/legend/1003ComuniIsolatiIndiceFragilit_21_2.png" /> IFN 0,4 - 0,6<br />\
    <img src="styles/legend/1003ComuniIsolatiIndiceFragilit_21_3.png" /> IFN 0,6 - 0,8<br />\
    <img src="styles/legend/1003ComuniIsolatiIndiceFragilit_21_4.png" /> IFN 0,8 - 1,0<br />' });
var format_1004ComuniInaccessibilitSpazialeFragili_22 = new ol.format.GeoJSON();
var features_1004ComuniInaccessibilitSpazialeFragili_22 = format_1004ComuniInaccessibilitSpazialeFragili_22.readFeatures(json_1004ComuniInaccessibilitSpazialeFragili_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1004ComuniInaccessibilitSpazialeFragili_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1004ComuniInaccessibilitSpazialeFragili_22.addFeatures(features_1004ComuniInaccessibilitSpazialeFragili_22);
var lyr_1004ComuniInaccessibilitSpazialeFragili_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1004ComuniInaccessibilitSpazialeFragili_22, 
                style: style_1004ComuniInaccessibilitSpazialeFragili_22,
                popuplayertitle: '10.04.Comuni \ Inaccessibilità Spaziale Fragili',
                interactive: true,
    title: '10.04.Comuni \ Inaccessibilità Spaziale Fragili<br />\
    <img src="styles/legend/1004ComuniInaccessibilitSpazialeFragili_22_0.png" /> IIFS 0,00 - 0,33<br />\
    <img src="styles/legend/1004ComuniInaccessibilitSpazialeFragili_22_1.png" /> IIFS 0,33 - 0,67<br />\
    <img src="styles/legend/1004ComuniInaccessibilitSpazialeFragili_22_2.png" /> IIFS 0,67 - 1,00<br />' });
var format_1000DistrettiBordi_23 = new ol.format.GeoJSON();
var features_1000DistrettiBordi_23 = format_1000DistrettiBordi_23.readFeatures(json_1000DistrettiBordi_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1000DistrettiBordi_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1000DistrettiBordi_23.addFeatures(features_1000DistrettiBordi_23);
var lyr_1000DistrettiBordi_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1000DistrettiBordi_23, 
                style: style_1000DistrettiBordi_23,
                popuplayertitle: '10.00.Distretti - Bordi',
                interactive: false,
                title: '<img src="styles/legend/1000DistrettiBordi_23.png" /> 10.00.Distretti - Bordi'
            });
var format_1100DistrettiDotazioneDistrettuale_24 = new ol.format.GeoJSON();
var features_1100DistrettiDotazioneDistrettuale_24 = format_1100DistrettiDotazioneDistrettuale_24.readFeatures(json_1100DistrettiDotazioneDistrettuale_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1100DistrettiDotazioneDistrettuale_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1100DistrettiDotazioneDistrettuale_24.addFeatures(features_1100DistrettiDotazioneDistrettuale_24);
var lyr_1100DistrettiDotazioneDistrettuale_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1100DistrettiDotazioneDistrettuale_24, 
                style: style_1100DistrettiDotazioneDistrettuale_24,
                popuplayertitle: '11.00.Distretti \ Dotazione Distrettuale',
                interactive: true,
    title: '11.00.Distretti \ Dotazione Distrettuale<br />\
    <img src="styles/legend/1100DistrettiDotazioneDistrettuale_24_0.png" /> IDDN 0,00 - 0,33<br />\
    <img src="styles/legend/1100DistrettiDotazioneDistrettuale_24_1.png" /> IDDN 0,33 - 0,67<br />\
    <img src="styles/legend/1100DistrettiDotazioneDistrettuale_24_2.png" /> IDDN 0,67 - 1,00<br />' });
var format_1201Comuni_25 = new ol.format.GeoJSON();
var features_1201Comuni_25 = format_1201Comuni_25.readFeatures(json_1201Comuni_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1201Comuni_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1201Comuni_25.addFeatures(features_1201Comuni_25);
var lyr_1201Comuni_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1201Comuni_25, 
                style: style_1201Comuni_25,
                popuplayertitle: '12.01.Comuni',
                interactive: true,
    title: '12.01.Comuni<br />\
    <img src="styles/legend/1201Comuni_25_0.png" /> Bassa Inacc / Bassa Dot<br />\
    <img src="styles/legend/1201Comuni_25_1.png" /> Media Inacc / Bassa Dot<br />\
    <img src="styles/legend/1201Comuni_25_2.png" /> Alta Inacc / Bassa Dot<br />\
    <img src="styles/legend/1201Comuni_25_3.png" /> Bassa Inacc / Media Dot<br />\
    <img src="styles/legend/1201Comuni_25_4.png" /> Media Inacc / Media Dot<br />\
    <img src="styles/legend/1201Comuni_25_5.png" /> Alta Inacc / Media Dot<br />\
    <img src="styles/legend/1201Comuni_25_6.png" /> Bassa Inacc / Alta Dot<br />\
    <img src="styles/legend/1201Comuni_25_7.png" /> Media Inacc / Alta Dot<br />\
    <img src="styles/legend/1201Comuni_25_8.png" /> Alta Inacc / Alta Dot<br />' });
var format_1202Distretti_26 = new ol.format.GeoJSON();
var features_1202Distretti_26 = format_1202Distretti_26.readFeatures(json_1202Distretti_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1202Distretti_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1202Distretti_26.addFeatures(features_1202Distretti_26);
var lyr_1202Distretti_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1202Distretti_26, 
                style: style_1202Distretti_26,
                popuplayertitle: '12.02.Distretti',
                interactive: true,
    title: '12.02.Distretti<br />\
    <img src="styles/legend/1202Distretti_26_0.png" /> Bassa Inacc / Bassa Dot<br />\
    <img src="styles/legend/1202Distretti_26_1.png" /> Media Inacc / Bassa Dot<br />\
    <img src="styles/legend/1202Distretti_26_2.png" /> Alta Inacc / Bassa Dot<br />\
    <img src="styles/legend/1202Distretti_26_3.png" /> Bassa Inacc / Media Dot<br />\
    <img src="styles/legend/1202Distretti_26_4.png" /> Media Inacc / Media Dot<br />\
    <img src="styles/legend/1202Distretti_26_5.png" /> Alta Inacc / Media Dot<br />\
    <img src="styles/legend/1202Distretti_26_6.png" /> Bassa Inacc / Alta Dot<br />\
    <img src="styles/legend/1202Distretti_26_7.png" /> Media Inacc / Alta Dot<br />\
    <img src="styles/legend/1202Distretti_26_8.png" /> Alta Inacc / Alta Dot<br />' });
var group_InaccessibilitvsDotazione = new ol.layer.Group({
                                layers: [lyr_1201Comuni_25,lyr_1202Distretti_26,],
                                fold: 'open',
                                title: 'Inaccessibilità vs Dotazione'});
var group_11Dotazionedistrettuale = new ol.layer.Group({
                                layers: [lyr_1100DistrettiDotazioneDistrettuale_24,],
                                fold: 'open',
                                title: '11.Dotazione distrettuale '});
var group_10AccessibilitComuni = new ol.layer.Group({
                                layers: [lyr_1001ComuniIndiceFragilit_19,lyr_1003ComuniAccessibili_20,lyr_1003ComuniIsolatiIndiceFragilit_21,lyr_1004ComuniInaccessibilitSpazialeFragili_22,lyr_1000DistrettiBordi_23,],
                                fold: 'close',
                                title: '10.Accessibilità - Comuni'});
var group_03Etichette = new ol.layer.Group({
                                layers: [lyr_03Comuni_16,lyr_03Distretti_17,lyr_03ASL_18,],
                                fold: 'close',
                                title: '03.Etichette'});
var group_02StruttureOVERBOOKING = new ol.layer.Group({
                                layers: [lyr_02OVEROdC_13,lyr_02OVERCoT_14,lyr_02OVERCdC_15,],
                                fold: 'close',
                                title: '02.Strutture OVERBOOKING'});
var group_0101PNRRCdC = new ol.layer.Group({
                                layers: [lyr_0102PNRRCdCSUMDistretti_11,lyr_0101PNRRCdCStrutture_12,],
                                fold: 'close',
                                title: '01.01.PNRR \ CdC'});
var group_0102PNRRCoT = new ol.layer.Group({
                                layers: [lyr_0102PNRRCoTSUMDistretti_9,lyr_0102PNRRCoTStrutture_10,],
                                fold: 'close',
                                title: '01.02.PNRR \ CoT'});
var group_0103PNRROdC = new ol.layer.Group({
                                layers: [lyr_0103PNRROdCSUMDistretti_7,lyr_0103PNRROdCStrutture_8,],
                                fold: 'close',
                                title: '01.03.PNRR \ OdC'});
var group_0002GeometriaBordi = new ol.layer.Group({
                                layers: [lyr_0002Comuni_4,lyr_0002Distretti_5,lyr_0002ASL_6,],
                                fold: 'close',
                                title: '00.02.Geometria \ Bordi'});
var group_0001GeometriaRiempimento = new ol.layer.Group({
                                layers: [lyr_0001Comuni_1,lyr_0001Distretti_2,lyr_0001ASL_3,],
                                fold: 'close',
                                title: '00.01.Geometria \ Riempimento'});

lyr_OpenStreetMap_0.setVisible(true);lyr_0001Comuni_1.setVisible(true);lyr_0001Distretti_2.setVisible(true);lyr_0001ASL_3.setVisible(true);lyr_0002Comuni_4.setVisible(true);lyr_0002Distretti_5.setVisible(true);lyr_0002ASL_6.setVisible(true);lyr_0103PNRROdCSUMDistretti_7.setVisible(false);lyr_0103PNRROdCStrutture_8.setVisible(true);lyr_0102PNRRCoTSUMDistretti_9.setVisible(false);lyr_0102PNRRCoTStrutture_10.setVisible(true);lyr_0102PNRRCdCSUMDistretti_11.setVisible(false);lyr_0101PNRRCdCStrutture_12.setVisible(true);lyr_02OVEROdC_13.setVisible(true);lyr_02OVERCoT_14.setVisible(true);lyr_02OVERCdC_15.setVisible(true);lyr_03Comuni_16.setVisible(true);lyr_03Distretti_17.setVisible(true);lyr_03ASL_18.setVisible(true);lyr_1001ComuniIndiceFragilit_19.setVisible(false);lyr_1003ComuniAccessibili_20.setVisible(false);lyr_1003ComuniIsolatiIndiceFragilit_21.setVisible(false);lyr_1004ComuniInaccessibilitSpazialeFragili_22.setVisible(false);lyr_1000DistrettiBordi_23.setVisible(false);lyr_1100DistrettiDotazioneDistrettuale_24.setVisible(false);lyr_1201Comuni_25.setVisible(false);lyr_1202Distretti_26.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,group_0001GeometriaRiempimento,group_0002GeometriaBordi,group_0103PNRROdC,group_0102PNRRCoT,group_0101PNRRCdC,group_02StruttureOVERBOOKING,group_03Etichette,group_10AccessibilitComuni,group_11Dotazionedistrettuale,group_InaccessibilitvsDotazione];
lyr_0001Comuni_1.set('fieldAliases', {'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'IF_Grezzo': 'IF_Grezzo', 'IF_Norm': 'IF_Norm', 'IISF_Norm': 'IISF_Norm', 'IISF': 'IISF', 'FRAGILI_OU': 'FRAGILI_OU', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', });
lyr_0001Distretti_2.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', });
lyr_0001ASL_3.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', });
lyr_0002Comuni_4.set('fieldAliases', {'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'IF_Grezzo': 'IF_Grezzo', 'IF_Norm': 'IF_Norm', 'IISF_Norm': 'IISF_Norm', 'IISF': 'IISF', 'FRAGILI_OU': 'FRAGILI_OU', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', });
lyr_0002Distretti_5.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', });
lyr_0002ASL_6.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', });
lyr_0103PNRROdCSUMDistretti_7.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', 'Num_OdC': 'Num_OdC', 'Num_CdC': 'Num_CdC', 'Num_CoT': 'Num_CoT', });
lyr_0103PNRROdCStrutture_8.set('fieldAliases', {'fid': 'fid', 'MISURA': 'MISURA', 'DATA_FINE_LAVORI_PREVISTA': 'DATA_FINE_LAVORI_PREVISTA', 'CUP': 'CUP', 'OVERBOOKING': 'OVERBOOKING', 'CODICE_ISTAT': 'CODICE_ISTAT', 'COMUNE': 'COMUNE', 'INDIRIZZO': 'INDIRIZZO', 'GEOLOCALIZZAZIONE': 'GEOLOCALIZZAZIONE', 'FONDI_PNRR_2022': 'FONDI_PNRR_2022', 'FONDI_LEA_2022': 'FONDI_LEA_2022', 'RIMODULAZIONE_PNRR_2025': 'RIMODULAZIONE_PNRR_2025', 'FONDI_FOI': 'FONDI_FOI', 'FONDI_AZIENDALI': 'FONDI_AZIENDALI', 'FONDI_REGIONALI': 'FONDI_REGIONALI', 'TOTALE_PNRR+LEA+FOI': 'TOTALE_PNRR+LEA+FOI', });
lyr_0102PNRRCoTSUMDistretti_9.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', 'Num_OdC': 'Num_OdC', 'Num_CdC': 'Num_CdC', 'Num_CoT': 'Num_CoT', });
lyr_0102PNRRCoTStrutture_10.set('fieldAliases', {'fid': 'fid', 'MISURA': 'MISURA', 'DATA_FINE_LAVORI_PREVISTA': 'DATA_FINE_LAVORI_PREVISTA', 'CUP': 'CUP', 'OVERBOOKING': 'OVERBOOKING', 'CODICE_ISTAT': 'CODICE_ISTAT', 'COMUNE': 'COMUNE', 'INDIRIZZO': 'INDIRIZZO', 'GEOLOCALIZZAZIONE': 'GEOLOCALIZZAZIONE', 'FONDI_PNRR_2022': 'FONDI_PNRR_2022', 'FONDI_LEA_2022': 'FONDI_LEA_2022', 'RIMODULAZIONE_PNRR_2025': 'RIMODULAZIONE_PNRR_2025', 'FONDI_FOI': 'FONDI_FOI', 'FONDI_AZIENDALI': 'FONDI_AZIENDALI', 'FONDI_REGIONALI': 'FONDI_REGIONALI', 'TOTALE_PNRR+LEA+FOI': 'TOTALE_PNRR+LEA+FOI', });
lyr_0102PNRRCdCSUMDistretti_11.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', 'Num_OdC': 'Num_OdC', 'Num_CdC': 'Num_CdC', 'Num_CoT': 'Num_CoT', });
lyr_0101PNRRCdCStrutture_12.set('fieldAliases', {'fid': 'fid', 'MISURA': 'MISURA', 'DATA_FINE_LAVORI_PREVISTA': 'DATA_FINE_LAVORI_PREVISTA', 'CUP': 'CUP', 'OVERBOOKING': 'OVERBOOKING', 'CODICE_ISTAT': 'CODICE_ISTAT', 'COMUNE': 'COMUNE', 'INDIRIZZO': 'INDIRIZZO', 'GEOLOCALIZZAZIONE': 'GEOLOCALIZZAZIONE', 'FONDI_PNRR_2022': 'FONDI_PNRR_2022', 'FONDI_LEA_2022': 'FONDI_LEA_2022', 'RIMODULAZIONE_PNRR_2025': 'RIMODULAZIONE_PNRR_2025', 'FONDI_FOI': 'FONDI_FOI', 'FONDI_AZIENDALI': 'FONDI_AZIENDALI', 'FONDI_REGIONALI': 'FONDI_REGIONALI', 'TOTALE_PNRR+LEA+FOI': 'TOTALE_PNRR+LEA+FOI', });
lyr_02OVEROdC_13.set('fieldAliases', {'fid': 'fid', 'MISURA': 'MISURA', 'DATA_FINE_LAVORI_PREVISTA': 'DATA_FINE_LAVORI_PREVISTA', 'CUP': 'CUP', 'OVERBOOKING': 'OVERBOOKING', 'CODICE_ISTAT': 'CODICE_ISTAT', 'COMUNE': 'COMUNE', 'INDIRIZZO': 'INDIRIZZO', 'GEOLOCALIZZAZIONE': 'GEOLOCALIZZAZIONE', 'FONDI_PNRR_2022': 'FONDI_PNRR_2022', 'FONDI_LEA_2022': 'FONDI_LEA_2022', 'RIMODULAZIONE_PNRR_2025': 'RIMODULAZIONE_PNRR_2025', 'FONDI_FOI': 'FONDI_FOI', 'FONDI_AZIENDALI': 'FONDI_AZIENDALI', 'FONDI_REGIONALI': 'FONDI_REGIONALI', 'TOTALE_PNRR+LEA+FOI': 'TOTALE_PNRR+LEA+FOI', });
lyr_02OVERCoT_14.set('fieldAliases', {'fid': 'fid', 'MISURA': 'MISURA', 'DATA_FINE_LAVORI_PREVISTA': 'DATA_FINE_LAVORI_PREVISTA', 'CUP': 'CUP', 'OVERBOOKING': 'OVERBOOKING', 'CODICE_ISTAT': 'CODICE_ISTAT', 'COMUNE': 'COMUNE', 'INDIRIZZO': 'INDIRIZZO', 'GEOLOCALIZZAZIONE': 'GEOLOCALIZZAZIONE', 'FONDI_PNRR_2022': 'FONDI_PNRR_2022', 'FONDI_LEA_2022': 'FONDI_LEA_2022', 'RIMODULAZIONE_PNRR_2025': 'RIMODULAZIONE_PNRR_2025', 'FONDI_FOI': 'FONDI_FOI', 'FONDI_AZIENDALI': 'FONDI_AZIENDALI', 'FONDI_REGIONALI': 'FONDI_REGIONALI', 'TOTALE_PNRR+LEA+FOI': 'TOTALE_PNRR+LEA+FOI', });
lyr_02OVERCdC_15.set('fieldAliases', {'fid': 'fid', 'MISURA': 'MISURA', 'DATA_FINE_LAVORI_PREVISTA': 'DATA_FINE_LAVORI_PREVISTA', 'CUP': 'CUP', 'OVERBOOKING': 'OVERBOOKING', 'CODICE_ISTAT': 'CODICE_ISTAT', 'COMUNE': 'COMUNE', 'INDIRIZZO': 'INDIRIZZO', 'GEOLOCALIZZAZIONE': 'GEOLOCALIZZAZIONE', 'FONDI_PNRR_2022': 'FONDI_PNRR_2022', 'FONDI_LEA_2022': 'FONDI_LEA_2022', 'RIMODULAZIONE_PNRR_2025': 'RIMODULAZIONE_PNRR_2025', 'FONDI_FOI': 'FONDI_FOI', 'FONDI_AZIENDALI': 'FONDI_AZIENDALI', 'FONDI_REGIONALI': 'FONDI_REGIONALI', 'TOTALE_PNRR+LEA+FOI': 'TOTALE_PNRR+LEA+FOI', });
lyr_03Comuni_16.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', });
lyr_03Distretti_17.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', });
lyr_03ASL_18.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', });
lyr_1001ComuniIndiceFragilit_19.set('fieldAliases', {'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'IF_Grezzo': 'IF_Grezzo', 'IF_Norm': 'IF_Norm', 'IISF_Norm': 'IISF_Norm', 'IISF': 'IISF', 'FRAGILI_OU': 'FRAGILI_OU', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', 'TAB_AnalisiFragilita_POPOLAZIONE': 'TAB_AnalisiFragilita_POPOLAZIONE', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE', });
lyr_1003ComuniAccessibili_20.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'IF_Grezzo': 'IF_Grezzo', 'IF_Norm': 'IF_Norm', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', 'TAB_AnalisiFragilita_POPOLAZIONE': 'TAB_AnalisiFragilita_POPOLAZIONE', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE', '10.01.Centroidi_OutBuffer': '10.01.Centroidi_OutBuffer', 'Num_CdC': 'Num_CdC', 'Num_OdC': 'Num_OdC', });
lyr_1003ComuniIsolatiIndiceFragilit_21.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'IF_Grezzo': 'IF_Grezzo', 'IF_Norm': 'IF_Norm', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', 'TAB_AnalisiFragilita_POPOLAZIONE': 'TAB_AnalisiFragilita_POPOLAZIONE', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE', '10.01.Centroidi_OutBuffer': '10.01.Centroidi_OutBuffer', 'Num_CdC': 'Num_CdC', 'Num_OdC': 'Num_OdC', });
lyr_1004ComuniInaccessibilitSpazialeFragili_22.set('fieldAliases', {'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'IF_Grezzo': 'IF_Grezzo', 'IF_Norm': 'IF_Norm', 'IISF_Norm': 'IISF_Norm', 'IISF': 'IISF', 'FRAGILI_OU': 'FRAGILI_OU', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', 'TAB_AnalisiFragilita_POPOLAZIONE': 'TAB_AnalisiFragilita_POPOLAZIONE', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE', });
lyr_1000DistrettiBordi_23.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', });
lyr_1100DistrettiDotazioneDistrettuale_24.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', 'Num_OdC': 'Num_OdC', 'Num_CdC': 'Num_CdC', 'Offerta_Pesata': 'Offerta_Pesata', 'Indice_Dotazione_Distrettuale': 'Indice_Dotazione_Distrettuale', 'IDD_Normalizzato': 'IDD_Normalizzato', 'IISF_DR': 'IISF_DR', 'TAB_PopolazioneFragile_Distretto_sum': 'TAB_PopolazioneFragile_Distretto_sum', });
lyr_1201Comuni_25.set('fieldAliases', {'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'COD_COMUNE': 'COD_COMUNE', 'COMUNE': 'COMUNE', 'IF_Grezzo': 'IF_Grezzo', 'IF_Norm': 'IF_Norm', 'IISF_Norm': 'IISF_Norm', 'IISF': 'IISF', 'FRAGILI_OU': 'FRAGILI_OU', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', 'TAB_AnalisiFragilita_POPOLAZIONE': 'TAB_AnalisiFragilita_POPOLAZIONE', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE', '11.00.Distretti \ Dotazione Distrettuale_IDD_Normalizzato': '11.00.Distretti \ Dotazione Distrettuale_IDD_Normalizzato', });
lyr_1202Distretti_26.set('fieldAliases', {'fid': 'fid', 'COD_REG': 'COD_REG', 'COD_PROV': 'COD_PROV', 'DISTRETTO_SANITARIO': 'DISTRETTO_SANITARIO', 'AZIENDA_SANITARIA': 'AZIENDA_SANITARIA', 'Num_OdC': 'Num_OdC', 'Num_CdC': 'Num_CdC', 'Offerta_Pesata': 'Offerta_Pesata', 'Indice_Dotazione_Distrettuale': 'Indice_Dotazione_Distrettuale', 'IDD_Normalizzato': 'IDD_Normalizzato', 'IISF_DR': 'IISF_DR', 'TAB_PopolazioneFragile_Distretto_sum': 'TAB_PopolazioneFragile_Distretto_sum', 'TAB_PopolazioneFragile_OutBuffer_sum': 'TAB_PopolazioneFragile_OutBuffer_sum', });
lyr_0001Comuni_1.set('fieldImages', {'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'IF_Grezzo': '', 'IF_Norm': '', 'IISF_Norm': '', 'IISF': '', 'FRAGILI_OU': '', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', });
lyr_0001Distretti_2.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', });
lyr_0001ASL_3.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', });
lyr_0002Comuni_4.set('fieldImages', {'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'IF_Grezzo': 'TextEdit', 'IF_Norm': 'TextEdit', 'IISF_Norm': 'TextEdit', 'IISF': 'TextEdit', 'FRAGILI_OU': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', });
lyr_0002Distretti_5.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', });
lyr_0002ASL_6.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', });
lyr_0103PNRROdCSUMDistretti_7.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', 'Num_OdC': 'TextEdit', 'Num_CdC': 'TextEdit', 'Num_CoT': 'TextEdit', });
lyr_0103PNRROdCStrutture_8.set('fieldImages', {'fid': 'TextEdit', 'MISURA': 'TextEdit', 'DATA_FINE_LAVORI_PREVISTA': 'TextEdit', 'CUP': 'TextEdit', 'OVERBOOKING': 'TextEdit', 'CODICE_ISTAT': 'TextEdit', 'COMUNE': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'GEOLOCALIZZAZIONE': 'TextEdit', 'FONDI_PNRR_2022': 'TextEdit', 'FONDI_LEA_2022': 'TextEdit', 'RIMODULAZIONE_PNRR_2025': 'TextEdit', 'FONDI_FOI': 'TextEdit', 'FONDI_AZIENDALI': 'TextEdit', 'FONDI_REGIONALI': 'TextEdit', 'TOTALE_PNRR+LEA+FOI': 'TextEdit', });
lyr_0102PNRRCoTSUMDistretti_9.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', 'Num_OdC': 'TextEdit', 'Num_CdC': 'TextEdit', 'Num_CoT': 'TextEdit', });
lyr_0102PNRRCoTStrutture_10.set('fieldImages', {'fid': 'TextEdit', 'MISURA': 'TextEdit', 'DATA_FINE_LAVORI_PREVISTA': 'TextEdit', 'CUP': 'TextEdit', 'OVERBOOKING': 'TextEdit', 'CODICE_ISTAT': 'TextEdit', 'COMUNE': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'GEOLOCALIZZAZIONE': 'TextEdit', 'FONDI_PNRR_2022': 'TextEdit', 'FONDI_LEA_2022': 'TextEdit', 'RIMODULAZIONE_PNRR_2025': 'TextEdit', 'FONDI_FOI': 'TextEdit', 'FONDI_AZIENDALI': 'TextEdit', 'FONDI_REGIONALI': 'TextEdit', 'TOTALE_PNRR+LEA+FOI': 'TextEdit', });
lyr_0102PNRRCdCSUMDistretti_11.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', 'Num_OdC': 'TextEdit', 'Num_CdC': 'TextEdit', 'Num_CoT': 'TextEdit', });
lyr_0101PNRRCdCStrutture_12.set('fieldImages', {'fid': 'TextEdit', 'MISURA': 'TextEdit', 'DATA_FINE_LAVORI_PREVISTA': 'TextEdit', 'CUP': 'TextEdit', 'OVERBOOKING': 'TextEdit', 'CODICE_ISTAT': 'TextEdit', 'COMUNE': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'GEOLOCALIZZAZIONE': 'TextEdit', 'FONDI_PNRR_2022': 'TextEdit', 'FONDI_LEA_2022': 'TextEdit', 'RIMODULAZIONE_PNRR_2025': 'TextEdit', 'FONDI_FOI': 'TextEdit', 'FONDI_AZIENDALI': 'TextEdit', 'FONDI_REGIONALI': 'TextEdit', 'TOTALE_PNRR+LEA+FOI': 'TextEdit', });
lyr_02OVEROdC_13.set('fieldImages', {'fid': 'TextEdit', 'MISURA': 'TextEdit', 'DATA_FINE_LAVORI_PREVISTA': 'TextEdit', 'CUP': 'TextEdit', 'OVERBOOKING': 'TextEdit', 'CODICE_ISTAT': 'TextEdit', 'COMUNE': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'GEOLOCALIZZAZIONE': 'TextEdit', 'FONDI_PNRR_2022': 'TextEdit', 'FONDI_LEA_2022': 'TextEdit', 'RIMODULAZIONE_PNRR_2025': 'TextEdit', 'FONDI_FOI': 'TextEdit', 'FONDI_AZIENDALI': 'TextEdit', 'FONDI_REGIONALI': 'TextEdit', 'TOTALE_PNRR+LEA+FOI': 'TextEdit', });
lyr_02OVERCoT_14.set('fieldImages', {'fid': 'TextEdit', 'MISURA': 'TextEdit', 'DATA_FINE_LAVORI_PREVISTA': 'TextEdit', 'CUP': 'TextEdit', 'OVERBOOKING': 'TextEdit', 'CODICE_ISTAT': 'TextEdit', 'COMUNE': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'GEOLOCALIZZAZIONE': 'TextEdit', 'FONDI_PNRR_2022': 'TextEdit', 'FONDI_LEA_2022': 'TextEdit', 'RIMODULAZIONE_PNRR_2025': 'TextEdit', 'FONDI_FOI': 'TextEdit', 'FONDI_AZIENDALI': 'TextEdit', 'FONDI_REGIONALI': 'TextEdit', 'TOTALE_PNRR+LEA+FOI': 'TextEdit', });
lyr_02OVERCdC_15.set('fieldImages', {'fid': 'TextEdit', 'MISURA': 'TextEdit', 'DATA_FINE_LAVORI_PREVISTA': 'TextEdit', 'CUP': 'TextEdit', 'OVERBOOKING': 'TextEdit', 'CODICE_ISTAT': 'TextEdit', 'COMUNE': 'TextEdit', 'INDIRIZZO': 'TextEdit', 'GEOLOCALIZZAZIONE': 'TextEdit', 'FONDI_PNRR_2022': 'TextEdit', 'FONDI_LEA_2022': 'TextEdit', 'RIMODULAZIONE_PNRR_2025': 'TextEdit', 'FONDI_FOI': 'TextEdit', 'FONDI_AZIENDALI': 'TextEdit', 'FONDI_REGIONALI': 'TextEdit', 'TOTALE_PNRR+LEA+FOI': 'TextEdit', });
lyr_03Comuni_16.set('fieldImages', {'fid': '', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', });
lyr_03Distretti_17.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', });
lyr_03ASL_18.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', });
lyr_1001ComuniIndiceFragilit_19.set('fieldImages', {'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'IF_Grezzo': 'TextEdit', 'IF_Norm': 'TextEdit', 'IISF_Norm': 'TextEdit', 'IISF': 'TextEdit', 'FRAGILI_OU': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', 'TAB_AnalisiFragilita_POPOLAZIONE': 'Range', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'Range', });
lyr_1003ComuniAccessibili_20.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'IF_Grezzo': 'TextEdit', 'IF_Norm': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', 'TAB_AnalisiFragilita_POPOLAZIONE': 'Range', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'Range', '10.01.Centroidi_OutBuffer': 'CheckBox', 'Num_CdC': 'TextEdit', 'Num_OdC': 'TextEdit', });
lyr_1003ComuniIsolatiIndiceFragilit_21.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'IF_Grezzo': 'TextEdit', 'IF_Norm': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', 'TAB_AnalisiFragilita_POPOLAZIONE': 'Range', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'Range', '10.01.Centroidi_OutBuffer': 'CheckBox', 'Num_CdC': 'TextEdit', 'Num_OdC': 'TextEdit', });
lyr_1004ComuniInaccessibilitSpazialeFragili_22.set('fieldImages', {'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'IF_Grezzo': 'TextEdit', 'IF_Norm': 'TextEdit', 'IISF_Norm': 'TextEdit', 'IISF': 'TextEdit', 'FRAGILI_OU': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', 'TAB_AnalisiFragilita_POPOLAZIONE': 'Range', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'Range', });
lyr_1000DistrettiBordi_23.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', });
lyr_1100DistrettiDotazioneDistrettuale_24.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', 'Num_OdC': 'TextEdit', 'Num_CdC': 'TextEdit', 'Offerta_Pesata': 'TextEdit', 'Indice_Dotazione_Distrettuale': 'TextEdit', 'IDD_Normalizzato': 'TextEdit', 'IISF_DR': 'TextEdit', 'TAB_PopolazioneFragile_Distretto_sum': 'TextEdit', });
lyr_1201Comuni_25.set('fieldImages', {'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'COD_COMUNE': 'TextEdit', 'COMUNE': 'TextEdit', 'IF_Grezzo': 'TextEdit', 'IF_Norm': 'TextEdit', 'IISF_Norm': 'TextEdit', 'IISF': 'TextEdit', 'FRAGILI_OU': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', 'TAB_AnalisiFragilita_POPOLAZIONE': 'Range', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'Range', '11.00.Distretti \ Dotazione Distrettuale_IDD_Normalizzato': 'TextEdit', });
lyr_1202Distretti_26.set('fieldImages', {'fid': 'TextEdit', 'COD_REG': 'TextEdit', 'COD_PROV': 'TextEdit', 'DISTRETTO_SANITARIO': 'TextEdit', 'AZIENDA_SANITARIA': 'TextEdit', 'Num_OdC': 'TextEdit', 'Num_CdC': 'TextEdit', 'Offerta_Pesata': 'TextEdit', 'Indice_Dotazione_Distrettuale': 'TextEdit', 'IDD_Normalizzato': 'TextEdit', 'IISF_DR': 'TextEdit', 'TAB_PopolazioneFragile_Distretto_sum': 'TextEdit', 'TAB_PopolazioneFragile_OutBuffer_sum': 'TextEdit', });
lyr_0001Comuni_1.set('fieldLabels', {'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_COMUNE': 'no label', 'COMUNE': 'no label', 'IF_Grezzo': 'no label', 'IF_Norm': 'no label', 'IISF_Norm': 'no label', 'IISF': 'no label', 'FRAGILI_OU': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', });
lyr_0001Distretti_2.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_COMUNE': 'no label', 'COMUNE': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', });
lyr_0001ASL_3.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_COMUNE': 'no label', 'COMUNE': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', });
lyr_0002Comuni_4.set('fieldLabels', {'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_COMUNE': 'no label', 'COMUNE': 'no label', 'IF_Grezzo': 'no label', 'IF_Norm': 'no label', 'IISF_Norm': 'no label', 'IISF': 'no label', 'FRAGILI_OU': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', });
lyr_0002Distretti_5.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_COMUNE': 'no label', 'COMUNE': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', });
lyr_0002ASL_6.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_COMUNE': 'no label', 'COMUNE': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', });
lyr_0103PNRROdCSUMDistretti_7.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', 'Num_OdC': 'no label', 'Num_CdC': 'no label', 'Num_CoT': 'no label', });
lyr_0103PNRROdCStrutture_8.set('fieldLabels', {'fid': 'hidden field', 'MISURA': 'inline label - visible with data', 'DATA_FINE_LAVORI_PREVISTA': 'inline label - visible with data', 'CUP': 'inline label - visible with data', 'OVERBOOKING': 'inline label - visible with data', 'CODICE_ISTAT': 'hidden field', 'COMUNE': 'inline label - visible with data', 'INDIRIZZO': 'hidden field', 'GEOLOCALIZZAZIONE': 'hidden field', 'FONDI_PNRR_2022': 'inline label - visible with data', 'FONDI_LEA_2022': 'inline label - visible with data', 'RIMODULAZIONE_PNRR_2025': 'inline label - visible with data', 'FONDI_FOI': 'inline label - visible with data', 'FONDI_AZIENDALI': 'inline label - visible with data', 'FONDI_REGIONALI': 'inline label - visible with data', 'TOTALE_PNRR+LEA+FOI': 'inline label - visible with data', });
lyr_0102PNRRCoTSUMDistretti_9.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', 'Num_OdC': 'no label', 'Num_CdC': 'no label', 'Num_CoT': 'no label', });
lyr_0102PNRRCoTStrutture_10.set('fieldLabels', {'fid': 'hidden field', 'MISURA': 'inline label - visible with data', 'DATA_FINE_LAVORI_PREVISTA': 'inline label - visible with data', 'CUP': 'inline label - visible with data', 'OVERBOOKING': 'inline label - visible with data', 'CODICE_ISTAT': 'hidden field', 'COMUNE': 'inline label - visible with data', 'INDIRIZZO': 'hidden field', 'GEOLOCALIZZAZIONE': 'hidden field', 'FONDI_PNRR_2022': 'inline label - visible with data', 'FONDI_LEA_2022': 'inline label - visible with data', 'RIMODULAZIONE_PNRR_2025': 'inline label - visible with data', 'FONDI_FOI': 'inline label - visible with data', 'FONDI_AZIENDALI': 'inline label - visible with data', 'FONDI_REGIONALI': 'inline label - visible with data', 'TOTALE_PNRR+LEA+FOI': 'inline label - visible with data', });
lyr_0102PNRRCdCSUMDistretti_11.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', 'Num_OdC': 'no label', 'Num_CdC': 'no label', 'Num_CoT': 'no label', });
lyr_0101PNRRCdCStrutture_12.set('fieldLabels', {'fid': 'hidden field', 'MISURA': 'inline label - visible with data', 'DATA_FINE_LAVORI_PREVISTA': 'inline label - visible with data', 'CUP': 'inline label - visible with data', 'OVERBOOKING': 'inline label - visible with data', 'CODICE_ISTAT': 'hidden field', 'COMUNE': 'inline label - visible with data', 'INDIRIZZO': 'hidden field', 'GEOLOCALIZZAZIONE': 'hidden field', 'FONDI_PNRR_2022': 'inline label - visible with data', 'FONDI_LEA_2022': 'inline label - visible with data', 'RIMODULAZIONE_PNRR_2025': 'inline label - visible with data', 'FONDI_FOI': 'inline label - visible with data', 'FONDI_AZIENDALI': 'inline label - visible with data', 'FONDI_REGIONALI': 'inline label - visible with data', 'TOTALE_PNRR+LEA+FOI': 'inline label - visible with data', });
lyr_02OVEROdC_13.set('fieldLabels', {'fid': 'hidden field', 'MISURA': 'inline label - visible with data', 'DATA_FINE_LAVORI_PREVISTA': 'inline label - visible with data', 'CUP': 'inline label - visible with data', 'OVERBOOKING': 'inline label - visible with data', 'CODICE_ISTAT': 'hidden field', 'COMUNE': 'inline label - visible with data', 'INDIRIZZO': 'hidden field', 'GEOLOCALIZZAZIONE': 'hidden field', 'FONDI_PNRR_2022': 'inline label - visible with data', 'FONDI_LEA_2022': 'inline label - visible with data', 'RIMODULAZIONE_PNRR_2025': 'inline label - visible with data', 'FONDI_FOI': 'inline label - visible with data', 'FONDI_AZIENDALI': 'inline label - visible with data', 'FONDI_REGIONALI': 'inline label - visible with data', 'TOTALE_PNRR+LEA+FOI': 'inline label - visible with data', });
lyr_02OVERCoT_14.set('fieldLabels', {'fid': 'hidden field', 'MISURA': 'inline label - visible with data', 'DATA_FINE_LAVORI_PREVISTA': 'inline label - visible with data', 'CUP': 'inline label - visible with data', 'OVERBOOKING': 'inline label - visible with data', 'CODICE_ISTAT': 'hidden field', 'COMUNE': 'inline label - visible with data', 'INDIRIZZO': 'hidden field', 'GEOLOCALIZZAZIONE': 'hidden field', 'FONDI_PNRR_2022': 'inline label - visible with data', 'FONDI_LEA_2022': 'inline label - visible with data', 'RIMODULAZIONE_PNRR_2025': 'inline label - visible with data', 'FONDI_FOI': 'inline label - visible with data', 'FONDI_AZIENDALI': 'inline label - visible with data', 'FONDI_REGIONALI': 'inline label - visible with data', 'TOTALE_PNRR+LEA+FOI': 'inline label - visible with data', });
lyr_02OVERCdC_15.set('fieldLabels', {'fid': 'hidden field', 'MISURA': 'inline label - visible with data', 'DATA_FINE_LAVORI_PREVISTA': 'inline label - visible with data', 'CUP': 'inline label - visible with data', 'OVERBOOKING': 'inline label - visible with data', 'CODICE_ISTAT': 'hidden field', 'COMUNE': 'inline label - visible with data', 'INDIRIZZO': 'hidden field', 'GEOLOCALIZZAZIONE': 'hidden field', 'FONDI_PNRR_2022': 'inline label - visible with data', 'FONDI_LEA_2022': 'inline label - visible with data', 'RIMODULAZIONE_PNRR_2025': 'inline label - visible with data', 'FONDI_FOI': 'inline label - visible with data', 'FONDI_AZIENDALI': 'inline label - visible with data', 'FONDI_REGIONALI': 'inline label - visible with data', 'TOTALE_PNRR+LEA+FOI': 'inline label - visible with data', });
lyr_03Comuni_16.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_COMUNE': 'no label', 'COMUNE': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', });
lyr_03Distretti_17.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_COMUNE': 'no label', 'COMUNE': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', });
lyr_03ASL_18.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_COMUNE': 'no label', 'COMUNE': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', });
lyr_1001ComuniIndiceFragilit_19.set('fieldLabels', {'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'COD_COMUNE': 'hidden field', 'COMUNE': 'inline label - visible with data', 'IF_Grezzo': 'hidden field', 'IF_Norm': 'inline label - visible with data', 'IISF_Norm': 'hidden field', 'IISF': 'hidden field', 'FRAGILI_OU': 'hidden field', 'DISTRETTO_SANITARIO': 'hidden field', 'AZIENDA_SANITARIA': 'hidden field', 'TAB_AnalisiFragilita_POPOLAZIONE': 'inline label - visible with data', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'inline label - visible with data', });
lyr_1003ComuniAccessibili_20.set('fieldLabels', {'fid': 'hidden field', 'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'COD_COMUNE': 'hidden field', 'COMUNE': 'inline label - visible with data', 'IF_Grezzo': 'no label', 'IF_Norm': 'inline label - visible with data', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', 'TAB_AnalisiFragilita_POPOLAZIONE': 'inline label - visible with data', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'inline label - visible with data', '10.01.Centroidi_OutBuffer': 'hidden field', 'Num_CdC': 'inline label - visible with data', 'Num_OdC': 'inline label - visible with data', });
lyr_1003ComuniIsolatiIndiceFragilit_21.set('fieldLabels', {'fid': 'hidden field', 'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'COD_COMUNE': 'hidden field', 'COMUNE': 'inline label - visible with data', 'IF_Grezzo': 'no label', 'IF_Norm': 'inline label - visible with data', 'DISTRETTO_SANITARIO': 'hidden field', 'AZIENDA_SANITARIA': 'hidden field', 'TAB_AnalisiFragilita_POPOLAZIONE': 'inline label - visible with data', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'inline label - visible with data', '10.01.Centroidi_OutBuffer': 'no label', 'Num_CdC': 'inline label - visible with data', 'Num_OdC': 'inline label - always visible', });
lyr_1004ComuniInaccessibilitSpazialeFragili_22.set('fieldLabels', {'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'COD_COMUNE': 'hidden field', 'COMUNE': 'inline label - visible with data', 'IF_Grezzo': 'hidden field', 'IF_Norm': 'hidden field', 'IISF_Norm': 'inline label - visible with data', 'IISF': 'hidden field', 'FRAGILI_OU': 'hidden field', 'DISTRETTO_SANITARIO': 'hidden field', 'AZIENDA_SANITARIA': 'hidden field', 'TAB_AnalisiFragilita_POPOLAZIONE': 'inline label - visible with data', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'inline label - visible with data', });
lyr_1000DistrettiBordi_23.set('fieldLabels', {'fid': 'no label', 'COD_REG': 'no label', 'COD_PROV': 'no label', 'COD_COMUNE': 'no label', 'COMUNE': 'no label', 'DISTRETTO_SANITARIO': 'no label', 'AZIENDA_SANITARIA': 'no label', });
lyr_1100DistrettiDotazioneDistrettuale_24.set('fieldLabels', {'fid': 'hidden field', 'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'DISTRETTO_SANITARIO': 'inline label - visible with data', 'AZIENDA_SANITARIA': 'inline label - visible with data', 'Num_OdC': 'inline label - visible with data', 'Num_CdC': 'inline label - visible with data', 'Offerta_Pesata': 'inline label - visible with data', 'Indice_Dotazione_Distrettuale': 'hidden field', 'IDD_Normalizzato': 'inline label - always visible', 'IISF_DR': 'hidden field', 'TAB_PopolazioneFragile_Distretto_sum': 'inline label - visible with data', });
lyr_1201Comuni_25.set('fieldLabels', {'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'COD_COMUNE': 'hidden field', 'COMUNE': 'inline label - visible with data', 'IF_Grezzo': 'hidden field', 'IF_Norm': 'inline label - visible with data', 'IISF_Norm': 'inline label - visible with data', 'IISF': 'hidden field', 'FRAGILI_OU': 'hidden field', 'DISTRETTO_SANITARIO': 'inline label - visible with data', 'AZIENDA_SANITARIA': 'inline label - visible with data', 'TAB_AnalisiFragilita_POPOLAZIONE': 'inline label - visible with data', 'TAB_AnalisiFragilita_POPOLAZIONE_FRAGILE': 'inline label - visible with data', '11.00.Distretti \ Dotazione Distrettuale_IDD_Normalizzato': 'no label', });
lyr_1202Distretti_26.set('fieldLabels', {'fid': 'hidden field', 'COD_REG': 'hidden field', 'COD_PROV': 'hidden field', 'DISTRETTO_SANITARIO': 'inline label - visible with data', 'AZIENDA_SANITARIA': 'inline label - visible with data', 'Num_OdC': 'inline label - visible with data', 'Num_CdC': 'inline label - visible with data', 'Offerta_Pesata': 'inline label - visible with data', 'Indice_Dotazione_Distrettuale': 'hidden field', 'IDD_Normalizzato': 'inline label - visible with data', 'IISF_DR': 'inline label - visible with data', 'TAB_PopolazioneFragile_Distretto_sum': 'inline label - visible with data', 'TAB_PopolazioneFragile_OutBuffer_sum': 'inline label - visible with data', });
lyr_1202Distretti_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'multiply';
});