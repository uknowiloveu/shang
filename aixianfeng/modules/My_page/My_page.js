define(['text!./My_page.html','css!./My_page.css'],function(html){
    function render(){
      $('.container').html(html);
    }

    //ajax
    function getData(){

    }

    function bindEvent(){
		if(location.hash=="#My_page"){
			booking_img.src="img/bottom_3.jpg";
			main_img.src="img/booking_bottom_01.jpg"
			send_img.src="img/bottom_2.jpg"
			shopping_img.src="img/bottom_4.jpg"
			my_img.src="img/Mine.jpg"
		}
    }

    function swiper(){
      
    }

    return {
      render:render,
      bindEvent:bindEvent
    }
})
