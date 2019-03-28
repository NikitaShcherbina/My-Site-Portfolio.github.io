$(document).ready(function(){


    
    $(window).load(function(){
        $(window).scrollTop(1);
    });

        $(".bb").fadeIn(600).animate({
            opacity: 1.0,
            height: "80px",
            display:"toggle",
        }, { duration: 1200, queue: false });

    $('h1').css("display","none").fadeIn(1400);
    $('h2').css("display","none").fadeIn(2800);
    $('header .titles a').css("display","none").fadeIn(2800);

    $(".top").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    var position = $(window).scrollTop();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var bo = $(window).scrollTop() + $('.nav').outerHeight();

        if ( bo > $('.container').offset().top) {
            $(".nav").removeClass('white').addClass('black');
            $(".switch-icon").removeClass('white2').addClass('green');
            $(".switch-menu").removeClass('w-line').addClass('b-line');
        } else {
            $(".nav").removeClass('black').addClass('white');
            $(".switch-icon").removeClass('green').addClass('white2');
            $(".switch-menu").removeClass('b-line').addClass('w-line');
        }

        if (scroll > position) {
            $('.nav').addClass('nav-hidden');
        } else {
            $('.nav').removeClass('nav-hidden');
        }
        position = scroll;
    });

        var w = $(window).width();
        if (w <= 1000) {

            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                var bo = $(window).scrollTop() + $('header').outerHeight();

                if ( bo > $('.body').offset().top) {
                    $(".nav").removeClass('white').addClass('black');
                    $(".switch-icon").removeClass('white2').addClass('green');
                    $(".switch-menu").removeClass('w-line').addClass('b-line');
                } else {
                    $(".nav").removeClass('black').addClass('white');
                    $(".switch-icon").removeClass('green').addClass('white2');
                    $(".switch-menu").removeClass('b-line').addClass('w-line');
                }

                if (scroll > position) {
                    $('.nav').addClass('nav-hidden');
                } else {
                    $('.nav').removeClass('nav-hidden');
                }
                position = scroll;
            });
        }
});




/*
var prev = 1;
var $window = $(window);
var nav = $('.nav');

$window.on('scroll', function(){
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
 });
 .animate({opacity: "show", top: "-60"}, "slow");




 var position = $(window).scrollTop();

 $(window).scroll(function() {
 var scroll = $(window).scrollTop();
 if (scroll > position) {
 $('.nav').hide('slow');
 } else {
 $('.nav').show('slow');
 }
 position = scroll;
 });



 $(window).scroll(function() {
 var scroll = $(window).scrollTop();
 if (scroll > position) {
 $('.nav').addClass('.on');
 } else {
 $('.nav').removeClass('.off');
 }
 position = scroll;
 });
*/





