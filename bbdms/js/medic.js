 $(document).ready(function () {

 	// script for smooth scrolling //
 	jQuery(document).ready(function ($) {
 		$(".scroll ").click(function (event) {
 			event.preventDefault();

 			$('html,body').animate({
 				scrollTop: $(this.hash).offset().top
 			}, 1000);
 		});
 	});
	 (function ($) {
		/*------------------
	Preloader
--------------------*/
$(window).on('load', function () {
	$(".loader").fadeOut();
	$("#preloder").delay(200).fadeOut("slow");

	/*------------------
		Property filter
	--------------------*/
	$('.property-controls li').on('click', function () {
		$('.property-controls li').removeClass('active');
		$(this).addClass('active');
	});
	if ($('.property-filter').length > 0) {
		var containerEl = document.querySelector('.property-filter');
		var mixer = mixitup(containerEl);
	}
});

 	//script  for  ease //
 	$(document).ready(function () {
 		/*
 		 var defaults = {
 			 containerID: 'toTop', // fading element id
 			 containerHoverID: 'toTopHover', // fading element hover id
 			 scrollSpeed: 1200,
 			 easingType: 'linear' 
 		 };
 		 */

 		$().UItoTop({
 			easingType: 'easeOutQuart'
 		});

 	});

 });