/*var main = function()
{	
		
	function showPage(topage, frompage) {
		var pageWidth = frompage.width();
		topage.css("left", pageWidth);
		topage.addClass("active-page");
		topage.add(frompage).animate({
			"left": "-=" + pageWidth + "px"
		}, 300).promise().done(function() {
			frompage.removeClass('active-page');
		});
	}
	var pageone = $("#pageone"),
		pagetwo = $("#pagetwo");
	$("a").click(function(e) {
		e.preventDefault();
		var frompage = $(this).parent(),
			topage = frompage.siblings();
		showPage(topage,frompage);
	});
			
	
}
*/




$(document).ready(function () {
	//your code here
	
	function showPage(topage, frompage) {
		var pageWidth = frompage.width();
		topage.css("left", pageWidth);
		topage.addClass("active-page");
		frompage.css("z-index", "0");
		topage.css("z-index", "1");
		topage.animate({
			"left": /*"-=" /*+ pageWidth + + */"0px"
		}, 300).promise().done(function() {
			frompage.removeClass('active-page');
			currentpage = topage;
		});
	};

	var currentpage;
	$(".menu_item").click(function(e) {
		e.preventDefault();
		
		var frompage;
		console.log('current page is ' + currentpage);
		if (currentpage == undefined ) {
			frompage = $("#homepage");
		}
		else {
			frompage = currentpage;
		}
		console.log(frompage);
		//var frompage = $("#homepage");
		var page =  $(this).data("page");
		var topage = $('#'+page);

		showPage(topage,frompage);
	});
			
	
});

