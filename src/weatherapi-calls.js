function addAlertText() {
  const errorMessage = document.getElementById('errormessage');

  if (errorMessage.style.display === 'none') {
    errorMessage.style.display = 'block';
  }
}

function removeAlertText() {
  const errorMessage = document.getElementById('errormessage');

  if (errorMessage.style.display === 'block') {
    errorMessage.style.display = 'none';
  }
}

export default async function fetchWeatherData() {
  const prelimLocation = localStorage.getItem('prelimlocation');
  try {
    const preliminaryUrl = `http://api.weatherapi.com/v1/forecast.json?key=f06208e4f62140dd84052920231309&q=${prelimLocation}&days=8&aqi=no&alerts=no`;

    const preliminaryResponse = await fetch(preliminaryUrl);
    const preliminaryData = await preliminaryResponse.json();

    if (preliminaryData.error && preliminaryData.error.code === 1006) {
      addAlertText();
      return null;
    }

    removeAlertText();

    localStorage.setItem('location', prelimLocation);
    const setLocation = localStorage.getItem('location');

    const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=f06208e4f62140dd84052920231309&q=${setLocation}&days=8&aqi=no&alerts=no`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    return { data };
  } catch (error) {
    console.error('Error fetching data from the API:', error);
    throw error;
  }
}
