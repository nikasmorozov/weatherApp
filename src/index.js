const { createDomElement, addToDom } = require('./utilities');
const searchCities = document.getElementById('searchCities');

let city = null;

let cityData = null;

function renderCities () {
  fetch('https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places')
  .then((response => response.json()))
  .then(
    function(data) {
      console.log(data);
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

function filterCities () {
  const filteredCities = cityData.filter(function(value){
    if (value.code === searchCities.value) {
      return true;
    }
  })
  console.log(filteredCities)
}

renderCities();

addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    city = document.getElementById('cityToRender').value;
    changeCity(city);
  }
});

function changeCity(city) {
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

          document.getElementById('cityToRender').value = null;
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

changeCity('vilnius-antakalnis');