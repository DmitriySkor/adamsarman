// Инициализация owlCarousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

// Инициализация Fancybox
$().fancybox({
    selector: '[data-fancybox="gallery"]',
    loop: true
});

// Инициализация маски ввода телефона
jQuery(function ($) {
    $(".masked-input").mask("+38 ( 999 ) 999-99-99");
});

// Нижнее меню открытия-закрытия
$(".links__info").click(function () {

    if ($(this).hasClass('active')) {
        $(".links__info").removeClass("active");
        $(this).removeClass('active');
    } else {
        $(".links__info").removeClass("active");
        $(this).addClass('active');
    }
})

// Выпадающее меню
document.querySelector(".top__line_burg").onclick = function () {
    document.querySelector(".top__line_menu").classList.toggle("active")
}

// Выпадающее меню
document.querySelector(".mobile-horizontal__menu-btn").onclick = function () {
    document.querySelector(".mobile-horizontal__menu").classList.toggle("active")
}



// Прилипающее меню  при скроле
// $(window).scroll(function() {
//     let height = $(window).scrollTop();
//     if(height > 38){
//         $('.contain-horizontal__menu').addClass('menu-fixed');
//         $('.after_menu').addClass('margin_top_52');
//     } else{
//         $('.contain-horizontal__menu').removeClass('menu-fixed');
//         $('.after_menu').removeClass('margin_top_52');
//     }
// });

// Модалки
document.getElementById("open_modal_1").onclick = function (e) {
    e.preventDefault();
    document.getElementById("modal_1").classList.add("active");
    document.querySelector("body").classList.add("fixed");
}

document.getElementById("closed_modal_1").onclick = function (e) {
    e.preventDefault();
    document.getElementById("modal_1").classList.remove("active");
    document.querySelector("body").classList.remove("fixed");
}

document.getElementById("open_modal_2").onclick = function (e) {
    e.preventDefault();
    document.getElementById("modal_2").classList.add("active");
    document.querySelector("body").classList.add("fixed");
}

document.getElementById("closed_modal_2").onclick = function (e) {
    e.preventDefault();
    document.getElementById("modal_2").classList.remove("active");
    document.querySelector("body").classList.remove("fixed");
}


document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == 27) {
        document.getElementById("modal_1").classList.remove("active");
        document.getElementById("modal_2").classList.remove("active");
        document.querySelector("body").classList.remove("fixed");
    }
};

// Автокомплит товара
$(function () {
    let availableTags = [
        "iPhone",
        "iPhone 3G",
        "iPhone 3GS",
        "iPhone 4",
        "iPhone 4s",
        "iPhone 5",
        "iPhone 5c",
        "iPhone 5s",
        "iPhone 6 / 6 Plus",
        "iPhone 6s / 6s Plus",
        "iPhone SE",
        "iPhone 7 и 7 Plus",
        "iPhone 8 / iPhone 8 Plus",
        "iPhone X",
        "iPhone XS / iPhone XS Max",
        "iPhone XR",
        "iPhone Pro 11 / iPhone 11 Pro Max",
        "iPhone 11"
    ];
    $("#in_product").autocomplete({
        source: availableTags
    });
});

$(function () {
    let availableTags = [
        "Afghanistan",
        "Argentina",
        "Australia",
        "Austria",
        "Belarus",
        "Belgium",
        "Bolivia",
        "Brazil",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Chile",
        "China",
        "Colombia",
        "Costa Rica",
        "Cuba",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Egypt",
        "Estonia",
        "Finland",
        "France",
        "Germany",
        "Ghana",
        "Great Britain / United Kingdom",
        "Greece",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Ireland",
        "Israel",
        "Italy",
        "Japan",
        "Latvia",
        "Lithuania",
        "Malaysia",
        "Mexico",
        "Morocco",
        "Netherlands",
        "New Zealand",
        "Norway",
        "Philippines",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Romania",
        "Russia",
        "South Korea",
        "Spain",
        "Sweden",
        "Switzerland",
        "Taiwan",
        "Thailand",
        "Turkey",
        "Ukraine",
        "United Arab Emirates",
        "United States of America",
        "Vietnam"
    ];
    $("#in_country").autocomplete({
        source: availableTags
    });
});

$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [1250, 5500],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});

