/* eslint-disable no-plusplus */
import fetchWeatherData from './weatherapi-calls';
import formatDateToHumanReadable from './date-adjust';

function createLocationElement(locationData) {
  const locationElement = document.createElement('p');
  locationElement.classList.add('title-container__location');
  const name = locationData.name || '';
  const region = locationData.region || '';
  const country = locationData.country || '';

  const locationText = [name, region, country].filter(Boolean).join(', ');

  locationElement.textContent = locationText;

  return locationElement;
}

function createDateTimeElement(locationData) {
  const dateTimeElement = document.createElement('p');
  dateTimeElement.classList.add('title-container__date-time');
  dateTimeElement.textContent = `${formatDateToHumanReadable(
    locationData.localtime,
  )}`;
  return dateTimeElement;
}

function createWeatherSectionContainer() {
  const weatherSectionContainer = document.createElement('section');
  weatherSectionContainer.classList.add('weather-section-container');

  const existingWeatherSection = document.querySelector(
    '.weather-section-container',
  );

  if (existingWeatherSection) {
    existingWeatherSection.remove();
  }

  const container = document.querySelector('.container');
  container.appendChild(weatherSectionContainer);
}

const weatherIcons = {
  Sunny: 'fa-solid fa-sun',
  Clear: 'fa-solid fa-moon',
  'Partly cloudy': 'fa-solid fa-cloud',
  Cloudy: 'fa-solid fa-cloud',
  Overcast: 'fa-solid fa-cloud',
  Mist: 'fa-solid fa-smog',
  'Patchy rain possible': 'fa-solid fa-cloud-rain',
  'Patchy snow possible': 'fa-regular fa-snowflake',
  'Patchy sleet possible': 'fa-regular fa-snowflake',
  'Patchy freezing drizzle possible': 'fa-solid fa-cloud-rain',
  'Thundery outbreaks possible': 'fa-solid fa-cloud-bolt',
  'Blowing snow': 'fa-solid fa-wind',
  Blizzard: 'fa-solid fa-wind',
  Fog: 'fa-solid fa-smog',
  'Freezing fog': 'fa-solid fa-smog',
  'Patchy light drizzle': 'fa-solid fa-cloud-rain',
  'Light drizzle': 'fa-solid fa-cloud-rain',
  'Freezing drizzle': 'fa-regular fa-snowflake',
  'Heavy freezing drizzle': 'fa-regular fa-snowflake',
  'Patchy light rain': 'fa-solid fa-cloud-rain',
  'Light rain': 'fa-solid fa-cloud-rain',
  'Moderate rain at times': 'fa-solid fa-cloud-rain',
  'Moderate rain': 'fa-solid fa-cloud-rain',
  'Heavy rain at times': 'fa-solid fa-cloud-showers-heavy',
  'Heavy rain': 'fa-solid fa-cloud-showers-heavy',
  'Light freezing rain': 'fa-solid fa-cloud-rain',
  'Moderate or heavy freezing rain': 'fa-regular fa-snowflake',
  'Light sleet': 'fa-regular fa-snowflake',
  'Moderate or heavy sleet': 'fa-regular fa-snowflake',
  'Patchy light snow': 'fa-regular fa-snowflake',
  'Light snow': 'fa-regular fa-snowflake',
  'Patchy moderate snow': 'fa-regular fa-snowflake',
  'Moderate snow': 'fa-regular fa-snowflake',
  'Patchy heavy snow': 'fa-solid fa-cloud-showers-heavy',
  'Heavy snow': 'fa-solid fa-cloud-showers-heavy',
  'Ice pellets': 'fa-solid fa-snowflake',
  'Light rain shower': 'fa-solid fa-cloud-showers-heavy',
  'Moderate or heavy rain shower': 'fa-solid fa-cloud-showers-heavy',
  'Torrential rain shower': 'fa-solid fa-cloud-showers-heavy',
  'Light sleet showers': 'fa-solid fa-snowflake',
  'Moderate or heavy sleet showers': 'fa-solid fa-cloud-showers-heavy',
  'Light snow showers': 'fa-regular fa-snowflake',
  'Moderate or heavy snow showers': 'fa-regular fa-snowflake',
  'Light showers of ice pellets': 'fa-solid fa-cloud-rain',
  'Moderate or heavy showers of ice pellets': 'fa-solid fa-showers-heavy',
  'Patchy light rain with thunder': 'fa-solid fa-cloud-bolt',
  'Moderate or heavy rain with thunder': 'fa-solid fa-cloud-bolt',
  'Patchy light snow with thunder': 'fa-solid fa-cloud-bolt',
  'Moderate or heavy snow with thunder': 'fa-solid fa-cloud-bolt',
};

function getNext24HoursData(weatherData) {
  const currentLastUpdated = new Date(weatherData.current.last_updated);

  const forecastDay0 = weatherData.forecast.forecastday[0].hour;
  const forecastDay1 = weatherData.forecast.forecastday[1].hour;

  const next24Hours = [];

  for (let i = 0; i < forecastDay0.length; i++) {
    const hourData = forecastDay0[i];
    const thetimehere = new Date(hourData.time);

    if (thetimehere - currentLastUpdated > -(3600 * 1000)) {
      next24Hours.push(hourData);
    }
    if (next24Hours.length >= 24) {
      break;
    }
  }

  if (next24Hours.length < 24) {
    for (let i = 0; i < forecastDay1.length; i++) {
      const hourData = forecastDay1[i];

      next24Hours.push(hourData);

      if (next24Hours.length >= 24) {
        break;
      }
    }
  }

  return next24Hours;
}

export default async function createWeatherSection() {
  createWeatherSectionContainer();
  let isfahrenheit = false;
  let isCelcius = false;

  const activeUnit = document.querySelector('.active-unit-button');

  if (activeUnit.id === 'fahrenheit') {
    isfahrenheit = true;
  } else if (activeUnit.id === 'celcius') {
    isCelcius = true;
  }

  try {
    const result = await fetchWeatherData();

    if (!result) {
      return;
    }

    const weatherData = result.data;

    const locationData = weatherData.location;

    const locationElement = createLocationElement(locationData);
    const dateTimeElement = createDateTimeElement(locationData);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('weather-section__title-container');
    titleContainer.appendChild(locationElement);
    titleContainer.appendChild(dateTimeElement);

    const todayDescription = document.createElement('p');
    todayDescription.classList.add('main-pill-top__today-description');
    todayDescription.textContent = `${weatherData.current.condition.text}`;

    const todayFeelsLike = document.createElement('p');
    todayFeelsLike.classList.add('main-pill-top__today-feels-like');
    let feelsliketext = '';
    if (isfahrenheit) {
      feelsliketext = `Feels like ${weatherData.current.feelslike_f}°F`;
    } else if (isCelcius) {
      feelsliketext = `Feels like ${weatherData.current.feelslike_c}°C`;
    }
    todayFeelsLike.textContent = feelsliketext;

    const mainPillTop = document.createElement('div');
    mainPillTop.classList.add('main-pill__main-pill-top');
    mainPillTop.appendChild(todayDescription);
    mainPillTop.appendChild(todayFeelsLike);

    const weatherPic = document.createElement('i');
    weatherPic.setAttribute(
      'class',
      weatherIcons[weatherData.current.condition.text],
    );
    weatherPic.classList.add('main-pill-mid__weather-pic');

    const currentTempText = document.createElement('p');
    currentTempText.classList.add('main-pill-mid__current-temp-text');
    let nowtemptext = '';
    if (isfahrenheit) {
      nowtemptext = `${weatherData.current.temp_f}°`;
    } else if (isCelcius) {
      nowtemptext = `${weatherData.current.temp_c}°`;
    }
    currentTempText.textContent = nowtemptext;

    const mainPillMid = document.createElement('div');
    mainPillMid.classList.add('main-pill__main-pill-mid');
    mainPillMid.appendChild(weatherPic);
    mainPillMid.appendChild(currentTempText);

    const todayHighText = document.createElement('p');
    todayHighText.classList.add('main-pill-bot--today-lowhigh-text');
    let hightemptext = '';
    if (isfahrenheit) {
      hightemptext = `High: ${weatherData.forecast.forecastday[0].day.maxtemp_f}°F`;
    } else if (isCelcius) {
      hightemptext = `High: ${weatherData.forecast.forecastday[0].day.maxtemp_c}°C`;
    }
    todayHighText.textContent = hightemptext;

    const todayLowText = document.createElement('p');
    todayLowText.classList.add('main-pill-bot--today-lowhigh-text');
    let lowtemptext = '';
    if (isfahrenheit) {
      lowtemptext = `Low: ${weatherData.forecast.forecastday[0].day.mintemp_f}°F`;
    } else if (isCelcius) {
      lowtemptext = `Low: ${weatherData.forecast.forecastday[0].day.mintemp_c}°C`;
    }
    todayLowText.textContent = lowtemptext;

    const mainPillBot = document.createElement('div');
    mainPillBot.classList.add('main-pill__main-pill-bot');
    mainPillBot.appendChild(todayHighText);
    mainPillBot.appendChild(todayLowText);

    const mainPill = document.createElement('div');
    mainPill.classList.add('today-weather-section__main-pill');
    mainPill.appendChild(mainPillTop);
    mainPill.appendChild(mainPillMid);
    mainPill.appendChild(mainPillBot);

    const hourlyPill = document.createElement('div');
    hourlyPill.classList.add('today-weather-section__hourly-pill');

    const hourlyData = getNext24HoursData(weatherData);
    console.log(hourlyData);
    let firstbold = true;

    for (let i = 0; i < hourlyData.length; i++) {
      const hourData = hourlyData[i];
      const timeWithoutDate = hourData.time.split(' ')[1];
      const temperatureCelsius = hourData.temp_c;
      const temperatureFarenheit = hourData.temp_f;
      const weatherText = hourData.condition.text;

      const card = document.createElement('div');
      card.classList.add('hourly-pill__card');

      const timeElement = document.createElement('div');
      timeElement.classList.add('card__time');
      timeElement.textContent = timeWithoutDate;
      if (firstbold) {
        timeElement.style.fontWeight = '600';
        firstbold = false;
      }

      const iconElement = document.createElement('i');
      iconElement.setAttribute('class', weatherIcons[weatherText]);
      iconElement.classList.add('card__icon');

      const temperatureElement = document.createElement('div');
      temperatureElement.classList.add('card__temperature');
      if (isfahrenheit) {
        temperatureElement.textContent = `${temperatureFarenheit}°`;
      } else if (isCelcius) {
        temperatureElement.textContent = `${temperatureCelsius}°`;
      }

      card.appendChild(timeElement);
      card.appendChild(iconElement);
      card.appendChild(temperatureElement);

      hourlyPill.appendChild(card);
    }

    const todayWeatherSection = document.createElement('div');
    todayWeatherSection.classList.add('weather-section__today-weather-section');
    todayWeatherSection.appendChild(mainPill);
    todayWeatherSection.appendChild(hourlyPill);

    const weatherSection = document.createElement('div');
    weatherSection.classList.add('weather-section-container__weather-section');
    weatherSection.appendChild(titleContainer);
    weatherSection.appendChild(todayWeatherSection);

    const existingWeatherSection = document.querySelector(
      '.weather-section-container__weather-section',
    );

    if (existingWeatherSection) {
      existingWeatherSection.remove();
    }
    document
      .querySelector('.weather-section-container')
      .appendChild(weatherSection);
  } catch (error) {
    console.error('Error creating weather section:', error);
  }
}
