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
            grid: { rows: 2, fill: "row" },
        },

        1120: {
            slidesPerView: 4,
            spaceBetween: 15,
            grid: { rows: 2, fill: "row" },
        },
    },
});
var showAllBtn = document.getElementById("showAll");
var hideAllBtn = document.getElementById("hideAll");

showAllBtn.addEventListener("click", function() {
    if (window.innerWidth >= 1120) {
        swiper.params.grid.rows = 3;
    } else {
        swiper.params.grid.rows = 4;
    }
    swiper.update();
    showAllBtn.style.display = "none";
    hideAllBtn.style.display = "inline-flex";
});

hideAllBtn.addEventListener("click", function() {
    swiper.params.grid.rows = 2;
    swiper.update();
    hideAllBtn.style.display = "none";
    showAllBtn.style.display = "inline-flex";
});