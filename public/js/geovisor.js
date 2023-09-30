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

    CargarDraw();

    CargarSearch();
  });
})();

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

      console.log(turf.getCoord(turf.centroid(geojson)));
      
      
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
    drawPolyline: true,
    drawPolygon: true,
    
    drawRectangle: false,
    drawCircle: false,
    drawCircleMarker: false,
    drawText: false,

    editMode: true,
    dragMode:true,
    cutPolygon:false,
    removalMode: false,
    rotateMode: false
  });
}


// Search

function CargarSearch() {
  searchCtrl = L.control.fuseSearch().addTo(map);
  $("#buscadorContent").append($(".leaflet-fusesearch-panel .content"));
  $(searchCtrl._container).remove();
  $(".content .header").prepend('<i class="fa-solid fa-magnifying-glass-location lupa-search"></i>');
  $(".content .header .close").remove();
}
