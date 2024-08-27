jQuery(function($) {
	//menu bar
	const $btnOpen = $(".menu-open")
	const $btnClose = $(".menu-close");
	var $menuBar = $(".menu")
	$btnOpen.click(function(e) {
		e.preventDefault();
		$menuBar.addClass("show");
	});

	$btnClose.click(function(e) {
		e.preventDefault();
		$menuBar.removeClass("show");
	});

	$(document).click(function(e) {
		if (!$(e.target).closest('.menu, .menu-open').length) {
			$menuBar.removeClass("show");
		}
	});

	//scroll top
	var $backToTop = $(".back-to-top");
	$backToTop.hide();

	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$backToTop.fadeIn();
		} else {
			$backToTop.fadeOut();
		}
	});
	$backToTop.click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 500)
	});

	//slick slider
	$('.hero-bg').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		arrows: false,
		dots: false,
		autoplay: false,
		autoplaySpeed: 2000,
		variableWidth:true,
		centerMode: true,
		cssEase: 'linear',
		responsive: [{ 
			breakpoint: 500,
			settings: {
				dots: false,
				arrows: false,
				infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				draggable: true,
			} 
		}]
	});

	// show/hide slider content
	$(document).ready(function() {
		var panes = $('.hero-text li');
	
		function updateTextContent(index) {
			panes.removeClass('active');
			panes.eq(index).addClass('active');
		}
	
		$('.hero-bg').on('afterChange', function(event, slick, currentSlide) {
			updateTextContent(currentSlide);
		});
	
		updateTextContent(0);
	});
	
});


