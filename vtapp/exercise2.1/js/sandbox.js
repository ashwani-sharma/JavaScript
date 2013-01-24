$(function(){
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
});