export const cookiePolicy = () => {
  const btnEl1 = document.querySelector('.cookies_accept_js');
  const btnEl2 = document.querySelector('.cookies_decline_js');
  const modalEl = document.querySelector('.cookies_section');

  if (JSON.parse(localStorage.getItem('status'))) {
    return;
  } else {
    modalEl.style.display = 'block';
  }
  btnEl1.addEventListener('click', () => {
    modalEl.style.display = 'none';
    localStorage.setItem('status', JSON.stringify(true));
  });

  btnEl2.addEventListener('click', () => {
    modalEl.style.display = 'none';
    localStorage.setItem('status', JSON.stringify(false));
  });
};
