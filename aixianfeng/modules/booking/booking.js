define(['text!./booking.html','css!./booking.css'],function(html){
    function render(){
      $('.container').html(html);
    }

    //ajax
    function getData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apiyuding.php",
			async:true,
			success:function(booking_req){
				var b_req=JSON.parse(booking_req).product
				var b_str="";
				$.each(b_req, function(i,elem) {
					b_str+="<div class='fruites'>"+"<a href='javascript:;'>"
					b_str+="<img src='"+elem.img+"' /></a>"
					b_str+="<div class='fru_show'>"
					b_str+="<span>"+elem.name+"</span>"
					b_str+="<span>"+elem.specifics+"</span>"
					b_str+="<p>￥"+elem.price+"</p>"+"</div>"
					b_str+="<img src='img/fru_add.jpg' class='fru_add'>"+"</div>"
				});
				$(".booking_reqs").empty();
				$(".booking_reqs").html(b_str);
				
				
				bclick();
			}
		});
		
		
//	<div class="fruites">
//	<a href="#"><img src="img/fruite_02.jpg" alt=""></a>
//	<div class="fru_show">
//		<span>[次日达]平谷桃2-2.5kg</span>
//		<span>10粒每盒</span>
//		<p>￥29.9</p>
//	</div>
//	<img src="img/fru_add.jpg" class="fru_add">
//</div>
		
		
		
		
		
		
		
    }

    function bclick(){
		if(location.hash=="#booking"){
			booking_img.src="img/booking_bottom_03.jpg";
			main_img.src="img/booking_bottom_01.jpg"
			send_img.src="img/bottom_2.jpg"
			shopping_img.src="img/bottom_4.jpg"
			my_img.src="img/bottom_5.jpg"
		}
		
		//设置点击购物车图标时，将商品添加到购物车页面中
		$(".fru_add").click(function(){
			var info={
				name:$(this).parent().find("span:first-child").html(),
				img:$(this).siblings("a").find('img').attr("src"),
				pr:$(this).parent().find('p').html(),
				num:1
			}
			var shops_num=$(shopping_num).html()
			shops_num++;
			shops_num=$(shopping_num).html(shops_num)
				$(shopping_num).show();
			
			localStorage.setItem(info.name,JSON.stringify(info))
		})
		
		
		
		
		
		
    }

  

    return {
      render:render,
   	 bclick:bclick,
   	 getData:getData
    }
})
