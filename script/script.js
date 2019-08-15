$(document).ready(function(){
    var waypoint = new Waypoint({
        element: document.getElementById('feautres'),
        handler: function(direction) {
          if(direction == "down"){
            document.querySelector('nav').classList.add("fixed__navbar")
          }else{
            document.querySelector('nav').classList.remove("fixed__navbar")
          }
        },
        offset: '25%'
      })


      var waypoint = new Waypoint({
        element: document.querySelector('.headding__section2'),
        handler: function(direction) {
            let itemArray = document.querySelectorAll('.features__item');
            let animation = ['animated' ,'fadeIn']
            itemArray.forEach((item)=> item.classList.add(...animation));
        },
        offset: '50%'
      })

      var waypoint = new Waypoint({
        element: document.querySelector('#how__it__work'),
        handler: function(direction) {
            animation = [ 'animated','bounceInUp']
            document.querySelector('.app__photo').classList.add(...animation);
        },
        offset: '50%'
      })
      
      var waypoint = new Waypoint({
        element: document.querySelector('#cities'),
        handler: function(direction) {
            itemArray = document.querySelectorAll('.city__info');
            animation = ['animated' ,'fadeInUp']
            itemArray.forEach((item)=> item.classList.add(...animation));
        },
        offset: '50%'
      })

      var waypoint = new Waypoint({
        element: document.querySelector('#signup'),
        handler: function(direction) {
            animation = ['animated','pulse'];

            document.querySelector('#item__bigger').classList.add(...animation);
        },
        offset: '50%'
      })


      $('.mobile__nav').click(function(){
        let nav = $('.main__nav');
        let icon = $('.mobile__nav i');
        nav.slideToggle(200);
        icon.toggleClass('icon ion-md-reorder');
        icon.toggleClass('icon ion-md-close');
      })
})