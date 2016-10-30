(function(){

var tabs = $('.tabs > .tabs-nav > ul > li').children();

	for(var i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', function(){
			tabs.removeClass("is-active--tab");
			$(this).addClass("is-active--tab");
		});
	}

})();

	
