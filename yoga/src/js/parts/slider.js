// Слайдер

function slider() {

  let slideIndex = 1, // параметр текущего слайдера
    slides = document.querySelectorAll('.slider-item'), // получаем все слайды, которые есть на странице
    prev = document.querySelector('.prev'), // указатели ввиде стрелочек
    next = document.querySelector('.next'), // указатели ввиде стрелочек
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

  showSlides(slideIndex);

  function showSlides(n) {

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    // for (let i = 0; i < slides.length; i++) {
    //   slides[i].style.display = 'none';
    // }
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function pluseSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    pluseSlides(-1);
  });
  next.addEventListener('click', function () {
    pluseSlides(1);
  });

  dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
      // здесь используем делегирование событий
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;
