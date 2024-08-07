! function (t, i) {
    "object" == typeof exports && "undefined" != typeof module ? i(exports, require("leaflet")) : "function" == typeof define && define.amd ? define(["exports", "leaflet"], i) : i((t.L = t.L || {}, t.L.esri = t.L.esri || {}, t.L.esri.Renderers = t.L.esri.Renderers || {}), t.L)
}(this, function (t, i) {
    "use strict";

    function e(t, i) {
        return new b(t, i)
    }

    function s(t, i) {
        return new v(t, i)
    }

    function o(t, i) {
        return new g(t, i)
    }

    function n(t, i) {
        return new L(t, i)
    }

    function r(t, i) {
        return new z(t, i)
    }

    function l(t, i) {
        return new P(t, i)
    }
    i = "default" in i ? i["default"] : i;
    var a = "2.0.2",
        h = i.Class.extend({
            initialize: function (t, i) {
                this._symbolJson = t, this.val = null, this._styles = {}, this._isDefault = !1, this._layerTransparency = 1, i && i.layerTransparency && (this._layerTransparency = 1 - i.layerTransparency / 100)
            },
            pixelValue: function (t) {
                return 1.333 * t
            },
            colorValue: function (t) {
                return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")"
            },
            alphaValue: function (t) {
                var i = t[3] / 255;
                return i * this._layerTransparency
            },
            getSize: function (t, i) {
                var e = t.properties,
                    s = i.field,
                    o = 0,
                    n = null;
                if (s) {
                    n = e[s];
                    var r, l = i.minSize,
                        a = i.maxSize,
                        h = i.minDataValue,
                        y = i.maxDataValue,
                        u = i.normalizationField,
                        _ = e ? parseFloat(e[u]) : void 0;
                    if (null === n || u && (isNaN(_) || 0 === _)) return null;
                    isNaN(_) || (n /= _), null !== l && null !== a && null !== h && null !== y && (h >= n ? o = l : n >= y ? o = a : (r = (n - h) / (y - h), o = l + r * (a - l))), o = isNaN(o) ? 0 : o
                }
                return o
            },
            getColor: function (t, i) {
                if (!(t.properties && i && i.field && i.stops)) return null;
                var e, s, o, n, r = t.properties,
                    l = r[i.field],
                    a = i.normalizationField,
                    h = r ? parseFloat(r[a]) : void 0;
                if (null === l || a && (isNaN(h) || 0 === h)) return null;
                if (isNaN(h) || (l /= h), l <= i.stops[0].value) return i.stops[0].color;
                var y = i.stops[i.stops.length - 1];
                if (l >= y.value) return y.color;
                for (var u = 0; u < i.stops.length; u++) {
                    var _ = i.stops[u];
                    if (_.value <= l) e = _.color, o = _.value;
                    else if (_.value > l) {
                        s = _.color, n = _.value;
                        break
                    }
                }
                if (!isNaN(o) && !isNaN(n)) {
                    var c = n - o;
                    if (c > 0) {
                        var f = (l - o) / c;
                        if (f) {
                            var p = (n - l) / c;
                            if (p) {
                                for (var d = [], S = 0; 4 > S; S++) d[S] = Math.round(e[S] * p + s[S] * f);
                                return d
                            }
                            return s
                        }
                        return e
                    }
                }
                return null
            }
        }),
        y = i.Path.extend({
            initialize: function (t, e, s) {
                i.setOptions(this, s), this._size = e, this._latlng = i.latLng(t), this._svgCanvasIncludes()
            },
            _svgCanvasIncludes: function () {},
            _project: function () {
                this._point = this._map.latLngToLayerPoint(this._latlng)
            },
            _update: function () {
                this._map && this._updatePath()
            },
            _updatePath: function () {},
            setLatLng: function (t) {
                return this._latlng = i.latLng(t), this.redraw(), this.fire("move", {
                    latlng: this._latlng
                })
            },
            getLatLng: function () {
                return this._latlng
            },
            setSize: function (t) {
                return this._size = t, this.redraw()
            },
            getSize: function () {
                return this._size
            }
        }),
        u = y.extend({
            initialize: function (t, i, e) {
                y.prototype.initialize.call(this, t, i, e)
            },
            _updatePath: function () {
                this._renderer._updateCrossMarker(this)
            },
            _svgCanvasIncludes: function () {
                i.Canvas.include({
                    _updateCrossMarker: function (t) {
                        var i = t._point,
                            e = t._size / 2,
                            s = this._ctx;
                        s.beginPath(), s.moveTo(i.x, i.y + e), s.lineTo(i.x, i.y - e), this._fillStroke(s, t), s.moveTo(i.x - e, i.y), s.lineTo(i.x + e, i.y), this._fillStroke(s, t)
                    }
                }), i.SVG.include({
                    _updateCrossMarker: function (t) {
                        var e = t._point,
                            s = t._size / 2;
                        i.Browser.vml && (e._round(), s = Math.round(s));
                        var o = "M" + e.x + "," + (e.y + s) + "L" + e.x + "," + (e.y - s) + "M" + (e.x - s) + "," + e.y + "L" + (e.x + s) + "," + e.y;
                        this._setPath(t, o)
                    }
                })
            }
        }),
        _ = function (t, i, e) {
            return new u(t, i, e)
        },
        c = y.extend({
            initialize: function (t, i, e) {
                y.prototype.initialize.call(this, t, i, e)
            },
            _updatePath: function () {
                this._renderer._updateXMarker(this)
            },
            _svgCanvasIncludes: function () {
                i.Canvas.include({
                    _updateXMarker: function (t) {
                        var i = t._point,
                            e = t._size / 2,
                            s = this._ctx;
                        s.beginPath(), s.moveTo(i.x + e, i.y + e), s.lineTo(i.x - e, i.y - e), this._fillStroke(s, t)
                    }
                }), i.SVG.include({
                    _updateXMarker: function (t) {
                        var e = t._point,
                            s = t._size / 2;
                        i.Browser.vml && (e._round(), s = Math.round(s));
                        var o = "M" + (e.x + s) + "," + (e.y + s) + "L" + (e.x - s) + "," + (e.y - s) + "M" + (e.x - s) + "," + (e.y + s) + "L" + (e.x + s) + "," + (e.y - s);
                        this._setPath(t, o)
                    }
                })
            }
        }),
        f = function (t, i, e) {
            return new c(t, i, e)
        },
        p = y.extend({
            options: {
                fill: !0
            },
            initialize: function (t, i, e) {
                y.prototype.initialize.call(this, t, i, e)
            },
            _updatePath: function () {
                this._renderer._updateSquareMarker(this)
            },
            _svgCanvasIncludes: function () {
                i.Canvas.include({
                    _updateSquareMarker: function (t) {
                        var i = t._point,
                            e = t._size / 2,
                            s = this._ctx;
                        s.beginPath(), s.moveTo(i.x + e, i.y + e), s.lineTo(i.x - e, i.y + e), s.lineTo(i.x - e, i.y - e), s.lineTo(i.x + e, i.y - e), s.closePath(), this._fillStroke(s, t)
                    }
                }), i.SVG.include({
                    _updateSquareMarker: function (t) {
                        var e = t._point,
                            s = t._size / 2;
                        i.Browser.vml && (e._round(), s = Math.round(s));
                        var o = "M" + (e.x + s) + "," + (e.y + s) + "L" + (e.x - s) + "," + (e.y + s) + "L" + (e.x - s) + "," + (e.y - s) + "L" + (e.x + s) + "," + (e.y - s);
                        o += i.Browser.svg ? "z" : "x", this._setPath(t, o)
                    }
                })
            }
        }),
        d = function (t, i, e) {
            return new p(t, i, e)
        },
        S = y.extend({
            options: {
                fill: !0
            },
            initialize: function (t, i, e) {
                y.prototype.initialize.call(this, t, i, e)
            },
            _updatePath: function () {
                this._renderer._updateDiamondMarker(this)
            },
            _svgCanvasIncludes: function () {
                i.Canvas.include({
                    _updateDiamondMarker: function (t) {
                        var i = t._point,
                            e = t._size / 2,
                            s = this._ctx;
                        s.beginPath(), s.moveTo(i.x, i.y + e), s.lineTo(i.x - e, i.y), s.lineTo(i.x, i.y - e), s.lineTo(i.x + e, i.y), s.closePath(), this._fillStroke(s, t)
                    }
                }), i.SVG.include({
                    _updateDiamondMarker: function (t) {
                        var e = t._point,
                            s = t._size / 2;
                        i.Browser.vml && (e._round(), s = Math.round(s));
                        var o = "M" + e.x + "," + (e.y + s) + "L" + (e.x - s) + "," + e.y + "L" + e.x + "," + (e.y - s) + "L" + (e.x + s) + "," + e.y;
                        o += i.Browser.svg ? "z" : "x", this._setPath(t, o)
                    }
                })
            }
        }),
        m = function (t, i, e) {
            return new S(t, i, e)
        },
        b = h.extend({
            statics: {
                MARKERTYPES: ["esriSMSCircle", "esriSMSCross", "esriSMSDiamond", "esriSMSSquare", "esriSMSX", "esriPMS"]
            },
            initialize: function (t, i) {
                if (h.prototype.initialize.call(this, t, i), i && (this.serviceUrl = i.url), t)
                    if ("esriPMS" === t.type) {
                        var e = this.serviceUrl + "images/" + this._symbolJson.url;
                        this._iconUrl = i && i.token ? e + "?token=" + i.token : e, this._icons = {}, this.icon = this._createIcon(this._symbolJson)
                    } else this._fillStyles()
            },
            _fillStyles: function () {
                this._symbolJson.outline && this._symbolJson.size > 0 ? (this._styles.stroke = !0, this._styles.weight = this.pixelValue(this._symbolJson.outline.width), this._styles.color = this.colorValue(this._symbolJson.outline.color), this._styles.opacity = this.alphaValue(this._symbolJson.outline.color)) : this._styles.stroke = !1, this._symbolJson.color ? (this._styles.fillColor = this.colorValue(this._symbolJson.color), this._styles.fillOpacity = this.alphaValue(this._symbolJson.color)) : this._styles.fillOpacity = 0, "esriSMSCircle" === this._symbolJson.style && (this._styles.radius = this.pixelValue(this._symbolJson.size) / 2)
            },
            _createIcon: function (t) {
                var e = this.pixelValue(t.width),
                    s = e;
                t.height && (s = this.pixelValue(t.height));
                var o = e / 2,
                    n = s / 2;
                t.xoffset && (o += this.pixelValue(t.xoffset)), t.yoffset && (n += this.pixelValue(t.yoffset));
                var r = i.icon({
                    iconUrl: this._iconUrl,
                    iconSize: [e, s],
                    iconAnchor: [o, n]
                });
                return this._icons[t.width.toString()] = r, r
            },
            _getIcon: function (t) {
                var i = this._icons[t.toString()];
                return i || (i = this._createIcon({
                    width: t
                })), i
            },
            pointToLayer: function (t, e, s, o) {
                var n = this._symbolJson.size || this._symbolJson.width;
                if (!this._isDefault) {
                    if (s.sizeInfo) {
                        var r = this.getSize(t, s.sizeInfo);
                        r && (n = r)
                    }
                    if (s.colorInfo) {
                        var l = this.getColor(t, s.colorInfo);
                        l && (this._styles.fillColor = this.colorValue(l), this._styles.fillOpacity = this.alphaValue(l))
                    }
                }
                if ("esriPMS" === this._symbolJson.type) {
                    var a = i.extend({}, {
                        icon: this._getIcon(n)
                    }, o);
                    return i.marker(e, a)
                }
                switch (n = this.pixelValue(n), this._symbolJson.style) {
                    case "esriSMSSquare":
                        return d(e, n, i.extend({}, this._styles, o));
                    case "esriSMSDiamond":
                        return m(e, n, i.extend({}, this._styles, o));
                    case "esriSMSCross":
                        return _(e, n, i.extend({}, this._styles, o));
                    case "esriSMSX":
                        return f(e, n, i.extend({}, this._styles, o))
                }
                return this._styles.radius = n / 2, i.circleMarker(e, i.extend({}, this._styles, o))
            }
        }),
        v = h.extend({
            statics: {
                LINETYPES: ["esriSLSDash", "esriSLSDot", "esriSLSDashDotDot", "esriSLSDashDot", "esriSLSSolid"]
            },
            initialize: function (t, i) {
                h.prototype.initialize.call(this, t, i), this._fillStyles()
            },
            _fillStyles: function () {
                if (this._styles.lineCap = "butt", this._styles.lineJoin = "miter", this._styles.fill = !1, this._styles.weight = 0, !this._symbolJson) return this._styles;
                if (this._symbolJson.color && (this._styles.color = this.colorValue(this._symbolJson.color), this._styles.opacity = this.alphaValue(this._symbolJson.color)), !isNaN(this._symbolJson.width)) {
                    this._styles.weight = this.pixelValue(this._symbolJson.width);
                    var t = [];
                    switch (this._symbolJson.style) {
                        case "esriSLSDash":
                            t = [4, 3];
                            break;
                        case "esriSLSDot":
                            t = [1, 3];
                            break;
                        case "esriSLSDashDot":
                            t = [8, 3, 1, 3];
                            break;
                        case "esriSLSDashDotDot":
                            t = [8, 3, 1, 3, 1, 3]
                    }
                    if (t.length > 0) {
                        for (var i = 0; i < t.length; i++) t[i] *= this._styles.weight;
                        this._styles.dashArray = t.join(",")
                    }
                }
            },
            style: function (t, i) {
                if (!this._isDefault && i) {
                    if (i.sizeInfo) {
                        var e = this.pixelValue(this.getSize(t, i.sizeInfo));
                        e && (this._styles.weight = e)
                    }
                    if (i.colorInfo) {
                        var s = this.getColor(t, i.colorInfo);
                        s && (this._styles.color = this.colorValue(s), this._styles.opacity = this.alphaValue(s))
                    }
                }
                return this._styles
            }
        }),
        g = h.extend({
            statics: {
                POLYGONTYPES: ["esriSFSSolid"]
            },
            initialize: function (t, i) {
                h.prototype.initialize.call(this, t, i), t && (this._lineStyles = s(t.outline, i).style(), this._fillStyles())
            },
            _fillStyles: function () {
                if (this._lineStyles)
                    if (0 === this._lineStyles.weight) this._styles.stroke = !1;
                    else
                        for (var t in this._lineStyles) this._styles[t] = this._lineStyles[t];
                this._symbolJson && (this._symbolJson.color && g.POLYGONTYPES.indexOf(this._symbolJson.style >= 0) ? (this._styles.fill = !0, this._styles.fillColor = this.colorValue(this._symbolJson.color), this._styles.fillOpacity = this.alphaValue(this._symbolJson.color)) : (this._styles.fill = !1, this._styles.fillOpacity = 0))
            },
            style: function (t, i) {
                if (!this._isDefault && i && i.colorInfo) {
                    var e = this.getColor(t, i.colorInfo);
                    e && (this._styles.fillColor = this.colorValue(e), this._styles.fillOpacity = this.alphaValue(e))
                }
                return this._styles
            }
        }),
        x = i.Class.extend({
            options: {
                proportionalPolygon: !1,
                clickable: !0
            },
            initialize: function (t, e) {
                this._rendererJson = t, this._pointSymbols = !1, this._symbols = [], this._visualVariables = this._parseVisualVariables(t.visualVariables), i.Util.setOptions(this, e)
            },
            _parseVisualVariables: function (t) {
                var i = {};
                if (t)
                    for (var e = 0; e < t.length; e++) i[t[e].type] = t[e];
                return i
            },
            _createDefaultSymbol: function () {
                this._rendererJson.defaultSymbol && (this._defaultSymbol = this._newSymbol(this._rendererJson.defaultSymbol), this._defaultSymbol._isDefault = !0)
            },
            _newSymbol: function (t) {
                return "esriSMS" === t.type || "esriPMS" === t.type ? (this._pointSymbols = !0, e(t, this.options)) : "esriSLS" === t.type ? s(t, this.options) : "esriSFS" === t.type ? o(t, this.options) : void 0
            },
            _getSymbol: function () {},
            attachStylesToLayer: function (t) {
                this._pointSymbols ? t.options.pointToLayer = i.Util.bind(this.pointToLayer, this) : (t.options.style = i.Util.bind(this.style, this), t._originalStyle = t.options.style)
            },
            pointToLayer: function (t, e) {
                var s = this._getSymbol(t);
                return s && s.pointToLayer ? s.pointToLayer(t, e, this._visualVariables, this.options) : i.circleMarker(e, {
                    radius: 0,
                    opacity: 0
                })
            },
            style: function (t) {
                var i;
                this.options.userDefinedStyle && (i = this.options.userDefinedStyle(t));
                var e = this._getSymbol(t);
                return e ? this.mergeStyles(e.style(t, this._visualVariables), i) : this.mergeStyles({
                    opacity: 0,
                    fillOpacity: 0
                }, i)
            },
            mergeStyles: function (t, i) {
                var e, s = {};
                for (e in t) t.hasOwnProperty(e) && (s[e] = t[e]);
                if (i)
                    for (e in i) i.hasOwnProperty(e) && (s[e] = i[e]);
                return s
            }
        }),
        L = x.extend({
            initialize: function (t, i) {
                x.prototype.initialize.call(this, t, i), this._createSymbol()
            },
            _createSymbol: function () {
                this._rendererJson.symbol && this._symbols.push(this._newSymbol(this._rendererJson.symbol))
            },
            _getSymbol: function () {
                return this._symbols[0]
            }
        }),
        z = x.extend({
            initialize: function (t, i) {
                x.prototype.initialize.call(this, t, i), this._field = this._rendererJson.field, this._rendererJson.normalizationType && "esriNormalizeByField" === this._rendererJson.normalizationType && (this._normalizationField = this._rendererJson.normalizationField), this._createSymbols()
            },
            _createSymbols: function () {
                var t, i = this._rendererJson.classBreakInfos;
                this._symbols = [];
                for (var e = i.length - 1; e >= 0; e--) t = this.options.proportionalPolygon && this._rendererJson.backgroundFillSymbol ? this._newSymbol(this._rendererJson.backgroundFillSymbol) : this._newSymbol(i[e].symbol), t.val = i[e].classMaxValue, this._symbols.push(t);
                this._symbols.sort(function (t, i) {
                    return t.val > i.val ? 1 : -1
                }), this._createDefaultSymbol(), this._maxValue = this._symbols[this._symbols.length - 1].val
            },
            _getSymbol: function (t) {
                var i = t.properties[this._field];
                if (this._normalizationField) {
                    var e = t.properties[this._normalizationField];
                    if (isNaN(e) || 0 === e) return this._defaultSymbol;
                    i /= e
                }
                if (i > this._maxValue) return this._defaultSymbol;
                for (var s = this._symbols[0], o = this._symbols.length - 1; o >= 0 && !(i > this._symbols[o].val); o--) s = this._symbols[o];
                return s
            }
        }),
        P = x.extend({
            initialize: function (t, i) {
                x.prototype.initialize.call(this, t, i), this._field = this._rendererJson.field1, this._createSymbols()
            },
            _createSymbols: function () {
                for (var t, i = this._rendererJson.uniqueValueInfos, e = i.length - 1; e >= 0; e--) t = this._newSymbol(i[e].symbol), t.val = i[e].value, this._symbols.push(t);
                this._createDefaultSymbol()
            },
            _getSymbol: function (t) {
                var i = t.properties[this._field];
                if (this._rendererJson.fieldDelimiter && this._rendererJson.field2) {
                    var e = t.properties[this._rendererJson.field2];
                    if (e) {
                        i += this._rendererJson.fieldDelimiter + e;
                        var s = t.properties[this._rendererJson.field3];
                        s && (i += this._rendererJson.fieldDelimiter + s)
                    }
                }
                for (var o = this._defaultSymbol, n = this._symbols.length - 1; n >= 0; n--) this._symbols[n].val == i && (o = this._symbols[n]);
                return o
            }
        });
    i.esri.FeatureLayer.addInitHook(function () {
        if (!this.options.ignoreRenderer) {
            var t = i.Util.bind(this.onAdd, this),
                e = i.Util.bind(this.unbindPopup, this),
                s = i.Util.bind(this.onRemove, this);
            i.Util.bind(this.createNewLayer, this), this.metadata(function (t, i) {
                t || (i && i.drawingInfo && this._setRenderers(i), this._alreadyAdded && this.setStyle(this._originalStyle))
            }, this), this.onAdd = function (i) {
                t(i), this._addPointLayer(i), this._alreadyAdded = !0
            }, this.onRemove = function (t) {
                if (s(t), this._pointLayer) {
                    var i = this._pointLayer.getLayers();
                    for (var e in i) t.removeLayer(i[e])
                }
            }, this.unbindPopup = function () {
                if (e(), this._pointLayer) {
                    var t = this._pointLayer.getLayers();
                    for (var i in t) t[i].unbindPopup()
                }
            }, this._addPointLayer = function (t) {
                this._pointLayer && (this._pointLayer.addTo(t), this._pointLayer.bringToFront())
            }, this._createPointLayer = function () {
                if (!this._pointLayer && (this._pointLayer = i.geoJson(), this._pointLayerIds = {}, this._popup)) {
                    var t = function (t, i) {
                        i.bindPopup(this._popup(t, i), this._popupOptions)
                    };
                    this._pointLayer.options.onEachFeature = i.Util.bind(t, this)
                }
            }, this.createNewLayer = function (t) {
                var e = i.GeoJSON.geometryToLayer(t, this.options);
                if (this._hasProportionalSymbols) {
                    var s = this.getPolygonCentroid(t.geometry.coordinates);
                    if (!isNaN(s[0]) && !isNaN(s[0])) {
                        this._createPointLayer();
                        var o = t.id.toString();
                        if (!this._pointLayerIds[o]) {
                            var n = this.getPointJson(t, s);
                            this._pointLayer.addData(n), this._pointLayerIds[o] = !0
                        }
                        this._pointLayer.bringToFront()
                    }
                }
                return e
            }, this.getPolygonCentroid = function (t) {
                var i = t[0][0];
                2 === i.length && (i = t[0]);
                for (var e, s, o, n = 0, r = 0, l = 0, a = i.length, h = 0, y = a - 1; a > h; y = h++) e = i[h], s = i[y], n += e[0] * s[1], n -= e[1] * s[0], o = e[0] * s[1] - s[0] * e[1], r += (e[0] + s[0]) * o, l += (e[1] + s[1]) * o;
                return o = 3 * n, [r / o, l / o]
            }, this.getPointJson = function (t, i) {
                return {
                    type: "Feature",
                    properties: t.properties,
                    id: t.id,
                    geometry: {
                        type: "Point",
                        coordinates: [i[0], i[1]]
                    }
                }
            }, this._checkForProportionalSymbols = function (t, i) {
                if (this._hasProportionalSymbols = !1, "esriGeometryPolygon" === t && (i.backgroundFillSymbol && (this._hasProportionalSymbols = !0), i.classBreakInfos && i.classBreakInfos.length)) {
                    var e = i.classBreakInfos[0].symbol;
                    !e || "esriSMS" !== e.type && "esriPMS" !== e.type || (this._hasProportionalSymbols = !0)
                }
            }, this._setRenderers = function (t) {
                var i, e = t.drawingInfo.renderer,
                    s = {
                        url: this.options.url
                    };
                switch (this.options.token && (s.token = this.options.token), this.options.pane && (s.pane = this.options.pane), t.drawingInfo.transparency && (s.layerTransparency = t.drawingInfo.transparency), this.options.style && (s.userDefinedStyle = this.options.style), e.type) {
                    case "classBreaks":
                        if (this._checkForProportionalSymbols(t.geometryType, e), this._hasProportionalSymbols) {
                            this._createPointLayer();
                            var o = r(e, s);
                            o.attachStylesToLayer(this._pointLayer), s.proportionalPolygon = !0
                        }
                        i = r(e, s);
                        break;
                    case "uniqueValue":
                        i = l(e, s);
                        break;
                    default:
                        i = n(e, s)
                }
                i.attachStylesToLayer(this)
            }
        }
    }), t.VERSION = a, t.Renderer = x, t.SimpleRenderer = L, t.simpleRenderer = n, t.ClassBreaksRenderer = z, t.classBreaksRenderer = r, t.UniqueValueRenderer = P, t.uniqueValueRenderer = l, t.Symbol = h, t.PointSymbol = b, t.pointSymbol = e, t.LineSymbol = v, t.lineSymbol = s, t.PolygonSymbol = g, t.polygonSymbol = o
});
//# sourceMappingURL=esri-leaflet-renderers.js.map