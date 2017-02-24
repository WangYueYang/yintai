window.onload = function(){
	
	$('#hed').load('head.html');
	$('#btm').load('bottom.html');
	
	$('.qitayouhui').slideUp(500);
	$('.youhuijuan i').css('transform','rotate(0deg)');
	var flag = false;
	$('.youhuijuan').click(function(){
		
		if(flag){
			
			$('.qitayouhui').slideUp(500)
			
			$('.youhuijuan i').css('transform','rotate(0deg)');
			flag = false;
		}else{
			
			$('.qitayouhui').slideDown(500)
			$('.youhuijuan i').css('transform','rotate(180deg)');
			flag = true;
		}
	})
		$('.yintaikahao').slideUp(500);
		$('.yintaikazhifu i').css('transform','rotate(0deg)');
	$('.yintaikazhifu').click(function(){
		
		if(flag){
			
			$('.yintaikahao').slideUp(500);
			$('.yintaikazhifu i').css('transform','rotate(0deg)');
			
			flag = false;
		}else{
			
			$('.yintaikahao').slideDown(500)
			$('.yintaikazhifu i').css('transform','rotate(180deg)');
			
			flag = true;
		}
		
	})
}
