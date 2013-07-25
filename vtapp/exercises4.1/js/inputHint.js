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
	}).bind("blur", function(){
		var currentInputVal = formInput.val();
		currentInputVal = jQuery.trim(currentInputVal);
		if(currentInputVal == ""){
			$(formInput).val(labelVal).addClass("hint");
		}
	});
});