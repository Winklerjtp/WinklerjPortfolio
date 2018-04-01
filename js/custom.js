/*=====================================================================
							General
=====================================================================*/
// Close drop down menu when clicking a link
$(function() {
	$(".navbar-collapse ul li a").on("click touch", function(){
		$(".navbar-toggler").click();
	});
});


/*=====================================================================
							animations
=====================================================================*/
// About section animations based on if section is in Viewport
// About title fade in
// $(window).scroll(function() {
// 	var topOfElemA = $('#about').offset().top;
// 	var botOfElemA = topOfElemA + $('#about').outerHeight();
// 	var topOfViewportA = $(window).scrollTop();
// 	var botOfViewportA = topOfViewportA + $(window).height();

// 	var topOfElemP = $('#projects').offset().top;
// 	var botOfElemP = topOfElemP + $('#projects').outerHeight();
// 	var topOfViewportP = $(window).scrollTop();
// 	var botOfViewportP = topOfViewportP + $(window).height();

// 	if ((botOfElemA > topOfViewportA) && (topOfElemA < botOfViewportA)) {
// 		return $('#about .content-title').addClass('fade-in'),
// 			   $('#about p').addClass('slide-in-r'),
// 			   $('.about-right').addClass('slide-in-lb');
// 	} else if ((botOfElemP > topOfViewportP) && (topOfElemP < botOfViewportP)) {
// 		return $('#projects .content-title').addClass('fade-in'),
// 			   $('#contact .content-title').addClass('fade-in');
// 	} 
	
// });
