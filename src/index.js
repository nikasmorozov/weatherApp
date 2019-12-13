const { createDomElement, addToDom } = require('./utilities');
const cityToSearch = document.getElementById('cityToSearch');

let city = cityToSearch;
let cityData = null;
const locationsCard = createDomElement('ul', { className: 'locationsCard' });

cityToSearch.addEventListener('input', filterCities)

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

  for (i = 0; i < 20; i++) {
    
    addToDom(weatherApp, locationsCard);

    const locationToRender = createDomElement('button', {
      textContent: filteredCities[i].code
    });

    locationToRender.id = filteredCities[i].code;
    
    locationToRender.addEventListener('click', function() {
      changeCity(locationToRender.id);
    });
    addToDom(locationsCard, locationToRender);

    console.log(filteredCities[i].code)
  };
};

function changeCity(city = 'vilnius-antakalnis') {
  // kaip is-return-inti linkToRender reiksme is funkcijos?
  let linkToFetch = `https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/${city}/forecasts/long-term`;

  console.log(linkToFetch);

  function getWeatherData() {

    fetch(linkToFetch)
      .then((response) => response.json())
      .then(
        function (data) {
          const app = document.getElementById('weatherApp');

          app.innerHTML = null;

          let weatherCard = null;

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

            switch (i-2) {
              case 0:
                timeName = 'dabar: ';
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

            const timeStamp = createDomElement('h4', { innerHTML: timeName + data.forecastTimestamps[i].airTemperature.toFixed(0) + '&#176;' + ' ' + data.forecastTimestamps[i].conditionCode + '  ' });

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