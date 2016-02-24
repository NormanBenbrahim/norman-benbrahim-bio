
$(document).ready(function(){
// :::::: hover events for navbar :::::::::
	// hover event for contact
	$("#contact").hover(
		function(){
			$(this).addClass("hover-over-me")
		},
		function(){
			$(this).removeClass("hover-over-me")
		});

	// hover event for portfolio
	$("#portfolio").hover(
		function(){
			$(this).addClass("hover-over-me")
		},
		function(){
			$(this).removeClass("hover-over-me")
		});	

	// hover event for about
	$("#about").hover(
		function(){
			$(this).addClass("hover-over-me")
		},
		function(){
			$(this).removeClass("hover-over-me")
		});	

	// hover event for home
	$("#home").hover(
		function(){
			$(this).addClass("hover-over-me")
		},
		function(){
			$(this).removeClass("hover-over-me")
		});		

// :::::: hover events for social media buttons :::::::::
	// hover event for twitter
	$("#twitter").hover(
		function(){
			$(this).addClass("test-hover")
		},
		function(){
			$(this).removeClass("test-hover")
		});
}); 
