const { createDomElement, addToDom } = require('./utilities')

function getWeatherData() {

  fetch('https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/vilnius/forecasts/long-term')
    .then((resp) => resp.json())
    .then(
      function (data) {
        const app = document.getElementById('weatherApp');

        app.innerHTML = null;

        const locationCard = createDomElement('div', {
          className: 'locationCard'
        });

        const cityName = createDomElement('h4', { textContent: data.place.name });
        const temperature = createDomElement('h2', { innerHTML: data.forecastTimestamps[0].airTemperature + ' &#8451;' });

        addToDom(app, locationCard);
        addToDom(locationCard, temperature);
        addToDom(locationCard, cityName);
        console.log(data)
      }
    )
    .catch(
      function (e) {
        console.log(e);
      }
    );
};

getWeatherData();