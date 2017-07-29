var goto;	
var layout=[];

getlayout=function(){
	layout.menheight=$('#menu').outerHeight();
	layout.dwidth=$(window).width();
	layout.dheight=$(window).height();
}
setlayout=function(){
	$('.fimage').each(function(){
		var height=$(this).find($('img')).first().height();
		$(this).height(height);	
	})
	$('#contacttext').height(layout.dheight-layout.menheight-$('#contact').outerHeight()-parseInt($('#contact').css('marginBottom'))+2);	
}
goto=function(target){
	if(target=='top'){
		var location=0;
	}else{
		var location=$('#'+target).offset().top-layout.menheight+3;
	}
	$('html, body').animate({scrollTop:location},800)
}
$(document).ready(function(){
	getlayout();
	setlayout();
	if(!Modernizr.touch){
		$(".scroll").mCustomScrollbar({
			theme:"dark",
			scrollButtons:{ enable: true },
			scrollbarPosition: "outside",
			mouseWheel:false		
		});
	}
	$('.fimage').each(function(){
		$(this).find($('img')).first().load(function(){
			$(this).parents('.fimage').height($(this).height());
		})
	})
})
$(window).scroll(function(){
	if($(window).scrollTop() > $('#openpoint').outerHeight()){
			
		if($('#menu').css('position') != 'fixed'){
			$('#menu').css({'position':'fixed','top':-1})
			$('body').css({
				paddingTop:layout.menheight
			})
			$('#gotop').css({
				'visibility':'visible',
				'opacity':0
			}).stop().animate({
				'opacity':1
			});
		}
			
	}else if($('#menu').css('position') == 'fixed'){
		$('#menu').css({'position':'static'})
			$('body').css({
				paddingTop:0
			})
		$('#gotop').stop().animate({
			'opacity':0
		},function(){
			$('#gotop').css({
				'visibility':'hidden'				
			});
		})			
	}
})
$(window).resize(function(){
	getlayout();
	setlayout();
})
