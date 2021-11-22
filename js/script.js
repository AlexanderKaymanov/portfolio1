const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.menu'),
  closeElem = document.querySelector('.menu__close'),
  menuElem = document.querySelectorAll('.menu__link');


hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

menuElem.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
  lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

// window.addEventListener('DOMContentLoaded', () => {
//   const menu = document.querySelector('.menu__list'),
//   menuItem = document.querySelectorAll('.menu_link'),
//   hamburger = document.querySelector('.hamburger');

//   hamburger.addEventListener('click', () => {
//       hamburger.classList.toggle('hamburger_active');
//       menu.classList.toggle('active');
//   });

//   menuItem.forEach(item => {
//       item.addEventListener('click', () => {
//           hamburger.classList.toggle('hamburger_active');
//           menu.classList.toggle('menu_active');
//       });
//   });
// });

const btnPortfolio = document.querySelector('.promo__link'),
  btnAbout = document.querySelector('.promo__link_about');

btnPortfolio.addEventListener('click', () => {
  btnPortfolio.classList.add('btn');
  btnAbout.classList.remove('btn');
});

btnAbout.addEventListener('click', () => {
  btnAbout.classList.add('btn');
  btnPortfolio.classList.remove('btn');
});

btnPortfolio.addEventListener('mouseover', () => {
  btnPortfolio.classList.add('btn');
  btnAbout.classList.remove('btn');
});

btnAbout.addEventListener('mouseover', () => {
  btnAbout.classList.add('btn');
  btnPortfolio.classList.remove('btn');
});

function scrollTo(to, duration = 700) {
  const
    element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    },
    animateScroll = function () {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
      else {
        element.scrollTop = to;
      }
    };
  animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('#up');
  window.addEventListener('scroll', function () {
    // Если прокрутили дальше 599px, показываем кнопку
    if (pageYOffset > 600) {
      btn.classList.add('pageup');
      // Иначе прячем
    } else {
      // btn.getAttribute('data-tooltip').remove;
      btn.classList.remove('pageup');
    }
  });

  // При клике прокручиываем на самый верх
  btn.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 400);
  }
});
