window.onload = function () {
	
	inp1();
	function inp1 () {
		
		$('#inp').focus(function(){
		
			$('#la').css('display','none');
		})
		$('#inp').focusout(function(){
			
			$('#la').css('display','block');
		})
		
		
	}
	
	banner();
	function banner (){
		
		var arr = ['url(img/img-banner/b-1.jpg)','url(img/img-banner/b-2.jpg)','url(img/img-banner/b-3.jpg)',
					'url(img/img-banner/b-4.jpg)','url(img/img-banner/b-5.jpg)','url(img/img-banner/b-6.jpg)'];
		
		var time = setInterval(fun,3000);
		
		var n = 0 ;
		
		function fun () {
			
			if(!$('.list div').is(':animated')){
				
				n++;
				if(n==$('.list li').length){
				
					n = 0;
				}
				$('.list div').fadeOut(500).eq(n).fadeIn(500);
				$('.list').css({
					transition:'all .5s',
					backgroundImage:arr[n],
					backgroundSize:'100% 470px',
				});
				$('.banner_box li').css('background','#211616').eq(n).css('background','#e5004f');
			}	
		}
		
		$('.banner_box li').eq(0).css('background','#e5004f');
		
		$('.list').css({
			backgroundImage:arr[0],
			backgroundSize:'100% 470px',
		})
		
		$('.banner_box li').mouseover(function(){
			if(!$('.list div').is(':animated')){
				var index = $(this).index();
				$('.list div').fadeOut(1000).eq(index).fadeIn(1000);
				$('.list').css({
					transition:'all 1s',
					backgroundImage:arr[index],
					backgroundSize:'100% 470px',
				});
				$('.banner_box li').css('background','#211616').eq(index).css('background','#e5004f');
				
				n = index;
			}
			
		})
		
		$('.list li,.banner_box').hover(function(){
			
			clearInterval(time);
		},function(){
			
			time = setInterval(fun,3000);
		})
		
		$('.btnR').click(function(){
			
			fun();
		})
		
		$('.btnL').click(function(){
			
			if(!$('.list div').is(':animated')){
				
				n--;
				if(n==-1){
				
					n = $('.list li').length-1;
				}
				$('.list div').fadeOut(500).eq(n).fadeIn(500);
				$('.list').css({
					transition:'all .5s',
					backgroundImage:arr[n],
					backgroundSize:'100% 470px',
				});
				$('.banner_box li').css('background','#211616').eq(n).css('background','#e5004f');
			}	
		})
		
		
	}
	
	temai();
	function temai() {
		
		$('.temai li').mouseover(function(){
			
			var index = $(this).index('.temai li');
			
			$('.bd_bottom').css({
				'border-bottom':'5px solid #333',
				'fontWeight':'none',
				}).eq(index).css({
				
				'border-bottom':'5px solid #e5004f',
				'fontWeight':'bold',
			});
			
			$('.tm_1').removeClass('jiao').eq(index).addClass('jiao');
			$('.tm').css('display','none').eq(index).css('display','block');
		})
		$('.temai li').eq(2).css('border-bottom','5px solid #e5004f').css('fontWeight','bold');
		$('.tm_1').eq(2).addClass('jiao');
		$('.tm').eq(2).css('display','block');
		
		
		
	}
	
	
	baihuo();
	function baihuo (){
		
		$('.bh_top li').mouseover(function(){
			
			var index = $(this).index('.bh_top li');
			
			$('.bh_top li').css({
				'border-bottom':'3px solid #333',
				'fontWeight':'none',
				}).eq(index).css({
				
				'border-bottom':'3px solid #e5004f',
				'fontWeight':'bold',
			});
			$('.bh').removeClass('jiao').eq(index).addClass('jiao');
			$('.bh_right').css('display','none').eq(index).css('display','block');
		})
		$('.bh_right').eq(0).css('display','none');
		$('.tuijian').css({
			'border-bottom':'3px solid #e5004f',
				'fontWeight':'bold',
		});
	}
	
	
	wufeng();
	function wufeng () {
		
		$('.left_bL').hover(function(){
			
			$(this).find('img').css('left','-9px');
		},function(){
			
			$('.left_bL').find('img').css('left','5px');
		})
		$('.left_bR').hover(function(){
			
			$(this).find('img').css('left','-43px');
		},function(){
			
			$('.left_bR').find('img').css('left','-29px');
		})
		
		var w = $('.lb').width();
		var n = w ;
		
		$('.left_bR').each(function(){
			var myL=0;
			$(this).click(function(){

				if(!$(this).next('.wufeng').find('.wf_lb').is(':animated')){
				
					myL+=160;
				
	 				$(this).next('.wufeng').find('.wf_lb').position().left=myL;
						if(myL==640){
							myL=160;
							$(this).next('.wufeng').find('.wf_lb').animate({
								left:0+'px',
							},0)
						}
						$(this).next('.wufeng').find('.wf_lb').animate({
							
							left:-myL+'px',
						},500)
				}	
			
			})
			
			
			
		})
		
		$('.left_bL').each(function(){
			var myL = 0 ;
			
			$(this).click(function(){
				
				if(!$(this).next('.left_bR').next('.wufeng').find('.wf_lb').is(':animated')){
				
					myL = myL-160;
				
					$(this).next('.left_bR').next('.wufeng').find('.wf_lb').position().left=myL;
					if(myL<0){
					
						myL=320;
						$(this).next().next('.wufeng').find('.wf_lb').css({
							
							left:-myL-160+'px',
						})
					}
					$(this).next().next('.wufeng').find('.wf_lb').animate({
							
						left:-myL+'px',
					},500)
				}	
				
			})
		})
	}
	
	
	shehua();
	function shehua () {
		var n = 0 ;
		$('.shi_btnR').click(function(){
			n++ ;
			if(n=1){
				n=1;
			}
			$(this).next().next('.shi_img').animate({
				
				left:-390+'px',
			})
			$(this).next().find('li').css('background','#6E6E6E').eq(1).css('background','#E81960');
		})
		$('.shi_btnL').click(function(){
			n-- ;
			if(n<0){
				n=0;
			}
			$(this).next().next('.shi_ul').next('.shi_img').animate({
				
				left:0+'px',
			})
			$(this).next().next().find('li').css('background','#6E6E6E').eq(0).css('background','#E81960');
		})
		
		$('.shi_ul li').parent().children(':first-child').css('background','#E81960');
		/*var li = $('.shi_ul li').parent().children(':first-child');
		
				li.click(function(){
					console.log(this);
					n-- ;
					if(n<0){
						n=0;
					}
					li.parent().next().animate({
							
						left:0+'px',
					})
					//$('.shi_ul li').css('background','#6E6E6E').eq($(this)).css('background','#E81960');
						$('.shi_ul li').css('background','#7C7C7C').eq($(this)).css('background','#E81960');
				}) 
			
		
		 $('.shi_ul li').parent().children(':last-child').click(function(){
			
					console.log(this);
			n++ ;
			if(n=1){
				n=1;
			}
			$(this).parent().next().animate({
				
				left:-390+'px',
			})
			$(this).css('background','#E81960');
		})*/
		
		$(".shi_ul li").click(function (evt) {
			var li = this;
			$(this).parent().children().each(function (index) {
				this.style.backgroundColor = "#7C7C7C";
				
				if (this == li) {
					
					console.log(index)
					
					$(this).parent().next().animate({ 
					 	                              
				    	left:-390 * index +'px',               
				     })   }                             
				//console.log(evt, this);
			});

			li.style.backgroundColor = "#EA3070";
			//console.log(evt, $(this).parent().children());
		});
		
		
	}
	
	
	louti();
	function louti () {
		
		$(document).scroll(function(){
			
			var atop = $(document).scrollTop();
			
			var btop = $('#body').offset().top; 
		
			if(atop>btop){
				$('.left_fix').css('display','block');
			}else{
				$('.left_fix').css('display','none');
			}
			$('.shishang').each(function(i,obj){
				
				var ctop = $(obj).offset().top-50;
				if(atop>=ctop){
					$('.lou').removeClass('lou2').eq(i).addClass('lou2');
				}
				
			})
			
		})
			$('.one:not(:last-child)').click(function(){
				
				var index = $(this).index();
				
				var tops = $('.shishang').eq(index).offset().top-50;
				console.log(tops);
				$('body,html').animate({
					
					scrollTop:tops,
				})	
			})
			$('.one9').click(function(){
				
				$('body,html').animate({
					
					scrollTop:0,
				})
				
			})
		
		
	}
	
	
	bottom();
	function bottom () {
		
		$('#bottom').load('bottom.html');
		$('#headed').load('head.html');
	}
	

	
	

	
}
