const getWeatherData = () => {
  let options = {
    mode: 'cors'
  };

  fetch('http://82.140.185.11/v1/places/vilnius/forecasts/long-term', options)
  .then((resp) => resp.json())
  .then(
      function(data) {
          console.log(data)
      }
  )
  .catch (
      function (e) {
          console.log(e);
      }
  );
};

getWeatherData();

const weatherDataFetched = require('./getData');
const {createDomElement, addToDom} = require('./utilities')

function render() {
  const app = document.getElementById('weatherApp');

  app.innerHTML = null;

  const locationCard = createDomElement('div', {
    className: 'locationCard'
  });

  const cityName = createDomElement('h4', {textContent: weatherDataFetched.weatherData.place.name});
  const temperature = createDomElement('h2', {innerHTML: weatherDataFetched.weatherData.forecastTimestamps[0].airTemperature + ' &#8451;'});

  addToDom(app, locationCard);
  addToDom(locationCard, temperature);
  addToDom(locationCard, cityName);


};

render();