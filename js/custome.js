$(document).ready(function () {
    // banner 
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        slideToShow : 1,
        infinite : false,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    // about
    $('.venobox').venobox();
   
});