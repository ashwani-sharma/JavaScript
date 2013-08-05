$(document).ready(function(){
  $("div.module").hide();
  $("div.module").first().before("<ul class='tabs'></ul>");
	
  $("div.module").each(function(){
    var h2Text = $(this).children("h2").text();
    $("<li></li>").text(h2Text).attr("rel","#"+h2Text).appendTo("ul.tabs");
  });

  $("ul.tabs li").first().addClass("current");
	
  $("ul.tabs li").each(function(){
    $(this).bind("click", function(){
      $(this).addClass("current").siblings().removeClass("current");
			
      var findRel = $(this).attr("rel").toLowerCase();
      $("div.module").hide();
      $(findRel).show();
    });
  });
	
  $("div.module").first().show();
		
});