/* eslint-disable operator-linebreak */
import './style.css';
import createNavbar from './navbar';
import initialiseWeatherSection from './today-weather';

document.addEventListener('DOMContentLoaded', () => {
  createNavbar();
  if (localStorage.getItem('prelimlocation') === null) {
    localStorage.setItem('prelimlocation', 'london');
  } else if (
    localStorage.getItem('location') !==
      localStorage.getItem('prelimlocation') &&
    localStorage.getItem('location') !== ''
  ) {
    localStorage.setItem('prelimlocation', localStorage.getItem('location'));
  }
  initialiseWeatherSection();
});
