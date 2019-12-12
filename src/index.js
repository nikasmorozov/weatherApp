const { createDomElement, addToDom } = require('./utilities')

function getWeatherData() {

    fetch('https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/utena/forecasts/long-term')
    .then((resp) => resp.json())
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

        const cityName = createDomElement('h4', { textContent: data.place.name });
        addToDom(weatherCard, cityName);
      
        for (i = 0; i < 4; i++) { 
          console.log(i + '  ' +  + '  ' + data.forecastTimestamps[i].airTemperature);
            const temperature = createDomElement('h2', { innerHTML: data.forecastTimestamps[i].airTemperature + '&#176;' + ' ' + data.forecastTimestamps[i].conditionCode});
            temperature.classList.add('temperatureData');
            addToDom(weatherCard, temperature);
        };
        
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