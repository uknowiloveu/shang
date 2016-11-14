define(['text!./main.html','css!./mian.css'],function(html){
    function render(){
      $('.container').html(html);
      getData();
      swiper();
    }

    //ajax
    function getData(){
		$.ajax({
			type:"get",
			url:"http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
			async:true,
			success:function(req){
				var main_img=JSON.parse(req).data.slide
				var str=""
				$.each(main_img, function(i,elem) {
					
					str+="<div class='swiper-slide'><img src='"+elem.activity.img+"' /></div>"
					/*str+="<div class='swiper-slide'><img src='"+elem.activity.img+"' /></div>"
					str+="<div class='swiper-slide'><img src='"+elem.activity.img+"' /></div>"
					str+="<div class='swiper-slide'><img src='"+elem.activity.img+"' /></div>"
					str+="<div class='swiper-slide'><img src='"+elem.activity.img+"' /></div>"
					str+="<div class='swiper-slide'><img src='"+elem.activity.img+"' /></div>"
					*/
//					<div><img src="img/lunbo_01.jpg" alt="">
//					<img src="img/lunbo_01.jpg" alt="">
//					<img src="img/lunbo_01.jpg" alt="">
//					<img src="img/lunbo_01.jpg" alt="">
//					<img src="img/lunbo_01.jpg" alt="">
//					<img src="img/lunbo_01.jpg" alt="">
				});
				$(".swiper-wrapper").html(str)
			}
		});
		
    }

    function bindEvent(){
		if(location.hash=="#main"){
			booking_img.src="img/bottom_3.jpg";
			main_img.src="img/bottom_1.jpg"
			send_img.src="img/bottom_2.jpg"
			shopping_img.src="img/bottom_4.jpg"
			my_img.src="img/bottom_5.jpg"
		}
    }

    function swiper(){
      
     		  var mySwiper = new Swiper ('.swiper-container', {
			   // direction: 'vertical',
			    autoplay: 1000,
			    //loop: true,
			    // 如果需要分页器
	//		    pagination: '.swiper-pagination',
	//		    
	//		    // 如果需要前进后退按钮
	//		    nextButton: '.swiper-button-next',
	//		    prevButton: '.swiper-button-prev',
	//		    
	//		    // 如果需要滚动条
	//		    scrollbar: '.swiper-scrollbar',
			  }) 
		       
 

      
      
      
      
      
      
      
    }

    return {
      render:render,
      bindEvent:bindEvent,
      getData:getData
    }
})
