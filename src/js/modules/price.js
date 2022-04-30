import Swiper, { Pagination, Navigation, Keyboard } from 'swiper';

import 'swiper/css';

function initSlider() {
    const swiper = new Swiper('.price__swiper', {
        modules: [Pagination, ],
        keyboard: {
            enabled: true,
            // onlyInViewport: true,
        },
        pagination: {
            el: ".price__pagination",
            bulletClass: "pagination__bullet",
            bulletActiveClass: "pagination__bullet--current",
            clickable: true,
        },
        // loop: true,
        initialSlide: 1,
        slidesPerView: 'auto',
    });
}




export default initSlider;
