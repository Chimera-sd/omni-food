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

      waypoint();
})