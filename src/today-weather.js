import fetchWeatherData, { fetchWeatherDataOnLoad } from './weatherapi-calls';

function createLocationElement(locationData) {
  const locationElement = document.createElement('p');
  locationElement.classList.add('title-container__location');
  locationElement.textContent = `${locationData.name}, ${locationData.region}, ${locationData.country}`;
  return locationElement;
}

function createDateTimeElement(currentData) {
  const dateTimeElement = document.createElement('p');
  dateTimeElement.classList.add('title-container__date-time');
  dateTimeElement.textContent = `${currentData.last_updated}`;
  return dateTimeElement;
}

function createWeatherSectionContainer() {
  const weatherSectionContainer = document.createElement('section');
  weatherSectionContainer.classList.add('weather-section-container');

  const container = document.querySelector('.container');
  container.appendChild(weatherSectionContainer);
}

export default async function createWeatherSection() {
  createWeatherSectionContainer();
  try {
    const weatherData = await fetchWeatherData();

    if (!weatherData) {
      return;
    }

    const locationData = weatherData.location;
    const currentData = weatherData.current;

    const locationElement = createLocationElement(locationData);
    const dateTimeElement = createDateTimeElement(currentData);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('weather-section__title-container');
    titleContainer.appendChild(locationElement);
    titleContainer.appendChild(dateTimeElement);

    const weatherSection = document.createElement('div');
    weatherSection.classList.add('weather-section-container__weather-section');
    weatherSection.appendChild(titleContainer);

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

export async function createWeatherSectionOnLoad() {
  createWeatherSectionContainer();
  try {
    const weatherData = await fetchWeatherDataOnLoad();

    if (!weatherData) {
      return;
    }

    const locationData = weatherData.location;
    const currentData = weatherData.current;

    const locationElement = createLocationElement(locationData);
    const dateTimeElement = createDateTimeElement(currentData);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('weather-section__title-container');
    titleContainer.appendChild(locationElement);
    titleContainer.appendChild(dateTimeElement);

    const weatherSection = document.createElement('div');
    weatherSection.classList.add('weather-section-container__weather-section');
    weatherSection.appendChild(titleContainer);

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
