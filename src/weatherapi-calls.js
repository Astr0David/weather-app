function toggleAlertText() {
  const errorMessage = document.getElementById('errormessage');
  const searchBar = document.getElementById('search-bar');

  if (errorMessage.style.display === 'none') {
    errorMessage.style.display = 'block';
    searchBar.style.width = '335px';
  } else if (errorMessage.style.display === 'block') {
    errorMessage.style.display = 'none';
    searchBar.style.width = '0px';
  }
}

export default async function fetchWeatherData() {
  const prelimLocation = localStorage.getItem('prelimlocation');
  try {
    const preliminaryUrl = `https://api.weatherapi.com/v1/current.json?key=c59fecabfe9e45e9913114407230209&q=${prelimLocation}&days=7&aqi=no&alerts=no`;

    const preliminaryResponse = await fetch(preliminaryUrl);
    const preliminaryData = await preliminaryResponse.json();

    if (preliminaryData.error && preliminaryData.error.code === 1006) {
      toggleAlertText();
      return null;
    }

    toggleAlertText();

    localStorage.setItem('location', prelimLocation);
    const setLocation = localStorage.getItem('location');

    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=c59fecabfe9e45e9913114407230209&q=${setLocation}&days=7&aqi=no&alerts=no`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    throw error;
  }
}

export async function fetchWeatherDataOnLoad() {
  try {
    const setLocation = localStorage.getItem('location');

    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=c59fecabfe9e45e9913114407230209&q=${setLocation}&days=7&aqi=no&alerts=no`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    throw error;
  }
}
