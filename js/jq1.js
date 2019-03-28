var App = {
	init: function() {
		var self = this;
		self.window = $(window);
		self.windowWidth = self.window.width();
		self.body = $('body');
        self.html = $('html');
		self.header = $('.header');
		self.mainBanner = $(".top");
		self.nav = $('.nav');
		self.container = $('.container');
        self.h1 = $('.h1');
        self.flex = $('.flex');

		self.animateMainBanner();
		self.animateScroll();
        self.animateNavigation();
        self.animateNavigationw();
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

        self.mainBanner.on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            self.body,self.html.animate({scrollTop: top}, 1500);
        });
    },

    animateNavigation: function() {

        var w = $(window).width();
        if (w >= 1001) {

        var self = this;
        var scrolling = false;
        self.position = self.window.scrollTop();

        self.animateNavToWhite();

        self.window.scroll(function() {
            self.scroll = self.window.scrollTop();
            self.bo = self.window.scrollTop() + self.nav.outerHeight();

            if (self.bo > self.container.offset().top) {
                self.animateNavToBlack();
            }
            else {
                self.animateNavToWhite();
            }

            self.setNavVisibility();
        });
        }
    },

    animateNavToBlack: function() {
        var self = this;

        self.nav.removeClass('white').addClass('black');
        self.nav.removeClass('white').addClass('b-background');
        self.nav.find(".switch-icon").removeClass('white2').addClass('green');
        self.nav.find(".switch-menu").removeClass('w-line').addClass('b-line');
    },

    animateNavToWhite: function() {
        var self = this;

        self.nav.removeClass('black').addClass('white');
        self.nav.removeClass('b-background').addClass('white');
        self.nav.find(".switch-icon").removeClass('green').addClass('white2');
        self.nav.find(".switch-menu").removeClass('b-line').addClass('w-line');
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
    },

    animateNavigationw: function() {

        var w = $(window).width();
        if (w <= 1000) {

            var self = this;
            var scrolling = false;
            self.position = self.window.scrollTop();

            self.animateNavToWhitew();

            self.window.scroll(function() {
                self.scroll = self.window.scrollTop();
                self.bo = self.window.scrollTop() + self.nav.outerHeight();

                if (self.bo > self.container.offset().top) {
                    self.animateNavToBlackw();
                }
                else {
                    self.animateNavToWhitew();
                }

                self.setNavVisibilityw();
            });
        }
    },

    animateNavToBlackw: function() {
        var self = this;

        self.nav.addClass('black');
        self.nav.addClass('b-background');
        self.nav.find(".switch-icon").addClass('green');
        self.nav.find(".switch-menu").addClass('b-line');
    },

    animateNavToWhitew: function() {
        var self = this;

        self.nav.addClass('black');
        self.nav.addClass('b-background');
        self.nav.find(".switch-icon").addClass('green');
        self.nav.find(".switch-menu").addClass('b-line');
    },

    setNavVisibilityw: function() {
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

 self.animateNavigation();


 animateNavigation: function() {
 var self = this;
 var scrolling = false;
 self.position = self.window.scrollTop();

 self.animateNavToWhite();

 self.window.scroll(function() {
 self.scroll = self.window.scrollTop();
 self.bo = self.window.scrollTop() + self.nav.outerHeight();

 if (self.bo > self.container.offset().top) {
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

 self.nav.removeClass('white').addClass('black');
 self.nav.removeClass('white').addClass('b-background');
 self.nav.find(".switch-icon").removeClass('white2').addClass('green');
 self.nav.find(".switch-menu").removeClass('w-line').addClass('b-line');
 },

 animateNavToWhite: function() {
 var self = this;

 self.nav.removeClass('black').addClass('white');
 self.nav.removeClass('b-background').addClass('white');
 self.nav.find(".switch-icon").removeClass('green').addClass('white2');
 self.nav.find(".switch-menu").removeClass('b-line').addClass('w-line');
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
 },
 */