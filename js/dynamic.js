function index() {
	if ( $(window).width() < 1001 ) {
		$('.index .nav li').css({'padding-right': '30px'});
	}
	if ( $(window).width() > 1000 && $(window).width() < 1131 ) {
		$('.index .nav li').css({'padding-right': $(window).width()-970+'px'});
	}
	if ( $(window).width() > 1130 ) {
		$('.index .nav li').css({'padding-right': '160px'});
	}	
}
function catalog() {
	if ( $(window).width() < 1001 ) {
		$('.catalog .nav li').css({'padding-right': '30px'});
	}
	if ( $(window).width() > 1000 && $(window).width() < 1131 ) {
		$('.catalog .nav li').css({'padding-right': $(window).width()-970+'px'});
	}
	if ( $(window).width() > 1130 ) {
		$('.catalog .nav li').css({'padding-right': '160px'});
	}
	$('.catalog > div').css({'margin-right': $('.catalog .nav').outerWidth()+'px'});
}
function articles() {
	if ( $(window).width() < 1001 ) {
		$('.articles .nav li').css({'padding-right': '30px'});
	}
	if ( $(window).width() > 1000 && $(window).width() < 1131 ) {
		$('.articles .nav li').css({'padding-right': $(window).width()-970+'px'});
	}
	if ( $(window).width() > 1130 ) {
		$('.articles .nav li').css({'padding-right': '160px'});
	}
	$('.articles > div').css({'padding-right': $('.articles .nav').outerWidth()+20+'px'});
}
function menu() {
	if ( $(window).width() < 1001 ) {
		$('.menu').css({
			'width': '1000px',
			'margin-left': '-500px'
		});
	}
	if ( $(window).width() > 1000 && $(window).width() < 1360 ) {
		$('.menu').css({
			'width': $(window).width()+'px',
			'margin-left': -$(window).width()/2+'px'
		});
	}
	if ( $(window).width() > 1359 ) {
		$('.menu').css({
			'width': '1360px',
			'margin-left': '-680px'
		});
	}
}
function list() {
	if ( $(window).width() < 1360 ) {
		$('.list ul li').css({
			'width': '180px',
			'margin-left': Math.floor(($('.list > div').width()-900)/4)+'px'
		});
	}
	else {
		$('.list ul li').css({
			'width': '180px',
			'margin-left': Math.floor(($('.list > div').width()-1080)/5)+'px'
		});
	}
}
function form() {
	var mr = ($('.contacts').width()-960)/2;
	if ( mr < 0 ) {
		mr = 0;
	}
	$('.form').css({'margin-right': mr+'px'});
}
$(window).resize(function() {
	menu();
	if ( $('.index').length > 0 ) {
		index();
	}
	if ( $('.catalog').length > 0 ) {
		catalog();
	}
	if ( $('.list').length > 0 ) {
		list();
	}
	if ( $('.contacts').length > 0 ) {
		form();
	}
	if ( $('.articles').length > 0 ) {
		articles();
	}
});
$(document).ready(function() {
	menu();
	if ( $('.index').length > 0 ) {
		index();
		$('.index .nav li:first-child').addClass('active');
		$('.index .slider img:first-child').css({
			'transform': 'scale(1)',
			'-webkit-transform': 'scale(1)',
			'-moz-transform': 'scale(1)',
			'-o-transform': 'scale(1)',
			'opacity': '1'
		});
		$('.index .nav li h3').bind('click', function() {
			$(this).parents('.index').find('.slider img').css({
				'transform': 'scale(2)',
				'-webkit-transform': 'scale(2)',
				'-moz-transform': 'scale(2)',
				'-o-transform': 'scale(2)',
				'opacity': '0'
			});
			$(this).parents('.index').find('.slider img[data-image='+$(this).attr('data-slide')+']').css({
				'transform': 'scale(1)',
				'-webkit-transform': 'scale(1)',
				'-moz-transform': 'scale(1)',
				'-o-transform': 'scale(1)',
				'opacity': '1'
			});
			$('.index .nav li').removeClass('active');
			$(this).parent().addClass('active');
			return false;
		});
	}
	if ( $('.catalog').length > 0 ) {
		catalog();
		$('.catalog').children('div').children('div').hide().filter(':first').show();
		$('.catalog .nav li').filter(':first').addClass('active');
		$('.catalog .nav li h3').bind('click', function() {
			$(this).parents('.catalog').children('div').css({'min-height': $(this).parents('.catalog').children('div').children('div:visible').height()+'px'});
			$(this).parents('.catalog').children('div').children('div').fadeOut(0);
			$(this).parents('.catalog').children('div').children('div[data-category='+$(this).attr('data-tab')+']').delay(0).fadeIn(0, function() {
				$(this).parents('.catalog').children('div').css({'min-height': 'auto'});
			});
			$('.catalog .nav li').removeClass('active');
			$(this).parent().addClass('active');
			return false;
		});
		$('.catalog > div > div > div').each(function() {
			$(this).children('img').hide().filter(':first').show();
			$(this).find('.jcarousel li:first-child').addClass('active');
			$(this).find('.jcarousel li a').bind('click', function() {
				$(this).parents('.jcarousel').parent('div').children('img').fadeOut(0).filter('[data-item='+$(this).attr('href')+']').fadeIn(0);
				$(this).parent('.jcarousel-item').addClass('active').siblings().removeClass('active');
				return false;
			});
		});
	}
	if ( $('.list').length > 0 ) {
		list();
	}
	if ( $('.contacts').length > 0 ) {
		form();
	}
	if ( $('.articles').length > 0 ) {
		articles();
	}
	$('.menu ul li').hover(
		function() {
			$(this).children('ul').stop(true,true).delay(250).slideDown(250, 'easeOutCirc');
		},
		function() {
			$(this).children('ul').stop(true,true).delay(250).slideUp(250, 'easeInCirc');
		}
	);
	if ( $('.series').length > 0 ) {
		$('.series > div > ul li').bind('click', function() {
			$(this).parents('.series').find('div.tabs').children('div:visible').hide();
			$(this).parents('.series').find('div.tabs').children('div[data-tab='+$(this).attr('data-nav')+']').show();
			$(this).addClass('active').siblings().removeClass('active');
			return false;
		}).filter(':first').click();
	}
	if ( $('.catalog').length > 0 ) {
		$('.jcarousel').jcarousel({
			scroll: 1,
			animation: 150,
			easing: 'easeInOutQuart'
		});
		$('.catalog > div > div > div').each(function() {
			$(this).find('.color ul li').bind('click', function() {
				console.log('Выбранный цвет — "'+$(this).attr('data-color')+'"');
				$(this).addClass('active').siblings().removeClass('active');
				return false;
			}).filter(':first').click();
			$(this).find('.glass ul li').bind('click', function() {
				console.log('Выбранное стекло — "'+$(this).attr('data-glass')+'"');
				$(this).addClass('active').siblings().removeClass('active');
				return false;
			}).filter(':first').click();
		});
	}
	$('.footer').css({'margin-top': -$('.footer').outerHeight()+'px'});
	$('.wrapper').append('<div class="clear" style="clear:both;overflow:hidden;height:'+$('.footer').outerHeight()+'px">');
});