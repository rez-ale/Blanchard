// heroSwiper
const swiperHero = new Swiper('.hero__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2000,
  }
});

const swiperGallery = new Swiper('.gallery__swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  createElements: true,
  loop: false,
  spaceBetween: 50,
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.swiper-button-next-gallery',
    prevEl: '.swiper-button-prev-gallery',
  },

});

// swiperEvents
const swiperEvents = new Swiper('.events__swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 3,
  createElements: true,
  loop: false,
  spaceBetween: 50,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next-events',
    prevEl: '.swiper-button-prev-events',
  },

});

// gallerySelect
const element = document.querySelector('#filter');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  duplicateItemsAllowed: false,
  position: 'bottom',
  sorter: () => {},
});


// galleryAccordion
new Accordion('.accordion-container');
