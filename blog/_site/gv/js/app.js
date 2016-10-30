$('.banner').backstretch("images/background-full.jpg");
$('.topCategories').backstretch("images/background-grava.jpg");
$(document).ready(function(){
	$('.navIcon').click(function(){
		$('nav').stop().slideToggle('fast');						 
	});					   
});