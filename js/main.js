$(function () {
    $("#datepicker").datepicker();
    $("#anim").on("change", function () {
        $("#datepicker").datepicker("option", "showAnim", $(this).val());
    });
});

AOS.init();




$(window).on("load", function () {
    anime({
        targets: '#home .content',
        translateX: [-400, 0],
        opacity: [0, 1],
        easing: 'easeInOutSine'
    });
    anime({
        targets: '#home .image',
        opacity: [0, 1],
        easing: 'easeInOutSine',
        duration: '3000'
    });

});



$(document).ready(function(){
    $('#discover').waypoint(function() {
        anime({
            targets: '#discover .images',
            translateX: [400, 0],
            opacity: [0, 1],
            easing: 'easeInOutSine'

        });
    }, {
            offset: '100%'
    });
    $('#discover').waypoint(function() {
        anime({
            targets: '#discover .content',
            translateX: [-400, 0],
            opacity: [0, 1],
            easing: 'easeInOutSine'
        });
    }, {
            offset: '100%'
    });
    $('#discover').waypoint(function() {
        anime({
            targets: '#discover .content',
            translateX: [-400, 0],
            opacity: [0, 1],
            easing: 'easeInOutSine'
        });
    }, {
            offset: '100%'
    });
});
