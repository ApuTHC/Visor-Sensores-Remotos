var map;
var sidebar;
var notification;
var spinOpts = {
  lines: 10, // The number of lines to draw
  length: 14, // The length of each line
  width: 9, // The line thickness
  radius: 4, // The radius of the inner circle
  scale: 0.5, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1.3, // Rounds per second
  rotate: 0, // The rotation offset
  animation: "spinner-line-fade-more", // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: "#247461", // CSS color or array of colors
  fadeColor: "transparent", // CSS color or array of colors
  //top: '50%', // Top position relative to parent
  //left: '50%', // Left position relative to parent
  shadow: "0 0 1px transparent", // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: "spinner", // The CSS class to assign to the spinner
  //position: 'absolute', // Element positioning
};
// Auxiliares carga marcadores
var auxCargaInfoAflor = 0;
var allData = L.layerGroup();
// var markersRasgos = L.layerGroup();
// var markerCentrid = L.layerGroup();
var layerEdit=null;
var layergeojson = null;
var layergeojsonAnterior = null;
var notNewAnterior = false;
var idLayer ='nuevo';
var claseLayer = 'nuevo';
var forma = null;
var editMode = false;
var sidebarLeft = false;
var cutMode = false;
var markerUGSR = L.AwesomeMarkers.icon({
  icon: 'hammer',
  prefix:'fa',
  markerColor: 'darkred'
});

var markerUGSS = L.AwesomeMarkers.icon({
  icon: 'hammer',
  prefix:'fa',
  markerColor: 'red'
});

var markerControlUGS = L.AwesomeMarkers.icon({
  icon: 'hammer',
  prefix:'fa',
  markerColor: 'orange'
});

var markerSGMF = L.AwesomeMarkers.icon({
  icon: 'mountain-sun',
  prefix:'fa',
  markerColor: 'darkgreen'
});

var markerControlSGMF = L.AwesomeMarkers.icon({
  icon: 'mountain-sun',
  prefix:'fa',
  markerColor: 'green'
});

var markerInv = L.AwesomeMarkers.icon({
  icon: 'hill-rockslide',
  prefix:'fa',
  markerColor: 'cadetblue'
});

(function () {
  // Esperamos a que el documento esté listo
  $(document).ready(function () {
    map = L.map("map").setView([6.24, -75.57], 11);

    // Creando niveles en el mapa para el orden en la visualización
    map.createPane("baseMapPane");
    map.createPane("layersPane");
    map.createPane("dataPane");
    // Asignando el orden de los niveles
    map.getPane("baseMapPane").style.zIndex = 0;
    map.getPane("layersPane").style.zIndex = 10;
    map.getPane("dataPane").style.zIndex = 500;

    mapaBase = L.esri.Vector.vectorBasemapLayer("ArcGIS:Imagery", {
      apiKey:
        "AAPK858e9fb220874181a8cee37c6c7c05e0JFjKsdmGsd2C7oV31x1offnFB9ia6ew61D9N_tANtlZny5LFO1hIU6Xj2To6eiUp",
      pane: "baseMapPane",
    });
    mapaBase.addTo(map);

    sidebar = L.control
      .sidebar({
        autopan: false, // whether to maintain the centered map point when opening the sidebar
        closeButton: true, // whether t add a close button to the panes
        container: "sidebar", // the DOM container or #ID of a predefined sidebar container that should be used
        position: "left", // left or right
      })
      .addTo(map);

    AgregarContenidoMapasBase();
    
    AgregarCapas();
    
    CargarNotificaciones();

    CargarEscala();
    
    CargarLocation();
    
    CargarDraw();
    
    CargarSearch();
    
    // CargarBtnSplit();
    
    CargarRegla();

    CargarDatos();
  });
})();

// Marcadores estaciones



//Mapas Base ----->
// Variables para gestión de mapa base
var mapaBase;
var mapaBaseLabels;
var auxMapaBaseLabels = false;
// Crear la clase MapaBase
function MapaBase(link, name, icon, credits, type) {
  this.link = link;
  this.name = name;
  this.icon = icon;
  this.credits = credits;
  this.type = type;
}
// Extrae los datos de los mapa base
var dataMapasBase = datos["dataMapasBase"];
// Crear el Array con los mapas base
var mapasBase = [];
// Añade el contenido a la pestaña de mapas base
function AgregarContenidoMapasBase() {
  for (mapa in dataMapasBase) {
    if (dataMapasBase[mapa]["active"]) {
      mapasBase.push(
        new MapaBase(
          dataMapasBase[mapa]["link"],
          dataMapasBase[mapa]["name"],
          dataMapasBase[mapa]["icon"],
          dataMapasBase[mapa]["credits"],
          dataMapasBase[mapa]["type"]
        )
      );
    }
  }
  var baseMapContainer = '<div class="container-fluid h-100">';
  baseMapContainer += '<div class="row h-100 w-100">';
  for (let i = 0; i < mapasBase.length; i++) {
    baseMapContainer +=
      '<div class="col-6 col-basemap" id="baseMap_' +
      i +
      '" onclick="CargarMapaBase(id)">' +
      '<div class="item-basemap ' +
      (i === 0 ? "active" : "") +
      '">' +
      '<div class="img-basemap">' +
      '<img class="img-fluid" src="./img/' +
      mapasBase[i].icon +
      '">' +
      "</div>" +
      '<div class="text-center text-basemap">' +
      "<h6><b>" +
      mapasBase[i].name +
      "</b></h6>" +
      "</div>" +
      "</div>" +
      "</div>";
  }
  baseMapContainer += "<div/><div/>";
  $("#basemapContent").append(baseMapContainer);
}
// Función que cambia los mapa base
function CargarMapaBase(id) {
  var ids = id.split("_")[1];
  if (mapasBase[ids].type === "esriVector") {
    map.removeLayer(mapaBase);
    if (auxMapaBaseLabels) {
      map.removeLayer(mapaBaseLabels);
      auxMapaBaseLabels = false;
    }
    mapaBase = L.esri.Vector.vectorBasemapLayer(mapasBase[ids].link, {
      apiKey:
        "AAPK858e9fb220874181a8cee37c6c7c05e0JFjKsdmGsd2C7oV31x1offnFB9ia6ew61D9N_tANtlZny5LFO1hIU6Xj2To6eiUp",
      pane: "baseMapPane",
    });
    mapaBase.addTo(map);
  }
  if (mapasBase[ids].type === "tileLayer") {
    map.removeLayer(mapaBase);
    if (auxMapaBaseLabels) {
      map.removeLayer(mapaBaseLabels);
      auxMapaBaseLabels = false;
    }
    mapaBase = L.tileLayer(mapasBase[ids].link, {
      attribution: mapasBase[ids].credits,
      maxZoom: 21,
      pane: "baseMapPane",
    });
    if (mapasBase[ids].name === "Google Map Satelite") {
      mapaBaseLabels = L.esri.basemapLayer("ImageryLabels");
      mapaBaseLabels.addTo(map);
      auxMapaBaseLabels = true;
    }
    mapaBase.addTo(map);
  }
  $("#basemapContent .item-basemap").removeClass("active");
  $("#baseMap_" + ids + " .item-basemap").addClass("active");
}

//<----- Fin Mapas Base

//Capas por País ----->

// Establecemos en sistema WGS84

const crs = new L.Proj.CRS(
  "EPSG:4326",
  "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"
);
// Crear la clase capa
function Capa(name, cod, tipo, capa, clase, layers, attribution, url, transp) {
  this.name = name;
  this.cod = cod;
  this.tipo = tipo;
  this.capa = capa;
  this.clase = clase;
  this.layers = layers;
  this.attribution = attribution;
  this.url = url;
  this.transp = transp;
}
// Crear objeto paises
var paises = datos["lista_capas"];
// Crear el Array con la lista de amenazas
var tiposCapa = datos["tiposCapa"];
// Función para agregar el contenido de las capas a la barra lateral
function AgregarCapas() {
  for (pais in paises) {
    paises[pais]["arrayCapas"] = [];
    for (capa in paises[pais]["capas"]) {
      if (capa != "count") {
        paises[pais]["arrayCapas"].push(
          new Capa(
            paises[pais]["capas"][capa]["name"],
            paises[pais]["capas"][capa]["cod"],
            paises[pais]["capas"][capa]["tipo"],
            null,
            paises[pais]["capas"][capa]["clase"],
            paises[pais]["capas"][capa]["layers"],
            paises[pais]["capas"][capa]["attribution"],
            paises[pais]["capas"][capa]["url"],
            0
          )
        );
      }
    }
    $("#nav-tab").append(
      '<button class="nav-link ' +
        (paises[pais].cod == 0 ? "active" : "") +
        '" id="nav-' +
        pais +
        '-tab" data-toggle="tab" data-target="#nav-' +
        pais +
        '-pane" type="button" role="tab" aria-controls="nav-' +
        pais +
        '-pane" aria-selected="true"><b>' +
        paises[pais].name +
        "</b></button>"
    );
    $("#nav-tabContent").append(
      '<div class="tab-pane fade ' +
        (paises[pais].cod == 0 ? "show active" : "") +
        '" id="nav-' +
        pais +
        '-pane" role="tabpanel" aria-labelledby="nav-' +
        pais +
        '-tab">' +
        '<div class="accordion" id="nav-' +
        pais +
        '"></div>' +
        "</div>"
    );
    for (let ind = 0; ind < paises[pais]["tipos"].length; ind++) {
      $("#nav-" + pais).append(
        '<div class="card">' +
          '<div class="card-header collapsed" id="' +
          pais +
          "-tipo-" +
          paises[pais]["tipos"][ind] +
          '-header" data-toggle="collapse" data-target="#' +
          pais +
          "-tipo-" +
          paises[pais]["tipos"][ind] +
          '-body" aria-expanded="true" aria-controls="' +
          pais +
          "-tipo-" +
          paises[pais]["tipos"][ind] +
          '-body">' +
          '<h5 class="mb-0 text-center"><b>' +
          tiposCapa[paises[pais]["tipos"][ind]] +
          "</b></h5>" +
          "</div>" +
          '<div id="' +
          pais +
          "-tipo-" +
          paises[pais]["tipos"][ind] +
          '-body" class="collapse" aria-labelledby="' +
          pais +
          "-tipo-" +
          paises[pais]["tipos"][ind] +
          '-header" >' +
          '<div class="card-body" id="' +
          pais +
          "-tipo-" +
          paises[pais]["tipos"][ind] +
          '"></div>' +
          "</div>" +
          "</div>"
      );
    }
    for (let ind = 0; ind < paises[pais]["arrayCapas"].length; ind++) {
      if (paises[pais]["arrayCapas"][ind]["clase"] === "mapserver") {
        paises[pais]["arrayCapas"][ind]["capa"] = L.esri.tiledMapLayer({
          url: paises[pais]["arrayCapas"][ind]["url"],
          pane: "layersPane",
          attribution: paises[pais]["arrayCapas"][ind]["attribution"],
          layers: paises[pais]["arrayCapas"][ind]["layers"],
          crs: crs,
          useCors: false,
          opacity: 1,
          maxZoom: 25,
        });
        AgregarContenidoCapas(pais, ind);
      }
      if (paises[pais]["arrayCapas"][ind]["clase"] === "tilelayer") {
        paises[pais]["arrayCapas"][ind]["capa"] = L.tileLayer(
          paises[pais]["arrayCapas"][ind]["url"],
          {
            attribution: paises[pais]["arrayCapas"][ind]["attribution"],
            opacity: 1,
            maxZoom: 15,
            minZoom: 2,
            useCors: false,
            pane: "layersPane",
          }
        );
        AgregarContenidoCapas(pais, ind);
      }
      if (paises[pais]["arrayCapas"][ind]["clase"] === "feature") {
        paises[pais]["arrayCapas"][ind]["capa"] = L.esri.featureLayer({
          url: paises[pais]["arrayCapas"][ind]["url"],
          pane: "layersPane",
          useCors: false,
          renderer: L.canvas(),
          attribution: paises[pais]["arrayCapas"][ind]["attribution"],
          opacity: 1,
          onEachFeature: function (feature, layer) {
            if (feature.properties) {
              layer.bindPopup(
                Object.keys(feature.properties)
                  .map(function (k) {
                    return k + ": " + feature.properties[k];
                  })
                  .join("<br />"),
                {
                  maxHeight: 200,
                }
              );
            }
          },
        });
        AgregarContenidoCapas(pais, ind);
      }
      if (paises[pais]["arrayCapas"][ind]["clase"] === "wms") {
        var MySource = null;
        if (paises[pais]["arrayCapas"][ind]["cod"] == "colAmeSis1") {
          MySource = L.WMS.Source.extend({
            showFeatureInfo: function (latlng, infos) {
              if (!this._map) {
                return;
              }
              // console.log(infos);
              var info = JSON.parse(infos);
              var mensaje = "";
              mensaje = "<b>Intensidad Sísmica Máxima Observada</b><br>";
              switch (info.features[0].properties.Classvalue) {
                case "0":
                  mensaje += "<b>Intensidad:</b> Observado ampliamente <br>";
                  break;
                case "1":
                  mensaje += "<b>Intensidad:</b> Fuerte <br>";
                  break;
                case "2":
                  mensaje += "<b>Intensidad:</b> Daño leve <br>";
                  break;
                case "3":
                  mensaje += "<b>Intensidad:</b> Daño moderado <br>";
                  break;
                case "4":
                  mensaje += "<b>Intensidad:</b> Daño severo <br>";
                  break;
                case "5":
                  mensaje += "<b>Intensidad:</b> Destructivo <br>";
                  break;

                default:
                  break;
              }
              mensaje +=
                "<b>Valor de la Intensidad:</b> " +
                info.features[0].properties.PixelValue;
              // console.log(mensaje);
              this._map.openPopup(mensaje, latlng);
            },
          });
        } else if (paises[pais]["arrayCapas"][ind]["cod"] == "colAmeSis2") {
          MySource = L.WMS.Source.extend({
            showFeatureInfo: function (latlng, infos) {
              if (!this._map) {
                return;
              }
              var info = JSON.parse(infos);
              var mensaje = "";
              mensaje = "<b>Intensidad Sísmica Esperada</b><br>";
              switch (info.features[0].properties.Classvalue) {
                case "0":
                  mensaje += "<b>Intensidad:</b> Débil <br>";
                  break;
                case "1":
                  mensaje += "<b>Intensidad:</b> Ligero <br>";
                  break;
                case "2":
                  mensaje += "<b>Intensidad:</b> Moderado <br>";
                  break;
                case "3":
                  mensaje += "<b>Intensidad:</b> Fuerte <br>";
                  break;
                case "4":
                  mensaje += "<b>Intensidad:</b> Muy Fuerte <br>";
                  break;
                case "5":
                  mensaje += "<b>Intensidad:</b> Severo <br>";
                  break;
                case "6":
                  mensaje += "<b>Intensidad:</b> Violento <br>";
                  break;

                default:
                  break;
              }
              mensaje +=
                "<b>Valor de la Intensidad:</b> " +
                info.features[0].properties.PixelValue;
              console.log(mensaje);
              this._map.openPopup(mensaje, latlng);
            },
          });
        } else if (
          paises[pais]["arrayCapas"][ind]["url"] ==
          "http://srvags.sgc.gov.co/arcgis/services/Amenaza_Volcanica/Amenaza_Volcanica/MapServer/WMSServer?"
        ) {
          MySource = L.WMS.Source.extend({
            showFeatureInfo: function (latlng, infos) {
              if (!this._map) {
                return;
              }
              var info = JSON.parse(infos);
              var mensaje = "";
              mensaje = "<b>Amenaza Volcánica</b><br>";
              mensaje +=
                "<b>Volcán: </b> " +
                info.features[0].properties.Volcan +
                "<br>";
              mensaje +=
                "<b>Fenómeno: </b> " +
                info.features[0].properties.Fenomenos +
                "<br>";
              mensaje +=
                "<b>Leyenda: </b> " +
                info.features[0].properties.Leyenda +
                "<br>";
              mensaje +=
                "<b>Amenaza: </b> " + info.features[0].properties.Amenaza;
              console.log(info);
              this._map.openPopup(mensaje, latlng);
            },
          });
        } else if (paises[pais]["arrayCapas"][ind]["cod"] == "geoMapColombia") {
          MySource = L.WMS.Source.extend({
            showFeatureInfo: function (latlng, infos) {
              if (!this._map) {
                return;
              }
              var info = JSON.parse(infos);
              var mensaje = "";
              mensaje = "<b>Unidad Cronoestratigráfica</b><br>";
              mensaje +=
                "<b>Simbolo: </b> " +
                info.features[0].properties.SímboloUC +
                "<br>";
              mensaje +=
                "<b>Descripción: </b> " +
                info.features[0].properties.Descripción +
                "<br>";
              mensaje +=
                "<b>Edad: </b> " + info.features[0].properties.Edad + "<br>";
              mensaje +=
                "<b>Nombre Común: </b> " +
                info.features[0].properties.UGintegradas +
                "<br>";
              mensaje +=
                "<b>Comentarios: </b> " +
                info.features[0].properties.Comentarios;
              console.log(info);
              this._map.openPopup(mensaje, latlng);
            },
          });
        } else if (paises[pais]["arrayCapas"][ind]["cod"] == "geoMapChile") {
          MySource = L.WMS.Source.extend({
            showFeatureInfo: function (latlng, infos) {
              if (!this._map) {
                return;
              }
              var info = JSON.parse(infos);
              var mensaje = "";
              mensaje = "<b>Unidad Cronoestratigráfica</b><br>";
              mensaje +=
                "<b>Simbolo: </b> " +
                info.features[0].properties.cd_geol +
                "<br>";
              mensaje +=
                "<b>Descripción: </b> " +
                info.features[0].properties.lithology +
                "<br>";
              mensaje +=
                "<b>Edad: </b> " + info.features[0].properties.age_max + "<br>";
              mensaje +=
                "<b>Nombre: </b> " + info.features[0].properties.lithostrat;
              console.log(info);
              this._map.openPopup(mensaje, latlng);
            },
          });
        } else {
          MySource = L.WMS.Source.extend({
            showFeatureInfo: function (latlng, infos) {
              if (!this._map) {
                return;
              }
              console.log(infos);
              this._map.openPopup(infos, latlng);
            },
          });
        }
        var atlasGeoWMS = new MySource(paises[pais]["arrayCapas"][ind]["url"], {
          opacity: 1,
          format: "image/png",
          transparent: true,
          version: "1.3.0",
          useCors: false,
          info_format: "application/geojson",
          attribution: paises[pais]["arrayCapas"][ind]["attribution"],
        });
        paises[pais]["arrayCapas"][ind]["capa"] = atlasGeoWMS.getLayer(
          paises[pais]["arrayCapas"][ind]["layers"][0]
        );
        AgregarContenidoCapas(pais, ind);
      }
      if (paises[pais]["arrayCapas"][ind]["clase"] === "dynamic") {
        paises[pais]["arrayCapas"][ind]["capa"] = L.esri
          .dynamicMapLayer({
            url: paises[pais]["arrayCapas"][ind]["url"],
            pane: "layersPane",
            layers: paises[pais]["arrayCapas"][ind]["layers"],
            crs: crs,
            attribution: paises[pais]["arrayCapas"][ind]["attribution"],
            useCors: false,
            opacity: 1,
          })
          .bindPopup(function (error, featureCollection) {
            if (error || featureCollection.features.length === 0) {
              return false;
            } else {
              var popup = "";
              Object.keys(featureCollection.features[0].properties).map(
                function (k) {
                  popup +=
                    "<b>" +
                    k +
                    "</b>" +
                    ": " +
                    featureCollection.features[0].properties[k];
                  popup += "<br/>";
                }
              );
              return popup;
            }
          });
        AgregarContenidoCapas(pais, ind);
      }
      if (paises[pais]["arrayCapas"][ind]["clase"] === "imgserver") {
        paises[pais]["arrayCapas"][ind]["capa"] = L.esri.imageMapLayer({
          url: paises[pais]["arrayCapas"][ind]["url"],
          pane: "layersPane",
          layers: paises[pais]["arrayCapas"][ind]["layers"],
          crs: crs,
          attribution: paises[pais]["arrayCapas"][ind]["attribution"],
          useCors: false,
          opacity: 1,
        });
        AgregarContenidoCapas(pais, ind);
      }
      if (paises[pais]["arrayCapas"][ind]["clase"] === "local") {
        var obj = {};
        var style = {};
        if (paises[pais]["arrayCapas"][ind]["cod"] == "divisionPolSub") {
          obj = valleAburra;
          style = {
            weight: 3,
            color: "#FFF",
            dashArray: "0",
          };
        }
        paises[pais]["arrayCapas"][ind]["capa"] = new L.geoJson(obj, {
          onEachFeature: function (feature, layer) {
            if (feature.properties) {
              layer.bindPopup(
                Object.keys(feature.properties)
                  .map(function (k) {
                    return k + ": " + feature.properties[k];
                  })
                  .join("<br />"),
                {
                  maxHeight: 200,
                }
              );
            }
          },
          pane: "layersPane",
        }).setStyle(style);
        AgregarContenidoCapas(pais, ind);
      }
    }
  }
}
// Función para graficar el boton de la capa en la barra lateral
function AgregarContenidoCapas(pais, ind) {
  const auxClaseCapa = paises[pais]["arrayCapas"][ind]["clase"];
  const auxCodCapa = paises[pais]["arrayCapas"][ind]["cod"];
  if (
    auxClaseCapa === "mapserver" ||
    auxClaseCapa === "imgserver" ||
    auxClaseCapa === "tilelayer"
  ) {
    paises[pais]["arrayCapas"][ind]["leyenda"] = L.esri.legendControl(
      L.esri.dynamicMapLayer({
        url: paises[pais]["arrayCapas"][ind]["url"],
        layers: paises[pais]["arrayCapas"][ind]["layers"],
        useCors: false,
      }),
      { position: "bottomright", pais: pais, id: ind }
    );
  }
  if (auxClaseCapa === "feature") {
    paises[pais]["arrayCapas"][ind]["capa"].metadata(function (
      error,
      metadata
    ) {
      // console.log(metadata["drawingInfo"]["renderer"]);
      const metaLegend = metadata["drawingInfo"]["renderer"];
      if (metaLegend["type"] === "simple") {
        if (metaLegend["symbol"]["type"] === "esriSMS") {
          const colorFeat = metaLegend["symbol"]["color"];
          const colorBorder = metaLegend["symbol"]["outline"]["color"];
          paises[pais]["arrayCapas"][ind]["leyenda"] =
            '<li><ul><li><div class="d-inline-block" style="margin-right:10px;width:15px;height:15px;border-radius:50%;background: rgb(' +
            colorFeat[0] +
            " " +
            colorFeat[1] +
            " " +
            colorFeat[2] +
            ");border: solid 1px rgb(" +
            colorBorder[0] +
            " " +
            colorBorder[1] +
            " " +
            colorBorder[2] +
            ');"></div><p class="d-inline-block"> ' +
            (metaLegend["label"] === undefined
              ? "all values"
              : metaLegend["label"]) +
            "</p></li></ul></li>";
        }
        if (metaLegend["symbol"]["type"] === "esriSFS") {
          const colorFeat = metaLegend["symbol"]["color"];
          const colorBorder = metaLegend["symbol"]["outline"]["color"];
          paises[pais]["arrayCapas"][ind]["leyenda"] =
            '<li><ul><li><div class="d-inline-block" style="margin-right:10px;width:15px;height:15px;background: rgb(' +
            colorFeat[0] +
            " " +
            colorFeat[1] +
            " " +
            colorFeat[2] +
            ");border: solid 1px rgb(" +
            colorBorder[0] +
            " " +
            colorBorder[1] +
            " " +
            colorBorder[2] +
            ');"></div><p class="d-inline-block"> ' +
            (metaLegend["label"] === undefined
              ? "all values"
              : metaLegend["label"]) +
            "</p></li></ul></li>";
        }
        if (metaLegend["symbol"]["type"] === "esriPMS") {
          const wLegend = metaLegend["symbol"]["width"];
          const hLegend = metaLegend["symbol"]["height"];
          const imgLegend = metaLegend["symbol"]["imageData"];
          paises[pais]["arrayCapas"][ind]["leyenda"] =
            '<li><ul><li><div class="d-inline-block"><img width="' +
            wLegend +
            '" height="' +
            hLegend +
            '" src="data:image/png;base64,' +
            imgLegend +
            '"></div><p class="d-inline-block">' +
            (metaLegend["label"] === undefined
              ? "all values"
              : metaLegend["label"]) +
            "</p></li></ul></li>";
        }
      }
      if (metaLegend["type"] === "uniqueValue") {
        const valuesLegend = metaLegend["uniqueValueInfos"];
        const fieldLegend = metaLegend["field1"];
        paises[pais]["arrayCapas"][ind]["leyenda"] =
          "<li><strong>" + fieldLegend + "</strong><ul>";
        for (let i = 0; i < valuesLegend.length; i++) {
          const element = valuesLegend[i];
          const colorFeat = element["symbol"]["color"];
          const colorBorder = element["symbol"]["outline"]["color"];
          paises[pais]["arrayCapas"][ind]["leyenda"] +=
            '<li><div class="d-inline-block" style="margin-right:10px;width:15px;height:15px;background: rgb(' +
            colorFeat[0] +
            " " +
            colorFeat[1] +
            " " +
            colorFeat[2] +
            ");border: solid 1px rgb(" +
            colorBorder[0] +
            " " +
            colorBorder[1] +
            " " +
            colorBorder[2] +
            ');"></div><p class="d-inline-block"> ' +
            (element["label"] === undefined ? "all values" : element["label"]) +
            "</p></li>";
        }

        paises[pais]["arrayCapas"][ind]["leyenda"] += "</ul></li>";
      }
    });
  }
  if (auxClaseCapa === "wms") {
    // paises[pais]["arrayCapas"][ind]["leyenda"] = L.esri.legendControl(L.esri.dynamicMapLayer({url: paises[pais]["arrayCapas"][ind]["url"],}), {position: 'bottomright', pais: pais, id: ind});
  }
  if (auxClaseCapa === "dynamic") {
    var optionsDynamic = { position: "bottomright", pais: pais, id: ind };
    if (paises[pais]["arrayCapas"][ind]["cod"] == "peruVolMult") {
      paises[pais]["arrayCapas"][ind]["leyenda"] = L.esri.legendControl(
        L.esri.dynamicMapLayer({
          url: paises[pais]["arrayCapas"][ind]["url"],
          layers: [28],
        }),
        optionsDynamic
      );
    } else if (paises[pais]["arrayCapas"][ind]["cod"] == "peruVolLahar2") {
      paises[pais]["arrayCapas"][ind]["leyenda"] = L.esri.legendControl(
        L.esri.dynamicMapLayer({
          url: paises[pais]["arrayCapas"][ind]["url"],
          layers: [43],
        }),
        optionsDynamic
      );
    } else if (paises[pais]["arrayCapas"][ind]["cod"] == "peruVolCeni") {
      paises[pais]["arrayCapas"][ind]["leyenda"] = L.esri.legendControl(
        L.esri.dynamicMapLayer({
          url: paises[pais]["arrayCapas"][ind]["url"],
          layers: [44],
        }),
        optionsDynamic
      );
    } else if (paises[pais]["arrayCapas"][ind]["cod"] == "chileErosionactual") {
      paises[pais]["arrayCapas"][ind]["leyenda"] = L.esri.legendControl(
        L.esri.dynamicMapLayer({
          url: paises[pais]["arrayCapas"][ind]["url"],
          layers: [1],
        }),
        optionsDynamic
      );
    } else if (
      paises[pais]["arrayCapas"][ind]["cod"] == "chileErosionpotencial"
    ) {
      paises[pais]["arrayCapas"][ind]["leyenda"] = L.esri.legendControl(
        L.esri.dynamicMapLayer({
          url: paises[pais]["arrayCapas"][ind]["url"],
          layers: [35],
        }),
        optionsDynamic
      );
    } else {
      paises[pais]["arrayCapas"][ind]["leyenda"] = L.esri.legendControl(
        paises[pais]["arrayCapas"][ind]["capa"],
        optionsDynamic
      );
    }
  }

  $("#" + pais + "-tipo-" + paises[pais]["arrayCapas"][ind]["tipo"]).append(
    '<div class="content-file">' +
      '<div class="info-cargarCapa" id="info-cargarCapa_' +
      pais +
      "_" +
      ind +
      '" data-toggle="popover" data-html="true" data-placement="top"><i class="fa-solid fa-circle-info"></i></div>' +
      '<label class="switchi">' +
      '<input type="checkbox" id="capa_' +
      pais +
      "_" +
      ind +
      '" onChange="toggleDatosCapas(id)">' +
      '<span class="slider round"></span>' +
      "</label>" +
      "<a>" +
      paises[pais]["arrayCapas"][ind]["name"] +
      "</a>" +
      '<div class="d-block"></div>' +
      '<div class="slidecontainer">' +
      '<input type="range" min="0" max="100" value="0" class="sliderb" id="transp-file_' +
      pais +
      "_" +
      ind +
      '">' +
      '<p>Transparencia: <span id="valTransp-file_' +
      pais +
      "_" +
      ind +
      '"></span>%</p>' +
      "</div>" +
      '<div class="d-block content-legends" id="content-legend_' +
      pais +
      "_" +
      ind +
      '"></div>' +
      "</div>"
  );

  if (auxCodCapa === "divisionPolSub") {
    paises[pais]["arrayCapas"][ind]["capa"].addTo(map);
    $("#capa_" + pais + "_" + ind).prop("checked", true);
  }

  var slider = $("#transp-file_" + pais + "_" + ind)[0];
  var output = $("#valTransp-file_" + pais + "_" + ind)[0];
  output.innerHTML = slider.value;
  slider.oninput = function () {
    var auxPais = $(this).attr("id").split("_")[1];
    var id = parseInt($(this).attr("id").split("_")[2]);
    var output = $("#valTransp-file_" + auxPais + "_" + id)[0];
    output.innerHTML = this.value;
    var transpa = (100 - parseInt(this.value)) / 100;
    if ($("#capa_" + auxPais + "_" + id).prop("checked")) {
      const auxClaseCapa = paises[auxPais]["arrayCapas"][id]["clase"];
      if (
        auxClaseCapa === "imgserver" ||
        auxClaseCapa === "dynamic" ||
        auxClaseCapa === "wms" ||
        auxClaseCapa === "mapserver" ||
        auxClaseCapa === "tilelayer"
      ) {
        paises[auxPais]["arrayCapas"][id]["capa"].setOpacity(transpa);
      }
      if (auxClaseCapa === "feature") {
        paises[auxPais]["arrayCapas"][id]["capa"].setStyle({
          opacity: transpa,
        });
      }
    }
  };
}
// Función que muestra/oculta las capas en el mapa
function toggleDatosCapas(id) {
  var auxPais = id.split("_")[1];
  var num = parseInt(id.split("_")[2]);
  if ($("#" + id).prop("checked")) {
    paises[auxPais]["arrayCapas"][num]["capa"].addTo(map);
    if (paises[auxPais]["arrayCapas"][num]["clase"] === "feature") {
      var namePais = "";
      switch (auxPais) {
        case "colombia":
          namePais = "Insumos";
          break;
        case "peru":
          namePais = "Capas";
          break;
        default:
          break;
      }
      $("#legendpane").append(
        '<div class="content-leyendpane" id="legend_' +
          auxPais +
          "_" +
          num +
          '">' +
          "<h5><b>" +
          paises[auxPais]["arrayCapas"][num]["name"] +
          " (" +
          namePais +
          ")</b></h5>" +
          paises[auxPais]["arrayCapas"][num]["leyenda"] +
          '<div class="b-border"></div>' +
          "</div>"
      );
      $("#content-legend_" + auxPais + "_" + num).append(
        '<div class="legend_capa">' +
          paises[auxPais]["arrayCapas"][num]["leyenda"] +
          "</div>"
      );
    } else if (paises[auxPais]["arrayCapas"][num]["clase"] !== "local") {
      paises[auxPais]["arrayCapas"][num]["leyenda"].addTo(map);
      map.removeControl(paises[auxPais]["arrayCapas"][num]["leyenda"]);
    }
  } else {
    map.removeLayer(paises[auxPais]["arrayCapas"][num]["capa"]);
    $("#legend_" + auxPais + "_" + num).remove();
    $("#content-legend_" + auxPais + "_" + num).empty();
  }
}
function CerrarPopoverCapas(id) {
  console.log(id);
}

//<----- Capas por País

//Cargar Capas ----->

// Variables para gestión de Carga de Capas
var featureFiles = [];
var featuresCount = 0;
// Función que controla el input donde se suben los archivos
$("#files").change(function (evt) {
  var files = evt.target.files;
  for (var i = 0, f; (f = files[i]); i++) {
    if (f.name.slice(-3) === "zip") {
      GraficarFileSHP(f);
    } else if (f.name.slice(-3) === "kml") {
      GraficarFileKML(f);
    } else if (f.name.slice(-3) === "kmz") {
      GraficarFileKMZ(f);
    } else if (f.name.slice(-4) === "json") {
      GraficarFileGeoJSON(f);
    } else if (f.name.slice(-3) === "tif") {
      GraficarFileRaster(f);
    } else {
      notification.alert("Atención", "Tipo de archivo incorrecto");
    }
  }
});
// Función que asigna el nombre del archivo al texto del input
$("#files").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});
// Función que añade el cudro de la capa a la sección de la Barra Lateral para capas tipo KML, KMZ, GeoJSON y SHP
function AgregarContenidoFile(f) {
  map.spin(false, spinOpts);
  $("#content-input-cargarCapa").append(
    '<div class="content-file">' +
      '<div class="locate-cargarCapa" id="locate-cargarCapa_' +
      featuresCount +
      '"  onClick="EnfocarCapa(id)"><i class="fa-solid fa-crosshairs"></i></div>' +
      '<div class="save-cargarCapa" id="save-cargarCapa_' +
      featuresCount +
      '" onClick="GuardarCapa(id)"><i class="fa-solid fa-floppy-disk"></i></div>' +
      '<label class="switch">' +
      '<input type="checkbox" checked id="file_' +
      featuresCount +
      '" onChange="toggleDatosFiles(id)">' +
      '<span class="slider round"></span>' +
      "</label>" +
      "<a>" +
      f.name +
      "</a>" +
      '<div class="d-block"></div>' +
      '<div id="cp_' +
      featuresCount +
      '" class="cp-cargarCapa" data-color="rgb(255, 255, 255)">' +
      '<span class="input-group-text colorpicker-input-addon"><i></i></span>' +
      "</div>" +
      '<div class="slidecontainer">' +
      '<input type="range" min="0" max="100" value="0" class="sliderb" id="transp_file_' +
      featuresCount +
      '">' +
      '<p>Transparencia: <span id="valTransp_file_' +
      featuresCount +
      '"></span>%</p>' +
      "</div>" +
      "</div>"
  );
  var slider = $("#transp_file_" + featuresCount)[0];
  var output = $("#valTransp_file_" + featuresCount)[0];
  output.innerHTML = slider.value;
  slider.oninput = function () {
    var id = parseInt($(this).attr("id").split("_")[2]);
    var output = $("#valTransp_file_" + id)[0];
    output.innerHTML = this.value;
    var transpa = (100 - parseInt(this.value)) / 100;
    if ($("#file_" + id).prop("checked")) {
      featureFiles[id].setStyle({ opacity: transpa });
    }
  };
  $("#cp_" + featuresCount)
    .colorpicker()
    .on("colorpickerChange colorpickerCreate", function (e) {
      var id = parseInt($(this).attr("id").split("_")[1]);
      if ($("#file_" + id).prop("checked")) {
        featureFiles[id].setStyle({
          color: e.value,
          fillColor: e.value,
        });
      }
    });
  featuresCount++;
}
// Función que añade el cudro de la capa a la sección de la Barra Lateral para capas tipo Raster
function AgregarContenidoFileRaster(f) {
  $("#content-input-cargarCapa").append(
    '<div class="content-file">' +
      '<div class="locate-cargarCapa" id="locate-cargarCapa_' +
      featuresCount +
      '"  onClick="EnfocarCapa(id)"><i class="fa-solid fa-crosshairs"></i></div>' +
      '<label class="switch">' +
      '<input type="checkbox" checked id="file_' +
      featuresCount +
      '" onChange="toggleDatosFiles(id)">' +
      '<span class="slider round"></span>' +
      "</label>" +
      "<a>  " +
      f.name +
      "</a>" +
      "</div>"
  );
  featuresCount++;
}
// Función que centra la capa seleccionada en el mapa
function EnfocarCapa(id) {
  var num = id.split("_")[1];
  try {
    map.fitBounds(featureFiles[num].getBounds());
  } catch (error) {
    console.log(error);
  }
}
// Función que guarda la capa seleccionada en la base de datos
function GuardarCapa(id) {
  var num = id.split("_")[1];
  console.log(featureFiles[num].toGeoJSON());
}
// Función que muestra/oculta las capas en el mapa
function toggleDatosFiles(id) {
  var num = id.split("_")[1];
  if ($("#" + id).prop("checked")) {
    featureFiles[num].addTo(map);
  } else {
    map.removeLayer(featureFiles[num]);
  }
}
// Funciones para cargar la información al visor
// Cargar KML
function GraficarFileKML(f) {
  map.spin(true, spinOpts);
  var reader = new FileReader();
  reader.onload = (function (theFile) {
    return function (e) {
      fetch(e.target.result)
        .then((res) => res.text())
        .then((kmltext) => {
          const parser = new DOMParser();
          const kml = parser.parseFromString(kmltext, "text/xml");
          const track = new L.KML(kml, { pane: "layersPane" });
          track.setStyle({ opacity: 1 });
          track.addTo(map);
          try {
            map.fitBounds(track.getBounds());
          } catch (error) {
            console.log(error);
          }
          featureFiles.push(track);
          AgregarContenidoFile(f);
        });
    };
  })(f);
  reader.readAsDataURL(f);
}
// Cargar KMZ
function GraficarFileKMZ(f) {
  map.spin(true, spinOpts);
  var reader = new FileReader();
  reader.onload = function (event) {
    var result = reader.result;
    var kmz = L.kmzLayer().addTo(map);
    kmz.parse(result, { name: f.name, icons: {}, pane: "layersPane" });
    featureFiles.push(kmz);
    try {
      setTimeout(() => {
        map.fitBounds(kmz.getBounds());
        AgregarContenidoFile(f);
      }, 200);
    } catch (error) {
      console.log(error);
    }
  };
  reader.readAsArrayBuffer(f);
}
// Cargar GeoJSON
function GraficarFileGeoJSON(f) {
  var reader = new FileReader();
  reader.onload = (function (theFile) {
    return function (e) {
      var obj = JSON.parse(e.target.result);

      var geoJSON = new L.geoJson(obj, {
        onEachFeature: function (feature, layer) {
          if (feature.properties) {
            layer.bindPopup(
              Object.keys(feature.properties)
                .map(function (k) {
                  return k + ": " + feature.properties[k];
                })
                .join("<br />"),
              {
                maxHeight: 200,
              }
            );
          }
        },
        pane: "layersPane",
      });
      geoJSON.setStyle({ opacity: 1 });
      geoJSON.addTo(map);
      map.fitBounds(geoJSON.getBounds());
      featureFiles.push(geoJSON);
      AgregarContenidoFile(f);
    };
  })(f);
  reader.readAsText(f);
}
// Cargar SHP comprimidos en .zip
function GraficarFileSHP(f) {
  var reader = new FileReader();
  reader.onload = (function (theFile) {
    return function (e) {
      var shpfile = new L.Shapefile(e.target.result, {
        onEachFeature: function (feature, layer) {
          if (feature.properties) {
            layer.bindPopup(
              Object.keys(feature.properties)
                .map(function (k) {
                  return k + ": " + feature.properties[k];
                })
                .join("<br />"),
              {
                maxHeight: 200,
              }
            );
          }
        },
        pane: "layersPane",
      });
      shpfile.setStyle({ opacity: 1 });
      shpfile.addTo(map);
      try {
        setTimeout(() => {
          map.fitBounds(shpfile.getBounds());
        }, 200);
      } catch (error) {
        console.log(error);
      }
      featureFiles.push(shpfile);
      AgregarContenidoFile(f);
      shpfile.once("data:loaded", function () {
        console.log("finished loaded shapefile");
        console.log(shpfile.toGeoJSON());
      });
    };
  })(f);
  reader.readAsArrayBuffer(f);
}
// Cargar Raster con extensión .tif
function GraficarFileRaster(f) {
  var reader = new FileReader();
  reader.readAsArrayBuffer(f);
  reader.onloadend = function () {
    var arrayBuffer = reader.result;
    parseGeoraster(arrayBuffer).then((georaster) => {
      console.log("georaster:", georaster);
      var layer = new GeoRasterLayer({
        georaster: georaster,
        opacity: 0.7,
        resolution: 256,
        pane: "layersPane",
      });
      console.log("layer:", layer);
      layer.addTo(map);
      map.fitBounds(layer.getBounds());
      featureFiles.push(layer);
      AgregarContenidoFileRaster(f);
    });
  };
}

//<----- Fin Cargar Capas


// Notificaciones
function CargarNotificaciones() {
  notification = L.control.notifications({
      timeout: 4000,
      position: 'bottomright',
      closable: true,
      dismissable: true,
      className: 'pastel'
  }).addTo(map);
}

// Draw
function CargarDraw() {
  var drawnPolygons = L.featureGroup().addTo(map);
  var drawnLines = L.featureGroup().addTo(map);
  var polygons = [];
  drawnItems = L.featureGroup().addTo(map);
  map.pm.setLang('es');
  map.on('pm:create', function (e) {
    // console.log('create primero');
    if (!cutMode) {
      var layer = e.layer;
      var geojson = layer.toGeoJSON();
    
      var geom = turf.getGeom(geojson);
      if (geom.type == 'Polygon') {
        polygons.push(geom);
        drawnPolygons.addLayer(layer);
      }else{
        drawnItems.addLayer(layer);
      }
      layer.on('click', EditNew);
    } else{
      var layer = e.layer;
      var geojson = layer.toGeoJSON();
      var geom = turf.getGeom(geojson);
      if (geom.type == 'Polygon') {
        polygons.push(geom);
        drawnPolygons.addLayer(layer);
      } else if (geom.type == 'LineString') {
        var line = geom;
        drawnLines.addLayer(layer).on('click', EditNew);
        drawnPolygons.clearLayers();
        var newPolygons = [];
        polygons.forEach(function(polygon, index) {
          var cutDone = false;
          var layer;
          var upperCut = cutPolygon(polygon, line, 1, 'upper');
          var lowerCut = cutPolygon(polygon, line, -1, 'lower');
          if ((upperCut != null) && (lowerCut != null)) {
            cutMode = false;
            drawnLines.clearLayers();
            layer = L.geoJSON(upperCut, {
              style: function(feature) {
                return {
                  color: 'red'
                };
              }
            }).addTo(drawnPolygons).on('click', EditNew);
            layer = L.geoJSON(lowerCut, {
              style: function(feature) {
                return {
                  color: '#3388ff'
                };
              }
            }).addTo(drawnPolygons).on('click', EditNew);
            cutDone = true;
          }
          if (cutDone) {
            newPolygons.push(upperCut.geometry);
            newPolygons.push(lowerCut.geometry);
          } else {
            drawnLines.clearLayers();
            newPolygons.push(polygon);
            layer = L.geoJSON(polygon, {
              style: function(feature) {
                return {
                  color: '#3388ff'
                };
              }
            }).addTo(drawnPolygons).on('click', EditNew);
          }
        });
        polygons = newPolygons;
      }
    }
  });
  map.on('pm:drawstart', (e) => {
    editMode = true;
  });
  map.on('pm:drawend', (e) => {
    editMode = false;
    cutMode = false;
    // console.log('end primero');
  });
  map.pm.addControls({
    position: 'topright',
    drawMarker: true,
    drawPolyline: false,
    drawPolygon: false,
    
    drawRectangle: false,
    drawCircle: false,
    drawCircleMarker: false,
    drawText: false,

    editMode: false,
    dragMode:true,
    cutPolygon:false,
    removalMode: false,
    rotateMode: false
  });
}

// Search
var searchCtrl;
function CargarSearch() {
  searchCtrl = L.control.fuseSearch().addTo(map);
  $("#buscadorContent").append($(".leaflet-fusesearch-panel .content"));
  $(searchCtrl._container).remove();
  $(".content .header").prepend('<i class="fa-solid fa-magnifying-glass-location lupa-search"></i>');
  $(".content .header .close").remove();
}

// Escala
function CargarEscala() {
  L.control.scale({
    metric: true,
    imperial: false,
    position: 'bottomleft'
  }).addTo(map);
}

// Rule
function CargarRegla() {
  var options = {
    position: 'topright',         // Leaflet control position option
    circleMarker: {               // Leaflet circle marker options for points used in this plugin
      color: '#247461',
      radius: 2
    },
    lineStyle: {                  // Leaflet polyline options for lines used in this plugin
      color: '#247461',
      dashArray: '1,6'
    },
    lengthUnit: {                 // You can use custom length units. Default unit is kilometers.
      display: 'meters',              // This is the display value will be shown on the screen. Example: 'meters'
      decimal: 2,                 // Distance result will be fixed to this value. 
      factor: 1000,               // This value will be used to convert from kilometers. Example: 1000 (from kilometers to meters)  
      label: 'Distancia:'           
    },
    angleUnit: {
      display: '&deg;',           // This is the display value will be shown on the screen. Example: 'Gradian'
      decimal: 2,                 // Bearing result will be fixed to this value.
      factor: null,                // This option is required to customize angle unit. Specify solid angle value for angle unit. Example: 400 (for gradian).
      label: 'Azimut:'
    }
  };
  L.control.ruler(options).addTo(map);
  $(".leaflet-ruler").append('<i class="fa-solid fa-ruler-combined"></i>');
}

//Location
var latLoctaion = 0;
var lngLoctaion = 0;
function CargarLocation(){
  map.addControl(L.control.locate({
    locateOptions: {
            enableHighAccuracy: true,
            maxZoom: 18,
            position: 'topleft',
            flyTo: true,
            showCompass: true,
            strings: {
              title: "Localización",
              metersUnit: "metros",
              feetUnit: "feet",
              popup: "Tu estás aproximadamente a {distance} {unit} al rededor de este punto : [lat: "+latLoctaion+', lng: '+lngLoctaion+']',
              outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
            }
  }})).on('locationfound', function(e){
        latLoctaion = e.latitude;
        lngLoctaion = e.longitude; 
        console.log(latLoctaion, lngLoctaion);
        $(".leaflet-popup-content").append('<p class="text-center">[' + latLoctaion + ', ' + lngLoctaion + '] </p>');
        
      })
      .on('locationerror', function(e){
        console.log(e);
        alert("Location access denied.");
      });

      $(".leaflet-control-locate-location-arrow").append('<i class="fas fa-location-arrow"></i>');
}

// Boton Split
function CargarBtnSplit() {

  map.pm.Toolbar.copyDrawControl('Line', {
    name: 'LineCopy',
    block: 'edit',
    title: 'Cortar Polígonos',
    className: 'cut',
    onClick: () => {
      console.log('click primero');
      cutMode = true;
    },
  });

  $(".cut").append('<span class="fa fa-cut cuts"></span>');

}
function cutPolygon(polygon, line, direction, id) {
  var j;
  var polyCoords = [];
  var cutPolyGeoms = [];
  var retVal = null;

  if ((polygon.type != 'Polygon') || (line.type != 'LineString')) return retVal;

  var intersectPoints = turf.lineIntersect(polygon, line);
  var nPoints = intersectPoints.features.length;
  if ((nPoints == 0) || ((nPoints % 2) != 0)) return retVal;

  var offsetLine = turf.lineOffset(line, (0.01 * direction), {
    units: 'kilometers'
  });

  for (j = 0; j < line.coordinates.length; j++) {
    polyCoords.push(line.coordinates[j]);
  }
  for (j = (offsetLine.geometry.coordinates.length - 1); j >= 0; j--) {
    polyCoords.push(offsetLine.geometry.coordinates[j]);
  }
  polyCoords.push(line.coordinates[0]);
  var thickLineString = turf.lineString(polyCoords);
  var thickLinePolygon = turf.lineToPolygon(thickLineString);

  var clipped = turf.difference(polygon, thickLinePolygon);
  for (j = 0; j < clipped.geometry.coordinates.length; j++) {
    var polyg = turf.polygon(clipped.geometry.coordinates[j]);
    var overlap = turf.lineOverlap(polyg, line, {
      tolerance: 0.005
    });
    if (overlap.features.length > 0) {
      cutPolyGeoms.push(polyg.geometry.coordinates);
    }
  }

  if (cutPolyGeoms.length == 1)
    retVal = turf.polygon(cutPolyGeoms[0], {
      id: id
    });
  else if (cutPolyGeoms.length > 1) {
    retVal = turf.multiPolygon(cutPolyGeoms, {
      id: id
    });
  }

  return retVal;
}

// Función para resaltar la figura seleccionada
function ResaltarFeat(newFeat, notNew) {
  // map.removeLayer(markersRasgos);
  console.log(newFeat.toGeoJSON());

  var colorNew = '#3388ff';
  var colorSelect = '#fff';
  if (!editMode) {
    if(layergeojsonAnterior==newFeat){
  
    }else if(layergeojsonAnterior == null){
      layergeojsonAnterior = newFeat
      notNewAnterior = notNew;
    }else if (notNewAnterior){
      layergeojsonAnterior.pm.disable();
      if (layergeojsonAnterior.feature.properties.clase == 'procesos') {
        var auxLayergeojsonAnterior = layergeojsonAnterior.toGeoJSON();
        var geom = turf.getGeom(auxLayergeojsonAnterior);
        if (geom.type == 'Polygon') {
          layergeojsonAnterior.setStyle({weight:3, color : capasDatos[0].color, fillColor: capasDatos[0].color, fillOpacity:0.2})
        }
      }else if (layergeojsonAnterior.feature.properties.clase == 'rasgos') {
        layergeojsonAnterior.setStyle({weight:3, color : capasDatos[1].color, fillColor: capasDatos["estaciones"].color, fillOpacity:0.2})
      }else{
        layergeojsonAnterior.setStyle({weight:3, color : colorNew, fillColor: colorNew, fillOpacity:0.2})
      }
    }else{
      layergeojsonAnterior.pm.disable();
      layergeojsonAnterior.setStyle({weight:3, color : colorNew, fillColor: colorNew, fillOpacity:0.2})
    }
    layergeojsonAnterior = newFeat;
    notNewAnterior = notNew;
    var auxLayerCentroid = newFeat.toGeoJSON();
    var geom = turf.getGeom(auxLayerCentroid);
    if (geom.type == 'Polygon') {
      newFeat.setStyle({weight:6, color : colorSelect, fillColor: colorSelect, fillOpacity:0.2})
    }

    newFeat.pm.enable({
      allowSelfIntersection: true,
    });
    newFeat.on('pm:edit', (e) => {
      layergeojson = e.layer.toGeoJSON();
    });
  }
}

function GenerarFormulario(tipo, coor, is_new, feat) {
  var contentDatos = "";
  var data_form = [];
  if (tipo === "proceso") {
    data_form = datos["datos_feat"]["procesos"];
  }
  else if (tipo === "rasgo") {
    data_form = datos["datos_feat"]["rasgos"];
  }
  else if (tipo === "estacion") {
    data_form = datos["datos_feat"]["estaciones"];
  }

  for (let ind = 0; ind < data_form.length; ind++) {
    const element = data_form[ind];
    if (element["type"] === "titulo") {
      contentDatos += '<h2>'+element["text"]+'</h2>'
    }
    if (element["type"] === "input") {
      contentDatos += '<div class="form-group">';
      contentDatos += '<label for="'+ tipo +'_'+ element["campo_id"] +'">'+ element["text"] +'</label>'
      if (element["is_textarea"]) {
        contentDatos += '<textarea type="text" rows="2" class="form-control" id="'+ element["campo_id"] +'" aria-describedby="msg_'+ element["campo_id"] +'"></textarea/>'
      }
      else if (element["is_date"]) {
        contentDatos += '<input type="date" class="form-control" id="'+ element["campo_id"] +'" aria-describedby="msg_'+ element["campo_id"] +'">'
      }
      else{
        contentDatos += '<input type="text" class="form-control" id="'+ element["campo_id"] +'" aria-describedby="msg_'+ element["campo_id"] +'">'
      }
      contentDatos += '<small id="msg_'+ element["campo_id"] +'" class="form-text text-muted">'+ element["msg"] +'</small>'
      contentDatos += '</div>';
    }
    if (element["type"] === "select") {
      contentDatos += '<div class="form-group">';
      contentDatos += '<label for="'+ tipo +'_'+ element["campo_id"] +'">'+ element["text"] +'</label>'
      contentDatos += '<select class="form-control" id="'+ element["campo_id"] +'" aria-describedby="msg_'+ element["campo_id"] +'">'
      for (let j = 0; j < element["options"].length; j++) {
        const option = element["options"][j];
        contentDatos += '<option>'+option+'</option>';
      }
      contentDatos += '</select>';
      contentDatos += '<small id="msg_'+ element["campo_id"] +'" class="form-text text-muted">'+ element["msg"] +'</small>'
      contentDatos += '</div>';
    }
    if (element["type"] === "btn") {
      if (tipo === "estacion") {
        if (estaciones === undefined) {
          contentDatos += '<h3> Activa la capa de estaciones por favor </h3>'
        }
        else{
          contentDatos += '<button class="btn btn-comun" data-toggle="modal" data-target="#addEstacionModal" data-whatever="0_'+coor[1]+'_'+coor[0]+'">'+element["text"]+'</button>'
        }
        // console.log(coor);
      }
      else{
        contentDatos += '<div class="form-group">';
        contentDatos += '<button class="btn btn-comun" type="button" id="btn_'+ tipo +'" onclick="GuardarFeat(id)">'+element["text"]+'</button>';
        contentDatos += '</div>';
        console.log(contentDatos);
      }
    }
  }
  $("#datosEditpane").empty();
  $("#datosEditpane").append(contentDatos);

  if (!is_new) {
    for (let ind = 0; ind < data_form.length; ind++) {
      $("#"+data_form[ind]["campo_id"]).val(feat.properties[data_form[ind]["campo_id"]]);    
    }
  }

}

// Función que se llama al seleccionar una figura nueva
function EditNew() {
  console.log("nuevo");
  idLayer = "nuevo";
  claseLayer = "nuevo";
  layerEdit = this;
  layergeojson = this.toGeoJSON();

  var geom = turf.getGeom(layergeojson);
  
  if (geom.type == 'Polygon') {
    GenerarFormulario("proceso", [], true, null);
  }
  if (geom.type == 'LineString') {
    GenerarFormulario("rasgo", [], true, null);
  }
  if (geom.type == 'Point') {
    GenerarFormulario("estacion", geom.coordinates, true, null);
  }
  // console.log(layergeojson);
  // console.log(layergeojson.type);
  ResaltarFeat(this, false);
  if(layergeojson.type == 'FeatureCollection'){
    layergeojson = layergeojson.features[0];
    delete layergeojson.properties.id;
  }
  // console.log(layergeojson);

  // $("#IPM_FECREP").val(dateFormat(new Date(),'Y-m-d'));

  sidebar.open('datos');

}

// Función que se llama al seleccionar una figura ya existente
function EditExist(e) {
  console.log(e);
  console.log(e.layer);
  layerEdit = e.layer; 
  layergeojson = e.layer.toGeoJSON();

  var geom = turf.getGeom(layergeojson);
  idLayer = layergeojson.properties.id;
  
  if (geom.type == 'Polygon') {
    GenerarFormulario("proceso", [], false, layergeojson);
  }
  if (geom.type == 'LineString') {
    GenerarFormulario("rasgo", [], false, layergeojson);
  }

  ResaltarFeat(e.layer, true);
  console.log(e.layer.toGeoJSON());
}

// ---------> Datos
// Declaración del objeto 'CapaDatos'
function CapaDatos(capa, figuras, database, active, clase, name, color) {
  this.capa = capa;
  this.figuras = figuras;
  this.database = database;
  this.active = active;
  this.clase = clase;
  this.name = name;
  this.color = color;
  this.CargarCapaDatos = CargarCapaDatos;
}
var capasDatos = {};
var capasEst = [
  new CapaDatos( L.layerGroup() ,[],null,1,'ugs','UGI Rocas y Suelos','#2ecc71'),
  new CapaDatos( L.layerGroup() ,[],null,1,'sgmf','CGMF','#f1c40f'),
  new CapaDatos( L.layerGroup() ,[],null,1,'inv','Inventarios MM','#8e44ad'),
  new CapaDatos( L.layerGroup() ,[],null,1,'otro','Sin Tipo','#410000'),
  new CapaDatos( L.layerGroup() ,[],null,1,'query','Capa Query','#410000'),
];

function CargarDatos() {
  const data_feats = datos["datos_feat"]["feats"];
  for (let i = 0; i < data_feats.length; i++) {
    elem = data_feats[i]
    capasDatos[elem['clase']] = new CapaDatos(null,[],null,0,elem['clase'],elem['name'],elem['color']);
  }

  for (auxFeat in capasDatos) {
    const auxCapa = capasDatos[auxFeat];
    var contentCapa = '<div class="content-file">' +
    '<label class="switchi">' +
    '<input type="checkbox" id="forma_' + auxCapa.clase +'" onChange="toggleDatos(id)">' +
    '<span class="slider round"></span>' +
    "</label>" +
    "<a>" + auxCapa.name + "</a>";
    // '<div class="d-block"></div>' +
    // '<div class="slidecontainer">' +
    // '<input type="range" min="0" max="100" value="0" class="sliderb" id="transp-file_' + auxCapa.clase +'">' +
    // '<p>Transparencia: <span id="valTransp-file_' + auxCapa.clase +'"></span>%</p></div>';
    
    
    $("#peru-tipo-"+ auxCapa.clase).append(contentCapa);
    
    
    $("#forma_"+auxCapa.clase).prop("checked", false);
    
    // var slider = $("#transp-file_" + auxCapa.clase)[0];
    // var output = $("#valTransp-file_" + auxCapa.clase)[0];
    // output.innerHTML = slider.value;
    // slider.oninput = function () {
    //   var auxClase = $(this).attr("id").split("_")[1];
    //   var output = $("#valTransp-file_" + auxClase)[0];
    //   output.innerHTML = this.value;
    //   var transpa = (100 - parseInt(this.value)) / 100;
    //   if ($("#forma_" + auxClase).prop("checked")) {
    //     capasDatos[auxClase].capa.setStyle({
    //       opacity: transpa,
    //     });
    //   }
    // };
    
    
    
  }
  $("#lista_capas_descargar").append(
    '<br>'+
    '<label for="capa_descarga">Capa a Descargar: </label>' +
    '<select id="capa_descarga" class="form-control select-mpios">' +
        '<option value="0">Procesos Morfodinámicos</option>' +
        '<option value="1">Rasgos</option>' +
        '<option value="2">Estaciones (Todas)</option>' +
        '<option value="3">Estaciones (Viviendas)</option>' +
        '<option value="4">Estaciones (UGS)</option>' +
        '<option value="5">Estaciones (Inventarios y Catalogos)</option>' +
    '</select>'+
    '<label for="tipo_descarga">Descargar en Formato: </label>' +
    '<select id="tipo_descarga" class="form-control select-mpios">' +
        '<option value="shp">Shapefile</option>' +
        '<option value="geojson">GeoJSON</option>' +
    '</select>'+
    '<a class="btn-descargar" id="clase_descarga" onclick="CargarDatosDescarga(id, this)" type="button" >  <i class="fas fa-layer-group"></i>   Cargar la Capa </a>'+
    '<a class="btn-descargar" id="clase_descarga" onclick="DescargarDatos(id, this)" type="button" >  <i class="fas fa-file-download"></i>   Descargar </a>'
  );
}

function toggleDatos(id) {
  let clase = id.split("_")[1];
  if (capasDatos[clase].active == 0) {
    capasDatos[clase].active = 2;
    capasDatos[clase].CargarCapaDatos();
  } else if (capasDatos[clase].active == 1){
    capasDatos[clase].active = 2;
    capasDatos[clase].capa.addTo(map);
  } else if (capasDatos[clase].active == 2){
    capasDatos[clase].active = 1;
    map.removeLayer(capasDatos[clase].capa);
  }
}
function toggleDatosEst(id) {
  var num = id.split("_")[1];
  console.log(capasEst[num].active)
  if (capasEst[num].active == 1){
    capasEst[num].active = 2;
    capasEst[num].capa.addTo(map);
  } else if (capasEst[num].active == 2){
    capasEst[num].active = 1;
    map.removeLayer(capasEst[num].capa);
  }
}

var estaciones;

function CargarCapaDatos() {
  map.spin(true, spinOpts);
  this.capa = L.layerGroup();
  // var markers = L.markerClusterGroup();
  // this.capa.addTo(map);
  if (this.clase == 'estaciones') {
    database.ref().child('EstacionesCampo').get().then((snapshot) => {
      if (snapshot.exists()) {
        this.database = snapshot.val();
        estaciones = snapshot.val();
        console.log(snapshot.val());
        for (let i = 0; i < this.database.cont.cont; i++) {
          if (this.database['estacion_'+i]?.activo) {
            var point = L.marker([this.database['estacion_'+i]['Norte'], this.database['estacion_'+i]['Este']]).toGeoJSON();
            // console.log(point);
            var auxmarker;
            var auxFormatosPopUp = "";
            var auxcapa = ""
            var auxtipo = this.database['estacion_'+i]['TipoEstacion'];
            var auxtipoup = auxtipo.toUpperCase();

            if (auxtipoup.includes('UGS')){
              auxcapa = "ugs"
            }
            else if (auxtipoup.includes('SGMF')){
              auxcapa = "sgmf"
            }
            else if (auxtipoup.includes('VIVIENDA')){
              auxcapa = "vivienda"
            }
            else if (auxtipoup.includes('CMM') || auxtipoup.includes('CATÁLOGO') || auxtipoup.includes('CATALOGO')){
              auxcapa = "cat"
            }
            else if (auxtipoup.includes('IMM') || auxtipoup.includes('INVENTARIO')){
              auxcapa = "inv"
            }
            else{
              auxcapa = "otro"
            }

            if ( (auxtipo.includes('Punto') || auxtipo.includes('punto') ) && (auxtipo.includes('UGS') || auxtipo.includes('ugs'))) {
              auxmarker = markerControlUGS;
            }
            else if ( (auxtipo.includes('Punto') || auxtipo.includes('punto') ) && (auxtipo.includes('SGMF') || auxtipo.includes('sgmf'))) {
              auxmarker = markerControlSGMF;
            }
            else if (auxtipo.includes('SGMF') || auxtipo.includes('sgmf') || this.database['estacion_'+i]['Propietario'] ==="Maria Areiza Rodríguez") {
              auxmarker = markerControlSGMF;
            }
            else if (auxtipo.includes('UGS') || auxtipo.includes('ugs') ) {
              auxmarker = markerControlUGS;
            }
            else if (auxtipoup.includes('IMM')) {
              auxmarker = markerInv;
            }
            else if (auxtipo.includes('Vivienda')) {
              auxmarker = markerViv;
              auxcapa = "vivienda";
            }

            if (this.database['estacion_'+i]['Formularios']['count_UGS_Rocas']>0) {
              for (let k = 0; k < this.database['estacion_'+i]['Formularios']['count_UGS_Rocas']; k++) {
                auxFormatosPopUp += 'UGSR' + this.database['estacion_'+i]['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+k]['noformato'] + ', ';   
              }
              auxmarker = markerUGSR;
              auxcapa = "ugs"
            }
            if (this.database['estacion_'+i]['Formularios']['count_UGS_Suelos']>0) {
              for (let k = 0; k < this.database['estacion_'+i]['Formularios']['count_UGS_Suelos']; k++) {
                auxFormatosPopUp += 'UGSS' + this.database['estacion_'+i]['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+k]['noformato'] + ', ';   
              }
              auxmarker = markerUGSS;
              auxcapa = "ugs"
            }
            if (this.database['estacion_'+i]['Formularios']['count_SGMF']>0) {
              for (let k = 0; k < this.database['estacion_'+i]['Formularios']['count_SGMF']; k++) {
                auxFormatosPopUp += 'SGMF' + this.database['estacion_'+i]['Formularios']['Form_SGMF']['Form_SGMF_'+k]['noformato'] + ', ';   
              }
              auxmarker = markerSGMF;
              auxcapa = "sgmf"
            }
            if (this.database['estacion_'+i]['Formularios']['count_CATALOGO']>0) {
              for (let k = 0; k < this.database['estacion_'+i]['Formularios']['count_CATALOGO']; k++) {
                auxFormatosPopUp += 'CATALOGO_' + this.database['estacion_'+i]['Formularios']['Form_CATALOGO']['Form_CATALOGO_'+k]['ID_PARTE'] + ', ';   
              }
              auxmarker = markerCat;
              auxcapa = "cat"
            }
            if (this.database['estacion_'+i]['Formularios']['count_INVENTARIO']>0) {
              for (let k = 0; k < this.database['estacion_'+i]['Formularios']['count_INVENTARIO']; k++) {
                auxFormatosPopUp += 'INVENTARIO_' + this.database['estacion_'+i]['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+k]['ID_PARTE'] + ', ';   
              }
              auxmarker = markerInv;
              auxcapa = "inv"
            }
            if (this.database['estacion_'+i]['Formularios']['count_VIVIENDA']>0) {
              for (let k = 0; k < this.database['estacion_'+i]['Formularios']['count_VIVIENDA']; k++) {
                auxFormatosPopUp += 'VIVIENDA_' + this.database['estacion_'+i]['Formularios']['Form_VIVIENDA']['Form_VIVIENDA_'+k]['idformatoValpa'] + ', ';   
              }
              auxmarker = markerViv;
              auxcapa = "vivienda"
            }

            L.extend(point.properties, {
              id: i,
              Estacion: this.database['estacion_'+i]['Estacion'],
              Fecha: this.database['estacion_'+i]['Fecha'],
              TipoEstacion: this.database['estacion_'+i]['TipoEstacion'],
              Propietario: this.database['estacion_'+i]['Propietario'],
              Observaciones: this.database['estacion_'+i]['Observaciones'],
              Este: this.database['estacion_'+i]['Este'],
              Norte: this.database['estacion_'+i]['Norte'],
              Altitud: this.database['estacion_'+i]['Altitud'],
              Formatos: auxFormatosPopUp
            });
            this.figuras.push(point);
            // console.log(i);
            var puntico = L.geoJson(point,{
                onEachFeature: function (feature, layer) {
                  feature.layer = layer;
                  layer.bindPopup(popupEstaciones);
                  layer.setIcon(auxmarker);
                }
              })
              .bindPopup(popupEstaciones)
              .addTo(this.capa)
              .addTo(allData);
              // .on('click', function(e) {
              //   EditExist(e);
              // });    
              
              if (auxcapa === "ugs"){
                puntico.addTo(capasEst[0].capa)
              }
              else if (auxcapa === "sgmf"){
                puntico.addTo(capasEst[1].capa)
              }
              else if (auxcapa === "inv"){
                puntico.addTo(capasEst[2].capa)
              }
              else{
                puntico.addTo(capasEst[3].capa)
              }
              
          }
          else{
            this.figuras.push(null);
          }
        }

        console.log(this.figuras);
        console.log(this.capa.toGeoJSON());
        console.log(allData.toGeoJSON());
        searchCtrl.indexFeatures(allData.toGeoJSON(), ['Estacion', 'TipoEstacion', 'Formatos', 'Propietario','nombreclase','id','ID_MOV','ENCUESTAD','TIPO_MOV1','ID_PARTE','Tipo_MM','VEREDA','Propietario','Nom_Rasgo','Cod_Rasgo','Nom_UGS','Tipo','TipoRocaSuelo','Vereda','Cod_SGMF','Nom_SGMF','Forma','NOM_MUN']);
        map.spin(false);
        notification.success('¡Listo!', 'Se cargó con exito las estaciones, elija cuales desea ver');

        for (let j = 0; j < capasEst.length; j++) {
          if (capasEst[j].clase === "query") {
            $("#peru-tipo-estaciones").append(
              '<div class="content-file">' +
              '<label class="switchi">' +
              '<input type="checkbox" id="est_' + j + '" onChange="toggleDatosEst(id)">' +
              '<span class="slider round"></span>' +
              "</label>" +
              "<a>" + capasEst[j].name + "</a>"+
              '<div class="d-inline">'+
                  '<button class="btn btn-comun ml-3" type="button" id="peticionesQuery" data-toggle="modal" data-target="#id-Query-Estaciones">Realizar Query</button>'+
              '</div>'
            );
          }
          else {
            $("#peru-tipo-estaciones").append(
              '<div class="content-file">' +
              '<label class="switchi">' +
              '<input type="checkbox" id="est_' + j + '" onChange="toggleDatosEst(id)">' +
              '<span class="slider round"></span>' +
              "</label>" +
              "<a>" + capasEst[j].name + "</a>"
            );
          }
        }

        //var tagged = turf.tag(this.capa.toGeoJSON(), alturas, 'MPIO_CNMBR', 'MUNICIPIO');
        //console.log(tagged);
        
        // var capita = this.capa.toGeoJSON()
        // for (let index = 0; index < capita.features.length; index++) {
        //   capita.features[index].properties.MUN = alturas.features[index].properties.MPIO_CNMBR;
        // }
        // console.log(capita);
        // DepurarDatosEstaciones(capita)

        
      } else {
        console.log("No data available");
        notification.alert('¡Error!', 'No se pudo cargar la capa');
      }
      
    }).catch((error) => {
      console.error(error);
      notification.alert('¡Error!', 'No se pudo cargar la capa');
    });
    
  } else {
    this.capa.addTo(map);
    database.ref().child('features/'+this.clase).get().then((snapshot) => {
      if (snapshot.exists()) {
        this.database = snapshot.val();
        console.log(snapshot.val());
        for (let i = 0; i < this.database.count.count; i++) {
          if (this.database['feature_'+i]?.activo) {
            this.figuras.push(this.database['feature_'+i]['layergeojson']);
            var style = {
              weight: 3,
              color : this.color,
              dashArray: '0'
            }
            if (this.clase == 'procesos') {
              style.dashArray = '6,6';
              if (this.database['feature_'+i]['layergeojson'].properties['ACTIVIDAD'] == '1') {
                style.dashArray = '0';
              }
              this.database['feature_'+i]['layergeojson'].properties['COD_SIMMA'] = this.database['feature_'+i]['layergeojson'].properties['COD_SIMMA']+''
            }
            L.extend(this.database['feature_'+i]['layergeojson'].properties, {
              id: this.database["feature_"+i]["id"]+'',
              clase: this.clase,
              nombreclase: this.name
            });
            // console.log(i);
            L.geoJson(this.database['feature_'+i]['layergeojson'],{
                onEachFeature: function (feature, layer) {
                  feature.layer = layer;
                  layer.bindPopup(popupFiguras);
                }
              })
              .setStyle(style)
              .bindPopup(popupFiguras)
              .addTo(this.capa)
              .addTo(allData)
              .on('click', function(e) {
                EditExist(e);
              });  
              
              // markers.addLayer(mark);
          }
        }
        // map.addLayer(markers);
        console.log(this.figuras);
        console.log(this.capa.toGeoJSON());
        console.log(allData.toGeoJSON());
        searchCtrl.indexFeatures(allData.toGeoJSON(), ['nombreclase','id','ID_MOV','COD_SIMMA','ENCUESTAD','TIPO_MOV1','ID_PARTE','Tipo_MM','VEREDA','Propietario','Nom_Rasgo','Cod_Rasgo','Nom_UGS','Tipo','TipoRocaSuelo','Vereda','Cod_SGMF','Nom_SGMF','Forma','NOM_MUN']);
        map.spin(false);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }

}

// ****PESTAÑA DESCARGAR DATOS

// Función para cargar los datos desde Descargar Datos y dejarlos almacenados
function CargarDatosDescarga(id, obj){
  var num_descarga = parseInt($("#capa_descarga").val());
  if (num_descarga > 2){
    num_descarga = 2;
  }
  if (capasDatos[num_descarga].active == 0) {
    capasDatos[num_descarga].active = 2;
    capasDatos[num_descarga].CargarCapaDatos();
    $("#forma_"+num_descarga).prop("checked", true);
  } else if (capasDatos[num_descarga].active == 1) {
    capasDatos[num_descarga].active = 2;
    capasDatos[num_descarga].capa.addTo(map);
    $("#forma_"+num_descarga).prop("checked", true);
  }
}

function DescargarDatos(id, obj) {
  var num_descarga = parseInt($("#capa_descarga").val());
  const numero_real = num_descarga;
  if (num_descarga > 2){
    num_descarga = 2;
  }
  if (capasDatos[num_descarga].active == 0) {
    alert("Por favor active la capa que desea descargar.")
  } else{
    let filtroDescarga = '';
    let filtrotipo = $("#tipo_descarga").val();
    if (capasDatos[num_descarga].clase == 'estaciones') {
      DescargarDatosJSON(capasDatos[num_descarga].figuras, capasDatos[num_descarga].clase, filtroDescarga, filtrotipo, numero_real )
    }
    else{
      DescargarDatosJSON(capasDatos[num_descarga].database, capasDatos[num_descarga].clase, filtroDescarga, filtrotipo, numero_real )
    }
  }
}

// Función para descargar un archivo
function saveToFile(content, filename) {
  var file = filename + '.json';
  console.log(content)
  saveAs(new File([JSON.stringify(content, getCircularReplacer())], file, {
    type: "text/plain;charset=utf-8"
  }), file);
}

//Función que filtra los datos según el mpio seleccionado y construye el geojson
function DescargarDatosJSON(baseDatos, clase, filtro, filtrotipo, numero_real){
  let capas = L.layerGroup();
  let copiaDatos = {...baseDatos}

  if(clase === "procesos"){
    for (let j = 0; j < copiaDatos["count"]["count"]; j++) {
      if (copiaDatos["feature_"+j]?.activo && copiaDatos["feature_"+j]["layergeojson"]["geometry"]["type"] !== 'LineString') {
        var temp = copiaDatos["feature_"+j]["layergeojson"];
        // if(filtro == "polygon"){
          if(copiaDatos['feature_'+j]["layergeojson"]["geometry"]["type"] == 'Polygon'){
            L.geoJson(temp).addTo(capas);
          }
        // }
        // else {
        //   if(copiaDatos['feature_'+j]["layergeojson"]["geometry"]["type"] == 'Point'){
        //     L.geoJson(temp).addTo(capas);
        //   }
        // }
      }
    }
  }
  else if(clase === "rasgos"){
    for (let j = 0; j < copiaDatos["count"]["count"]; j++) {
      if (copiaDatos["feature_"+j]["activo"] && copiaDatos["feature_"+j]["layergeojson"]["geometry"]["type"] !== 'Polygon') {
        let temp = copiaDatos["feature_"+j]["layergeojson"];
        // if(filtro == "ALL"){
          temp["properties"].COD_MUN = temp["properties"].COD_MUN+"";
          L.geoJson(temp).addTo(capas);
        // }else if(copiaDatos['feature_'+j]["layergeojson"]["properties"].COD_MUN == filtro){
        //   temp["properties"].COD_MUN = temp["properties"].COD_MUN+"";
        //   L.geoJson(temp).addTo(capas);
        // }
      }
    }
  }
  else if(clase === "estaciones"){
    if (numero_real === 2) {
      for (est in copiaDatos) {
        if (copiaDatos[est]!==null) {
          let temp = copiaDatos[est];
          
            L.geoJson(temp).addTo(capas);
          
        }
      }
    }
    else {
      let copiaDatos1 = {...capasDatos["estaciones"].database}

      if(numero_real === 3){
        capas = GenerarCapaVIVIENDA(copiaDatos1)
        clase = 'Viviendas';
      }
      if(numero_real === 4){
        capas = GenerarCapaNombreUGS(copiaDatos1)
        clase = 'UGS';
      }
      if(numero_real === 5){
        capas = GenerarCapaProcesosCampo(copiaDatos1)
        clase = 'Procesos';
      }

    }
  }

  
  console.log(copiaDatos);
  console.log(capas);
  let archivoFinal = capas.toGeoJSON();
  console.log(archivoFinal);
  //Eliminar el campos no deseados
  for(let k= 0; k < archivoFinal.features.length; k++ ){
    delete archivoFinal["features"][k].layer;
    delete archivoFinal["features"][k]["properties"]["_feature"];
    // delete archivoFinal["features"][k]["properties"]["id"];
    delete archivoFinal["features"][k]["properties"]["clase"];
    delete archivoFinal["features"][k]["properties"]["nombreclase"];

    delete archivoFinal["features"][k]["properties"].codigo;
    delete archivoFinal["features"][k]["properties"].descripcion;
    delete archivoFinal["features"][k]["properties"].fecha;
    delete archivoFinal["features"][k]["properties"].nombre;
    delete archivoFinal["features"][k]["properties"].propietario;
    delete archivoFinal["features"][k]["properties"].zona;

    delete archivoFinal["features"][k]["properties"].CR;
    delete archivoFinal["features"][k]["properties"].Visible_25;
    delete archivoFinal["features"][k]["properties"].Propietari;

    // archivoFinal["features"][k]["id"] = k;
  }

  if (filtrotipo === 'shp') {
    var options = {
      folder: 'Capa_'+ clase+ "_" + filtro + '_' +dateFormat(new Date(),'Y-m-d'),
      types: {
          point: clase+ "_" + filtro + '_' +dateFormat(new Date(),'Y-m-d'),
          polygon: clase+ "_" + filtro + '_' +dateFormat(new Date(),'Y-m-d'),
          polyline: clase+ "_" + filtro + '_' +dateFormat(new Date(),'Y-m-d')
      }
    }
    archivoFinal1 = unescape(encodeURIComponent(JSON.stringify(archivoFinal)))
    archivoFinal2 = JSON.parse(archivoFinal1)
    shpwrite.download(archivoFinal2, options);
  } else {
    saveToFile(archivoFinal, 'Capa_'+ clase + "_" + filtro + '_'+dateFormat(new Date(),'Y-m-d')); //Generar el archivo descargable
  }

  capas = null;
  copiaDatos = null;
  
}

// Función para eliminar el error de referencia cíclica de un json
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

// Función que define los popup de las figuras según su clase
function popupFiguras(layer) {
  if (!editMode) {
    if (layer.feature.properties.clase == 'procesos') {
      var tipo;
      if (layer.feature.properties.TIPO_MOV1 == '01') {
        tipo='Deslizamiento';
      }else if (layer.feature.properties.TIPO_MOV1 == '02') {
        tipo='Reptación';
      }else if (layer.feature.properties.TIPO_MOV1 == '03') {
        tipo='Caida';
      }else if (layer.feature.properties.TIPO_MOV1 == '04') {
        tipo='Flujo';
      }else {
        tipo='Tipo no definido';
      }
      if (layer.feature.properties.nombre === undefined) {     
        // console.log(layer.toGeoJSON());   
        auxLayerCentroid = layer.toGeoJSON();
    
        var gradLng = Math.trunc(turf.getCoord(turf.centroid(auxLayerCentroid))[0])
        gradLng = (gradLng<0) ? gradLng*-1 : gradLng;
        var gradLat = Math.trunc(turf.getCoord(turf.centroid(auxLayerCentroid))[1])
        gradLat = (gradLat<0) ? gradLat*-1 : gradLat;
        console.log(gradLng, gradLat);
        var minLng = Math.trunc((turf.getCoord(turf.centroid(auxLayerCentroid))[0]-Math.trunc(turf.getCoord(turf.centroid(auxLayerCentroid))[0]))*60);
        minLng = (minLng<0) ? minLng*-1 : minLng;
        var minLat = Math.trunc((turf.getCoord(turf.centroid(auxLayerCentroid))[1]-Math.trunc(turf.getCoord(turf.centroid(auxLayerCentroid))[1]))*60);
        minLat = (minLat<0) ? minLat*-1 : minLat;
        console.log(minLng, minLat);
        var segLng =Math.trunc((Math.trunc((turf.getCoord(turf.centroid(auxLayerCentroid))[0]-Math.trunc(turf.getCoord(turf.centroid(auxLayerCentroid))[0]))*60) - (turf.getCoord(turf.centroid(auxLayerCentroid))[0]-Math.trunc(turf.getCoord(turf.centroid(auxLayerCentroid))[0]))*60)*60);
        segLng = (segLng<0) ? segLng*-1 : segLng;
        var segLat =Math.trunc((Math.trunc((turf.getCoord(turf.centroid(auxLayerCentroid))[1]-Math.trunc(turf.getCoord(turf.centroid(auxLayerCentroid))[1]))*60) - (turf.getCoord(turf.centroid(auxLayerCentroid))[1]-Math.trunc(turf.getCoord(turf.centroid(auxLayerCentroid))[1]))*60)*60);
        segLat = (segLat<0) ? segLat*-1 : segLat;
        console.log(segLng, segLat);
        var corregidaLgn = '-' + gradLng + '°' + ((minLng<10)? '0'+minLng : minLng) + "'" + ((segLng<10)? '0'+segLng : segLng) + '"';
        var corregidaLat = '0' + gradLat + '°' + ((minLat<10)? '0'+minLat : minLat) + "'" + ((segLat<10)? '0'+segLat : segLat) + '"';
        console.log(corregidaLgn);
        console.log(corregidaLat);
      
        
        return L.Util.template('<p><strong>Clase</strong>: {nombreclase}.<br>'+ 
                              '<strong>ID_MOV</strong>: {ID_MOV}.<br>'+
                              '<strong>Tipo de MM</strong>: '+tipo+'.<br>'+
                              // '<strong>Subtipo</strong>: {SUBTIPO_1}.<br>'+
                              '<strong>ID_PARTE</strong>: {ID_PARTE}.<br>'+
                              '<strong>ID en la Base de Datos</strong>: {id}.<br>'+
                              '<strong>Encuestador</strong>: {ENCUESTAD}.<br>'+
                              '<strong>Centroide</strong>: '+ corregidaLgn + ', ' + corregidaLat +'<br>', layer.feature.properties);
      }else{
        return L.Util.template('<p><strong>Clase</strong>: {nombreclase}.<br>'+ 
                              '<strong>ID_MOV</strong>: {nombre}.<br>'+
                              // '<strong>Propietario</strong>: {propietario}.<br>'+
                              '<strong>ID en la Base de Datos</strong>: {id}.<br>'+
                              '<strong>Esta forma debe ser actualizada con los datos del respectivo formulario</strong>', layer.feature.properties);
      }
  
    }else if (layer.feature.properties.clase == 'geomorfo') {
      return L.Util.template('<p><strong>Clase</strong>: {nombreclase}.<br>'+ 
                              '<strong>Nombre</strong>: {SGMF_NAME}.<br>'+
                              '<strong>ID en la Base de Datos</strong>: {id}.<br>'+
                              '<strong>Propietario</strong>: {Propietario}.<br>', layer.feature.properties);
    }else if (layer.feature.properties.clase == 'rasgos') {
      return L.Util.template('<p><strong>Clase</strong>: {nombreclase}.<br>'+ 
                              '<strong>Nombre</strong>:'+ cod_name_Rasgo[layer.feature.properties.Nom_Rasgo] +'.<br>'+
                              '<strong>ID en la Base de Datos</strong>: {id}.<br>'
                              // '<strong>Propietario</strong>: {Propietario}.<br>'
                              , layer.feature.properties);
    }else if (layer.feature.properties.clase == 'geologia') {
      return L.Util.template( //'<p><strong>Clase</strong>: {nombreclase}.<br>'+ 
                              // '<strong>Nombre UGS</strong>: {Nom_UGS}.<br>'+
                              // '<strong>Tipo de Unidad</strong>: {Tipo}.<br>'+
                              // '<strong>Tipo</strong>: {TipoRocaSuelo}.<br>'+
                              '<strong>ID en la Base de Datos</strong>: {id}.<br>'
                              // '<strong>Propietario</strong>: {Propietario}.<br>'
                              , layer.feature.properties); 
    }else if (layer.feature.properties.clase == 'estructuras') {
      return L.Util.template('<p><strong>Clase</strong>: {nombreclase}.<br>'+ 
                              '<strong>ID en la Base de Datos</strong>: {id}.<br>'+
                              '<strong>Nombre</strong>: {NombreLineamiento}.<br>', layer.feature.properties);
    }else if (layer.feature.properties.clase == 'morfo') {
      return L.Util.template('<p><strong>Clase</strong>: {nombreclase}.<br>'+ 
                              '<strong>{Forma}</strong><br>'+
                              '<strong>ID en la Base de Datos</strong>: {id}.<br>'+
                              '<strong>Propietario</strong>: {Propietario}.<br>', layer.feature.properties);
    }
  }
}


function popupEstaciones(layer) {
  console.log(layer.feature.layer._latlng);
  if (!editMode) {

    var feature =  capasDatos["estaciones"].database["estacion_"+layer.feature.properties.id];

    if(feature["Formularios"].count_UGS_Rocas>0){
      for (let j = 0; j < feature["Formularios"].count_UGS_Rocas; j++) {
        if (feature["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+j].activo) {
          var formato = feature["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+j]; 
          if (formato["gsi"] !== undefined) {
            var calificacion = "";
            switch (formato["gsi"]) {
              case "0-20":
                calificacion = "Muy Mala";
                break;
              case "20-40":
                calificacion = "Mala";
                break;
              case "40-60":
                calificacion = "Regular";
                break;
              case "60-80":
                calificacion = "Buena";
                break;
              case "80-100":
                calificacion = "Muy Buena";
                break;
              default:
                calificacion = "No Aplica";
                break;
            }

            return L.Util.template( '<p><strong>Estacion</strong>: '+layer.feature.properties.Estacion+'.<br>'+ 
                            '<strong>TipoEstacion</strong>: '+layer.feature.properties.TipoEstacion+'.<br>'+
                            '<strong>Formatos</strong>: '+layer.feature.properties.Formatos+'.<br>'+
                            '<strong>Propietario</strong>: '+layer.feature.properties.Propietario+'.<br>'+
                            '<strong>Observaciones</strong>: '+layer.feature.properties.Observaciones+'.<br>'+
                            '<strong>Fecha</strong>: '+layer.feature.properties.Fecha+'.<br>'+
                            '<strong>['+layer.feature.properties.Norte+', '+layer.feature.properties.Este+']</strong><br>'+
                            '<strong>Altitud</strong>: '+layer.feature.properties.Altitud+'.<br>'+
                            '<strong>ID en la base de datos</strong>: '+layer.feature.properties.id+'.<br>'+
                            '<strong>Calidad de la Roca</strong>: '+calificacion+', (GSI:'+ formato["gsi"] +').<br>'+
                            '<strong><button class="btn btn-comun" data-toggle="modal" data-target="#modal-estaciones" data-whatever="'+layer.feature.properties.id+'_'+ layer.feature.layer._latlng.lat +'_'+ layer.feature.layer._latlng.lng +'">Ver Detalles de la Estación</button></strong><br>', layer.feature.properties);
          }
        }
        else{
          return L.Util.template( '<p><strong>Estacion</strong>: '+layer.feature.properties.Estacion+'.<br>'+
                                  '<strong>TipoEstacion</strong>: '+layer.feature.properties.TipoEstacion+'.<br>'+
                                  '<strong>Formatos</strong>: '+layer.feature.properties.Formatos+'.<br>'+
                                  '<strong>Propietario</strong>: '+layer.feature.properties.Propietario+'.<br>'+
                                  '<strong>Observaciones</strong>: '+layer.feature.properties.Observaciones+'.<br>'+
                                  '<strong>Fecha</strong>: '+layer.feature.properties.Fecha+'.<br>'+
                                  '<strong>['+layer.feature.properties.Norte+', '+layer.feature.properties.Este+']</strong><br>'+
                                  '<strong>Altitud</strong>: '+layer.feature.properties.Altitud+'.<br>'+
                                  '<strong>ID en la base de datos</strong>: '+layer.feature.properties.id+'.<br>'+
                                  '<strong><button class="btn btn-comun" data-toggle="modal" data-target="#modal-estaciones" data-whatever="'+layer.feature.properties.id+'_'+ layer.feature.layer._latlng.lat +'_'+ layer.feature.layer._latlng.lng +'">Ver Detalles de la Estación</button></strong><br>', layer.feature.properties
                                );
        }
      }
    }
    else if(feature["Formularios"].count_INVENTARIO>0){
      var tipos = "";
      for (let j = 0; j < feature["Formularios"].count_INVENTARIO; j++) {
        if (feature["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+j].activo) {
          var formato = feature["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+j]; 
          if (tipos!=="") {
            tipos += '.<br>';
          }
          tipos += "Inventario: "+formato.ID_PARTE+" Tipo MM 1: "+formato.TIPO_MOV1;
        }
      }
      if (tipos !== "") {
        return L.Util.template( '<p><strong>Estacion</strong>: '+layer.feature.properties.Estacion+'.<br>'+ 
                            '<strong>TipoEstacion</strong>: '+layer.feature.properties.TipoEstacion+'.<br>'+
                            '<strong>Formatos</strong>: '+layer.feature.properties.Formatos+'.<br>'+
                            '<strong>Propietario</strong>: '+layer.feature.properties.Propietario+'.<br>'+
                            '<strong>Observaciones</strong>: '+layer.feature.properties.Observaciones+'.<br>'+
                            '<strong>Fecha</strong>: '+layer.feature.properties.Fecha+'.<br>'+
                            '<strong>['+layer.feature.properties.Norte+', '+layer.feature.properties.Este+']</strong><br>'+
                            '<strong>Altitud</strong>: '+layer.feature.properties.Altitud+'.<br>'+
                            '<strong>ID en la base de datos</strong>: '+layer.feature.properties.id+'.<br>'+
                            '<strong>Tipo de MM 1</strong>: '+tipos+'.<br>'+
                            '<strong><button class="btn btn-comun" data-toggle="modal" data-target="#modal-estaciones" data-whatever="'+layer.feature.properties.id+'_'+ layer.feature.layer._latlng.lat +'_'+ layer.feature.layer._latlng.lng +'">Ver Detalles de la Estación</button></strong><br>', layer.feature.properties);
      }
      else{
        return L.Util.template( '<p><strong>Estacion</strong>: '+layer.feature.properties.Estacion+'.<br>'+
                                '<strong>TipoEstacion</strong>: '+layer.feature.properties.TipoEstacion+'.<br>'+
                                '<strong>Formatos</strong>: '+layer.feature.properties.Formatos+'.<br>'+
                                '<strong>Propietario</strong>: '+layer.feature.properties.Propietario+'.<br>'+
                                '<strong>Observaciones</strong>: '+layer.feature.properties.Observaciones+'.<br>'+
                                '<strong>Fecha</strong>: '+layer.feature.properties.Fecha+'.<br>'+
                                '<strong>['+layer.feature.properties.Norte+', '+layer.feature.properties.Este+']</strong><br>'+
                                '<strong>Altitud</strong>: '+layer.feature.properties.Altitud+'.<br>'+
                                '<strong>ID en la base de datos</strong>: '+layer.feature.properties.id+'.<br>'+
                                '<strong><button class="btn btn-comun" data-toggle="modal" data-target="#modal-estaciones" data-whatever="'+layer.feature.properties.id+'_'+ layer.feature.layer._latlng.lat +'_'+ layer.feature.layer._latlng.lng +'">Ver Detalles de la Estación</button></strong><br>', layer.feature.properties
                              );
      }
    }
    else{
      return L.Util.template( '<p><strong>Estacion</strong>: '+layer.feature.properties.Estacion+'.<br>'+
                              '<strong>TipoEstacion</strong>: '+layer.feature.properties.TipoEstacion+'.<br>'+
                              '<strong>Formatos</strong>: '+layer.feature.properties.Formatos+'.<br>'+
                              '<strong>Propietario</strong>: '+layer.feature.properties.Propietario+'.<br>'+
                              '<strong>Observaciones</strong>: '+layer.feature.properties.Observaciones+'.<br>'+
                              '<strong>Fecha</strong>: '+layer.feature.properties.Fecha+'.<br>'+
                              '<strong>['+layer.feature.properties.Norte+', '+layer.feature.properties.Este+']</strong><br>'+
                              '<strong>Altitud</strong>: '+layer.feature.properties.Altitud+'.<br>'+
                              '<strong>ID en la base de datos</strong>: '+layer.feature.properties.id+'.<br>'+
                              '<strong><button class="btn btn-comun" data-toggle="modal" data-target="#modal-estaciones" data-whatever="'+layer.feature.properties.id+'_'+ layer.feature.layer._latlng.lat +'_'+ layer.feature.layer._latlng.lng +'">Ver Detalles de la Estación</button></strong><br>', layer.feature.properties
                            );
    }
  }
}

$('#modal-estaciones').on('shown.bs.modal', function (e) {
  var button = $(e.relatedTarget) // Button that triggered the modal
  const data = button.data('whatever').split("_");
  const id = data[0];
  const lat = data[1];
  const lng = data[2];
  FotosAnexasFiles = {};
  idsFormatos = {};
  primerForm = true;
  primerForm1 = true;
  $("#myTabs").empty();
  $("#myTabsContent").empty();
  $("#contenedorFotos").empty();
  $("#contenedorFotosLib").empty();

  const feature = estaciones["estacion_" + id];
  var formatos='';

  if(feature["Formularios"].count_UGS_Rocas>0){
    for (let j = 0; j < feature["Formularios"].count_UGS_Rocas; j++) {
      if (feature["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+j].activo) {
        formatos += "UGSR" + feature["Formularios"]["Form_UGS_Rocas"]["Form_UGS_Rocas_"+j].noformato+', '; 
      }
    }
  }
  if(feature["Formularios"].count_UGS_Suelos>0){
    for (let j = 0; j < feature["Formularios"].count_UGS_Suelos; j++) {
      if (feature["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+j].activo) {
        formatos += "UGSS" + feature["Formularios"]["Form_UGS_Suelos"]["Form_UGS_Suelos_"+j].noformato + ', '; 
      }
    }
  }
  if(feature["Formularios"].count_SGMF>0){
    for (let j = 0; j < feature["Formularios"].count_SGMF; j++) {
      if (feature["Formularios"]["Form_SGMF"]["Form_SGMF_"+j].activo) {
        formatos += "SGMF" + feature["Formularios"]["Form_SGMF"]["Form_SGMF_"+j].noformato + ', '; 
      }
    }
  }
  if(feature["Formularios"].count_CATALOGO>0){
    for (let j = 0; j < feature["Formularios"].count_CATALOGO; j++) {
      if (feature["Formularios"]["Form_CATALOGO"]["Form_CATALOGO_"+j].activo) {
        formatos += "CATALOGO_" + feature["Formularios"]["Form_CATALOGO"]["Form_CATALOGO_"+j].ID_PARTE + ', '; 
      }
    }
  }
  if(feature["Formularios"].count_INVENTARIO>0){
    for (let j = 0; j < feature["Formularios"].count_INVENTARIO; j++) {
      if (feature["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+j].activo) {
        formatos += "INVENTARIO_" + feature["Formularios"]["Form_INVENTARIO"]["Form_INVENTARIO_"+j].ID_PARTE + ', '; 
      }
    }
  }

  if ((formatos == '')) {
    formatos = "Ninguno";
  }else{
    formatos = formatos.substring(0, formatos.length - 2);
  }

  $("#id-edit-estaciones").html("Registro con ID "+ id)
  // pasa las celdas capturadas al form modal de rasgos para su edicion
  $("#estaciones-id").val(id);
  $('#est-fecha-1').val(feature.Fecha);        
  $('#est-estacion-1').val(feature.Estacion);
  $('#est-tipoEstacion-1').val(feature.TipoEstacion);                
  $('#est-formatos-1').val(formatos);
  $('#est-norte-1').val(lat);
  $('#est-este-1').val(lng);
  $('#est-altura-1').val(feature.Altitud);
  $('#est-fotos-1').val(feature.Fotos);
  $('#est-fotosLib-1').val(feature.FotosLib);
  $('#est-observaciones-1').val(feature.Observaciones);
  if (feature.TextoLibreta !== undefined) {
    $('#est-textollib-1').val(feature.TextoLibreta);
  }
  else{
    $('#est-textollib-1').val("");
  }
  $('#est-propietario-3').val(feature.Propietario);

  $("#btnModalEditar").val(id);

  GraficarEstacion(true, id, false);
});

$("#btnModalEditar").click(function (e) { 
  e.preventDefault();

  const id = $("#btnModalEditar").val();

  let idEstaciones = $.trim($('#estaciones-id').val()); 
  let fechaEst = $.trim($('#est-fecha-1').val());
  let EstacionEst = $.trim($('#est-estacion-1').val()); 
  let tipoEstacionEst  = $.trim($('#est-tipoEstacion-1').val());
  // let formatoEst = $.trim($('#est-formatos-1').val());
  let norteEst = $.trim($('#est-norte-1').val());
  let esteEst = $.trim($('#est-este-1').val());
  let alturaEst = $.trim($('#est-altura-1').val());
  let fotosEst = $.trim($('#est-fotos-1').val());
  let fotosLibEst = $.trim($('#est-fotosLib-1').val());
  let observaEst = $.trim($('#est-observaciones-1').val());
  let textoLibreta = $.trim($('#est-textollib-1').val());
  let propietarioEst = $.trim($('#est-propietario-3').val());

  var datosEnvio = {
    activo : true,
    Fecha: fechaEst,
    Estacion : EstacionEst,
    TipoEstacion : tipoEstacionEst,
    Norte : norteEst,
    Este : esteEst,
    Altitud : alturaEst,
    Fotos  : fotosEst,
    FotosLib  : fotosLibEst,
    Observaciones : observaEst,
    TextoLibreta : textoLibreta,
    Propietario : propietarioEst
  }

  if (estaciones['estacion_'+id]['FotosGenerales'] !== undefined) {
    datosEnvio['FotosGenerales'] = estaciones['estacion_'+id]['FotosGenerales'];
  }
  if (estaciones['estacion_'+id]['FotosLibreta'] !== undefined) {
    datosEnvio['FotosLibreta'] = estaciones['estacion_'+id]['FotosLibreta'];
  }
  datosEnvio['Formularios'] = GuardarEstacion(true, id);
  console.log(datosEnvio);
  delete datosEnvio.Tipo;
            
  database.ref().child('EstacionesCampo/estacion_'+id).update(datosEnvio); 
  estaciones['estacion_'+id] = datosEnvio;

  SubirFotosAnexas(id, true);

  $('#modal-estaciones').modal('hide');

  notification.success('Listo','Se ha actualizado exitosamente la estación '+id)
  
});

$('#addEstacionModal').on('shown.bs.modal', function (e) {
  var button = $(e.relatedTarget) // Button that triggered the modal
  const data = button.data('whatever').split("_");
  const id = data[0];
  const lat = data[1];
  const lng = data[2];
  FotosAnexasFiles = {};
  idsFormatos = {};
  primerForm = true;
  primerForm1 = true;
  $("#myTabsAdd").empty();
  $("#myTabsContentAdd").empty();
  $("#add-contenedorFotos").empty();
  $("#add-contenedorFotosLib").empty();
  $("#id-edit-estaciones").html("Registro con ID Nuevo")
  $('#add-est-norte-1').val(lat);
  $('#add-est-este-1').val(lng);
  $('#add-est-propietario-3').val(uname);
  $("#btnModalAdd").val(id);
});

$("#btnModalAdd").click(function (e) { 
  e.preventDefault();

  database.ref().child("EstacionesCampo/cont/cont").get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val())
      let idEstaciones = snapshot.val();
      let fechaEst = $.trim($('#add-est-fecha-1').val());
      let EstacionEst = $.trim($('#add-est-estacion-1').val()); 
      let tipoEstacionEst  = $.trim($('#add-est-tipoEstacion-1').val());
      // let formatoEst = $.trim($('#add-est-formatos-1').val());
      let norteEst = $.trim($('#add-est-norte-1').val());
      let esteEst = $.trim($('#add-est-este-1').val());
      let alturaEst = $.trim($('#add-est-altura-1').val());
      let fotosEst = $.trim($('#add-est-fotos-1').val());
      let fotosLibEst = $.trim($('#add-est-fotosLib-1').val());
      let observaEst = $.trim($('#add-est-observaciones-1').val());
      let textoLibreta = $.trim($('#add-est-textollib-1').val());
      let propietarioEst = $.trim($('#add-est-propietario-3').val());

      var datosEnvio = {
        activo : true,
        Fecha: fechaEst,
        Estacion : EstacionEst,
        TipoEstacion : tipoEstacionEst,
        Norte : norteEst,
        Este : esteEst,
        Altitud : alturaEst,
        Fotos  : fotosEst,
        FotosLib  : fotosLibEst,
        Observaciones : observaEst,
        TextoLibreta : textoLibreta,
        Propietario : propietarioEst
      }
                
      datosEnvio['Formularios'] = GuardarEstacion(false, 0);
      
      console.log(datosEnvio);
      delete datosEnvio.Tipo;

      database.ref().child(`EstacionesCampo/estacion_${idEstaciones}`).set(datosEnvio); 

      
      estaciones["estacion_"+idEstaciones] = datosEnvio;

      SubirFotosAnexas(idEstaciones, false);
      console.log(estaciones);
      
      notice(`Se ha guardado exitosamente el registro ${idEstaciones} en la base de datos`, {
        type: 'success', 
        position: 'topcenter', 
        appendType: 'append',
        closeBtn: false,
        autoClose: 4000,
        className: '',
      });

      idEstaciones++;
      database.ref().child(`EstacionesCampo/cont/cont`).set(idEstaciones); 
      
      $('#addEstacionModal').modal('hide');

    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    $("#cargando-tabla-procesos .spinner-msj").html("Hubo un problema en el servidor al tratar de guardar los datos de la estación. Recargue la página e inténtelo de nuevo. ")
    console.error(error);
  });

  
  
});

$('#add-est-btn').click(function (e) { 
  e.preventDefault();
  GraficarEstacion(false, 0, false);    
});
$('#add-est-btn-edit').click(function (e) { 
  const id = $("#btnModalEditar").val();
  console.log(id);
  e.preventDefault();
  GraficarEstacion(false, id, true);  
});

var auxCapaQuery = false;

$("#ejecutar-query").click(function(e){
  e.preventDefault();
  if (auxCapaQuery) {
    map.removeLayer(capasEst[6].capa);
    capasEst[6].capa = L.layerGroup();
  }
  var estQuery = QueryEjecutarVisor(capasDatos["estaciones"].database);
  for (let i = 0; i < estQuery.length; i++) {
    var estaci = capasDatos["estaciones"].database["estacion_"+estQuery[i]];
    var point = L.marker([estaci['Norte'], estaci['Este']]).toGeoJSON();
    var auxmarker;
    var auxFormatosPopUp = "";
    var auxcapa = ""
    var auxtipo = estaci['TipoEstacion'];
    var auxtipoup = auxtipo.toUpperCase();
    if (auxtipoup.includes('UGS')){
      auxcapa = "ugs"
    }
    // else if (auxtipoup.includes('VIVIENDA')){
    //   auxcapa = "vivienda"
    // }
    else if (auxtipoup.includes('SGMF')){
      auxcapa = "sgmf"
    }
    // else if (auxtipoup.includes('CMM') || auxtipoup.includes('CATÁLOGO') || auxtipoup.includes('CATALOGO')){
    //   auxcapa = "cat"
    // }
    else if (auxtipoup.includes('IMM') || auxtipoup.includes('INVENTARIO')){
      auxcapa = "inv"
    }
    else{
      auxcapa = "otro"
    }

    if ( (auxtipo.includes('Punto') || auxtipo.includes('punto') ) && (auxtipo.includes('UGS') || auxtipo.includes('ugs'))) {
      auxmarker = markerControlUGS;
    }
    else if ( (auxtipo.includes('Punto') || auxtipo.includes('punto') ) && (auxtipo.includes('SGMF') || auxtipo.includes('sgmf'))) {
      auxmarker = markerControlSGMF;
    }
    else if (auxtipo.includes('SGMF') || auxtipo.includes('sgmf') || estaci['Propietario'] ==="Maria Areiza Rodríguez") {
      auxmarker = markerControlSGMF;
    }
    else if (auxtipo.includes('UGS') || auxtipo.includes('ugs') ) {
      auxmarker = markerControlUGS;
    }
    else if (auxtipoup.includes('IMM')) {
      auxmarker = markerInv;
    }
    else if (auxtipoup.includes('VIVIENDA')) {
      auxmarker = markerViv;
    }

    if (estaci['Formularios']['count_UGS_Rocas']>0) {
      for (let k = 0; k < estaci['Formularios']['count_UGS_Rocas']; k++) {
        auxFormatosPopUp += 'UGSR' + estaci['Formularios']['Form_UGS_Rocas']['Form_UGS_Rocas_'+k]['noformato'] + ', ';   
      }
      auxmarker = markerUGSR;
      auxcapa = "ugs"
    }
    if (estaci['Formularios']['count_UGS_Suelos']>0) {
      for (let k = 0; k < estaci['Formularios']['count_UGS_Suelos']; k++) {
        auxFormatosPopUp += 'UGSS' + estaci['Formularios']['Form_UGS_Suelos']['Form_UGS_Suelos_'+k]['noformato'] + ', ';   
      }
      auxmarker = markerUGSS;
      auxcapa = "ugs"
    }
    if (estaci['Formularios']['count_SGMF']>0) {
      for (let k = 0; k < estaci['Formularios']['count_SGMF']; k++) {
        auxFormatosPopUp += 'SGMF' + estaci['Formularios']['Form_SGMF']['Form_SGMF_'+k]['noformato'] + ', ';   
      }
      auxmarker = markerSGMF;
      auxcapa = "sgmf"
    }
    if (estaci['Formularios']['count_CATALOGO']>0) {
      for (let k = 0; k < estaci['Formularios']['count_CATALOGO']; k++) {
        auxFormatosPopUp += 'CATALOGO_' + estaci['Formularios']['Form_CATALOGO']['Form_CATALOGO_'+k]['ID_PARTE'] + ', ';   
      }
      auxmarker = markerCat;
      auxcapa = "cat"
    }
    if (estaci['Formularios']['count_INVENTARIO']>0) {
      for (let k = 0; k < estaci['Formularios']['count_INVENTARIO']; k++) {
        auxFormatosPopUp += 'INVENTARIO_' + estaci['Formularios']['Form_INVENTARIO']['Form_INVENTARIO_'+k]['ID_PARTE'] + ', ';   
      }
      auxmarker = markerInv;
      auxcapa = "inv"
    }
    if (estaci['Formularios']['count_VIVIENDA']>0) {
      for (let k = 0; k < estaci['Formularios']['count_VIVIENDA']; k++) {
        auxFormatosPopUp += 'VIVIENDA_' + estaci['Formularios']['Form_VIVIENDA']['Form_VIVIENDA_'+k]['idformatoValpa'] + ', ';   
      }
      auxmarker = markerViv;
      auxcapa = "vivienda"
    }

    L.extend(point.properties, {
      id: estQuery[i],
      Estacion: estaci['Estacion'],
      Fecha: estaci['Fecha'],
      TipoEstacion: estaci['TipoEstacion'],
      Propietario: estaci['Propietario'],
      Observaciones: estaci['Observaciones'],
      Este: estaci['Este'],
      Norte: estaci['Norte'],
      Altitud: estaci['Altitud'],
      Formatos: auxFormatosPopUp
    });
    capasEst[4].figuras.push(point);
    // console.log(i);
    var puntico = L.geoJson(point,{
        onEachFeature: function (feature, layer) {
          feature.layer = layer;
          layer.bindPopup(popupEstaciones);
          layer.setIcon(auxmarker);
        }
      })
      .bindPopup(popupEstaciones)
      .addTo(capasEst[4].capa)
      .addTo(allData); 

  }
  capasEst[4].capa.addTo(map);
  capasEst[4].active = 2;
  auxCapaQuery = true;
  $('#id-Query-Estaciones').modal('hide');
  $("#est_4").prop("checked", true);
})

