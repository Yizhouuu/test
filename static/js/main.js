$(function() {

    'use strict';

    // loader
    $.fakeLoader({
        spinner: "spinner2",
        bgColor: "#fd4632"
    });

   // navbar on scroll
    $(window).on("scroll", function() {

        var onScroll = $(this).scrollTop();

        if( onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");
        }
        else {
            $(".navbar").removeClass("navbar-fixed");
        }

    });

   
      
});