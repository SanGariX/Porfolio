import { gsap } from 'gsap';
const openText = () => {
  const btn = document.querySelectorAll('.faq_inner_item_btn');
  const panel = document.querySelectorAll('.faq_inner_item_text-box');
  let isOpen = [];
  for (let i = 0; i < btn.length; i += 1) {
    isOpen.push(false);
  }
  btn.forEach((item, idx) => {
    item.addEventListener('click', () => {
      if (!isOpen[idx]) {
        gsap.to(panel[idx], {
          height: panel[idx].scrollHeight,
          duration: 0.3,
          onComplete: () => (panel[idx].style.height = 'auto'),
        });
        isOpen[idx] = !isOpen[idx];
        btn[idx].classList.add('active');
      } else {
        if (window.innerWidth < 1440) {
          gsap.to(panel[idx], {
            height: 20,
            duration: 0.3,
          });
        } else {
          gsap.to(panel[idx], {
            height: 0,
            duration: 0.3,
          });
        }
        isOpen[idx] = !isOpen[idx];
        btn[idx].classList.remove('active');
      }
    });
  });
};
export default openText;
