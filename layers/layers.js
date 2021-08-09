var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PEAINDEC_3 = new ol.format.GeoJSON();
var features_PEAINDEC_3 = format_PEAINDEC_3.readFeatures(json_PEAINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_3.addFeatures(features_PEAINDEC_3);
var lyr_PEAINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_3, 
                style: style_PEAINDEC_3,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_3_0.png" /> 2.000 - 12.000<br />\
    <img src="styles/legend/PEAINDEC_3_1.png" /> 12.001 - 20.500<br />\
    <img src="styles/legend/PEAINDEC_3_2.png" /> 20.501 - 60.000<br />\
    <img src="styles/legend/PEAINDEC_3_3.png" /> 60.001 o más<br />'
        });
var format_ViviendasenreasruralesINDEC_4 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_4 = format_ViviendasenreasruralesINDEC_4.readFeatures(json_ViviendasenreasruralesINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_4.addFeatures(features_ViviendasenreasruralesINDEC_4);
var lyr_ViviendasenreasruralesINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_4, 
                style: style_ViviendasenreasruralesINDEC_4,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_0.png" /> 600 - 1.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_1.png" /> 1.001 - 1.500<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_2.png" /> 1.501 - 2.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_3.png" /> 2.001 - 3.750<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_4_4.png" /> 3.750 o más<br />'
        });
var format_PoblacinpordeptoINDEC_5 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_5 = format_PoblacinpordeptoINDEC_5.readFeatures(json_PoblacinpordeptoINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_5.addFeatures(features_PoblacinpordeptoINDEC_5);
var lyr_PoblacinpordeptoINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_5, 
                style: style_PoblacinpordeptoINDEC_5,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_5_0.png" /> 4.000 - 16.000<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_5_1.png" /> 16.001 - 34.000<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_5_2.png" /> 34.001 - 96.950<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_5_3.png" /> 96.951 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 1.500 - 7.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 7.001 - 12.500<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 12.501 - 20.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 20.001 - 75.000<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 2.000 - 7.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 7.001 - 15.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 15.001 - 30.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 30.001 o más<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 2.250 - 10.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 10.001 - 20.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 20.001 - 32.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 32.501 - 100.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_4.png" /> 100.001 o más<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 22.500 - 60.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 60.001 - 110.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 110.001 - 215.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 215.001 - 320.600<br />'
        });
var format_HectreasdetabacoINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdetabacoINDEC_10 = format_HectreasdetabacoINDEC_10.readFeatures(json_HectreasdetabacoINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetabacoINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetabacoINDEC_10.addFeatures(features_HectreasdetabacoINDEC_10);
var lyr_HectreasdetabacoINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetabacoINDEC_10, 
                style: style_HectreasdetabacoINDEC_10,
                interactive: true,
    title: 'Hectáreas de tabaco (INDEC)<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_10_1.png" /> 1 - 20<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_10_2.png" /> 21 - 89<br />\
    <img src="styles/legend/HectreasdetabacoINDEC_10_3.png" /> 90 o más<br />'
        });
var format_HectreasdehortalizasMAGyP_11 = new ol.format.GeoJSON();
var features_HectreasdehortalizasMAGyP_11 = format_HectreasdehortalizasMAGyP_11.readFeatures(json_HectreasdehortalizasMAGyP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasMAGyP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasMAGyP_11.addFeatures(features_HectreasdehortalizasMAGyP_11);
var lyr_HectreasdehortalizasMAGyP_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasMAGyP_11, 
                style: style_HectreasdehortalizasMAGyP_11,
                interactive: true,
    title: 'Hectáreas de hortalizas (MAGyP)<br />\
    <img src="styles/legend/HectreasdehortalizasMAGyP_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasMAGyP_11_1.png" /> 1 - 52<br />\
    <img src="styles/legend/HectreasdehortalizasMAGyP_11_2.png" /> 53 - 170<br />\
    <img src="styles/legend/HectreasdehortalizasMAGyP_11_3.png" /> 171 - 1.000<br />\
    <img src="styles/legend/HectreasdehortalizasMAGyP_11_4.png" /> 1.001 o más<br />'
        });
var format_HectreasdealgodnMAGyP_12 = new ol.format.GeoJSON();
var features_HectreasdealgodnMAGyP_12 = format_HectreasdealgodnMAGyP_12.readFeatures(json_HectreasdealgodnMAGyP_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdealgodnMAGyP_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdealgodnMAGyP_12.addFeatures(features_HectreasdealgodnMAGyP_12);
var lyr_HectreasdealgodnMAGyP_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdealgodnMAGyP_12, 
                style: style_HectreasdealgodnMAGyP_12,
                interactive: true,
    title: 'Hectáreas de algodón (MAGyP)<br />\
    <img src="styles/legend/HectreasdealgodnMAGyP_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdealgodnMAGyP_12_1.png" /> 100 - 3.500<br />\
    <img src="styles/legend/HectreasdealgodnMAGyP_12_2.png" /> 3.501 - 10.000<br />\
    <img src="styles/legend/HectreasdealgodnMAGyP_12_3.png" /> 10.001 - 22.000<br />\
    <img src="styles/legend/HectreasdealgodnMAGyP_12_4.png" /> 22.001 o más<br />'
        });
var format_HectreasdetrigoMAGyP_13 = new ol.format.GeoJSON();
var features_HectreasdetrigoMAGyP_13 = format_HectreasdetrigoMAGyP_13.readFeatures(json_HectreasdetrigoMAGyP_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdetrigoMAGyP_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdetrigoMAGyP_13.addFeatures(features_HectreasdetrigoMAGyP_13);
var lyr_HectreasdetrigoMAGyP_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdetrigoMAGyP_13, 
                style: style_HectreasdetrigoMAGyP_13,
                interactive: true,
    title: 'Hectáreas de trigo (MAGyP)<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_1.png" /> 150 - 4.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_2.png" /> 4.001 - 11.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_3.png" /> 11.001 - 20.000<br />\
    <img src="styles/legend/HectreasdetrigoMAGyP_13_4.png" /> 20.001 o más<br />'
        });
var format_HectreasdemazMAGyP_14 = new ol.format.GeoJSON();
var features_HectreasdemazMAGyP_14 = format_HectreasdemazMAGyP_14.readFeatures(json_HectreasdemazMAGyP_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdemazMAGyP_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdemazMAGyP_14.addFeatures(features_HectreasdemazMAGyP_14);
var lyr_HectreasdemazMAGyP_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdemazMAGyP_14, 
                style: style_HectreasdemazMAGyP_14,
                interactive: true,
    title: 'Hectáreas de maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_1.png" /> 100 - 6.500<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_2.png" /> 6.501 - 20.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_3.png" /> 20.001 - 40.000<br />\
    <img src="styles/legend/HectreasdemazMAGyP_14_4.png" /> 40.001 o más<br />'
        });
var format_HectreasdegirasolMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasdegirasolMAGyP_15 = format_HectreasdegirasolMAGyP_15.readFeatures(json_HectreasdegirasolMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdegirasolMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdegirasolMAGyP_15.addFeatures(features_HectreasdegirasolMAGyP_15);
var lyr_HectreasdegirasolMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdegirasolMAGyP_15, 
                style: style_HectreasdegirasolMAGyP_15,
                interactive: true,
    title: 'Hectáreas de girasol (MAGyP)<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_1.png" /> 200 - 10.000<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_2.png" /> 10.001 - 25.000<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_3.png" /> 25.001 - 37.000<br />\
    <img src="styles/legend/HectreasdegirasolMAGyP_15_4.png" /> 37.001 - 52.000<br />'
        });
var format_HectreasdesojaMAGyP_16 = new ol.format.GeoJSON();
var features_HectreasdesojaMAGyP_16 = format_HectreasdesojaMAGyP_16.readFeatures(json_HectreasdesojaMAGyP_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdesojaMAGyP_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdesojaMAGyP_16.addFeatures(features_HectreasdesojaMAGyP_16);
var lyr_HectreasdesojaMAGyP_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdesojaMAGyP_16, 
                style: style_HectreasdesojaMAGyP_16,
                interactive: true,
    title: 'Hectáreas de soja (MAGyP)<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_1.png" /> 200 - 12.500<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_2.png" /> 12.501 - 40.000<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_3.png" /> 40.001 - 56.250<br />\
    <img src="styles/legend/HectreasdesojaMAGyP_16_4.png" /> 56.251 o más<br />'
        });
var format_Capacitaciones2019tcnicas_17 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_17 = format_Capacitaciones2019tcnicas_17.readFeatures(json_Capacitaciones2019tcnicas_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_17.addFeatures(features_Capacitaciones2019tcnicas_17);
var lyr_Capacitaciones2019tcnicas_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_17, 
                style: style_Capacitaciones2019tcnicas_17,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_17.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Localidades_18 = new ol.format.GeoJSON();
var features_Localidades_18 = format_Localidades_18.readFeatures(json_Localidades_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_18.addFeatures(features_Localidades_18);
var lyr_Localidades_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_18, 
                style: style_Localidades_18,
                interactive: true,
                title: '<img src="styles/legend/Localidades_18.png" /> Localidades'
            });
var format_BERChaco_19 = new ol.format.GeoJSON();
var features_BERChaco_19 = format_BERChaco_19.readFeatures(json_BERChaco_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERChaco_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERChaco_19.addFeatures(features_BERChaco_19);
var lyr_BERChaco_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERChaco_19, 
                style: style_BERChaco_19,
                interactive: true,
                title: '<img src="styles/legend/BERChaco_19.png" /> BER Chaco'
            });
var format_BERChaco_20 = new ol.format.GeoJSON();
var features_BERChaco_20 = format_BERChaco_20.readFeatures(json_BERChaco_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERChaco_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERChaco_20.addFeatures(features_BERChaco_20);
var lyr_BERChaco_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERChaco_20, 
                style: style_BERChaco_20,
                interactive: true,
                title: '<img src="styles/legend/BERChaco_20.png" /> BER Chaco'
            });
var format_DelegacinResistencia_21 = new ol.format.GeoJSON();
var features_DelegacinResistencia_21 = format_DelegacinResistencia_21.readFeatures(json_DelegacinResistencia_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinResistencia_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinResistencia_21.addFeatures(features_DelegacinResistencia_21);
var lyr_DelegacinResistencia_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinResistencia_21, 
                style: style_DelegacinResistencia_21,
                interactive: true,
                title: '<img src="styles/legend/DelegacinResistencia_21.png" /> Delegación Resistencia'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PEAINDEC_3.setVisible(true);lyr_ViviendasenreasruralesINDEC_4.setVisible(true);lyr_PoblacinpordeptoINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdetabacoINDEC_10.setVisible(true);lyr_HectreasdehortalizasMAGyP_11.setVisible(true);lyr_HectreasdealgodnMAGyP_12.setVisible(true);lyr_HectreasdetrigoMAGyP_13.setVisible(true);lyr_HectreasdemazMAGyP_14.setVisible(true);lyr_HectreasdegirasolMAGyP_15.setVisible(true);lyr_HectreasdesojaMAGyP_16.setVisible(true);lyr_Capacitaciones2019tcnicas_17.setVisible(true);lyr_Localidades_18.setVisible(true);lyr_BERChaco_19.setVisible(true);lyr_BERChaco_20.setVisible(true);lyr_DelegacinResistencia_21.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PEAINDEC_3,lyr_ViviendasenreasruralesINDEC_4,lyr_PoblacinpordeptoINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdetabacoINDEC_10,lyr_HectreasdehortalizasMAGyP_11,lyr_HectreasdealgodnMAGyP_12,lyr_HectreasdetrigoMAGyP_13,lyr_HectreasdemazMAGyP_14,lyr_HectreasdegirasolMAGyP_15,lyr_HectreasdesojaMAGyP_16,lyr_Capacitaciones2019tcnicas_17,lyr_Localidades_18,lyr_BERChaco_19,lyr_BERChaco_20,lyr_DelegacinResistencia_21];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PEAINDEC_3.set('fieldAliases', {'PEA': 'PEA', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldAliases', {'Viv. Rur': 'Viv. Rur', });
lyr_PoblacinpordeptoINDEC_5.set('fieldAliases', {'Poblacion': 'Poblacion', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasdetabacoINDEC_10.set('fieldAliases', {'Tabaco': 'Tabaco', });
lyr_HectreasdehortalizasMAGyP_11.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdealgodnMAGyP_12.set('fieldAliases', {'Algodón': 'Algodón', });
lyr_HectreasdetrigoMAGyP_13.set('fieldAliases', {'Trigo': 'Trigo', });
lyr_HectreasdemazMAGyP_14.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreasdegirasolMAGyP_15.set('fieldAliases', {'Girasol': 'Girasol', });
lyr_HectreasdesojaMAGyP_16.set('fieldAliases', {'Soja': 'Soja', });
lyr_Capacitaciones2019tcnicas_17.set('fieldAliases', {'Localidad': 'Localidad', 'Tipo capa.': 'Tipo capa.', 'Tematica': 'Tematica', 'Fechas': 'Fechas', 'Asistentes': 'Asistentes', });
lyr_Localidades_18.set('fieldAliases', {'Localidad': 'Localidad', 'Personas': 'Personas', });
lyr_BERChaco_19.set('fieldAliases', {'Localidad': 'Localidad', 'Delegacion': 'Delegacion', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_BERChaco_20.set('fieldAliases', {'Localidad': 'Localidad', 'Delegacion': 'Delegacion', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_DelegacinResistencia_21.set('fieldAliases', {'Localidad': 'Localidad', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', 'CAD': 'CAD', });
lyr_Departamentos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PEAINDEC_3.set('fieldImages', {'PEA': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldImages', {'Viv. Rur': 'TextEdit', });
lyr_PoblacinpordeptoINDEC_5.set('fieldImages', {'Poblacion': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'Ovinos': '', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreasdetabacoINDEC_10.set('fieldImages', {'Tabaco': 'TextEdit', });
lyr_HectreasdehortalizasMAGyP_11.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdealgodnMAGyP_12.set('fieldImages', {'Algodón': 'TextEdit', });
lyr_HectreasdetrigoMAGyP_13.set('fieldImages', {'Trigo': '', });
lyr_HectreasdemazMAGyP_14.set('fieldImages', {'Maiz': '', });
lyr_HectreasdegirasolMAGyP_15.set('fieldImages', {'Girasol': '', });
lyr_HectreasdesojaMAGyP_16.set('fieldImages', {'Soja': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_17.set('fieldImages', {'Localidad': 'TextEdit', 'Tipo capa.': 'TextEdit', 'Tematica': 'TextEdit', 'Fechas': 'TextEdit', 'Asistentes': 'Range', });
lyr_Localidades_18.set('fieldImages', {'Localidad': 'TextEdit', 'Personas': 'TextEdit', });
lyr_BERChaco_19.set('fieldImages', {'Localidad': 'TextEdit', 'Delegacion': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_BERChaco_20.set('fieldImages', {'Localidad': 'TextEdit', 'Delegacion': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_DelegacinResistencia_21.set('fieldImages', {'Localidad': 'TextEdit', 'Direccion': 'TextEdit', 'Prest 2016': 'Range', 'Prest 2017': 'Range', 'Prest 2018': 'Range', 'Prest 2019': 'Range', 'Prest 2020': 'Range', 'CAD': 'TextEdit', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PEAINDEC_3.set('fieldLabels', {'PEA': 'inline label', });
lyr_ViviendasenreasruralesINDEC_4.set('fieldLabels', {'Viv. Rur': 'inline label', });
lyr_PoblacinpordeptoINDEC_5.set('fieldLabels', {'Poblacion': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreasdetabacoINDEC_10.set('fieldLabels', {'Tabaco': 'inline label', });
lyr_HectreasdehortalizasMAGyP_11.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdealgodnMAGyP_12.set('fieldLabels', {'Algodón': 'inline label', });
lyr_HectreasdetrigoMAGyP_13.set('fieldLabels', {'Trigo': 'inline label', });
lyr_HectreasdemazMAGyP_14.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreasdegirasolMAGyP_15.set('fieldLabels', {'Girasol': 'inline label', });
lyr_HectreasdesojaMAGyP_16.set('fieldLabels', {'Soja': 'inline label', });
lyr_Capacitaciones2019tcnicas_17.set('fieldLabels', {'Localidad': 'inline label', 'Tipo capa.': 'inline label', 'Tematica': 'inline label', 'Fechas': 'inline label', 'Asistentes': 'inline label', });
lyr_Localidades_18.set('fieldLabels', {'Localidad': 'inline label', 'Personas': 'inline label', });
lyr_BERChaco_19.set('fieldLabels', {'Localidad': 'inline label', 'Delegacion': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_BERChaco_20.set('fieldLabels', {'Localidad': 'inline label', 'Delegacion': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_DelegacinResistencia_21.set('fieldLabels', {'Localidad': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', 'CAD': 'inline label', });
lyr_DelegacinResistencia_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});