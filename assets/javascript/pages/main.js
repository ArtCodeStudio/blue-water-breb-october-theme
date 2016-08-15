
var cache = {
    lastElementClicked: null,
    $navbarMain: $('#navbar-main'),
};

/**
 * Homepage Latest log Posts Carousel
 */
var initCarousel = function () {
    
    var $latestBlogPostsCarousel = $(".latest-blog-posts-carousel");
    
    // only init if slick is not already initialized
    if( !$latestBlogPostsCarousel.hasClass('slick-initialized') ) {
    	$latestBlogPostsCarousel.slick({
    		slidesToShow: 3,
    		slidesToScroll: 1,
    		autoplay: false,
    		autoplaySpeed: 2000,
    		centerMode: false,
    		centerPadding: '0',
    		infinite: true,
    		responsive: [
        		{
        			breakpoint: 1024,
        			settings: {
        				slidesToShow: 3,
        				slidesToScroll: 3,
        			}
        		},
        		{
        			breakpoint: 992,
        				settings: {
        					slidesToShow: 2,
        					slidesToScroll: 2
        				}
        		},
        		{
        			breakpoint: 562,
        				settings: {
        					slidesToShow: 1,
        					slidesToScroll: 1
        				}
        		}
    		]
    	});
    }
};


/**
 * 
 * // 2do, dynamic slideshow height 
 */
var changeNavbar = function (dataset) {
	console.log('changeNavbar called', dataset);
	var slideshow_height = 809 ;//$("#slideshow").height()// - 35;
	var scroll_pos = $(window).scrollTop();
	console.log($("#slick-list").height());
	//$("#slideshowHomeHTML").height($(".slick-slide ").height()) 
	if (dataset.namespace === 'home') { // ugly 

		if (scroll_pos >= slideshow_height) {
			$('.navbar-brand').addClass("brand-hidden" );
			$('.navbar-brand').css("display","none");
			$('#navbar-main').addClass("navbar-slim");
			$('#slideshowHomeHTML').trigger('jumplink_slideshow_stop');
			console.log('stop slideshow triggert');

		} else {
			$('#navbar-main').removeClass("navbar-slim");
			$('.navbar-brand').css("display","block");
			$('.navbar-brand').removeClass("brand-hidden");
			$('#slideshowHomeHTML').trigger('jumplink_resume_slideshow');
			console.log('jumplink_resume_slideshow  triggert');
		}

	} else {
		$('.navbar-brand').css("display","none");
		$('#navbar-main').addClass("navbar-slim");
	}

};


/**
 * Set each card to the height of the heightest card to get all cards with the same height 
 */
var sameHeightCards = function (selector) {
    var t = 0;
    var t_elem;
	$cards = $(selector);
    // get heightest height
    $cards.each(function () {
        $this = $(this);
        // reset height
        $this.css('min-height', 'auto');
        if ( $this.outerHeight() > t ) {
            t_elem=this;
            t=$this.outerHeight();
        }
    });
    
    // set all smaller cards to the height of the heightest card
    $cards.each(function () {
        $this = $(this);
        if($this.outerHeight() != t) {
            $this.css('min-height',t);
        }
    });
};


/**
 *  
 */
var initSidebar = function (dataset) {

 	/**
     * @see http://dcdeiv.github.io/simpler-sidebar/
	 * https://github.com/simple-sidebar/simpler-sidebar/issues/25#issuecomment-236579696
     */
	var $sidebar = $( "#sidebar" );
	$sidebar
	.show() // already tried to remove
	.simplerSidebar( {
		align: "left", // the new sidear.align
		selectors: {
			trigger: ".navbar-toggler", // the new opener
			quitter: ".close-sidebar" // the new closingLinks
		},
		animation: {
			easing: "easeOutQuint"
		},
		sidebar: {
			width: 250
		},
		events: {
			callbacks: {
				animation: {
					freezePage: false
				}
			}
		}
	});
};


/**
 * 
 */
var initHome = function (dataset) {

	$(window).on('resize', function () {
		// console.log('resize...');
		//init();
    });
  
	$(window).on('scrollstop', function () {
	    changeNavbar(dataset);
	});
	
	// So wirds gemacht! yeah!
	slideshowHomeJavaScriptInit('#slideshowHomeHTML');
	
	initCarousel();
	console.log('initHome');

};


/**
 * 
 */
var initShipping = function (dataset) {

};


/**
 * 
 */
var initOffshore = function (dataset) {

};


/**
 * 
 */
var initPortagency = function (dataset) {
    
};


/**
 * 
 */
var initLinerservices = function (dataset) {

	// Initialize Fullscreen Slideshow Modal
     $("#fullscreenButton").animatedModal({
    	"color": "rgba( 64, 83, 164, 1 )", //primary-barnd,
    	"overflow":"hidden",
    	beforeOpen: function () { // not working properly in safari....
    		 $("#fullscreenLinerServicesSlideshowHTML").slick('setPosition');
    	},
    	afterOpen: function () { // ... safari fix.
    		 $("#fullscreenLinerServicesSlideshowHTML").slick('setPosition');
    	 },
     });
	
	linerServicesSlideshowJavaScript1Init('#linerServicesSlideshowHTML1');
    linerServicesSlideshowJavaScript2Init('#linerServicesSlideshowHTML2');
	fullscreenLinerServicesSlideshowJavaScriptInit('#fullscreenLinerServicesSlideshowHTML');

};


/**
 * 
 */
var initContact = function (dataset) {
    
};


/**
 * 
 */
var initAbout = function (dataset) {

};


/**
 * 
 */
var initBlog = function (dataset) {

	console.log('initBlog called');
    /**
     * Special scroll events for jQuery
     * @see http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
     */
    var special = jQuery.event.special;
	var uid1 = 'D' + (+new Date());
	var uid2 = 'D' + (+new Date() + 1);
    
    special.scrollstart = {
    	setup: function () {
    
    		var timer,
    			handler =  function (evt) {
    
    				var _self = this,
    					_args = arguments;
    
    				if (timer) {
    					clearTimeout(timer);
    				} else {
    					evt.type = 'scrollstart';
    					jQuery.event.dispatch.apply(_self, _args);
    				}
    
    				timer = setTimeout( function (){
    					timer = null;
    				}, special.scrollstop.latency);
    
    			};
    
    		jQuery(this).bind('scroll touchmove', handler).data(uid1, handler);
    
    	},
    	teardown: function (){
    		jQuery(this).unbind( 'scroll touchmove', jQuery(this).data(uid1) );
    	}
    };
    
    special.scrollstop = {
    	latency: 100, // default is 300
    	setup: function () {
    
    		var timer,
    				handler = function (evt) {
    
    				var _self = this,
    					_args = arguments;
    
    				if (timer) {
    					clearTimeout(timer);
    				}
    
    				timer = setTimeout( function (){
    
    					timer = null;
    					evt.type = 'scrollstop';
    					jQuery.event.dispatch.apply(_self, _args);
    
    				}, special.scrollstop.latency);
    
    			};
    
    		jQuery(this).bind('scroll touchmove', handler).data(uid2, handler);
    
    	},
    	teardown: function () {
    		jQuery(this).unbind('scroll touchmove', jQuery(this).data(uid2) );
    	}
    };
    
    var changeNavbar = function (event) {
    	var threshold = 10 ;
    	var scroll_pos = $(window).scrollTop();
    	if(scroll_pos >= threshold) {
    		$('#blog-header-wrapper').addClass('blog-nav-low-height');
    		$('#blog-header-wrapper .blog-header-container .nav-link').addClass('blog-nav-small');
    	} else {
    		$('#blog-header-wrapper').removeClass('blog-nav-low-height');
    		$('#blog-header-wrapper .blog-header-container .nav-link').removeClass('blog-nav-small');
    	}
    };
    
    $(window).on('scrollstop', function () {
        changeNavbar();
    });
    
    changeNavbar();
    
    /**
     * ISOTOPE
     * http://isotope.metafizzy.co/methods.html#adding-and-removing-items
     */
    var $grid = $('.grid').isotope({
    	itemSelector: '.grid-item',
    	layoutMode: 'masonry',
    	masonry: {
    		columnWidth: 350,
    		isFitWidth: true,
    		gutter:30
    	},
    });
    
    /**
     * FILTER 
     */
    $(document).on('click', "#blog-filter a", function (e) {
    	e.preventDefault();
    	var $category = $(this).data("category") ;
    	console.log("check",$(this).data("category"));
    	$grid.isotope({ filter: '.' + $category });
    	if($category == 'all') {
    		$grid.isotope({ filter: '' });
    	}
    });
};


/**
 * 
 */
var initCategory = function () {
    //initBlog();
};


/**
 * 
 */
var initPost = function () {
   // initBlog();
};


/**
 * Run JavaScript for for special template
 * E.g. templates/product.liquid
 */
var initTemplate = {
    'home': initHome,
    'offshore': initOffshore,
    'portagency': initPortagency,
    'linerservices': initLinerservices,
    'contact': initContact,
    'shipping': initShipping,
    'about': initAbout,
    'category': initCategory,
    'post': initPost,
    'blog': initBlog,
};


/**
 * 
 */
var resetNav = function () {
   cache.$navbarMain.find('ul.nav.navbar-nav li').removeClass('active');
};


/**
 * 
 */
var setNav = function (selector) {
   cache.$navbarMain.find('ul.nav.navbar-nav li'+selector).addClass('active');
};


/**
 * 
 */
var setNavActive = function (namespace) {
  resetNav();
  setNav('.'+namespace);
  switch(namespace) {
    case 'home':
    break;
  }
};


/**
 * Init Javascripts insite of barba.js
 */
var initTemplates = function () {
    
  Barba.Dispatcher.on('linkClicked', function (el) {
    cache.lastElementClicked = el;
  });
  
  Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
      
    console.log("barba.js new page ready. Dataset: ", container.dataset);
    
	// TODO is a new load necessary?
    // Hyphenator.run(); // https://github.com/mnater/Hyphenator/blob/wiki/en_HowToUseHyphenator.md#step-by-step-advanced-wo-hyphenator_loaderjs
    changeNavbar(container.dataset);
    initSidebar();

    if(typeof(initTemplate[currentStatus.namespace]) === 'function' ) {
      initTemplate[currentStatus.namespace](container.dataset);
    } else {
      console.error("Template not defined: "+currentStatus.namespace);
    }
    setNavActive(currentStatus.namespace);
    
  });
};


/**
 * Custom Transition
 */
var FadeTransition = Barba.BaseTransition.extend({
  start: function () {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function () {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */

    return $(this.oldContainer).animate({ opacity: 0 }).promise();
  },

  fadeIn: function () {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */

    var _this = this;
    var $el = $(this.newContainer);

    $(this.oldContainer).hide();

    $el.css({
      visibility : 'visible',
      opacity : 0
    });

    $el.animate({ opacity: 1 }, 400, function () {
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */

      _this.done();
    });
  }
});


/**
 * Barba Constructor
 */
var initBarba = function () {
  /**
   * Next step, you have to tell Barba to use the new Transition
   */
  Barba.Pjax.getTransition = function () {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */
    return FadeTransition;
  };
  // activate precache
  Barba.Prefetch.init();
  initTemplates();
  Barba.Pjax.start();
};


/**
 * 
 */
$(document).ready(function (){
    initBarba();

});