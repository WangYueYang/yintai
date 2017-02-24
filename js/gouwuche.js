window.onload = function () {

	$('#hd').load('head.html');
	$('#btm').load('bottom.html');
	
	$('.ul1').css('display','none').eq(0).css('display','block');
	$('.lb_topp span').hover(function(){
		
		var index = $(this).index();
		$('.lb_topp span').removeClass('fsp').eq(index).addClass('fsp');
		$('.ul1').css('display','none').eq(index).css('display','block');
	})
	
	var nn=1 ;
	$('.jia').click(function(){
		
		nn++ ;
		$('.shuliang input').val(nn);
		var ff = nn*1399;
		$('.jifen').text(ff);
	})
	$('.jian').click(function(){
		
		nn-- ;
		if(nn<=1){
			nn=1;
		}
		$('.shuliang input').val(nn);
		var ff = nn*1399;
		$('.jifen').text(ff);
	})
	var n=0;
	var m=0 ;
	$('.R').each(function(){
		$('.R').click(function(){
			var l = $('.lbb').width();
			var L = l+20;
			m++;
			if(!$('.lbb ul').is(':animated')){	
				n++;
				if(n==4){
					n=1;
					$('.lbb ul').css({	
					
						left:0+'px',
					})
				}
				$('.lbb ul').animate({
					
					left:-L*n+'px',
				},500)	
			}
			if(m>=3){
				m=0;
				$('.dian li').css('color','#999').eq(m).css('color','#E5004F');
			}
			$('.dian li').css('color','#999').eq(m).css('color','#E5004F');
		})
	})
	$('.L').click(function(){
		var l = $('.lbb').width();
		var L = l+20;
		m--;
		if(!$('.lbb ul').is(':animated')){
			
			n--;
			if(n<0){
				n = 2;
				$('.lbb ul').css({
				
					left:-L*(n+1)+'px',
				})	
			}
			$('.lbb ul').animate({
				
				left:-L*n+'px',
			},500)	
		}
		
		if(m<0){
			m=2;
			$('.dian li').css('color','#999').eq(m).css('color','#E5004F');
		}
		$('.dian li').css('color','#999').eq(m).css('color','#E5004F');
	})
	
	
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
