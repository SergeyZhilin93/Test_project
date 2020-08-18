window.onload = function() {
  const layoutSlider = new Swiper('#layout-slider', {
    loop: true,
    navigation: {
        nextEl: '.layout-arrows_left',
        prevEl: '.layout-arrows_right',
    },
  });
  const slidesSlider = new Swiper('#slides-slider', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    navigation: {
      nextEl: '.slides-content-swipe__left',
      prevEl: '.slides-content-swipe__right',
    },
  });
};
