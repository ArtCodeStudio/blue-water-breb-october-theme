$(document).ready(function() {

    // var $latest-blog-posts-container = $("latest-blog-posts-container");
    $(".latest-blog-posts-carousel").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        centerMode: false,
        centerPadding: '0',
    });
    // var init = new Event('init');
    // window.jumplink = window.jumplink || {};   

    // // Listen for the event.
    // window.addEventListener('init', function (e) {
    //     console.log('init')
    // }, false);


    // window.dispatchEvent(init);

     console.log('see: body_foot.htm');
});