$(document).ready(function() {
    AOS.init();
    
    $(".slider_home").find(".slide").each(function(index, el) {
        var image_slide = $(this).data("image");
        $(this).css("background-image", "url("+image_slide+")");
    });

    $(".slider_home").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true
    });

    $(".image_port").each(function(index, el) {
        var image_port = $(this).data("image");
        $(this).css("background-image", "url("+image_port+")");
    });

    function alto_slider(){
        $(".slider_portafolio").each(function(index, el) {
            var alto_slider = $(this).height();
            $(this).find(".image_port").css('height', alto_slider);
            $(this).find(".slick-list").css('height', alto_slider);
        });
    }

    $(window).resize(function(event) {
        alto_slider();
    });
    alto_slider();

    $(".slider_portafolio").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: false,
        dots: true,
        pauseOnFocus: false,
        arrows: false,
        adaptiveHeight: true,
        autoplaySpeed: 5000,
    });

    $(".slider_portafolio").find(".slick-dots").addClass('section_middle_center');
});
