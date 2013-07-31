$(document).ready(function(){
	$("#nav li").hover(function(){
    $(this).addClass("hover").find("ul").slideDown();
	}, function(){
		$(this).removeClass("hover").find("ul").slideUp();
	});
});