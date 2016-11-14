define(['text!./shoppingCar.html','css!./shoppingCar.css'],function(html){
    function render(){
      $('.container').html(html);
     
    }

    
	

    function shoppingimg(){
		if(location.hash=="#shoppingCar"){
			shopping_img.src="img/shoppingCar.jpg"
			booking_img.src="img/bottom_3.jpg";
			main_img.src="img/booking_bottom_01.jpg"
			send_img.src="img/bottom_2.jpg"
			my_img.src="img/bottom_5.jpg"
		}													//点击时改变footer的img
		
		
		//得到添加购物车的数据
		function readData(){
			var shops_num=0									//定义购物车页面中商品数量
			for(var j in localStorage){
				var a = JSON.parse(localStorage.getItem(j));
				var qw=creates(a);							//为每一个商品创建新容器
				$("#showall").append(qw)					//商品添加至#showall
				shops_num+=parseInt(a.num)					//将字符串转换成int类型
				if(shops_num>0){
					$(shopping_num).show();
					$(shopping_num).html(shops_num)			//当购物车页面中购物车有商品时，显示商品数量
				}
			}
			change_num();
	}
		
		readData();
		function creates(obj){
			var str=""
			str+="<div class='shops'>"+"<a href='jivascript:;'>"+"<img src='img/choosed.jpg' class='choose'></a>"
			str+="<img src='"+obj.img+"' />"
			str+="<ul>"+"<li>"+obj.name+"</li>"
			str+="<li>"+obj.pr+"</li>"+"</ul>"
			str+="<div class='adds'> "+"<a href='jivascript:;' class='min'> <img src='img/minus.jpg' ></a>"
			str+="<span class='num'>"+obj.num+"</span>"
			str+="<a href='jivascript:;' class='add'><img src='img/add.jpg' /></a>"
			str+="</div></div>"
			return str;
		}
//			<div class="shops">
//				<a href="#"><img src="img/choosed.jpg" class="choose"></a>
//				<img src="img/shops.jpg" alt="">
//				<ul>
//					<li>维他柠檬茶饮料</li>
//					<li>￥2.9</li>
//				</ul>
//				<div class="adds"> 
//					<a href="#" > <img src="img/minus.jpg" ></a>
//					<span class="num">1</span>
//					<a href="#"><img src="img/add.jpg" alt=""></a>
//				</div>
//			</div>


			function change_num(){
				//点击减号时的事件
				$(".min").click(function(){
					var nums=$(this).siblings(".num").html()
					nums--;
					$(this).siblings(".num").html(nums)
					var sa=$(shopping_num).html()					//获取footer购物车中商品数量
					sa--;											//点击减一
					$(shopping_num).html(sa)					
					if(nums==0){
						localStorage.removeItem($(this).parent().siblings("ul").find('li:first-child').html())
						//在localstorage中删除添加的商品
						$(this).parent().parent().remove();
						//删除商品所在div
					}
					
					var x=0
					//遍历添加的购物车的数量    判断当总和为零时   令其隐藏
					$.each($(".min"), function(i,elem) {
						var nums=parseInt($(".min").eq(i).siblings(".num").html())
						x+=nums;
					})
					if(x==0){
						$(shopping_num).hide()		
					}
					pri();
				})
				
				//点击加号时的事件
				$(".add").click(function(){
					var nums=$(this).siblings(".num").html()
					nums++;
					$(this).siblings(".num").html(nums)
					var sa=$(shopping_num).html()					//获取footer购物车中商品数量
					sa++;											//点击加一
					$(shopping_num).html(sa);
					pri();
				})
				
				
				function pri(){
					//计算价钱
					//先遍历shops  取出它的单价与数量  再相加
					var pri_sum=0        			//定义总和
					$.each($(".shops"), function() {
						//得到每一个的单价   substrate（）截取从第二个开始到最后
						var pri=$(this).children('ul').find('li:last-child').html().substr(1)
						//得到选中的商品数量
						var n=$(this).children('.adds').find('span').html()
						pri_sum+=n*pri
						pri_sum=Math.round(pri_sum*100)/100
					});
					$(".total_mon").html(pri_sum)
				}
				pri();
			}
			
	}
	
    return {
      render:render,
      shoppingimg:shoppingimg
    }
})
