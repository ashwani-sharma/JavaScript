$(function(){
	
	// Exercise 2.1 Selecting
	
	// code for question #1 of exercise 2.1
	$("div.module")//.addClass("aks"); // to add class with all div elements having class "module"
	//var abc = $(".module").length;
	//alert(abc);
	
	
	// code for question #2 of exercise 2.1
	$("ul#myList li:nth-child(3)")//.addClass("aks"); // could not work for all browsers
	$("ul#myList li:nth-of-type(3)")//.addClass("aks2"); // could not work for all browsers
	$("li#myListItem")//.addClass("aks3"); // could be best selector but if ID/class is given
	$("ul#myList li#myListItem")//.addClass("aks4"); // could be best selector but if ID/class is given
	$("ul#myList li:eq(2)")//.addClass("aks5"); // probably the best selector even if ID/class is not given and work for all browsers
	$("ul#myList li#listItem_2").next()//.addClass("aks6"); // could be a good selector but if all elements have given different ID/class
	
	
	// code for question #3 of exercise 2.1
	$("label[for = 'q']")//.addClass("aks");
	
	
	// code for question #4 of exercise 2.1
	$(":hidden").length;
	//var hidVal = $(":hidden").length;
	//alert(hidVal);
	
	
	// code for question #5 of exercise 2.1
	$("img[alt]").length;
	//var altCount = $("img[alt]").length;
	//alert(altCount);
	
	
	// code for question #6 of exercise 2.1
	$("table#fruits tr:odd")//.css("background", "#ff0000");
	
	
	
	
	// Exercise 2.2 Traversing
	
	// code for question #1 of exercise 2.2
	$("img").each(function() {
		console.log($(this).attr("alt"));
	});
	//alert($('img').length);
	
	
	// code for question #2 of exercise 2.2
	$("input.input_text").closest("form").addClass("aks");
	//$("input.input_text").parent("form").addClass("aks");//another method
	
	
	
	// code for question #3 of exercise 2.2
	$("ul#myList li.current").removeClass("current").next().addClass("current");
	
	
	
	// code for question #4 of exercise 2.2
	$("#specials").find("select").parent().next().find("input[type='submit']");
	
	
	
	// code for question #5 of exercise 2.2
	$("#slideshow").children(":first-child").addClass("current").nextAll().addClass("disabled");
	
	
	
	
	// Exercise 2.3 Manipulating
	
	// code for question #1 of exercise 2.3
	var liCount = $("ul#myList li").length;
	//alert(liCount);
	for(i=0; i<5; i++){
		//liCount ++;
		$("<li></li>").text("List Item " + parseInt(liCount + i + 1)).appendTo("ul#myList");
	}
	
	
	
	// code for question #2 of exercise 2.3
	$("ul#myList li:odd").remove();
	
	
	
	// code for question #3 of exercise 2.3
	$("<h2>Another Heading</h2> <p>Another Paragraph</p>").insertAfter("div.module:last h2");
	// $("div.module:last").append("<h2>Another Heading</h2> <p>Another Paragraph</p>"); // another solution
	
	
	
	// code for question #4 of exercise 2.3
	var dayVal = $("div.module:last select option[value = 'friday']");
	var daySelect = $("div.module:last select");
	$("div.module:last select").append("<option value='wednesday'>Wednesday</option>");
	$(dayVal).appendTo("div.module:last select");
	
	
	
	// code for question #5 of exercise 2.3
	var firstImg = $("img:first");
	$("<div class='module'></div>").insertAfter("div.module:last");
	$(firstImg).clone().appendTo("div.module:last");
});