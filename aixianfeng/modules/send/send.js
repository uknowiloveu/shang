define(['text!./send.html','css!./send.css'],function(html){
    function render(){
      $('.container').html(html);
       getData();
    
    }

    //ajax
    function getData(){
		
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihomehot.php",
			async:true,
			success:function(send_req){
				var send_r=JSON.parse(send_req).data
				var str2=""
				$.each(send_r, function(i,elem) {
					str2+="<div class='show'><dl><dt>"
					str2+="<a href='javascript:;'><img src='"+elem.img+"' class='trans'/></a></dt>"
					str2+="<dd><h3>"+elem.name+"</h3></dd>"
					str2+="<dd><div>精选</div><span class='zeng'>"+elem.pm_desc+"</span></dd>"
					str2+="<dd>"+elem.specifics+"</dd>"
					str2+="<dd><p>￥"+elem.price+"</p><span>￥"+elem.market_price+"</span></dd></dl>"
					str2+="<div class='add'>"+"<div class='addpos'>"
					str2+="<a href='javascript:;' class='minus'><img src='img/minus.jpg' /></a>"
					str2+="<span class='addshopnum'>0</span>"
					str2+="<a href='javascript:;' class='ad'><img src='img/add.jpg' /></a>"
					str2+="</div></div></div>"
				});
				
				$(".send_s").empty()
				$(".send_s").html(str2)
				
				
				 bindEvent();
			}
		})
		
		

//<div class="show">
//			<dl>
//				<dt><a href="#"><img src="img/show_05.jpg" alt=""></a></dt>
//				<dd><h3>维他柠檬茶饮料</h3></dd>
//				<dd>
//					<div>精选</div>
//					<span>买六赠二</span>
//				</dd>
//				<dd>250ml</dd>
//				<dd><p>￥2.5</p><span>￥4</span></dd>
//			</dl>
//			<div class="add">
//				<div class="addpos">
//				<a href="#" class="minus"><img src="img/minus.jpg" /></a>
//				<span class="addshopnum">0</span>
//				<a href="#" class="ad"><img src="img/add.jpg" /></a>
//				</div>
//			</div>
//		</div>

		
		
	}

    function bindEvent(){
		//切换图片
		if(location.hash=="#send"){
			send_img.src="img/send_bottom_02.jpg";
			main_img.src="img/booking_bottom_01.jpg"
			booking_img.src="img/bottom_3.jpg"
			shopping_img.src="img/bottom_4.jpg"
			my_img.src="img/bottom_5.jpg"
		}
		
		
		
		
		//实现单个的加减
		$(".ad").click(function(){
			var num=$(this).siblings('.addshopnum').html()
			num++;
			$(this).siblings('.addshopnum').html(num)
			$(this).siblings('.addshopnum').show();
			$(this).siblings('.minus').show()
			//添加时购物车显示出数量
			var sum=$(shopping_num).html()	//获取shopping_num初始值，不能在函数外部直接定义为零，那样会保存上一次的数字！
			sum++;                         //每次加一
			$(shopping_num).html(sum);     //加完之后的值放进去
			$(shopping_num).show()			//令存储数量的span显示
			
			
			
			//判断当商品已在本地存储上时  令其数量加一
			var same=$(this).parent().parent().siblings("dl").find('dd:nth-of-type(1) h3')
			for(var m in localStorage){
				 var done=JSON.parse(localStorage.getItem(m)).name
				 if(done==same.html()){
				 	console.log(same.parent().parent().siblings('.add').find('span').html())
				 	var jiu=same.parent().parent().siblings('.add').find('span').html()
				 	jiu++;
				 	console.log(infor.num)
				 }
			}
			
			
			
			var infor={
				name:$(this).parent().parent().siblings("dl").find('dd:nth-of-type(1) h3').html(),
				img:$(this).parent().parent().siblings("dl").find('dt a img').attr("src"),
				pr:$(this).parent().parent().siblings("dl").find('dd:last-child p').html(),
				num:$(this).siblings('.addshopnum').html()
			}
			localStorage.setItem(infor.name,JSON.stringify(infor));
			
		
		})
		$(".minus").click(function(){
			var num=$(this).siblings('.addshopnum').html()
			num--;
			$(this).siblings('.addshopnum').html(num)
			if(num==0){
				$(this).siblings('.addshopnum').hide()
				$(this).hide();
			}
			var shopping_num_now=$(shopping_num).html();//获取当下购物车商品数量的值
			shopping_num_now--; 						//每次点击减一
			$(shopping_num).html(shopping_num_now);		//把减过的值存进去
			if(shopping_num_now==0){					//当购物车数量为零时 让其隐藏
				$(shopping_num).hide();
			}
		})
		
		
		
		
		
    }

  

    return {
      render:render
    }
})
