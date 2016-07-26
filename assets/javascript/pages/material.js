/*
 * SPAREPARTS :)
 **/


	/* Callbacks for addClass
	 * http://stackoverflow.com/questions/14567990/how-to-add-a-callback-function-to-the-addclass-method-of-jquery
	 **/
	(function ($) {
		var oAddClass = $.fn.addClass;
		$.fn.addClass = function () {
			for (var i in arguments) {
				var arg = arguments[i];
				if ( !! (arg && arg.constructor && arg.call && arg.apply)) {
					arg();
					delete arg;
				}
			}
			return oAddClass.apply(this, arguments);
		}
	})(jQuery);
	
		// var init = new Event('init');
	// window.jumplink = window.jumplink || {};

	// // Listen for the event.
	// window.addEventListener('init', function (e) {
	//     console.log('init')
	// }, false);

	//console.log('scroll',$("#slideshow").height());
	// $(window).scroll( function (event) {
	// 	var scroll_pos = $(window).scrollTop();
	// 	 console.log('scroll_pos',scroll_pos);

	// 	if(scroll_pos >= slideshow_height) {
	// 		// $('.navbar-brand').addClass("brand-hidden" ,250,"swing", function(){
	// 		//      setTimeout(function(){
	// 		//            $('.navbar-brand').css("display","none");
	// 		//     }, 250);
	// 		//     console.log('end');
	// 		// });

	// 		$('.navbar-brand').addClass("brand-hidden" );

	// 		$('.main-navigation').addClass('nav-low-height');
	// 		$('#navbar-main').addClass("border-bottom");
	// 	}else{
	// 		//$('.navbar-brand').css("display","block");
	// 		$('.navbar-brand').removeClass("brand-hidden");
	// 		$('.main-navigation').removeClass('nav-low-height');
	// 		$('#navbar-main').removeClass("border-bottom");
	// 	}

	// });

	// var changeNavbar = function () {
	//     var $slideshow_height = $("#slideshow").height();
	//     var windowScrollTop = $(window).scrollTop();
	//     var viewportHeight = $( window ).height();
	//     var mainNavbarHeight = 94; //$('#navbar-main').height();// 54;
	//     var actionPosition = viewportHeight  - $slideshow_height ;
	//     console.log('actionPosition',mainNavbarHeight);

	//     if(windowScrollTop >= actionPosition ) {
	//          console.log('pling',mainNavbarHeight);
	//         //$('#navbar-main, #sidebar').removeClass('navbar-big');
	//        // $('#navbar-main').removeClass('bg-white-transparent');
	//         $('.main-navigation').addClass('nav-low-height');
	//         $('.navbar-brand').addClass("brand-hidden");
	//     } else {
	//         console.log('plong');
	//         // $('#navbar-main, #sidebar').addClass('navbar-big');
	//         // $('#navbar-main').addClass('bg-white-transparent');
	//         // $('#navbar-main, #sidebar').removeClass('bg-white');
	//         $('.main-navigation').removeClass('nav-low-height');
	//         $('.navbar-brand').removeClass("brand-hidden");
	//     }
	// }
	/**
	 * Navbar
	 */