;(function($){
	$.fn.extend({
		se:function(){
			$.ajax({
				type:"get",
				url:"http://www.vrserver.applinzi.com/aixianfeng/apimiaosha.php",
				async:true,
				success:function(req){
					var sec=JSON.parse(req).product
//					console.log(req)
					console.log(sec)
					var str=""
					$.each(sec, function(i,elem) {
						str+="<div class='ex'>"
						str+="<div class='ex_left'>"+"<a href='javascript:;'>"
						str+="<img src='"+elem.img+" '></a>"+"</div>"
						str+="<div class='ex_right'>"
						str+="<p>"+elem.name+"</p>"
						str+="<p>"+elem.number+"</p>"
						str+="<div class='pri'><span>￥<h3>"+elem.price+"</h3></span>/"+"原价"+elem.market_price+"</div>"
						str+="<button class='buy'>"+elem.btnText+"</button></div>"+"</div>"
					});
					$(".miansha").empty();
					$(".miansha").html(str);
				}
			});
		}
	})
})(jQuery)






//<div class="ex">

//	<div class="ex_left">
//		<a href="#"><img src="img/sufei.jpg" alt=""></a>
//	</div>
//	<div class="ex_right">
//		<p>苏菲极薄卫生巾</p>
//		<p>8片</p>
//		<div class='pri'><span>￥<h3>5.9</h3></span>/原价16.5元</div>
//		<button class="buy">5.9元抢购</button>
//	</div>

//</div>