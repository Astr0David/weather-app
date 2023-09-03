import './style.css';
import createNavbar from './navbar';
import { createWeatherSectionOnLoad } from './today-weather';

document.addEventListener('DOMContentLoaded', () => {
  createNavbar();
  if (localStorage.getItem('prelimlocation') === null) {
    localStorage.setItem('prelimlocation', 'london');
  } else if (localStorage.getItem('location') === null) {
    localStorage.setItem('location', 'london');
  }
  createWeatherSectionOnLoad();
});
