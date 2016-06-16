$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top'
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });


    // Hero Slider
    $('.hero_slider').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        arrows: false
    });

});

new WOW().init();