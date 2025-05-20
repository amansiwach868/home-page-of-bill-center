document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("span-1").classList.toggle("activeNavBar2");
    document.getElementById("span-2").classList.toggle("activeNavBar3");
    document.getElementById("span-3").classList.toggle("activeNavBar");
});

$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});