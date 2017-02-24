window.onload = function () {
	
	load();
	function load () {
		
//		$('#bottom').load('bottom.html');
	}
	
	
	deng();
	function deng () {
		
		$('.deng_top li').click(function(){
			var index = $(this).index();	
			$('.deng_top li').css({
				
				color:'#999',
				borderBottom:'1px solid #ccc',
			}).eq(index).css({
				
				color:'#333',
				borderBottom:'3px solid #e5004f',
			})
			
		})
		
		$('.deng_top li').eq(0).css({
			
			color:'#333',
			borderBottom:'3px solid #e5004f',
		})
		
		var  a = '请输入手机/邮箱';
		var b = '请输入银泰护照号(手机号)'
		
		$('.deng_top li').click(function(){
			var index = $(this).index();
			console.log(index);
			if(index!=0){
				$('.tet input').eq(0).attr('placeholder',a);
			
			}else{
				$('.tet input').eq(0).attr('placeholder',b);
			}
			if(index<2){
				
				$('.deng_body').css('display','block');
				$('.sao').css('display','none');
			}else{
				
				$('.deng_body').css('display','none');
				$('.sao').css('display','block');
			}
		})
		
		
		var tet = $('.tel').val();
		var pass = $('.paw').val();
		
		
	
		$('.btn').click(function(){
			var tel = $('.tel').val();
			if(!(/^1[134578]\d{9}$/.test(tel))){
				
				$('.ts').text('请输入正确的手机号!');
				$('.clik').show();
			
			}/*else if(pass.length<6 && pass.length>16){
				
				ts.innerHTML = '请输入正确的密码!';
				$('.clik').css('display','block');
			}*/
			
		})
		$('.queding').click(function(){
			$('.clik').hide();
		})
		
		$('.yanzheng').click(function(){
			var tel = $('.shusj').val();
			if(!(/^1[134578]\d{9}$/.test(tel))){
				
				$('.ts').text('请输入正确的手机号!');
				$('.clik').show();
			
			}
			
		})
	}

	
		
		
	$('.chuangjianhz').click(function(){
		
		var zhanghao = $('.shusj').val();
		var mima1 = $('.mima1').val();
		var mima2 = $('.mima2').val();
		var cc = document.getElementById('cc');
		
		if(/^1[134578]\d{9}$/.test(zhanghao)){
			if(mima1==mima2){	
				
				localStorage.mima = mima1;	
			}
			
			localStorage.zh = zhanghao;
			console.log(localStorage.mima)
		}else{
			$('.clik').css('display','block');
			$('.ts').text('请输入正确的手机号！');
		}
	})
	
	$(document).mousemove(function(){
		var mima1 = $('.mima1').val();
		var mima2 = $('.mima2').val();
		if(mima1==mima2 && mima1!=''){
			$('.cjzh').css('display','block');
			$('.shusj').val('');
			$('.mima1').val('');
			$('.mima2').val('');
		}
	})
	
	
	$('.btn').click(function(){
		
		var mima1 = localStorage.mima;
		var zh = localStorage.zh;
		var cc = document.getElementById('cc');
		var tel = $('.tel').val();
		var paw = $('.paw').val();
		if(tel==zh && paw!=mima1){
			
			$('.clik').css('display','block');
			$('.ts').text('请输入正确的密码！');
		}else if(tel!=zh){
			$('.clik').css('display','block');
		}
	})
	
	$(document).mousemove(function(){
		var mima1 = localStorage.mima;
		var zh = localStorage.zh;
		var cc = document.getElementById('cc');
		var tel = $('.tel').val();
		var paw = $('.paw').val();
		console.log(zh)
		if(tel==zh && paw==mima1){
			$('.btna').css('display','block');
		}
	})
	
}
