const { createDomElement, addToDom } = require('./utilities');
const cityToSearch = createDomElement('input', { id: 'cityToSearch' });
cityToSearch.placeholder = 'vietovės paieška';

let city = cityToSearch;
let cityData = null;
let linkToFetch = null;
let weatherCard = null;

const locationsCard = createDomElement('ul', { className: 'locationsCard' });

cityToSearch.addEventListener('input', filterCities);

addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    renderWeatherData(city.value);
  }
});

function renderCities() {
  fetch('https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places')
    .then((response => response.json()))
    .then(
      function (data) {
        cityData = data;
        cityToSearch.addEventListener('input', filterCities)
      }
    )
    .catch(
      function (e) {
        alert('failed to fetch locations list')
      }
    );
};

function filterCities() {

  console.clear();

  addToDom(weatherApp, locationsCard);

  const filteredCities = cityData.filter(function (value) {
    if (value.code.includes(cityToSearch.value)) {
      return true;
    }
  });

  locationsCard.innerHTML = null;

  for (i = 0; i < 10; i++) {

    addToDom(weatherCard, locationsCard);
    const locationToRender = createDomElement('button', { });

    if (filteredCities[i] != undefined) {
      locationToRender.textContent = filteredCities[i].code;
      locationToRender.id = filteredCities[i].code;
      console.log(filteredCities[i].code)
    };

    locationToRender.addEventListener('click', function () {
      renderWeatherData(locationToRender.id);
    });
    addToDom(locationsCard, locationToRender)
  };
};

function renderWeatherData(city = 'vilnius') {
  linkToFetch = `https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/${city}/forecasts/long-term`;

  console.log(linkToFetch);

  const app = document.getElementById('weatherApp');

  const preloader = createDomElement('div', {
    className: 'preloader'
  });
  addToDom(weatherApp, preloader);

  fetch(linkToFetch)
    .then((response) => response.json())
    .then(
      function (data) {

        app.innerHTML = null;

        weatherCard = createDomElement('div', {
          className: 'weatherCard'
        })

        if (data.forecastTimestamps[2].airTemperature > 0) {
          weatherCard.classList.add('AboveZero');
        } else {
          weatherCard.classList.add('BelowZero');
        }

        addToDom(app, weatherCard);

        const cityName = createDomElement('h3', { textContent: data.place.name });
        addToDom(weatherCard, cityName);

        for (i = 2; i < 6; i++) {
          console.log(i + ' ' + data.forecastTimestamps[i].airTemperature);

          switch (data.forecastTimestamps[i].conditionCode) {
            case 'clear':
              conditionCodeLt = 'giedra';
              break;

            case 'isolated-clouds':
              conditionCodeLt = 'mažai debesuota';
              break;

            case 'scattered-clouds':
              conditionCodeLt = 'debesuota su pragiedruliais';
              break;

            case 'overcast':
              conditionCodeLt = 'debesuota';
              break;

            case 'light-rain':
              conditionCodeLt = 'nedidelis lietus';
              break;

            case 'moderate-rain':
              conditionCodeLt = 'lietus';
              break;

            case 'heavy-rain':
              conditionCodeLt = 'smarkus lietus';
              break;

            case 'sleet':
              conditionCodeLt = 'šlapdriba';
              break;

            case 'light-snow':
              conditionCodeLt = 'nedidelis sniegas';
              break;

            case 'moderate-snow':
              conditionCodeLt = 'sniegas';
              break;

            case 'heavy-snow':
              conditionCodeLt = 'smarkus sniegas';
              break;

            case 'fog':
              conditionCodeLt = 'rūkas';
              break;

            case 'na':
              conditionCodeLt = 'oro sąlygos nenustatytos';
              break;
          };

          const utcTime = createDomElement('h4', { textContent: data.forecastTimestamps[i].forecastTimeUtc.slice(11, 13) + ' val.' });
          utcTime.classList.add('utcTime')
          addToDom(weatherCard, utcTime);

          const timeStamp = createDomElement('div', {
            className: 'timeStamp'
          });
          addToDom(weatherCard, timeStamp);

          const temperature = createDomElement('h2', { innerHTML: data.forecastTimestamps[i].airTemperature.toFixed(0) + '&#x2103;'});
          addToDom(timeStamp, temperature);

          const weatherConditions = createDomElement('h4', { innerHTML: conditionCodeLt });
          addToDom(timeStamp, weatherConditions);

          const weatherIcon = createDomElement('div', {
            className: 'conditionSymbol'
          });
          weatherIcon.classList.add(data.forecastTimestamps[i].conditionCode);
          addToDom(timeStamp, weatherIcon);
        };

        console.log(data);

        addToDom(weatherCard, cityToSearch);

        cityToSearch.value = null;
      }
    )
    .catch(
      function (e) {
        alert('failed to fetch weatcher data');
      }
    );
};

renderCities();

renderWeatherData();