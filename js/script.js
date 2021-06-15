
$(document).ready(function () {
	$(".slider").slick({
		arrows:false,
		dots: false,
  		autoplay: true,
  		autoplaySpeed: 1000,
  		adaptiveHeight: true,
  		slidesToShow: 2,
  		infinite: true,
  		centerPadding:0,
  		easing:'easy',
  		pauseOnFocus: true,
  		pauseOnHover: true,
  		pauseDotsHover: true,
  		
	});
});

function ibg(){
let ibg=document.querySelectorAll(".ibg"); for (var i = 0; i < ibg.length; i++) { if(ibg[i].querySelector('img')){ ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; } }
}
ibg();

