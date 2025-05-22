document.getElementById("menuToggle").addEventListener("click", function () {
    document.getElementById("nav").classList.toggle("fixed");
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("span-1").classList.toggle("activeNavBar2");
    document.getElementById("span-2").classList.toggle("activeNavBar3");
    document.getElementById("span-3").classList.toggle("activeNavBar");
});

$('.autoplay').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 2
            }
        }
    ]
});
function toggleDropdown(index) {
    const dropdown = document.getElementById(`section-4-dropdown-${index}`);
    const svg = document.getElementById(`rotate-svg-${index}-section-4`);
    const gap = document.getElementById(`remove-gap-10-${index}`);
    const py = document.getElementById(`remove-py-14-${index}`);
    const svgColor = document.getElementById(`change-svg-color-${index}`);

    dropdown.classList.toggle("h-[92px]");
    dropdown.classList.toggle("box-shadow");

    svg.classList.toggle("rotate-180");
    svg.classList.toggle("my-auto");
    svg.classList.toggle("translate-y-[15px]");

    gap.classList.toggle("gap-10");
    py.classList.toggle("py-[14px]");
    svgColor.classList.toggle("color");
}

[1, 2, 3, 4].forEach(index => {
    document.getElementById(`section-4-dropdown-${index}`).addEventListener("click", () => toggleDropdown(index));
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
function toggleSection8Dropdown(index) {
    const dropdown = document.getElementById(`section-8-dropdown-${index}`);
    const svg = document.getElementById(`rotate-svg-${index}-section-8`);
    const hiddenContent = document.getElementById(`hidden-${index}`);

    dropdown.classList.toggle("h-[76px]");
    dropdown.classList.toggle("bg-[#003459]");
    dropdown.classList.toggle("text-white");

    svg.classList.toggle("color-1");
    svg.classList.toggle("rotate-90");

    hiddenContent.classList.toggle("hidden");
}

[1, 2, 3, 4].forEach(index => {
    document.getElementById(`section-8-dropdown-${index}`).addEventListener("click", () => toggleSection8Dropdown(index));
});




