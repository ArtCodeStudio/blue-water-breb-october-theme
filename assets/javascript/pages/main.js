var cache = {
    lastElementClicked: null,
    $navbarMain: $('#navbar-main'),
	$blogFilter: $('#blog-filter'),
	$blogHeader: $('#blog-header-wrapper'),
	homeInitialized: false
};

var currentNamespace = null;



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
 * 
 */
var changeNavbar = function (dataset) {
    
	var slideshow_height = 809 ;
	var scroll_pos = $(window).scrollTop();

	if (currentNamespace === 'home') { 

		if (scroll_pos >= slideshow_height) {
			$('.navbar-brand').addClass("brand-hidden" );
			$('#navbar-main').addClass("navbar-slim");
			$('#slideshowHomeHTML').trigger('jumplink_slideshow_stop');
			// console.log('stop slideshow triggert');

		} else {
			$('#navbar-main').removeClass("navbar-slim");
			$('.navbar-brand').removeClass("brand-hidden");
			$('#slideshowHomeHTML').trigger('jumplink_resume_slideshow');
			// console.log('jumplink_resume_slideshow  triggert');
		}

	} else {
		$('.navbar-brand').addClass("brand-hidden" );
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
	
	transformicons.add('.tcon');

 	/**
     * @see http://dcdeiv.github.io/simpler-sidebar/
	 * https://github.com/simple-sidebar/simpler-sidebar/issues/25#issuecomment-236579696
     */
	var $sidebar = $( "#sidebar" );
	var mask = true;
	/* only initialize sidebar once */
	if ( ! $sidebar.hasClass('initialized') ) { 

		$sidebar
		.show() // already tried to remove
		.simplerSidebar( {
			align: "left", // the new sidear.align
			selectors: {
				trigger: ".toggle-sidebar", // the new opener
				quitter: ".close-sidebar" // the new closingLinks
			},
			animation: {
				easing: "easeOutQuint"
			},
			mask: {
				display: mask,
				css: {
					backgroundColor: "black",
					opacity: 0,
				}
			},
			sidebar: {
				width: 250
			},
			events: {
				callbacks: {
					animation: {
						freezePage: false
					}
				},
				on: {
					animation: {
						open: function() {
							// console.log("open");
							transformicons.transform($('.toggle-sidebar button.tcon')[ 0 ]);
						},
						close: function() {
							// console.log("close");
							transformicons.revert($('.toggle-sidebar button.tcon')[ 0 ]);
						},
					}
				}
			}
		});
		$sidebar.addClass('initialized');

	}
};


/**
 * 
 */
var initHome = function (dataset) {
    
    slideshowHomeJavaScriptInit('#slideshowHomeHTML');
	initCarousel();

	if( cache.homeInitialized ) {

	}else{
		$(window).on('scrollstop', function () {
			// console.log('-----onscrollstop');
		    changeNavbar(dataset);
		});
		
		cache.homeInitialized = true;
	}
		
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
		"color": "#fff", //primary-brand,
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

    var changeBlogHeaderHeight = function (event) {
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
        changeBlogHeaderHeight();
    });
    
    changeBlogHeaderHeight();
    
	var initMasonry = function() {
		$('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: 350,
		isFitWidth: true,
		gutter:30
		});
	}
	initMasonry();    
	
};

/**
 * 
 */
var initAllReports = function () {
    initBlog();
};

/**
 * 
 */
var initCategory = function () {
    initBlog();
};


/**
 * 
 */
var initPost = function () {
    initBlog();
};

/**
 * 
 */
var initJobs = function () {
   
};

/**
 * 
 */
var initEnvironment = function () {
   
};

/**
 * 
 */
var initHistory = function () {
   
};

/**
 * 
 */
var initCopyright = function () {
   
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
	'allreports': initAllReports,
	'jobs': initJobs,
	'environment':initEnvironment,
	'history':initHistory,
	'copyright': initCopyright
};


/**
 * reset main navigation and blog filter
 */
var resetNav = function () {
   	cache.$navbarMain.find('ul.nav.navbar-nav li').removeClass('active');
 	cache.$blogFilter.find('a').removeClass('btn-white-outline');
};

/**
 * Set active state of main navigation
 */
var setNav = function (selector) {
	// keep highlight for all blog-sub pages
	if ( selector == '.allreports' || selector == '.category' || selector == '.post') {
		cache.$navbarMain.find('.main-navigation .nav-item.reports').addClass('active');
	} else{
  		cache.$navbarMain.find('.main-navigation .nav-item'+selector).addClass('active');
	}
};


/**
 * Handle main Nav / blog filter acyive state
 */
var setNavActive = function (dataset, currentStatus) {
    
	var lastClicked = null;
	
	// split dataset.blogPostCategories string to array of categories
	if( dataset && typeof(dataset.blogPostCategories) === 'string' ) {
	   dataset.blogPostCategories = dataset.blogPostCategories.split(',');
	   
    	if( typeof(dataset.blogPostCategories) === 'string' ) {
    	   dataset.blogPostCategories = [dataset.blogPostCategories]; // not working?
    	}
	}
	
	if ( lastClicked == 'all'){
		lastClicked ='allreports';
	}

	lastClicked = dataset.blogCategorySlug;

	if ( dataset.namespace == 'allreports') {
		lastClicked ='allreports';
	}

	if ( dataset.namespace == 'post') {

	}

  	resetNav();

  	setNav('.'+dataset.namespace);
		
	var setBlogFilterActiveState = function ( lastClicked ) {
		// Schoener waere es hier das vorhandene data-attribute zuy verwenden, nur fehlt mir nich der passende selektor
		// cache.$blogFilter.filter('[data-category="'+lastClicked+'"]').addClass('btn-white-outline'); ???
		cache.$blogFilter.find('a.'+lastClicked).addClass('btn-white-outline');
	}

	switch(dataset.namespace) {
		case 'category': {
			if ( lastClicked != null) {
				setBlogFilterActiveState( lastClicked );
			}
		}
		break;
		case 'allreports': {
			if(lastClicked != null){
				setBlogFilterActiveState( lastClicked );
			}
		}
		break;
		case 'post': {
			var $categories = $(dataset.blogPostCategories.split(','));
			$categories.each( function(index, object) {
				console.log('each',index, object);
				if (object != '') {
					cache.$blogFilter.find('a.'+object).addClass('btn-white-outline');
				}
				console.log('each',index, object);
			});
		}
		break;
		default: {
			//console.log('default');
			// don't work with teh cached var ?
			$("#blog-header-wrapper").css('display','none');
		}
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

	// Stop ALL slideshows
    $(document).trigger('jumplink_slideshow_stop');
	
	// console.log("barba.js new page ready. Dataset: ", container);
    currentNamespace = currentStatus.namespace;
	// TODO is a new load necessary?
    // Hyphenator.run(); // https://github.com/mnater/Hyphenator/blob/wiki/en_HowToUseHyphenator.md#step-by-step-advanced-wo-hyphenator_loaderjs
    changeNavbar(container.dataset);
    initSidebar();

    if(typeof(initTemplate[currentStatus.namespace]) === 'function' ) {
      initTemplate[currentStatus.namespace](container.dataset);
    } else {
      console.error("Template not defined: "+currentStatus.namespace);
    }
	
	/**
	 * Show/hide Blog Header (Filter)
	 */
	if( currentStatus.namespace === 'blog' || 
		currentStatus.namespace === 'allreports' || 
		currentStatus.namespace === 'category' || 
		currentStatus.namespace === 'post') {
			// wenn ich das direkt in scss setzte gibt es einen srung und kein fade
			// cache.$blogHeader.addClass('active');
			cache.$blogHeader.css('display','block');
			cache.$blogHeader.animate({opacity:1},250);
	}else{
		//cache.$blogHeader.removeClass('active');
		cache.$blogHeader.animate({
			opacity:0,
			complete: function() {
				cache.$blogHeader.css('display','none');
			}
		},250);
	}
    setNavActive(container.dataset, currentStatus);

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
      .then(this.fadeIn.bind(this))
	  .then(	$('html,body').animate({ scrollTop: 0 }, 'slow') );
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