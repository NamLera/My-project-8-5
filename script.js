var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 12,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 12,
            grid: { rows: 1, fill: "row" },
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 10,
            grid: { rows: 4, fill: "row" },
        },

        1120: {
            slidesPerView: 4,
            spaceBetween: 15,
            grid: { rows: 3, fill: "row" },
        },
    },


});