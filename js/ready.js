$(document).ready(function() {
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
});
