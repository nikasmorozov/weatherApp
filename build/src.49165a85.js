parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"8XH7":[function(require,module,exports) {
function t(t,o){return n(t)||e(t,o)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(t,r){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return e}}function n(t){if(Array.isArray(t))return t}var o=function(r,e){var n=document.createElement(r);return Object.entries(e).forEach(function(r){var e=t(r,2),o=e[0],i=e[1];n[o]=i}),n},i=function(t,r){t&&r&&("string"==typeof t?document.querySelector(t).appendChild(r):t.appendChild(r))};module.exports={createDomElement:o,addToDom:i};
},{}],"Focm":[function(require,module,exports) {
var e=require("./utilities"),t=e.createDomElement,n=e.addToDom;function o(){fetch("https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/vilnius/forecasts/long-term").then(function(e){return e.json()}).then(function(e){var o=document.getElementById("weatherApp");o.innerHTML=null;var a=t("div",{className:"locationCard"}),r=t("h4",{textContent:e.place.name}),c=t("h2",{innerHTML:e.forecastTimestamps[0].airTemperature+" &#8451;"});n(o,a),n(a,c),n(a,r),console.log(e)}).catch(function(e){console.log(e)})}o();
},{"./utilities":"8XH7"}]},{},["Focm"], null)