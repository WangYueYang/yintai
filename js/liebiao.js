window.onload = function () {
	
	load();
	function load(){
		
		$('#headed').load('head.html');
		$('#botm').load('bottom.html');
	}
	
	
	xiding();
	function xiding () {
		
		var btop = $('.ka').offset().top+275;
		
		$(document).scroll(function(){
			var atop = $(document).scrollTop();

			if(atop>=btop){
				
				$('.ka').addClass('xi');
			}else{
				
				$('.ka').removeClass('xi');
			}
		})
		
		
	}
	
	$('#fix').css('display','none');
	$(document).scroll(function(){
		var t = $(document).scrollTop();
			console.log(t);
		$('#fix').css('display','block');
	
		if(t<50){
			$('#fix').css('display','none');
		}
	})

	$('.goTop').click(function(){
		
		$('body,html').animate({
			
			scrollTop:0,
		})
	})
}
