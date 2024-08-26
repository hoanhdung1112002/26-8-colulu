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
});


