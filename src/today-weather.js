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

  const container = document.querySelector('.container');
  container.appendChild(weatherSectionContainer);
}

export default async function createWeatherSection() {
  createWeatherSectionContainer();
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
