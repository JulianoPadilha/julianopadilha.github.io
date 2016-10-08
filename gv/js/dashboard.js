(function(){
	var tabs = document.getElementById('tabs').getElementsByTagName('a');

	for(i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener('click', function(e){
			this.classList.add('is-active--tab');
		});
	}

})();