// CHOICES SUB-HEADER

const params = {
   btnClassName: "sub-header__dropdown-btn",
   dropClassName: "sub-header__drop",
   activeClassName: "is-active",
   disabledClassName: "is-disabled"
 }
 
 function onDisable(evt) {
   if (evt.target.classList.contains(params.disabledClassName)) {
     evt.target.classList.remove(params.disabledClassName, params.activeClassName);
     evt.target.removeEventListener("animationend", onDisable);
   }
 }
 
   function setMenuListener() {
     document.body.addEventListener("click", (evt) => {
       const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);
 
       if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
         activeElements.forEach((current) => {
           if (current.classList.contains(params.btnClassName)) {
             current.classList.remove(params.activeClassName);
           } else {
             current.classList.add(params.disabledClassName);
           }
         });
       }
 
       if (evt.target.closest(`.${params.btnClassName}`)) {
         const btn = evt.target.closest(`.${params.btnClassName}`);
         const path = btn.dataset.path;
         const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);
 
         btn.classList.toggle(params.activeClassName);
 
         if (!drop.classList.contains(params.activeClassName)) {
           drop.classList.add(params.activeClassName);
           drop.addEventListener("animationend", onDisable);
         } else {
           drop.classList.add(params.disabledClassName);
         }
       }
     });
   }
 
 setMenuListener();

//  CHOICES GALLERY

const element = document.querySelector('select');
const choices = new Choices(element, {
   searchEnabled: false,
   shouldSort: false,
   position: 'bottom',
});
 
// GALLERY-SWIPER

const gl_swiper = new Swiper('.gl_swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next1',
    prevEl: '.swiper-button-prev1',
  },
  pagination: {
    type: 'fraction',
    clickable: false,
    el: '.swiper-pagination',
  },
  autoHeight: true,
  spaceBetween: 49,
  slideToClickedSlide: true,
  breakpoints: {
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 31,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 35,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});

// GATALOG-ACCORDION

$(".accordion").accordion({
  heightStyle: "content",
  active: 0,
  collapsible: true,
  icons: false,
});

$('.ui-accordion-header').attr('tabindex','0')

// CATALOG-TABS

document.querySelectorAll('.catalog-right__tab').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.catalog-right__tab').forEach(function (btn) {
      btn.classList.remove('catalog-right__tab--active')
    });
    e.currentTarget.classList.add('catalog-right__tab--active');
    document.querySelectorAll('.catalog-left__item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('catalog-left__item--active')
    });
    document.querySelectorAll(`[data-target="${path}"]`).forEach(el => el.classList.add('catalog-left__item--active'));
  });
});

// EVENTS-SWIPER

const ev_swiper = new Swiper('.ev_swiper-container', {
  slidesPerView: 3,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next2',
    prevEl: '.swiper-button-prev2',
  },
  autoHeight: false,
  spaceBetween: 51,
  slideToClickedSlide: false,
  pagination: {
    type: 'bullets',
    clickable: true,
    el: '.ev__swiper-pagination',
  },
  breakpoints: {
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    }
  }
});

// PROJECTS-SWIPER

const pj_swiper = new Swiper('.pj_swiper-container', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  a11y: false,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next3',
    prevEl: '.swiper-button-prev3',
  },
  spaceBetween: 51,
  slideToClickedSlide: false,
  breakpoints: {
    1600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      heigth: 150,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 49,
      heigth: 128,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      heigth: 106,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      heigth: 65,
    }
  }
});

// CONTACTS-YMAP

ymaps.ready(init);
function init() {
   var myMap = new ymaps.Map("myMap1", { 
    center: [55.75846806898367, 37.60108849999989], 
    zoom: 14, 
    controls: ['geolocationControl', 'zoomControl']
  },
  { 
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition:  { top: "395px", right: "20px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "320px", right: "20px" }
  }
);

myMap.behaviors.disable('scrollZoom');

const myPlacemark = new ymaps.Placemark(
  [55.75846806898367, 37.60108849999989],
  {},
  {
    iconLayout: "default#image",
    iconImageHref: "img/ymap-location.svg",
    iconImageSize: [40, 40],
    iconImageOffset: [-20, -40],
  }
);

myMap.geoObjects.add(myPlacemark);
myMap.container.fitToViewport();
}

// CONTACTS-FORM

var selector = document.querySelector('input[type="tel"]');

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);


const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Мин. значение 3 символа'
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('#tel', [
    {
      rule: 'minLength',
      value: 11,
      errorMessage: 'Недопустимый формат2',
    },
    {
      rule: 'maxLength',
      value: 30,
    },
    {
      rule: 'required',
      errorMessage: 'Недопустимый формат',
    },
  ]);

  // BURGER

let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.header-nav');
let menuLinks = document.querySelectorAll('.header-nav__link');
let burgerClose = document.querySelector('.burger-svg')

burger.addEventListener('click',

   function () {
      burger.classList.toggle('burger--active');
      menu.classList.toggle('header-nav--active');
      document.body.classList.toggle('stop-scroll');
      burgerClose.classList.toggle('burger--close')
   }

);

menuLinks.forEach(function (el) {
   el.addEventListener('click', function () {
      burger.classList.remove('burger--active');
      menu.classList.remove('header-nav--active');
      document.body.classList.remove('stop-scroll');
      burgerClose.classList.remove('burger--close');
   });
});

// HEADER-FORM

const input = document.querySelector('.header-form');
const searchIn = document.querySelector('.header-btn__search');
const searchOut = document.querySelector('.header-btn__search3');

searchIn.addEventListener('click', () => {
  input.classList.add('header-form-active');
  searchIn.classList.add('header-search-remove');
})

searchOut.addEventListener('click', (e) => {
  e.preventDefault();
  input.classList.remove('header-form-active');
  searchIn.classList.remove('header-search-remove');
})

// SCROLL

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;

    window.scrollBy({
      top: elementPosition,
      behavior: 'smooth'
    });
  });
});