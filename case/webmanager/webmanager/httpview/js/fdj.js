$(function(){
	var ione = $(".one"),
		ithe = $(".the"),
		itwo = $(".two img"),
		tthe = $(".the img");
	
	var arr = ["images/images_xiangqing/mg0.jpg","images/images_xiangqing/mg1.jpg","images/images_xiangqing/mg2.jpg"];
	var oarr = ["images/images_xiangqing/mg0.jpg","images/images_xiangqing/mg1.jpg","images/images_xiangqing/mg2.jpg"];
	itwo.each(function(i){
		$(this).click(function(){
			$(".one img").attr("src",arr[i])
			tthe.attr("src",oarr[i])
			itwo.removeClass("active")
			$(this).parent().children().css({"border":"1px solid pink"})
			$(this).css({"border":"1px solid red"})
			$(this).addClass("active")
		})
		
		ione.mousemove(function(a){
			var evt = a || window.event
			ithe.css('display','block')
			var ot = evt.clientY-($(".one").offset().top- $(document).scrollTop())-87;
			var ol = evt.clientX-($(".one").offset().left- $(document).scrollLeft())-87;
			if(ol<=10){
				ol = 10;
			}
			if(ot<=10){
				ot = 10;
			}
			if(ol>=215){
				ol=215
			}
			if(ot>=215){
				ot=215
			}
			$("span").css({'left':ol,'top':ot})
			var ott = ot/350*800
			var oll = ol/350*800
			tthe.css({'left':-oll,'top':-ott})
		})
		ione.mouseout(function(){
			ithe.css('display','none')
		})
		
	})
	
	
	
	
})
