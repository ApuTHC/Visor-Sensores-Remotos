var datos = {
  "dataMapasBase": {
    "basemap_0": {
      "active": true,
      "link": 'ArcGIS:Imagery',
      "name": 'ESRI Imagery',
      "icon": 'Imagenary.png',
      "credits": '',
      "type": 'esriVector'
    },
    "basemap_1": {
      "active": true,
      "link": 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
      "name": 'Google Map Satelite',
      "icon": 'Google.png',
      "credits": '© Google',
      "type": 'tileLayer'
    },
    "basemap_2": {
      "active": true,
      "link": 'OSM:Standard',
      "name": 'Open Street Map',
      "icon": 'OSMStandard.png',
      "credits": '',
      "type": 'esriVector'
    },
    "basemap_3": {
      "active": true,
      "link": 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
      "name": 'Open Topo Map',
      "icon": 'OpenTopo.png',
      "credits": 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
      "type": 'tileLayer'
    },
    "basemap_4": {
      "active": true,
      "link": 'OSM:StandardRelief',
      "name": 'OSM + Relief',
      "icon": 'OSMRelief.png',
      "credits": '',
      "type": 'esriVector'
    },
    "basemap_5": {
      "active": true,
      "link": 'ArcGIS:LightGray',
      "name": 'ESRI LightGray',
      "icon": 'Lightgray.png',
      "credits": '',
      "type": 'esriVector'
    },
    "basemap_6": {
      "active": true,
      "link": 'ArcGIS:StreetsRelief',
      "name": 'ESRI Streets + Relief',
      "icon": 'Streetrelief.png',
      "credits": '',
      "type": 'esriVector'
    },
    "basemap_7": {
      "active": true,
      "link": 'ArcGIS:Topographic',
      "name": 'ESRI Topographic',
      "icon": 'Topographic.png',
      "credits": '',
      "type": 'esriVector'
    },
    "basemap_8": {
      "active": true,
      "link": 'ArcGIS:Hillshade:Light',
      "name": 'ESRI World Hillshade',
      "icon": 'Hillshade.png',
      "credits": '',
      "type": 'esriVector'
    }
  },
  "tiposCapa": {
    'geologia': 'Geología',
    'modelos': 'Modelos',
    'generales': 'Generales',
    'procesos': 'Procesos',
    'rasgos': 'Rasgos',
    'estaciones': 'Estaciones',
  },
  "lista_capas": {
    "peru": {
        "cod": 0,
        "name": "Capas",
        "tipos": ['procesos', 'rasgos', 'estaciones'],
        "capas": [
          {
            "name": "Geología Superficial", 
            "cod": "geoSup",
            "tipo": "procesos",
            "clase": "dynamic",
            "layers": [1],
            "attribution": "Área Metropolitana del Valle de Aburrá",
            "url": "http://geografico.metropol.gov.co:6080/arcgis/rest/services/Geologia/Geologia/MapServer",
          },
          {
            "name": "Geología Estructural", 
            "cod": "geoEstruct",
            "tipo": "rasgos",
            "clase": "dynamic",
            "layers": [0],
            "attribution": "Área Metropolitana del Valle de Aburrá",
            "url": "http://geografico.metropol.gov.co:6080/arcgis/rest/services/Geologia/Geologia/MapServer",
          },
          {
            "name": "Litología",
            "cod": "litologia",
            "tipo": "estaciones",
            "clase": "dynamic",
            "layers": [2],
            "attribution": "Área Metropolitana del Valle de Aburrá",
            "url": "http://geografico.metropol.gov.co:6080/arcgis/rest/services/Geologia/Geologia/MapServer",
          }
        ]
    },
    "colombia": {
        "cod": 1,
        "name": "Insumos",
        "tipos": ['modelos'],
        "capas": [
          {
            "name": "Sombreado",
            "cod": "sombrasTerreno",
            "tipo": "modelos",
            "clase": "mapserver",
            "layers": [0],
            "attribution": "",
            "url": "https://tiles.arcgis.com/tiles/gTVMpnerZFjZtXQb/arcgis/rest/services/hillshade_va_proj_tif/MapServer",
          },
        ]
    },
  },
}