$(function(){
	var formLabel = $("form#search label");
	var labelVal = $("form#search label").text();
	var formInput = $("form#search input[type='text']");
	
	$(formInput).val(labelVal).addClass("hint");
	$(formLabel).remove();
	
	$(formInput).bind("focus", function(){
		if($(this).val() == labelVal){
			$(this).val("").removeClass("hint");
		}
	});
	
	$(formInput).bind("blur", function(){
		var currentInputVal = formInput.val();
		currentInputVal = jQuery.trim(currentInputVal);
		if(currentInputVal == ""){
			$(formInput).val(labelVal).addClass("hint");
		}
	});
	
	
	
	
	var findLi = $("div#tabs ul li");
	var findDiv = $("div#tabs-container div.content");
	var findDivId = $("div#tabs-container div.content").attr("id");
	var currentLi = $("div#tabs ul li.current");
	
	$(document).ready(function(){
		$(findLi).first().addClass("current");
		$(findDiv).hide();
		$(findDiv).first().show();
		
		$(findLi).each(function(){
			$(this).bind("click", function(){
				$(this).addClass("current").siblings().removeClass("current");
			});
		});
	});
	
	
	
//	$(findLi).each(function(){
//		$(this).bind("click", function(){
//			$(this).addClass("current").siblings().removeClass("current");
//		});
//	});
	
//	$(findDiv).each(function(){
//		if($(this).attr("id") == $(findLi).attr("rel")){
//			$(this).css("display", "block").siblings().css("display", "none");
//		}
//	});
	
	
});