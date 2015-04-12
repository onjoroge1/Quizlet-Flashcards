var terms = ['8x8', '6x8', '7x5', '4x9', '9x7'],
	defs  = ['64', '48', '35', '36', '63'];
current = 0;

$(document).on('click','.paper-wrap-active', function(){
	$('.paper-front').toggleClass('paper-front-flip');
	$('.paper-back').toggleClass('paper-back-flip');
});

$(document).on('click','button.left', function(){
		$('.term').html(terms[--current]);
		$('.definition').html(defs[current]);
		if (current === 0){
			$(this).attr('disabled', true);
		}
		$('button.right').removeAttr('disabled');
		$('.navigation-status span').html( (current + 1) + ' of ' + terms.length);
		$('.status-bar').animate({'marginLeft' : '-' + (100 - (current+1)*100/terms.length)/100 * 160 + 'px'}, 200);
	});

	$(document).on('click','button.right', function(){
		$('.term').html(terms[++current]);
		$('.definition').html(defs[current]);
		if ( (current) === terms.length){
			$('.game-wrapper').fadeOut();
			$('.menu').fadeIn();
		}
		$('button.left').removeAttr('disabled');
		$('.navigation-status span').html((current + 1)+ ' of ' + terms.length);
		$('.status-bar').animate({'marginLeft' : '-' + (100 - (current+1)*100/terms.length)/100 * 160 + 'px'}, 200);
	});

function initialize(){
	current = 0;

	$('.term').html(terms[current]);
	$('.definition').html(defs[current]);
	$('button.left').attr('disabled', true);
	$('button.right').attr('disabled', false);
	$('.navigation-status span').html((current + 1)+ ' of ' + terms.length);
	$('.status-bar').css('margin-left', '-' + (100 - (current+1)*100/terms.length)/100 * 160 + 'px');
	$('.game-wrapper').fadeIn();
};

initialize();

$('.start-over').on('click', function(){
	$('.menu').fadeOut();
	initialize();
});