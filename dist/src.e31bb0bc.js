// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"getData/index.js":[function(require,module,exports) {
var weatherData = {
  "place": {
    "code": "vilnius",
    "name": "Vilnius",
    "administrativeDivision": "Vilniaus miesto savivaldyb\u0117",
    "country": "Lietuva",
    "countryCode": "LT",
    "coordinates": {
      "latitude": 54.687046,
      "longitude": 25.282911
    }
  },
  "forecastType": "long-term",
  "forecastCreationTimeUtc": "2019-12-11 14:11:59",
  "forecastTimestamps": [{
    "forecastTimeUtc": "2019-12-11 14:00:00",
    "airTemperature": 0.1,
    "windSpeed": 3,
    "windGust": 6,
    "windDirection": 186,
    "cloudCover": 0,
    "seaLevelPressure": 1020,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-11 15:00:00",
    "airTemperature": -0.5,
    "windSpeed": 3,
    "windGust": 5,
    "windDirection": 185,
    "cloudCover": 4,
    "seaLevelPressure": 1020,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-11 16:00:00",
    "airTemperature": 0.1,
    "windSpeed": 3,
    "windGust": 5,
    "windDirection": 183,
    "cloudCover": 12,
    "seaLevelPressure": 1020,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-11 17:00:00",
    "airTemperature": 0.2,
    "windSpeed": 3,
    "windGust": 5,
    "windDirection": 173,
    "cloudCover": 7,
    "seaLevelPressure": 1019,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-11 18:00:00",
    "airTemperature": 0.1,
    "windSpeed": 4,
    "windGust": 7,
    "windDirection": 186,
    "cloudCover": 11,
    "seaLevelPressure": 1019,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-11 19:00:00",
    "airTemperature": 0,
    "windSpeed": 4,
    "windGust": 7,
    "windDirection": 180,
    "cloudCover": 29,
    "seaLevelPressure": 1019,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-11 20:00:00",
    "airTemperature": 0.2,
    "windSpeed": 3,
    "windGust": 6,
    "windDirection": 177,
    "cloudCover": 34,
    "seaLevelPressure": 1019,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-11 21:00:00",
    "airTemperature": 0.5,
    "windSpeed": 4,
    "windGust": 7,
    "windDirection": 170,
    "cloudCover": 5,
    "seaLevelPressure": 1019,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-11 22:00:00",
    "airTemperature": 0.4,
    "windSpeed": 5,
    "windGust": 8,
    "windDirection": 174,
    "cloudCover": 5,
    "seaLevelPressure": 1018,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-11 23:00:00",
    "airTemperature": -0.2,
    "windSpeed": 5,
    "windGust": 8,
    "windDirection": 171,
    "cloudCover": 6,
    "seaLevelPressure": 1018,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-12 00:00:00",
    "airTemperature": 0.1,
    "windSpeed": 5,
    "windGust": 10,
    "windDirection": 172,
    "cloudCover": 11,
    "seaLevelPressure": 1018,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-12 01:00:00",
    "airTemperature": 0.5,
    "windSpeed": 6,
    "windGust": 10,
    "windDirection": 173,
    "cloudCover": 4,
    "seaLevelPressure": 1017,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-12 02:00:00",
    "airTemperature": 0.4,
    "windSpeed": 3,
    "windGust": 10,
    "windDirection": 149,
    "cloudCover": 9,
    "seaLevelPressure": 1016,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-12 03:00:00",
    "airTemperature": -0.2,
    "windSpeed": 4,
    "windGust": 8,
    "windDirection": 149,
    "cloudCover": 1,
    "seaLevelPressure": 1015,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-12 04:00:00",
    "airTemperature": 0.2,
    "windSpeed": 4,
    "windGust": 8,
    "windDirection": 138,
    "cloudCover": 16,
    "seaLevelPressure": 1014,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-12 05:00:00",
    "airTemperature": 0.6,
    "windSpeed": 5,
    "windGust": 9,
    "windDirection": 132,
    "cloudCover": 51,
    "seaLevelPressure": 1014,
    "totalPrecipitation": 0,
    "conditionCode": "scattered-clouds"
  }, {
    "forecastTimeUtc": "2019-12-12 06:00:00",
    "airTemperature": 0.9,
    "windSpeed": 5,
    "windGust": 9,
    "windDirection": 135,
    "cloudCover": 29,
    "seaLevelPressure": 1013,
    "totalPrecipitation": 0.1,
    "conditionCode": "light-snow"
  }, {
    "forecastTimeUtc": "2019-12-12 07:00:00",
    "airTemperature": 1.1,
    "windSpeed": 5,
    "windGust": 10,
    "windDirection": 137,
    "cloudCover": 21,
    "seaLevelPressure": 1013,
    "totalPrecipitation": 0.1,
    "conditionCode": "light-snow"
  }, {
    "forecastTimeUtc": "2019-12-12 08:00:00",
    "airTemperature": 1.3,
    "windSpeed": 6,
    "windGust": 10,
    "windDirection": 139,
    "cloudCover": 32,
    "seaLevelPressure": 1012,
    "totalPrecipitation": 0.2,
    "conditionCode": "light-rain"
  }, {
    "forecastTimeUtc": "2019-12-12 09:00:00",
    "airTemperature": 1.4,
    "windSpeed": 6,
    "windGust": 10,
    "windDirection": 147,
    "cloudCover": 55,
    "seaLevelPressure": 1012,
    "totalPrecipitation": 0.3,
    "conditionCode": "light-rain"
  }, {
    "forecastTimeUtc": "2019-12-12 10:00:00",
    "airTemperature": 1.5,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 153,
    "cloudCover": 41,
    "seaLevelPressure": 1011,
    "totalPrecipitation": 0.3,
    "conditionCode": "light-rain"
  }, {
    "forecastTimeUtc": "2019-12-12 11:00:00",
    "airTemperature": 1.7,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 157,
    "cloudCover": 32,
    "seaLevelPressure": 1010,
    "totalPrecipitation": 0.1,
    "conditionCode": "light-rain"
  }, {
    "forecastTimeUtc": "2019-12-12 12:00:00",
    "airTemperature": 2,
    "windSpeed": 7,
    "windGust": 12,
    "windDirection": 163,
    "cloudCover": 49,
    "seaLevelPressure": 1009,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-12 13:00:00",
    "airTemperature": 1.6,
    "windSpeed": 5,
    "windGust": 12,
    "windDirection": 189,
    "cloudCover": 57,
    "seaLevelPressure": 1010,
    "totalPrecipitation": 0.4,
    "conditionCode": "moderate-rain"
  }, {
    "forecastTimeUtc": "2019-12-12 14:00:00",
    "airTemperature": 1.8,
    "windSpeed": 7,
    "windGust": 12,
    "windDirection": 184,
    "cloudCover": 19,
    "seaLevelPressure": 1010,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-12 15:00:00",
    "airTemperature": 1.5,
    "windSpeed": 6,
    "windGust": 12,
    "windDirection": 178,
    "cloudCover": 32,
    "seaLevelPressure": 1010,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-12 16:00:00",
    "airTemperature": 1.4,
    "windSpeed": 5,
    "windGust": 10,
    "windDirection": 173,
    "cloudCover": 27,
    "seaLevelPressure": 1010,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-12 17:00:00",
    "airTemperature": 1.3,
    "windSpeed": 6,
    "windGust": 10,
    "windDirection": 174,
    "cloudCover": 21,
    "seaLevelPressure": 1009,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-12 18:00:00",
    "airTemperature": 1.5,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 173,
    "cloudCover": 33,
    "seaLevelPressure": 1009,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-12 19:00:00",
    "airTemperature": 1.6,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 179,
    "cloudCover": 39,
    "seaLevelPressure": 1009,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-12 20:00:00",
    "airTemperature": 1.8,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 178,
    "cloudCover": 60,
    "seaLevelPressure": 1009,
    "totalPrecipitation": 0,
    "conditionCode": "scattered-clouds"
  }, {
    "forecastTimeUtc": "2019-12-12 21:00:00",
    "airTemperature": 1.8,
    "windSpeed": 5,
    "windGust": 10,
    "windDirection": 169,
    "cloudCover": 59,
    "seaLevelPressure": 1009,
    "totalPrecipitation": 0,
    "conditionCode": "scattered-clouds"
  }, {
    "forecastTimeUtc": "2019-12-12 22:00:00",
    "airTemperature": 1.8,
    "windSpeed": 5,
    "windGust": 12,
    "windDirection": 168,
    "cloudCover": 60,
    "seaLevelPressure": 1009,
    "totalPrecipitation": 0,
    "conditionCode": "scattered-clouds"
  }, {
    "forecastTimeUtc": "2019-12-12 23:00:00",
    "airTemperature": 2,
    "windSpeed": 5,
    "windGust": 12,
    "windDirection": 174,
    "cloudCover": 50,
    "seaLevelPressure": 1008,
    "totalPrecipitation": 0,
    "conditionCode": "scattered-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 00:00:00",
    "airTemperature": 1.8,
    "windSpeed": 5,
    "windGust": 9,
    "windDirection": 174,
    "cloudCover": 27,
    "seaLevelPressure": 1008,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 01:00:00",
    "airTemperature": 1.7,
    "windSpeed": 5,
    "windGust": 10,
    "windDirection": 158,
    "cloudCover": 39,
    "seaLevelPressure": 1007,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 02:00:00",
    "airTemperature": 1.9,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 162,
    "cloudCover": 18,
    "seaLevelPressure": 1006,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-13 03:00:00",
    "airTemperature": 1.8,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 160,
    "cloudCover": 29,
    "seaLevelPressure": 1006,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 04:00:00",
    "airTemperature": 1.5,
    "windSpeed": 5,
    "windGust": 11,
    "windDirection": 157,
    "cloudCover": 42,
    "seaLevelPressure": 1006,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 05:00:00",
    "airTemperature": 1.3,
    "windSpeed": 5,
    "windGust": 10,
    "windDirection": 148,
    "cloudCover": 53,
    "seaLevelPressure": 1005,
    "totalPrecipitation": 0,
    "conditionCode": "scattered-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 06:00:00",
    "airTemperature": 1.2,
    "windSpeed": 5,
    "windGust": 11,
    "windDirection": 135,
    "cloudCover": 67,
    "seaLevelPressure": 1005,
    "totalPrecipitation": 0,
    "conditionCode": "scattered-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 07:00:00",
    "airTemperature": 0.6,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 143,
    "cloudCover": 38,
    "seaLevelPressure": 1004,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 08:00:00",
    "airTemperature": 0.4,
    "windSpeed": 6,
    "windGust": 12,
    "windDirection": 157,
    "cloudCover": 37,
    "seaLevelPressure": 1004,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 09:00:00",
    "airTemperature": 0.4,
    "windSpeed": 6,
    "windGust": 12,
    "windDirection": 151,
    "cloudCover": 43,
    "seaLevelPressure": 1003,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 10:00:00",
    "airTemperature": 0.5,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 151,
    "cloudCover": 33,
    "seaLevelPressure": 1003,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 11:00:00",
    "airTemperature": 0.6,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 150,
    "cloudCover": 29,
    "seaLevelPressure": 1002,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 12:00:00",
    "airTemperature": 0.8,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 146,
    "cloudCover": 38,
    "seaLevelPressure": 1002,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 13:00:00",
    "airTemperature": 1,
    "windSpeed": 6,
    "windGust": 10,
    "windDirection": 142,
    "cloudCover": 43,
    "seaLevelPressure": 1001,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 14:00:00",
    "airTemperature": 1.2,
    "windSpeed": 6,
    "windGust": 10,
    "windDirection": 142,
    "cloudCover": 48,
    "seaLevelPressure": 1001,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 15:00:00",
    "airTemperature": 1.3,
    "windSpeed": 6,
    "windGust": 10,
    "windDirection": 142,
    "cloudCover": 51,
    "seaLevelPressure": 1001,
    "totalPrecipitation": 0,
    "conditionCode": "scattered-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 16:00:00",
    "airTemperature": 1.3,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 141,
    "cloudCover": 47,
    "seaLevelPressure": 1001,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 17:00:00",
    "airTemperature": 1.2,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 142,
    "cloudCover": 45,
    "seaLevelPressure": 1001,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 18:00:00",
    "airTemperature": 1.1,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 143,
    "cloudCover": 47,
    "seaLevelPressure": 1000,
    "totalPrecipitation": 0,
    "conditionCode": "isolated-clouds"
  }, {
    "forecastTimeUtc": "2019-12-13 21:00:00",
    "airTemperature": 1.7,
    "windSpeed": 6,
    "windGust": 12,
    "windDirection": 141,
    "cloudCover": 100,
    "seaLevelPressure": 998,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-14 00:00:00",
    "airTemperature": 1.3,
    "windSpeed": 7,
    "windGust": 13,
    "windDirection": 147,
    "cloudCover": 95,
    "seaLevelPressure": 998,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-14 03:00:00",
    "airTemperature": 2,
    "windSpeed": 6,
    "windGust": 12,
    "windDirection": 148,
    "cloudCover": 96,
    "seaLevelPressure": 998,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-14 06:00:00",
    "airTemperature": 2,
    "windSpeed": 6,
    "windGust": 12,
    "windDirection": 148,
    "cloudCover": 97,
    "seaLevelPressure": 998,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-14 09:00:00",
    "airTemperature": 2.7,
    "windSpeed": 6,
    "windGust": 12,
    "windDirection": 150,
    "cloudCover": 96,
    "seaLevelPressure": 999,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-14 12:00:00",
    "airTemperature": 3,
    "windSpeed": 6,
    "windGust": 14,
    "windDirection": 152,
    "cloudCover": 100,
    "seaLevelPressure": 999,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-14 15:00:00",
    "airTemperature": 2.8,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 157,
    "cloudCover": 100,
    "seaLevelPressure": 999,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-14 18:00:00",
    "airTemperature": 2.7,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 153,
    "cloudCover": 100,
    "seaLevelPressure": 999,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-14 21:00:00",
    "airTemperature": 2.2,
    "windSpeed": 5,
    "windGust": 11,
    "windDirection": 155,
    "cloudCover": 100,
    "seaLevelPressure": 999,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-15 00:00:00",
    "airTemperature": 2.8,
    "windSpeed": 4,
    "windGust": 9,
    "windDirection": 156,
    "cloudCover": 100,
    "seaLevelPressure": 998,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-15 03:00:00",
    "airTemperature": 3.3,
    "windSpeed": 3,
    "windGust": 7,
    "windDirection": 168,
    "cloudCover": 100,
    "seaLevelPressure": 997,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-15 06:00:00",
    "airTemperature": 3.1,
    "windSpeed": 2,
    "windGust": 6,
    "windDirection": 191,
    "cloudCover": 100,
    "seaLevelPressure": 998,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-15 09:00:00",
    "airTemperature": 2.8,
    "windSpeed": 2,
    "windGust": 4,
    "windDirection": 246,
    "cloudCover": 100,
    "seaLevelPressure": 999,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-15 12:00:00",
    "airTemperature": 2.7,
    "windSpeed": 5,
    "windGust": 9,
    "windDirection": 279,
    "cloudCover": 100,
    "seaLevelPressure": 1002,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-15 15:00:00",
    "airTemperature": 3.1,
    "windSpeed": 5,
    "windGust": 9,
    "windDirection": 258,
    "cloudCover": 100,
    "seaLevelPressure": 1005,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-15 18:00:00",
    "airTemperature": 2.8,
    "windSpeed": 5,
    "windGust": 10,
    "windDirection": 241,
    "cloudCover": 81,
    "seaLevelPressure": 1007,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-15 21:00:00",
    "airTemperature": 0.7,
    "windSpeed": 4,
    "windGust": 10,
    "windDirection": 230,
    "cloudCover": 7,
    "seaLevelPressure": 1010,
    "totalPrecipitation": 0,
    "conditionCode": "clear"
  }, {
    "forecastTimeUtc": "2019-12-16 00:00:00",
    "airTemperature": -1.2,
    "windSpeed": 4,
    "windGust": 8,
    "windDirection": 204,
    "cloudCover": 83,
    "seaLevelPressure": 1010,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-16 03:00:00",
    "airTemperature": 0.1,
    "windSpeed": 5,
    "windGust": 9,
    "windDirection": 182,
    "cloudCover": 100,
    "seaLevelPressure": 1008,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-16 06:00:00",
    "airTemperature": 2.2,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 201,
    "cloudCover": 100,
    "seaLevelPressure": 1008,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-16 09:00:00",
    "airTemperature": 5.3,
    "windSpeed": 6,
    "windGust": 11,
    "windDirection": 246,
    "cloudCover": 97,
    "seaLevelPressure": 1010,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-16 12:00:00",
    "airTemperature": 6.1,
    "windSpeed": 5,
    "windGust": 11,
    "windDirection": 252,
    "cloudCover": 99,
    "seaLevelPressure": 1012,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-16 15:00:00",
    "airTemperature": 4.3,
    "windSpeed": 3,
    "windGust": 10,
    "windDirection": 231,
    "cloudCover": 92,
    "seaLevelPressure": 1014,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-16 18:00:00",
    "airTemperature": 3.8,
    "windSpeed": 4,
    "windGust": 7,
    "windDirection": 220,
    "cloudCover": 100,
    "seaLevelPressure": 1015,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-16 21:00:00",
    "airTemperature": 3.3,
    "windSpeed": 3,
    "windGust": 6,
    "windDirection": 204,
    "cloudCover": 100,
    "seaLevelPressure": 1016,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-17 00:00:00",
    "airTemperature": 4.1,
    "windSpeed": 3,
    "windGust": 6,
    "windDirection": 194,
    "cloudCover": 100,
    "seaLevelPressure": 1016,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-17 06:00:00",
    "airTemperature": 3.9,
    "windSpeed": 3,
    "windGust": 6,
    "windDirection": 188,
    "cloudCover": 100,
    "seaLevelPressure": 1016,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-17 12:00:00",
    "airTemperature": 4.6,
    "windSpeed": 3,
    "windGust": 7,
    "windDirection": 191,
    "cloudCover": 97,
    "seaLevelPressure": 1016,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-17 18:00:00",
    "airTemperature": 3,
    "windSpeed": 4,
    "windGust": 7,
    "windDirection": 178,
    "cloudCover": 94,
    "seaLevelPressure": 1015,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-18 00:00:00",
    "airTemperature": 2,
    "windSpeed": 5,
    "windGust": 8,
    "windDirection": 196,
    "cloudCover": 70,
    "seaLevelPressure": 1014,
    "totalPrecipitation": 0,
    "conditionCode": "scattered-clouds"
  }, {
    "forecastTimeUtc": "2019-12-18 06:00:00",
    "airTemperature": 1.8,
    "windSpeed": 4,
    "windGust": 8,
    "windDirection": 208,
    "cloudCover": 100,
    "seaLevelPressure": 1014,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }, {
    "forecastTimeUtc": "2019-12-18 12:00:00",
    "airTemperature": 4.9,
    "windSpeed": 5,
    "windGust": 9,
    "windDirection": 217,
    "cloudCover": 100,
    "seaLevelPressure": 1013,
    "totalPrecipitation": 0,
    "conditionCode": "overcast"
  }]
};
module.exports = {
  weatherData: weatherData
};
},{}],"utilities/index.js":[function(require,module,exports) {
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var createDomElement = function createDomElement(tag, attributes) {
  var elementTag = document.createElement(tag);
  Object.entries(attributes).forEach(function (attr) {
    var _attr = _slicedToArray(attr, 2),
        attrKey = _attr[0],
        attrValue = _attr[1];

    elementTag[attrKey] = attrValue;
  });
  return elementTag;
};

var addToDom = function addToDom(target, element) {
  if (target && element) {
    if (typeof target === 'string') {
      document.querySelector(target).appendChild(element);
    } else {
      target.appendChild(element);
    }
  }
};

module.exports = {
  createDomElement: createDomElement,
  addToDom: addToDom
};
},{}],"index.js":[function(require,module,exports) {
var getWeatherData = function getWeatherData() {
  var options = {
    mode: 'cors'
  };
  fetch('http://82.140.185.11/v1/places/vilnius/forecasts/long-term', options).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    console.log(data);
  }).catch(function (e) {
    console.log(e);
  });
};

getWeatherData();

var weatherDataFetched = require('./getData');

var _require = require('./utilities'),
    createDomElement = _require.createDomElement,
    addToDom = _require.addToDom;

function render() {
  var app = document.getElementById('weatherApp');
  app.innerHTML = null;
  var locationCard = createDomElement('div', {
    className: 'locationCard'
  });
  var cityName = createDomElement('h4', {
    textContent: weatherDataFetched.weatherData.place.name
  });
  var temperature = createDomElement('h2', {
    innerHTML: weatherDataFetched.weatherData.forecastTimestamps[0].airTemperature + ' &#8451;'
  });
  addToDom(app, locationCard);
  addToDom(locationCard, temperature);
  addToDom(locationCard, cityName);
}

;
render();
},{"./getData":"getData/index.js","./utilities":"utilities/index.js"}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57581" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map