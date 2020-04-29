/* global $, jquery, alert */

$(document).ready(function () {

	"use strict";
	
    /* $(".carousle").carousle({
        interval: 6000
    }); */

    // Show color Option Div When Click on The Gear

    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });

    // Change Color Theme On Click
    var colorLi = $(".color-option ul li");
    colorLi
		.eq(0).css("backgroundColor", "#E41B17").end()
		.eq(1).css("backgroundColor", "#337ab7").end()
		.eq(2).css("backgroundColor", "#398439").end()
		.eq(3).css("backgroundColor", "#31b0d5").end()
		.eq(4).css("backgroundColor", "#f0ad4e");

    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        
    });

     // Scroll Button

    var scrollButton = $("#scroll-top");

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 600) {
            scrollButton.fadeIn();
        } else {
            scrollButton.fadeOut();
        }
    });

     // Click On Button To Scroll Top
     
    scrollButton.click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });

    /* To Prevent Transitions When Page Is Unload */
    /* $(window).load(function() {
        $("body").removeClass("preload");
      }); */

    // Nice Scroll
    $("html").niceScroll({
        background:"rgba(20,20,20,0.3)",
        /* cursorcolor: "#E41B17", */
        cursorwidth: "8px",
        zindex:'9999'
    });

    $(".navbar-inverse .navbar-toggle").click(function(){
        $(".options").fadeToggle(); 
    });

    // To move between slides when clicked

    /* $(".testimonals .carousel-indicators li").click(function(){
        
        $(".testimonals .carousel-indicators li").each(function(){
            $(this).removeClass("active");
        });

        $(this).addClass("active");
    });
 */

});

// Loading Screen

$(window).load(function () {
    "use strict";
	$(".loading-overlay .sk-chase").fadeOut(2000, function () {
        $("body").css("overflow", "auto");
        $(".scroll-top").css("display", "inline-block")
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });
});
