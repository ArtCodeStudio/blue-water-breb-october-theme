$(document).ready(function(){
	/**
	 * Special scroll events for jQuery
	 * @see http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
	 */
	(function(){

		var special = jQuery.event.special,
					uid1 = 'D' + (+new Date()),
					uid2 = 'D' + (+new Date() + 1);

		special.scrollstart = {
			setup: function() {

				var timer,
					handler =  function(evt) {

						var _self = this,
							_args = arguments;

						if (timer) {
							clearTimeout(timer);
						} else {
							evt.type = 'scrollstart';
							jQuery.event.dispatch.apply(_self, _args);
						}

						timer = setTimeout( function(){
							timer = null;
						}, special.scrollstop.latency);

					};

				jQuery(this).bind('scroll touchmove', handler).data(uid1, handler);

			},
			teardown: function(){
				jQuery(this).unbind( 'scroll touchmove', jQuery(this).data(uid1) );
			}
		};

		special.scrollstop = {
			latency: 100, // default is 300
			setup: function() {

				var timer,
						handler = function(evt) {

						var _self = this,
							_args = arguments;

						if (timer) {
							clearTimeout(timer);
						}

						timer = setTimeout( function(){

							timer = null;
							evt.type = 'scrollstop';
							jQuery.event.dispatch.apply(_self, _args);

						}, special.scrollstop.latency);

					};

				jQuery(this).bind('scroll touchmove', handler).data(uid2, handler);

			},
			teardown: function() {
				jQuery(this).unbind('scroll touchmove', jQuery(this).data(uid2) );
			}
		};
	})();
	
	var changeNavbar = function (event) {
		var threshold = 10 ;//$("#slideshow").height()// - 35;
		//console.log('scroll',$("#slideshow").height());
		//$(window).scroll( function (event) {
		var scroll_pos = $(window).scrollTop();
		// console.log('blog scroll_pos',scroll_pos);
		
		if(scroll_pos >= threshold) {
			$('.navbar-brand').addClass("brand-hidden" );
			$('.main-navigation').addClass('nav-low-height');
			$('#navbar-main').addClass("border-bottom");
			$('#blog-header-wrapper').addClass('blog-nav-low-height');
			$('#blog-header-wrapper .blog-header-container .nav-link').addClass('blog-nav-small');
		}else{
			//$('.navbar-brand').css("display","block");
			$('.navbar-brand').removeClass("brand-hidden");
			$('.main-navigation').removeClass('nav-low-height');
			$('#navbar-main').removeClass("border-bottom");
			$('#blog-header-wrapper').removeClass('blog-nav-low-height');
			$('#blog-header-wrapper .blog-header-container .nav-link').removeClass('blog-nav-small');
		}
		//});
	}
	
	$(window).on('scrollstop', function() {
	    changeNavbar();
	});

	changeNavbar();

	// var initMasonry = function() {
	// 	$('#all-posts-container').masonry({
	// 		itemSelector: '.card',
	// 		//columnWidth: '.card',//118
	// 		columnWidth: '.grid-sizer',
	// 		gutter: '.gutter-sizer',
	// 		percentPosition: true,
	// 		//gutter: 20
	// 	});
	// }

	var initMasonry = function() {
		$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 350,
		isFitWidth: true,
		gutter:30
		});
	}
	initMasonry();


})