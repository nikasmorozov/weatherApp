const { createDomElement, addToDom } = require('./utilities');
const searchCities = document.getElementById('searchCities');

let city = searchCities;
let cityData = null;
const renderedCities = createDomElement('div', { className: 'renderedCities' });

searchCities.addEventListener('input', filterCities)

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
        searchCities.addEventListener('input', filterCities)
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

  addToDom(weatherApp, renderedCities);

  const filteredCities = cityData.filter(function (value) {
    if (value.code.includes(searchCities.value)) {
      return true;
    }
  });

  filteredCities.forEach(function (value) {
    let x = JSON.stringify(value.code);
    // addToDom(renderedCities, x)

    console.log(x);
  })
};

function changeCity(city = 'vilnius-antakalnis') {
  // kaip is-return-inti linkToRender reiksme is funkcijos?
  let linkToRender = `https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/${city}/forecasts/long-term`;



  console.log(linkToRender);

  function getWeatherData() {

    fetch(linkToRender)
      .then((response) => response.json())
      .then(
        function (data) {
          const app = document.getElementById('weatherApp');

          app.innerHTML = null;

          let weatherCard = null;

          weatherCard = createDomElement('div', {
            className: 'weatherCard'
          })

          if (data.forecastTimestamps[0].airTemperature > 0) {
            weatherCard.classList.add('AboveZero');
          } else {
            weatherCard.classList.add('BelowZero');
          }

          addToDom(app, weatherCard);

          const cityName = createDomElement('h2', { textContent: data.place.name });
          addToDom(weatherCard, cityName);

          for (i = 0; i < 4; i++) {
            console.log(i + ' ' + data.forecastTimestamps[i].airTemperature);

            switch (i) {
              case 0:
                timeName = 'now: ';
                break;
              case 1:
                timeName = 'in one hour: ';
                break;
              case 2:
                timeName = 'in two hours: ';
                break;
              case 3:
                timeName = 'in three hours: ';
                break;

            };

            const timeStamp = createDomElement('h4', { innerHTML: timeName + data.forecastTimestamps[i].airTemperature + '&#176;' + ' ' + data.forecastTimestamps[i].conditionCode + '  ' });

            timeStamp.classList.add('temperatureData');
            addToDom(weatherCard, timeStamp);

            const weatherIcon = createDomElement('div', {
              className: 'conditionSymbol'
            });
            weatherIcon.classList.add(data.forecastTimestamps[i].conditionCode);
            addToDom(timeStamp, weatherIcon);
          };

          console.log(data)

          document.getElementById('searchCities').value = null;
        }
      )
      .catch(
        function (e) {
          console.log(e);
        }
      );
  };

  getWeatherData();
};

renderCities();

changeCity();