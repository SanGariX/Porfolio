document.addEventListener('DOMContentLoaded', ({ target }) => {
  document.querySelector('.wrapper').classList.add('loaded');
});
// _____
import mobileMenu from './js/header.js';
import { cookiePolicy } from './js/cookiesPolicy.js';
// import openText from './js/openText.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true, duration: 400, offset: 80 });
});

mobileMenu();
cookiePolicy();
// openText();
