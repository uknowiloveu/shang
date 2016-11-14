define(['backbone'],function(){
  
  var Router = Backbone.Router.extend({

      routes: {
        "main": "mains",
        "send": "sends",
        "booking": "bookings",
        "shoppingCar": "shoppingCars",
        "My_page": "My_pages",
        "*actions":'defaultActions'
      },

      mains: function() {
          require(['./modules/main/main.js'],function(main){
            main.render();
            main.bindEvent();
          })
       
      },
      
      
      
      sends: function() {
        require(['./modules/send/send.js'],function(send){
          send.render();
        })
        
      },
      
      
      
      
      bookings: function() {
        require(['./modules/booking/booking.js'],function(booking){
          booking.render();
          booking.bclick();
          booking.getData();
        })
       
      },
      
      
      
      
      shoppingCars: function() {
          require(['./modules/shoppingCar/shoppingCar.js'],function(shoppingCar){
          shoppingCar.render();
          shoppingCar.shoppingimg();
        })
           
      },
      
      
      
      
      
      My_pages: function() {
          require(['./modules/My_page/My_page.js'],function(My_page){
          My_page.render();
          My_page.bindEvent();
        })
          
      },
      
      
      defaultActions:function(){
        location.hash = 'send'
      }

  });

  var router = new Router();
})
