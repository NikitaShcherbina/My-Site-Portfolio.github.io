var App = {
    init: function() {
        var self = this;
        self.window = $(window);
        self.windowWidth = self.window.width();
        self.body = $('body');
        self.header = $('.header');
        self.mainBanner = $(".top");
        self.nav = $('.nav');
        self.container = $('.container');
        self.h1 = $('.h1');
        self.flex = $('.flex');

        self.animateMainBanner();
        self.animateScroll();
        self.animateNavigation();
    },

    animateMainBanner: function() {
        var self = this;

        self.mainBanner.find('.bb').fadeIn(600).animate({
            opacity: 1,
            height: "80px",
            display:"toggle",
        }, { duration: 1200, queue: false });

        self.mainBanner.find('h1').css("display","none").fadeIn(1400);
        self.mainBanner.find('h2').css("display","none").fadeIn(2800);
        self.header.find('.titles a').css("display","none").fadeIn(2800);
    },

    animateScroll: function() {
        var self = this;

        self.body.animate({scrollTop: top}, 1);

        self.mainBanner.find('.read-now-link').on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            self.body.animate({scrollTop: top}, 1500);
        });
    },

    animateNavigation: function() {
        var self = this;
        var scrolling = false;
        self.position = self.window.scrollTop();

        self.animateNavToWhite();

        self.window.scroll(function() {
            self.scroll = self.window.scrollTop();
            self.bo = self.window.scrollTop() + self.nav.outerHeight();

            if (self.bo > self.h1.offset().top) {
                self.animateNavToBlack();
            }
            else {
                self.animateNavToWhite();
            }

            self.setNavVisibility();
        });

    },

    animateNavToBlack: function() {
        var self = this;

        self.nav.addClass('b-background');
    },

    animateNavToWhite: function() {
        var self = this;

        self.nav.addClass('black');
        self.nav.removeClass('b-background');
        self.nav.find(".switch-icon").addClass('green');
        self.nav.find(".switch-menu").addClass('b-line');
    },

    setNavVisibility: function() {
        var self = this;

        if (self.scroll > self.position) {
            self.nav.addClass('nav-hidden');
        }
        else {
            self.nav.removeClass('nav-hidden');
        }
        self.position = self.scroll;
    }
};

$(document).ready(function() {
    App.init();
});



/*
 var bo = $(window).scrollTop() + $('header').outerHeight();

 if ( bo > $('.head').offset().top) {
 */