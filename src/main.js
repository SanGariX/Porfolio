import AOS from 'aos';
import 'aos/dist/aos.css';
import { murkupRepo } from './js/murkup';
import { data } from './js/Data/data';
document.addEventListener('DOMContentLoaded', ({ target }) => {
  document.querySelector('.wrapper').classList.add('loaded');
});
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ once: true, duration: 400, offset: 80 });
});
murkupRepo(data);
