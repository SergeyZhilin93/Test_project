initBaseFontSize();
initTabs();
ymaps.ready(initMap);

window.onresize = () => {
  initBaseFontSize();
};

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

function initTabs () {
  const tabs = document.querySelectorAll('.jsTabs');

  if (!tabs.length) return;

  tabs.forEach((tab) => {
    const nav = tab.querySelectorAll('[data-tab]');
    const tabLine = tab.querySelector('.tab-line');

    if (!nav.length) return;
    if (tabLine) {
      setTabLineStyles(nav[0], tabLine);
    }

    nav.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const contentClass = e.target.dataset.tab;
        if (tabLine) {
          setTabLineStyles(e.target, tabLine);
        }
        clearTabs(nav);
        e.target.classList.add('_active');
        switchContent(tab, contentClass);
      });
    })
  })
}

function setTabLineStyles(el, tabLine) {
  const elWidth = el.offsetWidth;
  const parentLeft = el.parentNode.getBoundingClientRect().left;
  const elLeft = el.getBoundingClientRect().left;

  tabLine.style.width = elWidth + 'px';
  tabLine.style.left = (elLeft - parentLeft) + 'px';
}

function clearTabs(obj) {
  obj.forEach((item) => {
    item.classList.remove('_active');
  })
}

function switchContent(obj, contentClass) {
  const items = obj.querySelectorAll('.tab-content');

  items.forEach((item) => {
    item.classList.remove('_show');
    item.classList.add('_hide');
    if (item.classList.contains(contentClass)) {
      item.classList.add('_show');
    }
  })
}

function initMap () {
  const myMap = new ymaps.Map('map', {
    center: [55.529654, 37.164597],
    zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  });
  const myGeoObject = new ymaps.Placemark([55.529654, 37.164597], {
    balloonContent: 'Метка'
  }, {
    iconColor: '#3b5998'
  });
  myMap.geoObjects.add(myGeoObject);
}

function initBaseFontSize() {
  const html = document.documentElement;
  let width = html.clientWidth;
  const isMobile = width <= 768;
  const widthLimit = 1440;
  const baseWidth = isMobile ? 375 : 1440;
  const baseSize = 10;
  width = Math.min(width, widthLimit);
  const curFontSize = width / baseWidth * baseSize;
  html.style.fontSize = curFontSize + 'px';
}

function toggleBurger(el) {
  const toggleEl = document.querySelector('.menu-mobile-body');
  const toggleElHeight = document.querySelector('.menu-mobile-body__container').offsetHeight;

  el.classList.toggle('active');
  console.log(el.classList.contains('active'), toggleElHeight)
  toggleEl.style.height = el.classList.contains('active') ? toggleElHeight + 'px' : 0;
}
