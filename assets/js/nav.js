(function($){
	'use strict';
	$(window).on('load', function(){
		$('.preloader').fadeOut(1000);
	})
	
 $(document).ready(function() {
	//menu top fixed start for mobile menu & desktop menu
	var fixed_top = $(".bg-white");
	$(window).on('scroll', function () {
	    if ($(this).scrollTop() > 10) {
	        fixed_top.addClass("menu-fixed animated fadeInDown");
	        fixed_top.removeClass("slideInUp");
	        $('body').addClass("body-padding");
	    } else {
	        fixed_top.removeClass("menu-fixed fadeInDown");
	        fixed_top.addClass("slideInUp"); 
	        $('body').removeClass("body-padding");
	    }
	});
	// menu icon releted
    $(".main-menu>li>.submenu, .mega-menu").parent("li").children("a").addClass("dd-icon-down");
    $(".m-menu>li>.m-submenu").parent("li").children("a").addClass("dd-icon-down");
    $(".main-menu>li>.submenu .submenu").parent("li").children("a").addClass("dd-icon-right");
    $(".m-menu>li>.m-submenu .m-submenu").parent("li").children("a").addClass("dd-icon-down");
	$(".shop-menu>li .shop-submenu").parent("li").children("a").addClass("dd-icon-down");
	

	// mobile menu responsive
	$(document).on('click','.header-bar',function(){
        $(".header-bar").toggleClass("close");
        $(".menu").toggleClass("open");
	});
	
	//mobile drodown menu display
	$('.mobile-menu-area .m-menu li a').on('click', function(e) {
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(1000,"swing");
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown(1000,"swing");
            element.siblings('li').children('ul').slideUp(1000,"swing");
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(1000,"swing");
        }
	}); 


    // drop down menu width overflow problem fix
    $('ul').parent().on('hover', function() {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({ left: newpos });    
        }
	});


	

	// Clients slider activetion
	var swiper = new Swiper('.clients-container', {
		autoplay: true,
		navigation: {
		  nextEl: '.client-button-next',
		  prevEl: '.client-button-prev',
		},
	});

	// wow animation
	new WOW().init();
	if ($(window).width() <= 991){
		$(".wow").removeClass("wow");
	}
});
})(jQuery)