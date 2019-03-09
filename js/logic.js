$(document).ready(function() {
    console.log("hello world");

    $("#home").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-1").offset().top
        }, 800);
    });
    $("#about").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-2").offset().top
        }, 800);
    });
    $("#skills").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-3").offset().top
        }, 800);
    });
    $("#portfolio").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-4").offset().top
        }, 800);
    });
    $("#contact").click(function() {
        $('html, body').animate({
            scrollTop: $("#section-5").offset().top
        }, 800);
    });
});