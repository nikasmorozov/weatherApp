const { createDomElement, addToDom } = require('./utilities');
const { latinise } = require('./latinise_utility');
const searchGroup = createDomElement('div', { id: 'searchGroup' });
const cityToSearch = createDomElement('input', { id: 'cityToSearch' });
cityToSearch.placeholder = 'paieška';

let isTemperatureAboveZero = null;
let cityData = null;
let linkToFetch = null;
let weatherCard = null;

const preloader = createDomElement('div', {
  className: 'preloader'
});

const locationsCard = createDomElement('ul', { className: 'locationsCard' });

function renderCities() {
  fetch('https://cors-anywhere.herokuapp.com/https://api.meteo.lt/v1/places')
    .then((response => response.json()))
    .then(
      function (data) {
        cityData = data;
        cityToSearch.addEventListener('input', filterCities);
      }
    )
    .catch(
      function (e) {
        alert('failed to fetch locations list');
      }
    );
}

function filterCities() {

  console.clear();

  const filteredCities = cityData.filter(function (value) {
    if (value.code.includes(cityToSearch.value.toLowerCase()) && cityToSearch.value) {
      return true;
    }
  });

  locationsCard.innerHTML = null;
  addToDom(searchGroup, locationsCard);


  for (i = 0; i < 12; i++) {
    const locationToRender = createDomElement('button', {});

    if (filteredCities[i] != undefined) {
      locationToRender.textContent = filteredCities[i].name;
      locationToRender.id = filteredCities[i].code;
      console.log(i + ' ' + filteredCities[i].code);
      addToDom(locationsCard, locationToRender);
    }

    if (isTemperatureAboveZero) {
      locationToRender.className = 'buttonBackgroundWarm';
    } else {
      locationToRender.className = 'buttonBackgroundCold';

    }

    locationToRender.addEventListener('click', function () {
      renderWeatherData(locationToRender.id);

    });
  }
}

function renderWeatherData(city = 'vilnius') {
  linkToFetch = `https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/${city}/forecasts/long-term`;

  if (city.toLowerCase() == 'balbieriskis') {
    linkToFetch = `https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/balbieriskis/forecasts/long-term`;
  }

  console.log(linkToFetch);

  cityToSearch.value = null;

  const app = document.getElementById('weatherApp');

  
  addToDom(weatherApp, preloader);

  fetch(linkToFetch)
    .then((response) => response.json())
    .then(
      function (data) {
        isTemperatureAboveZero = data.forecastTimestamps[0].airTemperature > 0;

        // changes the color scheme to opposite:
        if (city.toLowerCase() == 'balbieriskis') {
          isTemperatureAboveZero = !isTemperatureAboveZero;
        }

        console.log(isTemperatureAboveZero);

        app.innerHTML = {};

        weatherCard = createDomElement('div', {
          className: 'weatherCard'
        });

        if (isTemperatureAboveZero) {
          weatherCard.classList.add('AboveZero');
          cityToSearch.style.backgroundColor = '#ffe48a';
        } else {
          weatherCard.classList.add('BelowZero');
          cityToSearch.style.backgroundColor = '#b2ebf2';
        }

        addToDom(app, weatherCard);

        addToDom(searchGroup, cityToSearch);

        addToDom(weatherCard, searchGroup);

        const nextHoursWeather = createDomElement('div', { className: 'nextHoursWeather' });

        for (i = 0; i <= 12; i++) {
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
          }

          const timeStamp = createDomElement('div', {
            className: 'timeStamp'
          });

          const utcTime = createDomElement('h4', { textContent: data.forecastTimestamps[i + 2].forecastTimeUtc.slice(11, 16) });
          utcTime.classList.add('utcTime');

          const weatherIcon = createDomElement('div', {});
          weatherIcon.classList.add('weatherIcon');
          weatherIcon.classList.add(data.forecastTimestamps[i].conditionCode);

          temperatureValue = data.forecastTimestamps[i].airTemperature.toFixed(0);

          if (temperatureValue === '-0') {
            temperatureValue = 0;
          }

          const temperature = createDomElement('h2', { innerHTML: temperatureValue + '&deg;' });
          temperature.classList.add('temperature');

          addToDom(timeStamp, utcTime);

          addToDom(timeStamp, weatherIcon);

          addToDom(timeStamp, temperature);

          if (i == 0) {
            const cityName = createDomElement('h3', { textContent: data.place.name });
            addToDom(timeStamp, cityName);

            const weatherConditions = createDomElement('h4', { innerHTML: conditionCodeLt });

            addToDom(weatherCard, timeStamp);

            utcTime.textContent = 'dabar';
            utcTime.classList.add('utcTime-big');
            addToDom(timeStamp, utcTime);

            weatherIcon.classList.add('weatherIcon-big');
            addToDom(timeStamp, weatherIcon);

            temperature.classList.add('temperature-big');
            addToDom(timeStamp, temperature);

            weatherConditions.classList.add('weatherConditions-big');
            addToDom(timeStamp, weatherConditions);
          }

          addToDom(weatherCard, nextHoursWeather);

          if (i > 0) {
            timeStamp.classList.add('timeStamp-small');

            addToDom(nextHoursWeather, timeStamp);

            addToDom(timeStamp, weatherIcon);

            addToDom(timeStamp, temperature);

            addToDom(timeStamp, utcTime);
          }
        }

        const sourceMentioning = createDomElement('p', { textContent: 'Duomenų šaltinis: LHMT' });
        sourceMentioning.classList.add('sourceMentioning');
        addToDom(weatherCard, sourceMentioning);

        console.log(data);

        locationsCard.innerHTML = null;
      }
    )
    .catch(
      function (e) {
        alert('failed to fetch weather data');
      }
    );
};

renderCities();

function geolocation() {
  addToDom(weatherApp, preloader);

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;
    // console.log(`Latitude : ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`);

    fetch(`https://eu1.locationiq.com/v1/reverse.php?key=pk.003de9fcbbfbb48f532138a23ccbf018&lat=${crd.latitude}&lon=${crd.longitude}&format=json`)

    //kaimo lokacija testavimui
    // fetch(`https://eu1.locationiq.com/v1/reverse.php?key=pk.003de9fcbbfbb48f532138a23ccbf018&lat=55.193116&lon=25.868977&format=json`)

    .then((response => response.json()))
    .then(
      function (data) {
        console.log(data);

        let geolocatedPlace = undefined;
        if(data.address.state) {
          geolocatedPlace = data.address.state.toLowerCase().split(' ')[0].latinise();
        }
        if(data.address.city) {
          geolocatedPlace = data.address.city.toLowerCase().latinise();
        }
        if(data.address.town) {
          geolocatedPlace = data.address.town.toLowerCase().latinise();
        }
        console.log(geolocatedPlace);
        renderWeatherData(geolocatedPlace);
      }
    )
    .catch(
      function (e) {
        alert('failed to fetch geocode');
        renderWeatherData();
      }
    );
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
}

geolocation();