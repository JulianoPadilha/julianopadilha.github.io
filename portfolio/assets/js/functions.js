$(function() {
	mentoringBubbleClick();
	setInterval(function(){
		articleTada();
	}, 4000);

	designBGStuff();
	smoothScroll(500);
	mobileNav();
	arrowMenu();
});

function mobileNav() {
	$('.mobile-nav-toggle').on('click', function() {
		var status = $(this).hasClass('is-open');
		if(status) {
			$('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
		} else {
			$('.mobile-nav-toggle, .mobile-nav').addClass('is-open');
		}
	});
}

function arrowMenu() {
	$('.site-nav').children().children().on('click', function(){
		var status = $(this).hasClass('teste');
		if(status){
			$(this).removeClass('teste');
		} else {
			$(this).addClass('teste');
		}
	});
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function designBGStuff() {
	$('.design-img-link').hover(function(){
		$(this).parent().parent().css('background-color', $(this).data('color'));
	}, function(){
		$(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'));
	});
}

function articleTada(){
	var randomNum = Math.floor(Math.random() * $('.article-thumb').length) +1;

	$('.article-thumb').eq(randomNum).addClass('is-emph')
		.siblings().removeClass('is-emph');
}

function mentoringBubbleClick() {
	$('.item').on('click', function() {
		var $this = $(this),
			itemTop = $this.position().top,
			vertMath = -1 * (itemTop - 230),
			itemLeft = $this.position().left,
			horizMath = 0 - itemLeft;

		if($(window).width() > 640) {
			$this.parent().css('top', + vertMath +'px');
		} else {
			if($this.hasClass('back-btn')) {
				mentoringNarrowStart();
			} else {
				$this.parent().css('left', + horizMath +'px');
			}
		}
		if(!$this.hasClass('back-btn')){
			$this.addClass('has-bubble-open')
			.siblings().removeClass('has-bubble-open');
		}
	});
	
}


$(window).scroll(function() {
	youtubeVidScroll();
	startMentoring();
	startArticles();
});

function youtubeVidScroll() {
	var wScroll = $(window).scrollTop();

	$('.image-strip').css('background-position', 'center -'+ wScroll +'px');
}

function startArticles(){
	var wScroll = $(window).scrollTop();

	if($('section.articles').offset().top - $(window).height()/2 < wScroll){
		$('.article-thumb').each(function(i){
			setTimeout(function(){
				$('.article-thumb').eq(i).addClass('is-visible');
			}, 200 * i);
		});
	}
}

function startMentoring() {
	var wScroll = $(window).scrollTop();

	if($('section.interests').offset().top - $(window).height()/2 < wScroll) {
		if($(window).width() > 640){
			$('.items').addClass('launched');
			if(!$('.item').hasClass('has-bubble-open')){
				setTimeout(function(){
					$('.item:nth-child(3)').addClass('has-bubble-open');
				}, 400);
			}
		} else {
			mentoringNarrowStart();
		}
	}
};

function mentoringNarrowStart(){
	$('.items').css({
		'top': '230px',
		'left': '0px'
	});
	$('.item').first().addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');

}

function mentoringWideStart(){
	$('.items').css({
		'top': '0px',
		'left': '0px'
	});
	$('.item:nth-child(3)').addClass('has-bubble-open')
		.siblings().removeClass('has-bubble-open');

}

$(window).resize(function(){
	if($(window).width() > 640){
		mentoringWideStart();
	} else {
		mentoringNarrowStart();
	}
});