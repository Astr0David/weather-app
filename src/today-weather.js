/* eslint-disable no-plusplus */
import fetchWeatherData from './weatherapi-calls';
import formatDateToHumanReadable from './date-adjust';

function createTextElement(className, textContent) {
  const element = document.createElement('p');
  element.classList.add(className);
  element.textContent = textContent;
  return element;
}

function createIconElement(className) {
  const element = document.createElement('i');
  element.setAttribute('class', className);
  return element;
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

function createCard(
  timeWithoutDate,
  weatherText,
  temperature,
  isfahrenheit,
  isCelcius,
) {
  const card = document.createElement('div');
  card.classList.add('hourly-pill__card');

  const timeElement = createTextElement('card__time', timeWithoutDate);
  const iconElement = createIconElement(weatherIcons[weatherText]);
  iconElement.classList.add('card__icon');
  const temperatureElement = createTextElement(
    'card__temperature',
    `${temperature}°`,
  );

  if (isfahrenheit) {
    temperatureElement.textContent = `${temperature}°F`;
  } else if (isCelcius) {
    temperatureElement.textContent = `${temperature}°C`;
  }

  card.appendChild(timeElement);
  card.appendChild(iconElement);
  card.appendChild(temperatureElement);

  return card;
}

function createStatCard(stat, title, icon, angle = '') {
  const card = document.createElement('div');
  card.classList.add('stats-weather-section__stat-card');

  const statCardTitle = createTextElement('stat-card__title', title);

  const statCardStat = createTextElement('stat-card__stat', stat);

  const iconElement = createIconElement(icon);
  iconElement.classList.add('stat-card__icon');

  if (angle !== '') {
    iconElement.style.transform = `rotate(${angle}deg)`;
  }

  card.appendChild(statCardTitle);
  card.appendChild(statCardStat);
  card.appendChild(iconElement);

  return card;
}

function getWeekDay(dateString) {
  const date = new Date(dateString);

  const dayOfWeekNumber = date.getDay();

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeekName = daysOfWeek[dayOfWeekNumber];

  return dayOfWeekName;
}

function createUpcomingTable(weatherData, isFahrenheit) {
  const upcomingData = [];

  for (let i = 1; i <= 2; i++) {
    const forecast = weatherData.forecast.forecastday[i];
    const dayData = {
      day: getWeekDay(forecast.date),
      description: forecast.day.condition.text,
      maxTemperature: isFahrenheit
        ? `${forecast.day.maxtemp_f}°F`
        : `${forecast.day.maxtemp_c}°C`,
      minTemperature: isFahrenheit
        ? `${forecast.day.mintemp_f}°F`
        : `${forecast.day.mintemp_c}°C`,
      chanceOfRain: `${forecast.day.daily_chance_of_rain}%`,
      humidity: `${forecast.day.avghumidity}%`,
    };

    upcomingData.push(dayData);
  }

  const table = document.createElement('table');
  table.classList.add('upcoming-weather-section__table');

  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow(0);
  const headers = [
    'Day',
    '',
    'Max Temp',
    'Min Temp',
    'Chance of Rain',
    'Humidity',
  ];

  for (let i = 0; i < headers.length; i++) {
    const th = document.createElement('th');
    th.textContent = headers[i];
    headerRow.appendChild(th);
  }

  const tableBody = document.createElement('tbody');

  upcomingData.forEach((data, i) => {
    const row = tableBody.insertRow();
    const rowData = [
      data.day,
      createIconElement(weatherIcons[data.description]),
      data.maxTemperature,
      data.minTemperature,
      data.chanceOfRain,
      data.humidity,
    ];

    rowData.forEach((item, index) => {
      const cell = row.insertCell();
      if (item instanceof Element) {
        cell.appendChild(item);
        if (index === 1) {
          cell.classList.add('icon-cell');
        }
      } else {
        cell.textContent = item;
      }
    });

    if (i === upcomingData.length - 1) {
      row.classList.add('last-row');
    }
  });

  table.appendChild(tableBody);

  return table;
}

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

function createWeatherSection(weatherData, isfahrenheit, isCelcius) {
  const currentWeather = weatherData.current;
  const forecast = weatherData.forecast.forecastday[0].day;

  const locationElement = createTextElement(
    'title-container__location',
    `${weatherData.location.name ? `${weatherData.location.name}, ` : ''}${
      weatherData.location.region ? `${weatherData.location.region}, ` : ''
    }${weatherData.location.country ? weatherData.location.country : ''}`,
  );

  const dateTimeElement = createTextElement(
    'title-container__date-time',
    formatDateToHumanReadable(weatherData.location.localtime),
  );

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('weather-section__title-container');
  titleContainer.appendChild(locationElement);
  titleContainer.appendChild(dateTimeElement);

  const todayDescription = createTextElement(
    'main-pill-top__today-description',
    currentWeather.condition.text,
  );

  const todayFeelsLike = createTextElement(
    'main-pill-top__today-feels-like',
    `Feels like ${
      isfahrenheit ? currentWeather.feelslike_f : currentWeather.feelslike_c
    }°`,
  );

  const mainPillTop = document.createElement('div');
  mainPillTop.classList.add('main-pill__main-pill-top');
  mainPillTop.appendChild(todayDescription);
  mainPillTop.appendChild(todayFeelsLike);

  const weatherPic = createIconElement(
    weatherIcons[currentWeather.condition.text],
  );
  weatherPic.classList.add('main-pill-mid__weather-pic');

  const currentTempText = createTextElement(
    'main-pill-mid__current-temp-text',
    `${isfahrenheit ? currentWeather.temp_f : currentWeather.temp_c}°`,
  );

  const mainPillMid = document.createElement('div');
  mainPillMid.classList.add('main-pill__main-pill-mid');
  mainPillMid.appendChild(weatherPic);
  mainPillMid.appendChild(currentTempText);

  const todayHighText = createTextElement(
    'main-pill-bot--today-lowhigh-text',
    `High: ${isfahrenheit ? forecast.maxtemp_f : forecast.maxtemp_c}°`,
  );

  const todayLowText = createTextElement(
    'main-pill-bot--today-lowhigh-text',
    `Low: ${isfahrenheit ? forecast.mintemp_f : forecast.mintemp_c}°`,
  );

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

  hourlyData.forEach((hourData, index) => {
    const timeWithoutDate = hourData.time.split(' ')[1];
    const temperature = isfahrenheit ? hourData.temp_f : hourData.temp_c;
    const weatherText = hourData.condition.text;

    const card = createCard(
      timeWithoutDate,
      weatherText,
      temperature,
      isfahrenheit,
      isCelcius,
    );

    if (index === 0) {
      card.querySelector('.card__time').style.fontWeight = '600';
    }

    hourlyPill.appendChild(card);
  });

  const todayWeatherSection = document.createElement('div');
  todayWeatherSection.classList.add('weather-section__today-weather-section');
  todayWeatherSection.appendChild(mainPill);
  todayWeatherSection.appendChild(hourlyPill);

  const sunriseStat = createStatCard(
    weatherData.forecast.forecastday[0].astro.sunrise,
    'Sunrise',
    'fa-solid fa-cloud-sun',
  );

  const sunsetStat = createStatCard(
    weatherData.forecast.forecastday[0].astro.sunset,
    'Sunset',
    'fa-solid fa-cloud-moon',
  );

  const windStat = createStatCard(
    `${
      isfahrenheit
        ? `${currentWeather.wind_mph} mph`
        : `${currentWeather.wind_kph} kph`
    }`,
    'Wind',
    'fa-solid fa-wind',
  );

  const windDirectionStat = createStatCard(
    currentWeather.wind_dir,
    'Wind Direction',
    'fa-solid fa-up-long',
    currentWeather.wind_degree,
  );

  const humidityStat = createStatCard(
    `${currentWeather.humidity}%`,
    'Humidity',
    'fa-solid fa-droplet',
  );

  const uvStat = createStatCard(currentWeather.uv, 'UV', 'fa-regular fa-sun');

  const chanceOfRainStat = createStatCard(
    `${weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%`,
    'Chance of Rain',
    'fa-solid fa-cloud-showers-water',
  );

  const precipitationStat = createStatCard(
    `${
      isfahrenheit
        ? `${currentWeather.precip_in} inches`
        : `${currentWeather.precip_mm} mm`
    }`,
    'Precipitation',
    'fa-solid fa-water',
  );

  const statsWeatherSection = document.createElement('div');
  statsWeatherSection.classList.add('weather-section__stats-weather-section');
  statsWeatherSection.appendChild(sunriseStat);
  statsWeatherSection.appendChild(sunsetStat);
  statsWeatherSection.appendChild(windStat);
  statsWeatherSection.appendChild(windDirectionStat);
  statsWeatherSection.appendChild(humidityStat);
  statsWeatherSection.appendChild(uvStat);
  statsWeatherSection.appendChild(chanceOfRainStat);
  statsWeatherSection.appendChild(precipitationStat);

  const upcomingWeatherSection = document.createElement('div');
  upcomingWeatherSection.classList.add(
    'weather-section__upcoming-weather-section',
  );
  upcomingWeatherSection.appendChild(
    createUpcomingTable(weatherData, isfahrenheit),
  );

  const weatherSection = document.createElement('div');
  weatherSection.classList.add('weather-section-container__weather-section');
  weatherSection.appendChild(titleContainer);
  weatherSection.appendChild(todayWeatherSection);
  weatherSection.appendChild(statsWeatherSection);
  weatherSection.appendChild(upcomingWeatherSection);

  const existingWeatherSection = document.querySelector(
    '.weather-section-container__weather-section',
  );

  if (existingWeatherSection) {
    existingWeatherSection.remove();
  }

  document
    .querySelector('.weather-section-container')
    .appendChild(weatherSection);
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

export default async function initialiseWeatherSection() {
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

    createWeatherSection(weatherData, isfahrenheit, isCelcius);
  } catch (error) {
    console.error('Error creating weather section:', error);
  }
}
