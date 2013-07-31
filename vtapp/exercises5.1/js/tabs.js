$(document).ready(function(){
  $("div.module").hide();
  $("div.module").first().before("<ul class='tabs'></ul>");
	
  $("div.module").each(function(){
    var h2Text = $(this).children("h2").text();
    $("<li></li>").text(h2Text).attr("rel","#"+h2Text).appendTo("ul.tabs");
  });
	
  $("ul.tabs").css({
    width : "100%",
    float : "left",
    listStyle : "none",
    margin : "20px 20px 20px 0px"
	});
	
	$("ul.tabs li").each(function(){
    $(this).css({
      float : "left",
      margin : "0 0 0 10px",
      fontFamily : "arial",
      color : "blue",
      listStyle : "none",
      cursor : "pointer"
    });
  });
	
  $("ul.tabs li").first().addClass("current").css("color", "red").css("marginLeft", "0px");
	
  $("ul.tabs li").each(function(){
    $(this).bind("click", function(){
      $(this).addClass("current").css("color", "red").siblings().removeClass("current").css("color", "blue");
			
      var findRel = $(this).attr("rel").toLowerCase();
      $("div.module").hide();
      $(findRel).show();
    });
  });
	
  $("div.module").first().show();
		
});