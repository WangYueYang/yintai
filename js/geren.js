window.onload = function () {
	
	$('#headd').load('head.html');
	$('#bottom').load('bottom.html');
	
	$('.nav-list').css('height','0px');
	$('.nav-list ul').css('display','none');
	
	$('.move').click(function(){
		
		var index = $(this).index('.move');
		var indexs = $(this).index('.oder');
		var h = $('.nav-list ul').eq(index).offsetHeight;
		$('.nav-list ul').css('display','none').eq(index).css('display','block');
		var a = $('.order').eq(index).css('backgroundPositionY');
		var b = parseInt(a);
		console.log(b);
		$('.mv').css('height','0px').eq(index).css('height',h+'px');
		$('.move .nav-sort').css('backgroundPositionY','-80px').eq(index).css('backgroundPositionY','-115px');
		$('.oder').css('display','none').eq(index).css('display','block');
		$('.zhangkai').css('background-positionY','-263px').eq(index).css('backgroundPositionY','-290px');
		$('.shouye').css('backgroundPositionY',80+'px');
		$('.home').css('backgroundPositionY',4+'px')
	})
		
		
		var h1 = $('.leftnav').offset().top;
		
		var h2 = $('.use-zhong').offset().top;

	$(document).scroll(function(){
		
				console.log(h2);
		var top1 = $(document).scrollTop();
	
		if(top1>=h1){
		
			$('.leftnav').addClass("fixdd");
		
		}else{
			
			$('.leftnav').removeClass("fixdd");
		
		}
		if(top1>=h2+30){
		
			$('.leftnav').removeClass("fixdd");
		
		}
	})
	
	$('.zhongxin').click(function(){
		
		var index = $(this).index('.zhongxin');
		var a = index+1;
	
		$('.geren').css('display','none').eq(a).css('display','block');
	})
	
	
	
	
	
	
	
	
	
}
