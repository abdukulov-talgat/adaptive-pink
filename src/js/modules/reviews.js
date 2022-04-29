import Swiper, { Pagination, Navigation, Keyboard } from 'swiper';

import 'swiper/css';

function initSlider() {
    const swiper = new Swiper('.reviews__swiper', {
        modules: [Pagination, Navigation, Keyboard],
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        pagination: {
            el: ".swiper-pagination",
            bulletClass: "reviews__bullet",
            bulletActiveClass: "reviews__bullet--current",
            clickable: true,
        },
        navigation: {
            nextEl: ".reviews__arrow--next",
            prevEl: ".reviews__arrow--prev",

        },
        autoHeight: true,
        loop: true,
    });
}




export default initSlider;
