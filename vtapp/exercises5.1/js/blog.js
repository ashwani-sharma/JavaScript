$(document).ready(function(){
  var findHeading = $("#blog h3");
	
	$(findHeading).click(function(x){
    x.preventDefault();
		$(this).next("p").slideToggle().parent().siblings().find("p:visible").slideUp();
	});
});