/* eslint-disable */
import TK from '../utils/topology.js';
import * as topojson from 'topojson-client'

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

// TopoJSON函数
((T, MapChart) => {
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
})(T, T.MapChart);

// Winkel3 地图投影
// ((T) => {
//   let PER_RADIAN = Math.PI / 180;

//   function degreeToRadian (d) {
//     return PER_RADIAN * d;
//   }

//   function radianTodegree (r) {
//     return r / PER_RADIAN;
//   }

//   let ε = 1e-6, ε2 = ε * ε, π = Math.PI, τ = 2 * π, τε = τ - ε, halfπ = π / 2, d3_radians = π / 180, d3_degrees = 180 / π;

//   function sinci (x) {
//     return x ? x / Math.sin(x) : 1;
//   }

//   function sgn (x) {
//     return x > 0 ? 1 : x < 0 ? -1 : 0;
//   }

//   function asin (x) {
//     return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
//   }

//   function acos (x) {
//     return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
//   }

//   function asqrt (x) {
//     return x > 0 ? Math.sqrt(x) : 0;
//   }

//   function aitoff (λ, φ) {
//     let cosφ = Math.cos(φ), sinciα = sinci(acos(cosφ * Math.cos(λ /= 2)));
//     return [2 * cosφ * Math.sin(λ) * sinciα, Math.sin(φ) * sinciα];
//   }

//   aitoff.invert = function(x, y) {
//     if (x * x + 4 * y * y > π * π + ε) return;
//     let λ = x, φ = y, i = 25;
//     do {
//       let sinλ = Math.sin(λ), sinλ_2 = Math.sin(λ / 2), cosλ_2 = Math.cos(λ / 2), sinφ = Math.sin(φ), cosφ = Math.cos(φ), sin_2φ = Math.sin(2 * φ), sin2φ = sinφ * sinφ, cos2φ = cosφ * cosφ, sin2λ_2 = sinλ_2 * sinλ_2, C = 1 - cos2φ * cosλ_2 * cosλ_2, E = C ? acos(cosφ * cosλ_2) * Math.sqrt(F = 1 / C) : F = 0, F, fx = 2 * E * cosφ * sinλ_2 - x, fy = E * sinφ - y, δxδλ = F * (cos2φ * sin2λ_2 + E * cosφ * cosλ_2 * sin2φ), δxδφ = F * (.5 * sinλ * sin_2φ - E * 2 * sinφ * sinλ_2), δyδλ = F * .25 * (sin_2φ * sinλ_2 - E * sinφ * cos2φ * sinλ), δyδφ = F * (sin2φ * cosλ_2 + E * sin2λ_2 * cosφ), denominator = δxδφ * δyδλ - δyδφ * δxδλ;
//       if (!denominator) break;
//       let δλ = (fy * δxδφ - fx * δyδφ) / denominator, δφ = (fx * δyδλ - fy * δxδλ) / denominator;
//       λ -= δλ, φ -= δφ;
//     } while ((Math.abs(δλ) > ε || Math.abs(δφ) > ε) && --i > 0);
//     return [λ, φ];
//   };

//   function winkel3 (λ, φ) {
//     let coordinates = aitoff(λ, φ);
//     return [(coordinates[0] + λ / halfπ) / 2, (coordinates[1] + φ) / 2];
//   }

//   winkel3.invert = function(x, y) {
//     let λ = x, φ = y, i = 25;
//     do {
//       let cosφ = Math.cos(φ), sinφ = Math.sin(φ), sin_2φ = Math.sin(2 * φ), sin2φ = sinφ * sinφ, cos2φ = cosφ * cosφ, sinλ = Math.sin(λ), cosλ_2 = Math.cos(λ / 2), sinλ_2 = Math.sin(λ / 2), sin2λ_2 = sinλ_2 * sinλ_2, C = 1 - cos2φ * cosλ_2 * cosλ_2, E = C ? acos(cosφ * cosλ_2) * Math.sqrt(F = 1 / C) : F = 0, F, fx = .5 * (2 * E * cosφ * sinλ_2 + λ / halfπ) - x, fy = .5 * (E * sinφ + φ) - y, δxδλ = .5 * F * (cos2φ * sin2λ_2 + E * cosφ * cosλ_2 * sin2φ) + .5 / halfπ, δxδφ = F * (sinλ * sin_2φ / 4 - E * sinφ * sinλ_2), δyδλ = .125 * F * (sin_2φ * sinλ_2 - E * sinφ * cos2φ * sinλ), δyδφ = .5 * F * (sin2φ * cosλ_2 + E * sin2λ_2 * cosφ) + .5, denominator = δxδφ * δyδλ - δyδφ * δxδλ, δλ = (fy * δxδφ - fx * δyδφ) / denominator, δφ = (fx * δyδλ - fy * δxδλ) / denominator;
//       λ -= δλ, φ -= δφ;
//     } while ((Math.abs(δλ) > ε || Math.abs(δφ) > ε) && --i > 0);
//     return [λ, φ];
//   };
//   T.mercator = function(scale, centerLongitude, centerLat) {
//     if (isNaN(centerLongitude)) {
//       centerLongitude = 105;
//     }
//     if (isNaN(centerLat)) {
//       centerLat = 35;
//     }
//     if (isNaN(scale)) {
//       scale = 20;
//     }
//     let translator = function(x, y) {
//       x -= centerLongitude;
//       y -= centerLat;
//       if (x > 180) {
//         x -= 360;
//       } else if (x < -180) {
//         x += 360;
//       }
//       y = degreeToRadian(y);
//       y = -radianTodegree(Math.log(Math.tan(π / 4 + y / 2))) * scale;
//       return { x: x * scale, y: y };
//     }
//     return translator;
//   }
//   T.winkel3 = function(scale, centerLongitude, centerLat) {
//     if (isNaN(centerLongitude)) {
//       centerLongitude = 105;
//     }
//     if (isNaN(centerLat)) {
//       centerLat = 35;
//     }
//     if (isNaN(scale)) {
//       scale = 20;
//     }
//     let translator = function(x, y) {
//       x -= centerLongitude;
//       y -= centerLat;
//       if (x > 180) {
//         x -= 360;
//       } else if (x < -180) {
//         x += 360;
//       }
//       x = degreeToRadian(x);
//       y = degreeToRadian(y);
//       let xy = winkel3(x, y);
//       x = radianTodegree(xy[0]) * scale;
//       y = -radianTodegree(xy[1]) * scale;
//       return { x: x, y: y };
//     }
//     translator.invert = function(x, y) {
//       x = degreeToRadian(x / scale);
//       y = -degreeToRadian(y / scale);
//       let xy = winkel3.invert(x, y);
//       x = radianTodegree(xy[0]);
//       y = radianTodegree(xy[1]);
//       x += centerLongitude;
//       y += centerLat;
//       return { x: x, y: y };
//     }
//     return translator;
//   }
// })(T);

export default T;
