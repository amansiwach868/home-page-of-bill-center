document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("span-1").classList.toggle("activeNavBar2");
    document.getElementById("span-2").classList.toggle("activeNavBar3");
    document.getElementById("span-3").classList.toggle("activeNavBar");
});
document.getElementById("section-4-dropdown-1").addEventListener("click", function () {
    document.getElementById("section-4-dropdown-1").classList.toggle("h-[92px]");
    document.getElementById("section-4-dropdown-1").classList.toggle("box-shadow");
    document.getElementById("rotate-svg-1-section-4").classList.toggle("rotate-180");
    document.getElementById("rotate-svg-1-section-4").classList.toggle("my-auto");
    document.getElementById("rotate-svg-1-section-4").classList.toggle("translate-y-[15px]");
    document.getElementById("remove-gap-10-1").classList.toggle("gap-10");
    document.getElementById("remove-py-14-1").classList.toggle("py-[14px]");
    document.getElementById("change-svg-color-1").classList.toggle("color");
});
document.getElementById("section-4-dropdown-2").addEventListener("click", function () {
    document.getElementById("section-4-dropdown-2").classList.toggle("h-[92px]");
    document.getElementById("section-4-dropdown-2").classList.toggle("box-shadow");
    document.getElementById("rotate-svg-2-section-4").classList.toggle("rotate-180");
    document.getElementById("rotate-svg-2-section-4").classList.toggle("my-auto");
    document.getElementById("rotate-svg-2-section-4").classList.toggle("translate-y-[15px]");
    document.getElementById("remove-gap-10-2").classList.toggle("gap-10");
    document.getElementById("remove-py-14-2").classList.toggle("py-[14px]");
    document.getElementById("change-svg-color-2").classList.toggle("color");
});
document.getElementById("section-4-dropdown-3").addEventListener("click", function () {
    document.getElementById("section-4-dropdown-3").classList.toggle("h-[92px]");
    document.getElementById("section-4-dropdown-3").classList.toggle("box-shadow");
    document.getElementById("rotate-svg-3-section-4").classList.toggle("rotate-180");
    document.getElementById("rotate-svg-3-section-4").classList.toggle("my-auto");
    document.getElementById("rotate-svg-3-section-4").classList.toggle("translate-y-[15px]");
    document.getElementById("remove-gap-10-3").classList.toggle("gap-10");
    document.getElementById("remove-py-14-3").classList.toggle("py-[14px]");
    document.getElementById("change-svg-color-3").classList.toggle("color");
});
document.getElementById("section-4-dropdown-4").addEventListener("click", function () {
    document.getElementById("section-4-dropdown-4").classList.toggle("h-[92px]");
    document.getElementById("section-4-dropdown-4").classList.toggle("box-shadow");
    document.getElementById("rotate-svg-4-section-4").classList.toggle("rotate-180");
    document.getElementById("rotate-svg-4-section-4").classList.toggle("my-auto");
    document.getElementById("rotate-svg-4-section-4").classList.toggle("translate-y-[15px]");
    document.getElementById("remove-gap-10-4").classList.toggle("gap-10");
    document.getElementById("remove-py-14-4").classList.toggle("py-[14px]");
    document.getElementById("change-svg-color-4").classList.toggle("color");
});
$('.slider').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: ".left",
    nextArrow: ".right",
    responsive: [
        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});
document.getElementById("section-8-dropdown-1").addEventListener("click", function () {
    document.getElementById("section-8-dropdown-1").classList.toggle("h-[76px]");
    document.getElementById("section-8-dropdown-1").classList.toggle("bg-[#003459]");
    document.getElementById("section-8-dropdown-1").classList.toggle("text-white");
    document.getElementById("rotate-svg-1-section-8").classList.toggle("color-1");
    document.getElementById("rotate-svg-1-section-8").classList.toggle("rotate-90");
    document.getElementById("hidden-1").classList.toggle("hidden");
});
document.getElementById("section-8-dropdown-2").addEventListener("click", function () {
    document.getElementById("section-8-dropdown-2").classList.toggle("h-[76px]");
    document.getElementById("section-8-dropdown-2").classList.toggle("bg-[#003459]");
    document.getElementById("section-8-dropdown-2").classList.toggle("text-white");
    document.getElementById("rotate-svg-2-section-8").classList.toggle("color-1");
    document.getElementById("rotate-svg-2-section-8").classList.toggle("rotate-90");
    document.getElementById("hidden-2").classList.toggle("hidden");
});
document.getElementById("section-8-dropdown-3").addEventListener("click", function () {
    document.getElementById("section-8-dropdown-3").classList.toggle("h-[76px]");
    document.getElementById("section-8-dropdown-3").classList.toggle("bg-[#003459]");
    document.getElementById("section-8-dropdown-3").classList.toggle("text-white");
    document.getElementById("rotate-svg-3-section-8").classList.toggle("color-1");
    document.getElementById("rotate-svg-3-section-8").classList.toggle("rotate-90");
    document.getElementById("hidden-3").classList.toggle("hidden");
});
document.getElementById("section-8-dropdown-4").addEventListener("click", function () {
    document.getElementById("section-8-dropdown-4").classList.toggle("h-[76px]");
    document.getElementById("section-8-dropdown-4").classList.toggle("bg-[#003459]");
    document.getElementById("section-8-dropdown-4").classList.toggle("text-white");
    document.getElementById("rotate-svg-4-section-8").classList.toggle("color-1");
    document.getElementById("rotate-svg-4-section-8").classList.toggle("rotate-90");
    document.getElementById("hidden-4").classList.toggle("hidden");
});

