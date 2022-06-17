/* eslint-disable */
import TK from '../utils/topology.js';

const T = TK(window, document);

// MapChart函数
((T) => {
  let basicProjection = function(scale) {
    if (isNaN(scale)) {
      scale = 20;
    }
    let translator = function(x, y) {
      return { x: x * scale, y: -y * scale }
    }
    translator.invert = function(x, y) {
      return { x: x / scale, y: -y / scale }
    }
    return translator;
  }

  T.basicProjection = basicProjection;

  let createPolygon = function(coordinates, projection, isMultiPolygon) {
    let path = new T.Path();
    function updateShape (coordinates) {
      if (coordinates.length < 2) {
        throw new Error('coordinates length must be greater than or equal to 2');
        return;
      }
      let coordinate = coordinates[0];
      let p = projection(coordinate[0], coordinate[1]);
      path.moveTo(p.x, p.y);
      let i = 1;
      while (i < coordinates.length) {
        p = projection(coordinates[i][0], coordinates[i][1]);
        path.lineTo(p.x, p.y);
        i++;
      }
      return path;
    }
    if (isMultiPolygon) {
      coordinates.forEach(function(cs) {
        cs.forEach(updateShape);
      });
      return path;
    }
    coordinates.forEach(updateShape);
    return path;
  }
  function updatePolygon (path, coordinates, projection, isMultiPolygon) {
    path = path || new T.Path();
    path.clear();
    function updateShape (coordinates) {
      if (coordinates.length < 2) {
        throw new Error('coordinates length must be greater than or equal to 2');
        return;
      }
      let coordinate = coordinates[0];
      let p = projection(coordinate[0], coordinate[1]);
      path.moveTo(p.x, p.y);
      let i = 1;
      while (i < coordinates.length) {
        p = projection(coordinates[i][0], coordinates[i][1]);
        path.lineTo(p.x, p.y);
        i++;
      }
      return path;
    }
    if (isMultiPolygon) {
      coordinates.forEach(function(cs) {
        cs.forEach(updateShape);
      });
      return path;
    }
    coordinates.forEach(updateShape);
    return path;
  }

  function loadGeoJSON (json, projection, callback, onfinish, scope) {
    if (T.isString(json)) {
      T.loadJSON(json, function(json) {
        loadGeoJSON(json, projection, callback, onfinish, scope);
      }, false);
      return;
    }
    let features = json.features;
    features.forEach(function(feature) {
      callback.call(scope, feature);
    });
    if (onfinish) {
      onfinish.call(scope, scope);
    }
  }

  let MapChart = function(div) {
    T.doSuperConstructor(this, MapChart, arguments);
    this.visibleFilter = function(d) {
      let scale = this.getScale();
      if (d.minScale) {
        if (scale < d.minScale) {
          return false;
        }
      }
      if (d.maxScale) {
        if (scale > d.maxScale) {
          return false;
        }
      }
      return true;
    }.bind(this)

    this.onPropertyChange('scale', function(evt) {
      this.forEach(function(e) {
        e.invalidateVisibility(true);
      })
    }.bind(this))
  }

  MapChart.prototype = {
    _projection: basicProjection(),
    centerElement: function(element) {
      let bounds = this.getUIBounds(element);
      if (bounds) {
        let minScale = Math.min(2, 0.5 * Math.min(this.width / bounds.width, this.height / bounds.height));
        this.centerTo(bounds.cx, bounds.cy, minScale, true);
      }
    },
    getScale: function() {
      return this.scale;
    },
    stylingPolygon: function(polygon) {
      polygon.setStyle(T.Styles.LABEL_ON_TOP, true);
      polygon.setStyle(T.Styles.LABEL_FONT_SIZE, 15);
      polygon.setStyle(T.Styles.LABEL_POSITION, T.Position.CENTER_MIDDLE);
      polygon.setStyle(T.Styles.LAYOUT_BY_PATH, false);
      polygon.setStyle(T.Styles.LABEL_BACKGROUND_COLOR, T.toColor(0xAAFFFFFF));
      polygon.setStyle(T.Styles.LABEL_PADDING, new T.Insets(2, 5));
      polygon.setStyle(T.Styles.LABEL_POINTER, false);
      polygon.setStyle(T.Styles.SHAPE_FILL_COLOR, null);
      polygon.setStyle(T.Styles.SHAPE_STROKE, 2);
    },
    loadGeoJSON: function(geoJSON, params) {
      params = params || {};
      let zIndex = params.zIndex || -1;
      loadGeoJSON(geoJSON, this._projection, function(feature) {
        let geometry = feature.geometry;
        if (!geometry || !geometry.coordinates) {
          return;
        }
        let type = geometry.type;
        let properties = feature.properties;
        let name = properties.name || properties.NAME;
        let element;
        if (type == 'Polygon' || type == 'MultiPolygon') {
          let path = createPolygon(geometry.coordinates, this._projection, type == 'MultiPolygon');
          element = new T.ShapeNode(path);
          element.zIndex = zIndex;
          element.resizable = false;
          element.movable = false;
          this.stylingPolygon(element, properties);
          this.addElement(element);
        } else if (type == 'Point') {
          element = this.createMapNode(name, geometry.coordinates[0], geometry.coordinates[1])
          this.addElement(element);
        }
        if (element) {
          if (name) {
            element.name = name.trim();
          }
          element.set('properties', properties);
        }
        if (params.callback instanceof Function) {
          params.callback.call(this, element, feature);
        }
      }, params.onfinish, this);
    },
    createMapNode: function(name, geoX, geoY) {
      let xy = this.geoToLogical(geoX, geoY);
      return this.createNode(name, xy.x, xy.y);
    },
    createLine: function(coordinates, name) {
      return this.createShape(coordinates, name, true);
    },
    createPolygon: function(coordinates, name) {
      return this.createShape(coordinates, name, false);
    },
    createShape: function(coordinates, name, isLine) {
      if (coordinates.length < 2) {
        throw new Error('coordinates length must be greater than or equal to 2');
        return;
      }
      let shape = new T.ShapeNode(name);
      shape.isLine = isLine;
      shape.setStyle(T.Styles.SHAPE_FILL_COLOR, isLine ? null : T.toColor(0xDDFFFFDD));
      shape.setStyle(T.Styles.SHAPE_STROKE, 3);
      shape.setStyle(T.Styles.SHAPE_STROKE_STYLE, '#0033ff');

      let p = this.geoToLogical(coordinates[0]);
      shape.moveTo(p.x, p.y);
      let i = 1;
      while (i < coordinates.length) {
        p = this.toPixel(coordinates[i]);
        shape.lineTo(p.x, p.y);
        i++;
      }
      if (!isLine) {
        shape.closePath();
      }
      this.graphModel.add(shape);
      return shape;
    },
    defaultMatchType: 'fuzzy',
    getElementByName: function(name, matchType) {
      return this._findElementsBy(true, "name", name, matchType);
    },
    findElementsByName: function(name, matchType) {
      return this._findElementsBy(false, "name", name, matchType);
    },
    getElementBy: function(propertyName, propertyValue, matchType) {
      return this._findElementsBy(true, propertyName, propertyValue, matchType);
    },
    findElementsBy: function(propertyName, propertyValue, matchType) {
      return this._findElementsBy(false, propertyName, propertyValue, matchType);
    },
    _findElementsBy: function(getFirst, propertyName, propertyValue, matchType) {
      let matchFunction = getMatchFunction(matchType || this.defaultMatchType, propertyValue);
      if (!getFirst) {
        let result = [];
      }
      let datas = this.graphModel.datas;
      for (let i = 0, l = datas.length; i < l; i++) {
        let data = datas[i];
        if (matchFunction(data[propertyName])) {
          if (getFirst) {
            return data;
          }
          result.push(data);
        }
      }
      if (!getFirst) {
        return result;
      }
    },
    geoToLogical: function(x, y) {
      if (T.isArray(x)) {
        y = x[1];
        x = x[0];
      }
      return this._projection(x, y);
    },
    logicalToGeo: function(x, y) {
      if (T.isArray(x)) {
        y = x[1];
        x = x[0];
      }
      return this._projection.invert(x, y);
    },
    updateShape: function(shape) {
      let coordinates = shape.coordinates;
      let isLine = shape.isLine;
      if (coordinates.length < 2) {
        throw new Error('coordinates length must be greater than or equal to 2');
        return;
      }
      shape.setLocation(0, 0);
      shape.clear();
      let p = this.geoToLogical(coordinates[0]);
      shape.moveTo(p.x, p.y);
      let i = 1;
      while (i < coordinates.length) {
        p = this.geoToLogical(coordinates[i]);
        shape.lineTo(p.x, p.y);
        i++;
      }
      if (!isLine) {
        shape.closePath();
      }
      return shape;
    },
    updateProjection: function() {
      this.forEach(function(d) {
        if (d instanceof T.ShapeNode) {
          if (!d.coordinates) {
            return;
          }
          this.updateShape(d);
          return;
        }
        if (d instanceof T.Node) {
          let l = d.latLng;
          if (l) {
            d.location = this.geoToLogical(l.lng, l.lat);
          }
        }
      }, this);
    }
  }

  T.extend(MapChart, T.Graph);

  Object.defineProperties(MapChart.prototype, {
    projection: {
      get: function() {
        return this._projection;
      },
      set: function(v) {
        this._projection = v;
        this.updateProjection();
      }
    }
  })

  let MATCH_TYPE_FUZZY = "fuzzy";
  let MATCH_TYPE_EXACT = "exact";
  let MATCH_TYPE_START = "start";

  function getMatchFunction (matchType, v1) {
    if (!T.isString(v1) || matchType == MATCH_TYPE_EXACT) {
      return function(v2) {
        return v1 == v2;
      }
    }
    let reg;
    if (matchType == MATCH_TYPE_START) {
      reg = new RegExp("\\b" + v1, "i");
    } else {
      reg = new RegExp(v1, "i");
    }
    return function(v2) {
      return reg.test(v2);
    }
  }
  T.MapChart = MapChart;
})(T);

// ToPoJson函数
// ----- topojson start https://github.com/topojson/topojson-client v3.1.0 Copyright 2019 Mike Bostock ------ //
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).topojson = e.topojson || {})
}(this, function(e) {
    "use strict";
    function t (e) {
      return e
    }
    function r (e) {
      if (null == e)
        return t;
      var r,
        n,
        o = e.scale[0],
        a = e.scale[1],
        i = e.translate[0],
        c = e.translate[1];
      return function(e, t) {
        t || (r = n = 0);
        var u = 2,
          f = e.length,
          s = new Array(f);
        for (s[0] = (r += e[0]) * o + i, s[1] = (n += e[1]) * a + c; u < f;)
          s[u] = e[u], ++u;
        return s
      }
    }
    function n (e) {
      var t,
        n = r(e.transform),
        o = 1 / 0,
        a = o,
        i = -o,
        c = -o;
      function u (e) {
        (e = n(e))[0] < o && (o = e[0]),
          e[0] > i && (i = e[0]),
          e[1] < a && (a = e[1]),
          e[1] > c && (c = e[1])
      }
      function f (e) {
        switch (e.type) {
          case "GeometryCollection":
            e.geometries.forEach(f);
            break;
          case "Point":
            u(e.coordinates);
            break;
          case "MultiPoint":
            e.coordinates.forEach(u)
        }
      }
      for (t in e.arcs.forEach(function(e) {
        for (var t, r = -1, u = e.length; ++r < u;)
          (t = n(e[r], r))
          [0] < o && (o = t[0]), t[0] > i && (i = t[0]), t[1] < a && (a = t[1]), t[1] > c && (c = t[1])
      }), e.objects) f(e.objects[t]);
      return [o, a, i, c]
    }
    function o (e, t) {
      var r = t.id,
        n = t.bbox,
        o = null == t.properties ? {}
          : t.properties,
        i = a(e, t);
      return null == r && null == n ? {
        type: "Feature",
        properties: o,
        geometry: i
      }
        : null == n ? {
          type: "Feature",
          id: r,
          properties: o,
          geometry: i
        }
          : {
            type: "Feature",
            id: r,
            bbox: n,
            properties: o,
            geometry: i
          }
    }
    function a (e, t) {
      var n = r(e.transform),
        o = e.arcs;
      function a (e, t) {
        t.length && t.pop();
        for (var r = o[e < 0 ? ~e : e], a = 0, i = r.length; a < i; ++a)
          t.push(n(r[a], a));
        e < 0 && function(e, t) {
          for (var r, n = e.length, o = n - t; o < --n;)
            r = e[o], e[o++] = e[n], e[n] = r
        }
          (t, i)
      }
      function i (e) {
        return n(e)
      }
      function c (e) {
        for (var t = [], r = 0, n = e.length; r < n; ++r)
          a(e[r], t);
        return t.length < 2 && t.push(t[0]),
          t
      }
      function u (e) {
        for (var t = c(e); t.length < 4;)
          t.push(t[0]);
        return t
      }
      function f (e) {
        return e.map(u)
      }
      return function e (t) {
        var r,
          n = t.type;
        switch (n) {
          case "GeometryCollection":
            return {
              type: n,
              geometries: t.geometries.map(e)
            };
          case "Point":
            r = i(t.coordinates);
            break;
          case "MultiPoint":
            r = t.coordinates.map(i);
            break;
          case "LineString":
            r = c(t.arcs);
            break;
          case "MultiLineString":
            r = t.arcs.map(c);
            break;
          case "Polygon":
            r = f(t.arcs);
            break;
          case "MultiPolygon":
            r = t.arcs.map(f);
            break;
          default:
            return null
        }
        return {
          type: n,
          coordinates: r
        }
      }
        (t)
    }
    function i (e, t) {
      var r = {},
        n = {},
        o = {},
        a = [],
        i = -1;
      function c (e, t) {
        for (var n in e) {
          var o = e[n];
          delete t[o.start],
            delete o.start,
            delete o.end,
            o.forEach(function(e) {
              r[e < 0 ? ~e : e] = 1
            }),
            a.push(o)
        }
      }
      return t.forEach(function(r, n) {
        var o,
          a = e.arcs[r < 0 ? ~r : r];
        a.length < 3 && !a[1][0] && !a[1][1] && (o = t[++i], t[i] = r, t[n] = o)
      }),
        t.forEach(function(t) {
          var r,
            a,
            i = function(t) {
              var r,
                n = e.arcs[t < 0 ? ~t : t],
                o = n[0];
              e.transform ? (r = [0, 0], n.forEach(function(e) {
                r[0] += e[0],
                  r[1] += e[1]
              })) : r = n[n.length - 1];
              return t < 0 ? [r, o] : [o, r]
            }
              (t),
            c = i[0],
            u = i[1];
          if (r = o[c])
            if (delete o[r.end], r.push(t), r.end = u, a = n[u]) {
              delete n[a.start];
              var f = a === r ? r : r.concat(a);
              n[f.start = r.start] = o[f.end = a.end] = f
            } else
              n[r.start] = o[r.end] = r;
          else if (r = n[u])
            if (delete n[r.start], r.unshift(t), r.start = c, a = o[c]) {
              delete o[a.end];
              var s = a === r ? r : a.concat(r);
              n[s.start = a.start] = o[s.end = r.end] = s
            } else
              n[r.start] = o[r.end] = r;
          else
            n[(r = [t]).start = c] = o[r.end = u] = r
        }),
        c(o, n),
        c(n, o),
        t.forEach(function(e) {
          r[e < 0 ? ~e : e] || a.push([e])
        }),
        a
    }
    function c (e, t, r) {
      var n,
        o,
        a;
      if (arguments.length > 1)
        n = function(e, t, r) {
          var n,
            o = [],
            a = [];
          function i (e) {
            var t = e < 0 ? ~e : e;
            (a[t] || (a[t] = [])).push({
              i: e,
              g: n
            })
          }
          function c (e) {
            e.forEach(i)
          }
          function u (e) {
            e.forEach(c)
          }
          return function e (t) {
            switch (n = t, t.type) {
              case "GeometryCollection":
                t.geometries.forEach(e);
                break;
              case "LineString":
                c(t.arcs);
                break;
              case "MultiLineString":
              case "Polygon":
                u(t.arcs);
                break;
              case "MultiPolygon":
                !function(e) {
                  e.forEach(u)
                }
                  (t.arcs)
            }
          }
            (t),
            a.forEach(null == r ? function(e) {
              o.push(e[0].i)
            }
              : function(e) {
                r(e[0].g, e[e.length - 1].g) && o.push(e[0].i)
              }),
            o
        }
          (0, t, r);
      else
        for (o = 0, n = new Array(a = e.arcs.length); o < a; ++o)
          n[o] = o;
      return {
        type: "MultiLineString",
        arcs: i(e, n)
      }
    }
    function u (e, t) {
      var r = {},
        n = [],
        o = [];
      function c (e) {
        e.forEach(function(t) {
          t.forEach(function(t) {
            (r[t = t < 0 ? ~t : t] || (r[t] = [])).push(e)
          })
        }),
          n.push(e)
      }
      function u (t) {
        return function(e) {
          for (var t, r = -1, n = e.length, o = e[n - 1], a = 0; ++r < n;)
            t = o, o = e[r], a += t[0] * o[1] - t[1] * o[0];
          return Math.abs(a)
        }
          (a(e, {
            type: "Polygon",
            arcs: [t]
          }).coordinates[0])
      }
      return t.forEach(function e (t) {
        switch (t.type) {
          case "GeometryCollection":
            t.geometries.forEach(e);
            break;
          case "Polygon":
            c(t.arcs);
            break;
          case "MultiPolygon":
            t.arcs.forEach(c)
        }
      }),
        n.forEach(function(e) {
          if (!e._) {
            var t = [],
              n = [e];
            for (e._ = 1, o.push(t); e = n.pop();)
              t.push(e), e.forEach(function(e) {
                e.forEach(function(e) {
                  r[e < 0 ? ~e : e].forEach(function(e) {
                    e._ || (e._ = 1, n.push(e))
                  })
                })
              })
          }
        }),
        n.forEach(function(e) {
          delete e._
        }), {
        type: "MultiPolygon",
        arcs: o.map(function(t) {
          var n,
            o = [];
          if (t.forEach(function(e) {
            e.forEach(function(e) {
              e.forEach(function(e) {
                r[e < 0 ? ~e : e].length < 2 && o.push(e)
              })
            })
          }), (n = (o = i(e, o)).length) > 1)
            for (var a, c, f = 1, s = u(o[0]); f < n; ++f)
              (a = u(o[f])) > s && (c = o[0], o[0] = o[f], o[f] = c, s = a);
          return o
        }).filter(function(e) {
          return e.length > 0
        })
      }
    }
    function f (e, t) {
      for (var r = 0, n = e.length; r < n;) {
        var o = r + n >>> 1;
        e[o] < t ? r = o + 1 : n = o
      }
      return r
    }
    function s (e) {
      if (null == e)
        return t;
      var r,
        n,
        o = e.scale[0],
        a = e.scale[1],
        i = e.translate[0],
        c = e.translate[1];
      return function(e, t) {
        t || (r = n = 0);
        var u = 2,
          f = e.length,
          s = new Array(f),
          l = Math.round((e[0] - i) / o),
          h = Math.round((e[1] - c) / a);
        for (s[0] = l - r, r = l, s[1] = h - n, n = h; u < f;)
          s[u] = e[u], ++u;
        return s
      }
    }
    e.bbox = n,
      e.feature = function(e, t) {
        return "string" == typeof t && (t = e.objects[t]),
          "GeometryCollection" === t.type ? {
            type: "FeatureCollection",
            features: t.geometries.map(function(t) {
              return o(e, t)
            })
          }
            : o(e, t)
      },
      e.merge = function(e) {
        return a(e, u.apply(this, arguments))
      },
      e.mergeArcs = u,
      e.mesh = function(e) {
        return a(e, c.apply(this, arguments))
      },
      e.meshArcs = c,
      e.neighbors = function(e) {
        var t = {},
          r = e.map(function() {
            return []
          });
        function n (e, r) {
          e.forEach(function(e) {
            e < 0 && (e = ~e);
            var n = t[e];
            n ? n.push(r) : t[e] = [r]
          })
        }
        function o (e, t) {
          e.forEach(function(e) {
            n(e, t)
          })
        }
        var a = {
          LineString: n,
          MultiLineString: o,
          Polygon: o,
          MultiPolygon: function(e, t) {
            e.forEach(function(e) {
              o(e, t)
            })
          }
        };
        for (var i in e.forEach(function e (t, r) {
          "GeometryCollection" === t.type ? t.geometries.forEach(function(t) {
            e(t, r)
          }) : t.type in a && a[t.type](t.arcs, r)
        }), t)
          for (var c = t[i], u = c.length, s = 0; s < u; ++s)
            for (var l = s + 1; l < u; ++l) {
              var h,
                p = c[s],
                g = c[l];
              (h = r[p])[i = f(h, g)] !== g && h.splice(i, 0, g),
                (h = r[g])[i = f(h, p)] !== p && h.splice(i, 0, p)
            }
        return r
      },
      e.quantize = function(e, t) {
        if (e.transform)
          throw new Error("already quantized");
        if (t && t.scale)
          u = e.bbox;
        else {
          if (!((r = Math.floor(t)) >= 2))
            throw new Error("n must be ≥2");
          var r,
            o = (u = e.bbox || n(e))[0],
            a = u[1],
            i = u[2],
            c = u[3];
          t = {
            scale: [i - o ? (i - o) / (r - 1) : 1, c - a ? (c - a) / (r - 1) : 1],
            translate: [o, a]
          }
        }
        var u,
          f,
          l = s(t),
          h = e.objects,
          p = {};
        function g (e) {
          return l(e)
        }
        function y (e) {
          var t;
          switch (e.type) {
            case "GeometryCollection":
              t = {
                type: "GeometryCollection",
                geometries: e.geometries.map(y)
              };
              break;
            case "Point":
              t = {
                type: "Point",
                coordinates: g(e.coordinates)
              };
              break;
            case "MultiPoint":
              t = {
                type: "MultiPoint",
                coordinates: e.coordinates.map(g)
              };
              break;
            default:
              return e
          }
          return null != e.id && (t.id = e.id),
            null != e.bbox && (t.bbox = e.bbox),
            null != e.properties && (t.properties = e.properties),
            t
        }
        for (f in h)
          p[f] = y(h[f]);
        return {
          type: "Topology",
          bbox: u,
          transform: t,
          objects: p,
          arcs: e.arcs.map(function(e) {
            var t,
              r = 0,
              n = 1,
              o = e.length,
              a = new Array(o);
            for (a[0] = l(e[0], 0); ++r < o;)
              ((t = l(e[r], r))[0] || t[1]) && (a[n++] = t);
            return 1 === n && (a[n++] = [0, 0]),
              a.length = n,
              a
          })
        }
      },
      e.transform = r,
      e.untransform = s,
      Object.defineProperty(e, "__esModule", {
        value: !0
      })
  });
  // ----- topojson end ------ //
!function(T, MapChart) {
  MapChart.prototype.loadTopoJSON = function(json, params) {
    if (T.isString(json)) {
      T.loadJSON(json, function(json) {
        this.loadTopoJSON(json, params);
      }.bind(this), false);
      return;
    }
    if (!json.objects) {
      return;
    }
    for (let n in json.objects) {
      let geojson = topojson.feature(json, json.objects[n]);
      if (geojson) {
        this.loadGeoJSON(geojson, params, n);
      }
    }
  }
}(T, T.MapChart);

// winkel3 地图投影
((T) => {
  let PER_RADIAN = Math.PI / 180;

  function degreeToRadian (d) {
    return PER_RADIAN * d;
  }

  function radianTodegree (r) {
    return r / PER_RADIAN;
  }

  let ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;

  function sinci (x) {
    return x ? x / Math.sin(x) : 1;
  }

  function sgn (x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
  }

  function asin (x) {
    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
  }

  function acos (x) {
    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
  }

  function asqrt (x) {
    return x > 0 ? Math.sqrt(x) : 0;
  }

  function aitoff (λ, φ) {
    let cosφ = Math.cos(φ), sinciα = sinci(acos(cosφ * Math.cos(λ /= 2)));
    return [2 * cosφ * Math.sin(λ) * sinciα, Math.sin(φ) * sinciα];
  }

  aitoff.invert = function(x, y) {
    if (x * x + 4 * y * y > π * π + ε) return;
    let λ = x, φ = y, i = 25;
    do {
      let sinλ = Math.sin(λ), sinλ_2 = Math.sin(λ / 2), cosλ_2 = Math.cos(λ / 2), sinφ = Math.sin(φ), cosφ = Math.cos(φ), sin_2φ = Math.sin(2 * φ), sin2φ = sinφ * sinφ, cos2φ = cosφ * cosφ, sin2λ_2 = sinλ_2 * sinλ_2, C = 1 - cos2φ * cosλ_2 * cosλ_2, E = C ? acos(cosφ * cosλ_2) * Math.sqrt(F = 1 / C) : F = 0, F, fx = 2 * E * cosφ * sinλ_2 - x, fy = E * sinφ - y, δxδλ = F * (cos2φ * sin2λ_2 + E * cosφ * cosλ_2 * sin2φ), δxδφ = F * (.5 * sinλ * sin_2φ - E * 2 * sinφ * sinλ_2), δyδλ = F * .25 * (sin_2φ * sinλ_2 - E * sinφ * cos2φ * sinλ), δyδφ = F * (sin2φ * cosλ_2 + E * sin2λ_2 * cosφ), denominator = δxδφ * δyδλ - δyδφ * δxδλ;
      if (!denominator) break;
      let δλ = (fy * δxδφ - fx * δyδφ) / denominator, δφ = (fx * δyδλ - fy * δxδλ) / denominator;
      λ -= δλ, φ -= δφ;
    } while ((Math.abs(δλ) > ε || Math.abs(δφ) > ε) && --i > 0);
    return [λ, φ];
  };

  function winkel3 (λ, φ) {
    let coordinates = aitoff(λ, φ);
    return [(coordinates[0] + λ / halfπ) / 2, (coordinates[1] + φ) / 2];
  }

  winkel3.invert = function(x, y) {
    let λ = x, φ = y, i = 25;
    do {
      let cosφ = Math.cos(φ), sinφ = Math.sin(φ), sin_2φ = Math.sin(2 * φ), sin2φ = sinφ * sinφ, cos2φ = cosφ * cosφ, sinλ = Math.sin(λ), cosλ_2 = Math.cos(λ / 2), sinλ_2 = Math.sin(λ / 2), sin2λ_2 = sinλ_2 * sinλ_2, C = 1 - cos2φ * cosλ_2 * cosλ_2, E = C ? acos(cosφ * cosλ_2) * Math.sqrt(F = 1 / C) : F = 0, F, fx = .5 * (2 * E * cosφ * sinλ_2 + λ / halfπ) - x, fy = .5 * (E * sinφ + φ) - y, δxδλ = .5 * F * (cos2φ * sin2λ_2 + E * cosφ * cosλ_2 * sin2φ) + .5 / halfπ, δxδφ = F * (sinλ * sin_2φ / 4 - E * sinφ * sinλ_2), δyδλ = .125 * F * (sin_2φ * sinλ_2 - E * sinφ * cos2φ * sinλ), δyδφ = .5 * F * (sin2φ * cosλ_2 + E * sin2λ_2 * cosφ) + .5, denominator = δxδφ * δyδλ - δyδφ * δxδλ, δλ = (fy * δxδφ - fx * δyδφ) / denominator, δφ = (fx * δyδλ - fy * δxδλ) / denominator;
      λ -= δλ, φ -= δφ;
    } while ((Math.abs(δλ) > ε || Math.abs(δφ) > ε) && --i > 0);
    return [λ, φ];
  };
  T.mercator = function(scale, centerLongitude, centerLat) {
    if (isNaN(centerLongitude)) {
      centerLongitude = 105;
    }
    if (isNaN(centerLat)) {
      centerLat = 35;
    }
    if (isNaN(scale)) {
      scale = 20;
    }
    let translator = function(x, y) {
      x -= centerLongitude;
      y -= centerLat;
      if (x > 180) {
        x -= 360;
      } else if (x < -180) {
        x += 360;
      }
      y = degreeToRadian(y);
      y = -radianTodegree(Math.log(Math.tan(π / 4 + y / 2))) * scale;
      return { x: x * scale, y: y };
    }
    return translator;
  }
  T.winkel3 = function(scale, centerLongitude, centerLat) {
    if (isNaN(centerLongitude)) {
      centerLongitude = 105;
    }
    if (isNaN(centerLat)) {
      centerLat = 35;
    }
    if (isNaN(scale)) {
      scale = 20;
    }
    let translator = function(x, y) {
      x -= centerLongitude;
      y -= centerLat;
      if (x > 180) {
        x -= 360;
      } else if (x < -180) {
        x += 360;
      }
      x = degreeToRadian(x);
      y = degreeToRadian(y);
      let xy = winkel3(x, y);
      x = radianTodegree(xy[0]) * scale;
      y = -radianTodegree(xy[1]) * scale;
      return { x: x, y: y };
    }
    translator.invert = function(x, y) {
      x = degreeToRadian(x / scale);
      y = -degreeToRadian(y / scale);
      let xy = winkel3.invert(x, y);
      x = radianTodegree(xy[0]);
      y = radianTodegree(xy[1]);
      x += centerLongitude;
      y += centerLat;
      return { x: x, y: y };
    }
    return translator;
  }
})(T);

export default T;
