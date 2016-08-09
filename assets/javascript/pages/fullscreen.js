$(document).ready( function() {

// $("#fullscreenSlideshow").slick('setPosition');
 $("#fullscreenButton").animatedModal({
	"color": "rgb(64, 83, 164)", //primary-barnd,
	"overflow":"hidden",
	beforeOpen: function() { //not working properly in safari....
		 $("#fullscreenSlideshow").slick('setPosition');

	},
	afterOpen: function(){ //... safari fix.
		 $("#fullscreenSlideshow").slick('setPosition');

	 },
 });


// BAUSTELLE

	// var $fullscreenSlideshow = $('#fullscreenSlideshow');
/*	
		<button id="fullscreen-button" data-target="#gallerySlideshow">O</button>-->
	if (screenfull.enabled) {
    	document.addEventListener(screenfull.raw.fullscreenchange, function() {
			console.log('Am I fullscreen? ' + (screenfull.isFullscreen ? 'Yes' : 'No'));
			if(screenfull.isFullscreen) {
				//$("#gallerySlideshow").setPosition();
				$("#gallerySlideshow").slick('setPosition');
			}else{
			//	$fullscreenSlideshow.css('display','none');
				//$fullscreenSlideshow.css('display','block');
			}
				$("#gallerySlideshow").slick('setPosition');
		});
	}

	var shown = false;
	$(document).on('click', '#fullscreen-button', function(e) {
		var elem = document.getElementById("gallerySlideshow"); //$(this).data('target');
	

		if (screenfull.enabled) {
		//	$fullscreenSlideshow.css('display','block');
			screenfull.toggle(elem);
		}


		//var elem = document.getElementById("myvideo");
		//console.log($(this).data('target'))

		//var elem = document.getElementByClassName("scroller")[0];
		// if (elem.requestFullscreen) {
		// 	elem.requestFullscreen();
		// } else if (elem.msRequestFullscreen) {
		// 	elem.msRequestFullscreen();
		// } else if (elem.mozRequestFullScreen) {
		// 	elem.mozRequestFullScreen();
		// } else if (elem.webkitRequestFullscreen) {
		// 	elem.webkitRequestFullscreen();
		// }

		// document.addEventListener("fullscreenchange", function( event ) {
		// 	console.log('change',document.fullscreenEnabled);
		// 	// The event object doesn't carry information about the fullscreen state of the browser,
		// 	// but it is possible to retrieve it through the fullscreen API
		// 	if ( document.fullscreenEnabled ) {
				
		// 		// The target of the event is always the document,
		// 		// but it is possible to retrieve the fullscreen element through the API
		// 		document.fullscreenElement;
				
		// 	}

		// });



	});

*/

});