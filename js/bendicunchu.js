if(localStorage.zh!=''){
		
		$('.top_box1').css('display','none');
		$('.top_box2').css('display','block');
	}else{
		$('.top_box1').css('display','block');
		$('.top_box2').css('display','none');
}
$('.box2_b').click(function(){
	$('.top_box1').css('display','block');
	$('.top_box2').css('display','none');
})
