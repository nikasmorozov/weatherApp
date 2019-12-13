const { createDomElement, addToDom } = require('./utilities');
const cityToSearch = createDomElement('input', { id: 'cityToSearch' });
cityToSearch.placeholder = 'vietovės paieška';

let city = cityToSearch;
let cityData = null;
let weatherCard = null;

const locationsCard = createDomElement('ul', { className: 'locationsCard' });

cityToSearch.addEventListener('input', filterCities);

addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    changeCity(city.value);
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
        console.log(e);
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

    const locationToRender = createDomElement('button', {
      textContent: filteredCities[i].code
    });

    locationToRender.id = filteredCities[i].code;

    locationToRender.addEventListener('click', function () {
      changeCity(locationToRender.id);
    });
    addToDom(locationsCard, locationToRender);

    console.log(filteredCities[i].code)
  };
};

function changeCity(city = 'vilnius') {
  // kaip is-return-inti linkToRender reiksme is funkcijos?
  let linkToFetch = `https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/${city}/forecasts/long-term`;

  console.log(linkToFetch);

  function renderWeatherData() {

    fetch(linkToFetch)
      .then((response) => response.json())
      .then(
        function (data) {
          const app = document.getElementById('weatherApp');

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

          const cityName = createDomElement('h2', { textContent: data.place.name });
          addToDom(weatherCard, cityName);

          for (i = 2; i < 6; i++) {
            console.log(i + ' ' + data.forecastTimestamps[i].airTemperature);

            switch (i - 2) {
              case 0:
                timeName = 'dabar: ';
                break;
              case 1:
                timeName = 'po valandos: ';
                break;
              case 2:
                timeName = 'po dviejų valandų: ';
                break;
              case 3:
                timeName = 'po trijų valandų: ';
                break;

            };

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

            const timeStamp = createDomElement('h4', { innerHTML: timeName + data.forecastTimestamps[i].airTemperature.toFixed(0) + '&#176;' + ' ' + conditionCodeLt });

            timeStamp.classList.add('temperatureData');
            addToDom(weatherCard, timeStamp);

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
          console.log(e);
        }
      );
  };

  renderWeatherData();
};

renderCities();

changeCity();