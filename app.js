$(document).ready(function () {


	
	$("#pics").click(function() {

		$('.pics-container').css("display", "block");
		$('.slider-nav').fadeIn(300);

	});
	$("#mockup").click(function() {

		$('.mockup-container').css("display", "block");
		$('.slider-nav').fadeIn(300);

	});

	$('.close-button').click(function() {
		$(this).parent().parent().css("display", "none");

	});

	
	$('.arrow-next').click(function() {
		
		var slidetype = $(this).data("slidetype");
		console.log(this);
		console.log(slidetype);

		//var slidetype = $('#' + $(this).data("slidetype"));
		var currentSlide = $('.active-slide-' + slidetype);
		var nextSlide = currentSlide.next();
		
		var currentDot = $('.active-dot-'+ slidetype);
		var nextDot = currentDot.next('.dot-' + slidetype );

		console.log(currentSlide);


		if(nextSlide.length === 0) {
			console.log('hi')
		  nextSlide = $('.slide-' + slidetype ).first();
		nextDot = $('.dot-'+ slidetype).first(); }
		    
		currentSlide.fadeOut(600).removeClass('active-slide-' +slidetype);
		nextSlide.fadeIn(600).addClass('active-slide-' + slidetype);

		currentDot.removeClass('active-dot-' + slidetype);
		nextDot.addClass('active-dot-' +slidetype);
		
	});
	
	$('.arrow-prev').click(function() {
		console.log(slidetype)
		
		var slidetype = $(this).data("slidetype");
		var currentSlide = $('.active-slide-' + slidetype);
		var prevSlide = currentSlide.prev();
		
		var currentDot = $('.active-dot-' + slidetype);
		var prevDot = currentDot.prev();
		
		 if(prevSlide.length === 0) {
			prevSlide = $('.slide-'+ slidetype).last();
			prevDot = $('.dot-' + slidetype).last();
			}
		
	
		currentSlide.fadeOut(600).removeClass('active-slide');
		prevSlide.fadeIn(600).addClass('active-slide');
		
		
		
		currentDot.removeClass('active-dot-'+slidetype);
		prevDot.addClass('active-dot-' +slidetype);
	
	});
	





	//email

	var span = document.querySelector(".email");

	span.onclick = function () {
		document.execCommand("copy");
		$(".email b").html('copied');

		$('.email').mouseleave( function() {

			$(".email b").html('copy email');
		});
	}

	span.addEventListener("copy", function (event) {
		event.preventDefault();
		if (event.clipboardData) {
			event.clipboardData.setData("text/plain", 'mw.majch@gmail.com');
		}
	});

	var currentPage;
	var currentPageName;


	var element = 1;
	var isAnimationRunning = false;
	var isChangingPages = false;

	function animationCircle() {
		$(".animated-graph").animate({
			"opacity": "1"
		}, 2000).promise().done(function () {


			element = element > 3 ? element = 1 : element;
			$(".graph-" + element).animate({
				"opacity": "1"
			}, 2000).promise().done(function () {


				$(".graph-" + element).animate({
					"opacity": "0"
				}, 1000);

				element = element + 1;
				setTimeout(animationCircle, 100);
			});

		});
	};

	$(".menu_item").click(function (e) {
		e.preventDefault();
		var fromPage = currentPage == undefined ? $("#homepage") : currentPage;
		var fromPageName = currentPageName == undefined ? "homepage" : currentPageName;
		var toPage = $('#' + $(this).data("page"));
		// //$(this).off("click");

		// $(".menu_item").removeClass("active_menu_item");
		// $(this).addClass("active_menu_item");

		var toPageName = $(this).data("page");
		if (toPageName !== fromPageName && isChangingPages === false) {
			console.log(fromPageName + ' to ' + toPageName);
			$(".menu_item").removeClass("active_menu_item");
			$(this).addClass("active_menu_item");
			showPage(toPage, fromPage, toPageName);

		};
	});

	function showPage(toPage, fromPage, toPageName) {
		isChangingPages = true;
		var pageWidth = fromPage.width();
		toPage.css("left", pageWidth);
		toPage.addClass("active-page");
		fromPage.css("z-index", "0");
		toPage.css("z-index", "1");
		toPage.animate({
			"left": "0px"
		}, 300).promise().done(function () {
			fromPage.removeClass('active-page');
			currentPage = toPage;
			currentPageName = toPageName;

			isChangingPages = false;

			if (currentPageName === 'skills' && isAnimationRunning === false) {
				isAnimationRunning = true;
				animationCircle();
			}
		});
	};
});