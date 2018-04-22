$(document).ready(function () {
	var currentPage;
	var currentPageName;


	var element = 1;
	var isAnimationRunning = false;
	var isChangingPages = false;

	function animationCircle() {
		element = element > 3 ? element = 1 : element; 
		$(".graph-" + element).animate({
			"opacity": "1" }, 2000).promise().done(function() {


				$(".graph-" + element).animate({
					"opacity": "0" }, 2000); 
					
					element = element+1;
					setTimeout(animationCircle,1000);
			});
	};

	$(".menu_item").click(function(e) {
		e.preventDefault();
		var fromPage = currentPage == undefined ?  $("#homepage") : currentPage;
		var fromPageName = currentPageName == undefined ? "homepage" : currentPageName;
		var toPage = $('#'+ $(this).data("page"));
		// //$(this).off("click");

		// $(".menu_item").removeClass("active_menu_item");
		// $(this).addClass("active_menu_item");

		 var toPageName = $(this).data("page");
		 if (toPageName!== fromPageName && isChangingPages === false) {
			console.log(fromPageName + ' to ' + toPageName);
			$(".menu_item").removeClass("active_menu_item");
			$(this).addClass("active_menu_item");
			showPage(toPage, fromPage, toPageName);

		};
	});

	function showPage(toPage, fromPage, toPageName) {
		isChangingPages=true;
		var pageWidth = fromPage.width();
		toPage.css("left", pageWidth);
		toPage.addClass("active-page");
		fromPage.css("z-index", "0");
		toPage.css("z-index", "1");
		toPage.animate({
			"left": "0px"
		}, 300).promise().done(function() {
			fromPage.removeClass('active-page');
			currentPage = toPage;
			currentPageName= toPageName;

			isChangingPages=false;

			if (currentPageName==='skills' && isAnimationRunning === false)
			{
				isAnimationRunning = true;
				setTimeout(animationCircle, 3000);
			}
		});
	};
});