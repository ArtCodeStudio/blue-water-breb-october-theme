$(document).ready(function(){

	var threshold = 10 ;//$("#slideshow").height()// - 35;
	
	//console.log('scroll',$("#slideshow").height());
	$(window).scroll( function (event) {
		var scroll_pos = $(window).scrollTop();
		 console.log('blog scroll_pos',scroll_pos);
		
		if(scroll_pos >= threshold) {
			// $('.navbar-brand').addClass("brand-hidden" ,250,"swing", function(){
			//      setTimeout(function(){  
			//            $('.navbar-brand').css("display","none");
			//     }, 250);
			//     console.log('end');
			// });

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
	   
	});



})