$(document).ready(function() {

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


	var setCardHeight = function() {
		var maxHeight = 0;
		$('#press-releases .card-block').each( function(i, obj) {
			var $self = $(this);
			console.log($(this).height());
			if( $self.height() < maxHeight ){
				console.log('if');
				$self.height(maxHeight + 72);
			}else{
				console.log('else');
				maxHeight = $self.height();
				$self.height(maxHeight + 72)
			}
			//maxHeight = obj.heigth();
		})

	}
	setCardHeight();
	

	var initCarousel= function(){
		// var $latest-blog-posts-container = $("latest-blog-posts-container");
		$(".latest-blog-posts-carousel").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 2000,
			centerMode: false,
			centerPadding: '0',
		});

	}
	initCarousel();


	var changeNavbar = function (event) {
		var slideshow_height = 809 ;//$("#slideshow").height()// - 35;
		var scroll_pos = $(window).scrollTop();
		console.log('scroll_pos',scroll_pos);
		if(scroll_pos >= slideshow_height) {
			$('.navbar-brand').addClass("brand-hidden" );

			$('.main-navigation').addClass('nav-low-height');
			$('#navbar-main').addClass("border-bottom");
		}else{
			//$('.navbar-brand').css("display","block");
			$('.navbar-brand').removeClass("brand-hidden");
			$('.main-navigation').removeClass('nav-low-height');
			$('#navbar-main').removeClass("border-bottom");
		}

	};

	$(window).on('scrollstop',function() {
	    changeNavbar();
	});

	 changeNavbar();

});