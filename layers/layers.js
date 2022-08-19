var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> طرق'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> سكني'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__3, 
                style: style__3,
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> مباع'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__4, 
                style: style__4,
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> الخدمات'
            });
var format_POINTS_5 = new ol.format.GeoJSON();
var features_POINTS_5 = format_POINTS_5.readFeatures(json_POINTS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POINTS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POINTS_5.addFeatures(features_POINTS_5);
var lyr_POINTS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POINTS_5, 
                style: style_POINTS_5,
                interactive: true,
                title: '<img src="styles/legend/POINTS_5.png" /> POINTS'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__6, 
                style: style__6,
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> تجاري'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr_POINTS_5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr__1,lyr__2,lyr__3,lyr__4,lyr_POINTS_5,lyr__6];
lyr__1.set('fieldAliases', {'عرض_ا': 'سعة الشارع', });
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'RefName': 'RefName', 'AREA': 'AREA', 'رقم_ن': 'رقم_ن', });
lyr__3.set('fieldAliases', {'id': 'id', });
lyr__4.set('fieldAliases', {'Id': 'Id', 'تنظيم': 'تنظيم', });
lyr_POINTS_5.set('fieldAliases', {'X_COORDINA': 'X_COORDINA', 'Y_COORDINA': 'Y_COORDINA', 'icon_url': 'icon_url', });
lyr__6.set('fieldAliases', {'مؤقت': 'مؤقت', 'المسا': 'المسا', 'مباع': 'مباع', 'المال': 'المالك', 'التنظ': 'التنظيم', });
lyr__1.set('fieldImages', {'عرض_ا': 'TextEdit', });
lyr__2.set('fieldImages', {'OBJECTID': 'TextEdit', 'RefName': 'TextEdit', 'AREA': 'TextEdit', 'رقم_ن': 'Range', });
lyr__3.set('fieldImages', {'id': 'TextEdit', });
lyr__4.set('fieldImages', {'Id': 'TextEdit', 'تنظيم': 'TextEdit', });
lyr_POINTS_5.set('fieldImages', {'X_COORDINA': 'TextEdit', 'Y_COORDINA': 'TextEdit', 'icon_url': '', });
lyr__6.set('fieldImages', {'مؤقت': 'TextEdit', 'المسا': 'TextEdit', 'مباع': 'TextEdit', 'المال': 'TextEdit', 'التنظ': 'TextEdit', });
lyr__1.set('fieldLabels', {'عرض_ا': 'inline label', });
lyr__2.set('fieldLabels', {'OBJECTID': 'inline label', 'RefName': 'inline label', 'AREA': 'inline label', 'رقم_ن': 'inline label', });
lyr__3.set('fieldLabels', {'id': 'inline label', });
lyr__4.set('fieldLabels', {'Id': 'inline label', 'تنظيم': 'inline label', });
lyr_POINTS_5.set('fieldLabels', {'X_COORDINA': 'inline label', 'Y_COORDINA': 'inline label', 'icon_url': 'inline label', });
lyr__6.set('fieldLabels', {'مؤقت': 'inline label', 'المسا': 'inline label', 'مباع': 'inline label', 'المال': 'inline label', 'التنظ': 'inline label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});