const { createDomElement, addToDom } = require('./utilities');
const searchGroup = createDomElement('div', { id: 'searchGroup' });
const cityToSearch = createDomElement('input', { id: 'cityToSearch' });
cityToSearch.placeholder = 'paieška';

let isTemperatureAboveZero = null;
let city = cityToSearch;
let cityData = null;
let linkToFetch = null;
let weatherCard = null;

const locationsCard = createDomElement('ul', { className: 'locationsCard' });

cityToSearch.addEventListener('keyup', filterCities);

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

  const filteredCities = cityData.filter(function (value) {
    if (value.code.includes(cityToSearch.value.toLowerCase()) && cityToSearch.value) {
      return true;
    }
  });

  locationsCard.innerHTML = null;
  addToDom(searchGroup, locationsCard);


  for (i = 0; i < 10; i++) {
    const locationToRender = createDomElement('button', {});

    if (filteredCities[i] != undefined) {
      locationToRender.textContent = filteredCities[i].name;
      locationToRender.id = filteredCities[i].code;
      console.log(filteredCities[i].code);
      addToDom(locationsCard, locationToRender)
    };

    if (isTemperatureAboveZero) {
      locationToRender.className = 'buttonBackgroundWarm';
    } else {
      locationToRender.className = 'buttonBackgroundCold';

    };

    locationToRender.addEventListener('click', function () {
      renderWeatherData(locationToRender.id);
    });

    locationToRender.addEventListener('keydown', function (e) {
      if (e.keyCode === 13) {
        renderWeatherData(locationToRender.id);
      }
    });
  };
};

function renderWeatherData(city = 'vilnius') {
  linkToFetch = `https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/${city}/forecasts/long-term`;

  if (city.toLowerCase() == 'reverse') {
    linkToFetch = `https://cors-anywhere.herokuapp.com/http://api.meteo.lt/v1/places/balbieriskis/forecasts/long-term`;
  };

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
        isTemperatureAboveZero = data.forecastTimestamps[0].airTemperature > 0;

        if(city.toLowerCase() == 'reverse') {
          isTemperatureAboveZero = !isTemperatureAboveZero;
        };

        console.log(isTemperatureAboveZero);

        app.innerHTML = null;

        weatherCard = createDomElement('div', {
          className: 'weatherCard'
        });

        if (isTemperatureAboveZero) {
          weatherCard.classList.add('AboveZero');
          cityToSearch.style.backgroundColor = '#ffe48a';
        } else {
          weatherCard.classList.add('BelowZero');
          cityToSearch.style.backgroundColor = '#b2ebf2';
        };

        addToDom(app, weatherCard);

        addToDom(searchGroup, cityToSearch);

        addToDom(weatherCard, searchGroup);

        const nextHoursWeather = createDomElement('div', { className: 'nextHoursWeather' });
        
        for (i = 0; i <= 7; i++) {
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

          const timeStamp = createDomElement('div', {
            className: 'timeStamp'
          });

          

          const utcTime = createDomElement('h4', { textContent: data.forecastTimestamps[i + 2].forecastTimeUtc.slice(11, 16) });
          utcTime.classList.add('utcTime')

          const weatherIcon = createDomElement('div', {});
          weatherIcon.classList.add('weatherIcon')
          weatherIcon.classList.add(data.forecastTimestamps[i].conditionCode);

          const temperature = createDomElement('h2', { innerHTML: data.forecastTimestamps[i].airTemperature.toFixed(0) + '&deg;' });
          temperature.classList.add('temperature')

          addToDom(timeStamp, utcTime);

          addToDom(timeStamp, weatherIcon);

          addToDom(timeStamp, temperature);

          if (i == 0) {
            const cityName = createDomElement('h3', { textContent: data.place.name });
            addToDom(timeStamp, cityName);

            const weatherConditions = createDomElement('h4', { innerHTML: conditionCodeLt });

            addToDom(weatherCard, timeStamp);

            utcTime.classList.add('utcTime-big');
            addToDom(timeStamp, utcTime);

            weatherIcon.classList.add('weatherIcon-big');
            addToDom(timeStamp, weatherIcon);

            temperature.classList.add('temperature-big')
            addToDom(timeStamp, temperature);

            weatherConditions.classList.add('weatherConditions-big')
            addToDom(timeStamp, weatherConditions);
          };

          addToDom(weatherCard, nextHoursWeather);

          if (i > 0) {
            timeStamp.classList.add('timeStamp-small');

            addToDom(nextHoursWeather, timeStamp);

            addToDom(timeStamp, weatherIcon);

            addToDom(timeStamp, temperature);

            addToDom(timeStamp, utcTime);
          };
        };

        console.log(data);

        cityToSearch.value = null;

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

renderWeatherData();