$(document).ready(function(){

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
					//duration: 500, // that is default, you can remove this line, // already tried to uncomment
					easing: "easeOutQuint"
				},
				sidebar: {
					width: 250
				},
				/*
				** This is default, you can remove this option!
				mask: { // already tried to uncomment
					display: true
				},
				*/
				events: {
					callbacks: {
						animation: {
							freezePage: false
						}
					}
				}
			} );


});