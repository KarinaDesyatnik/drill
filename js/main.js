$(function(){
$('.question-pricing__item-header').click(function(){	
		$(this).parent().toggleClass('active');
			
	});

// -------start changes mobil input placeholder--------
if(window.innerWidth < 480) {
$('.first-name-input').attr("placeholder", "John");
$('.last-name-input').attr("placeholder", "Johnsson");
$('.phone-input').attr("placeholder", "567 34 877");
$('.company-name-input').attr("placeholder", "National Electronics");
$('.street-address-input').attr("placeholder", "379 North Road");
$('.city-input').attr("placeholder", "");
$('.post-code-input').attr("placeholder", "SW57 4TI");
$('.vat-input').attr("placeholder", "GB450032002");
}

// -------end change mobil input placeholder--------

$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab_item").slideUp().eq($(this).index()).slideDown()
}).eq(0).addClass("active");
 
$('.tab--wire-transfer').click(function(){	
	$('.coplite-button').hide();
	$('.submit-order-button').show();
			
	});
$('.tab-credit-card').click(function(){	
	$('.coplite-button').show();
	$('.submit-order-button').hide();
			
	});

$(".wr .tab-cards").click(function() {
	$(".wr .tab-cards").removeClass("active").eq($(this).index()).addClass("active");
 	$(".wr .tab-cards_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$('.add-new-card').click(function(){	
	$('.credit-card-wrapper').slideDown();
	$(this).fadeOut();
			
	});


function animationDelay(){
  $('#process-icon').fadeOut(1); 
  $('#finish-icon').delay(0);
  $('#finish-icon').slideDown(500);
  $('.process-text').fadeOut(1);
  $('.finish-text-block').delay(0);
  $('.finish-text-block').fadeIn(500);
  $('.button--blue-finish').fadeIn(100);
 
}

setTimeout(animationDelay, 3000)

function animationDelay2(){
 
  $('.checkout__step-finish').addClass('checkout__step--complite');
  $('.checkout__step-finish').removeClass('active');
  $('.checkout__steps-finish').addClass('checkout__steps--animation');

}



setTimeout(animationDelay2, 3500)


function animationDelay3(){
 
  $('.checkout-header--animation').addClass('transition-logo');
  

}



setTimeout(animationDelay3, 3500)



});