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
$(window).scroll(function() {
	var topOfElem = $('#about').offset().top;
	var botOfElem = topOfElem + $('#about').outerHeight();
	var topOfViewport = $(window).scrollTop();
	var botOfViewport = topOfViewport + $(window).height();

	if ((botOfElem > topOfViewport) && (topOfElem < botOfViewport)) {
		return $('#about .content-title').addClass('fade-in');
	} else {
		$('#about .content-title').removeClass('fade-in');
	}
});

// About left section animation
$(window).scroll(function() {
	var topOfElem = $('#about').offset().top;
	var botOfElem = topOfElem + $('#about').outerHeight();
	var topOfViewport = $(window).scrollTop();
	var botOfViewport = topOfViewport + $(window).height();

	if ((botOfElem > topOfViewport) && (topOfElem < botOfViewport)) {
		return $('#about p').addClass('slide-in-r');
	} else {
		$('#about p').removeClass('slide-in-r');
	}
});

// About right section animation
$(window).scroll(function() {
	var topOfElem = $('#about').offset().top;
	var botOfElem = topOfElem + $('#about').outerHeight();
	var topOfViewport = $(window).scrollTop();
	var botOfViewport = topOfViewport + $(window).height();

	if ((botOfElem > topOfViewport) && (topOfElem < botOfViewport)) {
		return $('.about-right').addClass('slide-in-lb');
	} else {
		$('.about-right').removeClass('slide-in-lb');
	}
});

// Projects and contact sections title fade in
$(window).scroll(function() {
	var topOfElem = $('#projects').offset().top;
	var botOfElem = topOfElem + $('#projects').outerHeight();
	var topOfViewport = $(window).scrollTop();
	var botOfViewport = topOfViewport + $(window).height();

	if ((botOfElem > topOfViewport) && (topOfElem < botOfViewport)) {
		return $('#projects .content-title').addClass('fade-in');
	} else {
		$('#projects .content-title').removeClass('fade-in');
	}
});

$(window).scroll(function() {
	var topOfElem = $('#contact').offset().top;
	var botOfElem = topOfElem + $('#contact').outerHeight();
	var topOfViewport = $(window).scrollTop();
	var botOfViewport = topOfViewport + $(window).height();

	if ((botOfElem > topOfViewport) && (topOfElem < botOfViewport)) {
		return $('#contact .content-title').addClass('fade-in');
	} else {
		$('#contact .content-title').removeClass('fade-in');
	}
});