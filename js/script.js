
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



document.addEventListener("DOMContentLoaded", function () {
 
	const form = document.getElementById("form");

	form.addEventListener("submit", formSend);


	function formSend(e){

		let error = formValidate(form);
		if (error === 0){ 

		} else {

			let modal = document.getElementById("modal");
			let btn = document.getElementById("btn");
			let close = document.getElementsByClassName("close")[0];

			modalWindow();

		    function modalWindow (){
				modal.style.display = "block";
			}
		
			close.onclick = function (){
				modal.style.display = "none";
			}

			window.onclick = function (event){
				if(event.target == modal){
					modal.style.display = "none";
				}	
			}
			
		}

	}

	function formValidate(form) {

		let error = 0;
		let formReq = document.querySelectorAll("._req");

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];

			formRemoveError(input);

			if (input.classList.contains("_email")) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else  {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}

		}

		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add("_error");
		input.classList.add("_error");
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove("_error");
		input.classList.remove("_error");
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}


});
