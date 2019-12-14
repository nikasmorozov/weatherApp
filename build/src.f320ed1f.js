parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"8XH7":[function(require,module,exports) {
function t(t,o){return n(t)||e(t,o)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function e(t,r){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return e}}function n(t){if(Array.isArray(t))return t}var o=function(r,e){var n=document.createElement(r);return Object.entries(e).forEach(function(r){var e=t(r,2),o=e[0],i=e[1];n[o]=i}),n},i=function(t,r){t&&r&&("string"==typeof t?document.querySelector(t).appendChild(r):t.appendChild(r))};module.exports={createDomElement:o,addToDom:i};
},{}],"Focm":[function(require,module,exports) {
var e=require("./utilities"),t=e.createDomElement,a=e.addToDom,o=t("div",{id:"searchGroup"}),n=t("input",{id:"cityToSearch"});n.placeholder="paieška";var s=n,c=null,r=null,d=null,l=t("ul",{className:"locationsCard"});function u(){fetch("https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places").then(function(e){return e.json()}).then(function(e){c=e,n.addEventListener("input",m)}).catch(function(e){alert("failed to fetch locations list")})}function m(){console.clear();var e=c.filter(function(e){if(e.code.includes(n.value))return!0});l.innerHTML=null,a(o,l);var s=function(){var o=t("button",{});null!=e[i]&&(o.textContent=e[i].code,o.id=e[i].code,console.log(e[i].code),a(l,o)),o.addEventListener("click",function(){h(o.id)})};for(i=0;i<10;i++)s()}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"vilnius";r="https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/".concat(e,"/forecasts/long-term"),console.log(r);var s=document.getElementById("weatherApp"),c=t("div",{className:"preloader"});a(weatherApp,c),fetch(r).then(function(e){return e.json()}).then(function(e){s.innerHTML=null,d=t("div",{className:"weatherCard"}),e.forecastTimestamps[2].airTemperature>0?(d.classList.add("AboveZero"),n.style.backgroundColor="#ffe48a"):(d.classList.add("BelowZero"),n.style.backgroundColor="#b2ebf2"),a(s,d),a(o,n),a(d,o);var c=t("div",{className:"nextHoursWeather"}),r=t("h3",{textContent:e.place.name});for(a(d,r),i=2;i<=7;i++){switch(console.log(i+" "+e.forecastTimestamps[i].airTemperature),e.forecastTimestamps[i].conditionCode){case"clear":conditionCodeLt="giedra";break;case"isolated-clouds":conditionCodeLt="mažai debesuota";break;case"scattered-clouds":conditionCodeLt="debesuota su pragiedruliais";break;case"overcast":conditionCodeLt="debesuota";break;case"light-rain":conditionCodeLt="nedidelis lietus";break;case"moderate-rain":conditionCodeLt="lietus";break;case"heavy-rain":conditionCodeLt="smarkus lietus";break;case"sleet":conditionCodeLt="šlapdriba";break;case"light-snow":conditionCodeLt="nedidelis sniegas";break;case"moderate-snow":conditionCodeLt="sniegas";break;case"heavy-snow":conditionCodeLt="smarkus sniegas";break;case"fog":conditionCodeLt="rūkas";break;case"na":conditionCodeLt="oro sąlygos nenustatytos"}var u=t("div",{className:"timeStamp"}),m=t("h4",{textContent:e.forecastTimestamps[i].forecastTimeUtc.slice(11,16)});m.classList.add("utcTime");var h=t("div",{});h.classList.add("weatherIcon"),h.classList.add(e.forecastTimestamps[i].conditionCode);var p=t("h2",{innerHTML:e.forecastTimestamps[i].airTemperature.toFixed(0)+"&deg;"});if(p.classList.add("temperature"),a(u,m),a(u,h),a(u,p),2==i){var f=t("h4",{innerHTML:conditionCodeLt});a(d,u),m.classList.add("utcTime-big"),a(u,m),h.classList.add("weatherIcon-big"),a(u,h),p.classList.add("temperature-big"),a(u,p),f.classList.add("weatherConditions-big"),a(u,f)}a(d,c),i>2&&(u.classList.add("timeStamp-small"),a(c,u),a(u,h),a(u,p),a(u,m))}console.log(e),n.value=null,l.innerHTML=null}).catch(function(e){alert("failed to fetch weatcher data")})}n.addEventListener("input",m),addEventListener("keydown",function(e){13===e.keyCode&&h(s.value)}),u(),h();
},{"./utilities":"8XH7"}]},{},["Focm"], null)