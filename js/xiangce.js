$(function(){
	var imgbox=$('.img-box')
	var img=$('.tanchu img')
	// var btnleft=$('.btn .btnleft')
	// var btnright=$('.btn .btnright')
	var aa=0;
	var arr=[];
	imgbox.on('click','img',function(){
		$('.mask').css('display','block')
		var asrc=$(this).attr('src')//获取每一张图片的src
		 img.attr({src:asrc}) 
		  aa=$(this).index()
		 $('.img img').eq($(this).index()).addClass('active')


	$('.tanchu .right,.btn .btnright').on('click',function(e){
		e.stopPropagation()
		aa++;
		if(aa>$('.img-box img').length-1){
			aa=0;
		}
		$('.img-box img').each(function(i,v){
			arr.push(v.src)
			
		})
		img.attr({src:arr[aa]})
		$('.img img').removeClass('active').eq(aa).addClass('active')
		 
	})
	$('.tanchu .left,.btn .btnleft').on('click',function(e){
		e.stopPropagation()
		aa--;
		if(aa<0){
			aa=$('.img-box img').length-1;
		}
		$('.img-box img').each(function(i,v){
			arr.push(v.src)
			
		})
		// img.attr({src:arr[aa]})
		// $('.img img').removeClass('active').eq(aa).addClass('active')
	})
		
	})

	$('.mask').on('click',function(){
		$('.mask').css('display','none')
	})
	$('.tanchu').on('click',function(e){
		e.stopPropagation()
		// $('.mask').off('click')
	})
	$('.close').on('click',function(){
		$('.mask').css('display','none')
	})
	$(document).on('mousedown',false)
	
	$('.img img').on('click',function(e){
		e.stopPropagation()
		var asrc=$(this).attr('src')
		 img.attr({src:asrc}) 
		$('.img img').removeClass('active').eq($(this).index()).addClass('active')

	})
	
	


})