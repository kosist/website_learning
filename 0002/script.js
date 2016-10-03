/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
*/ 
 (function() {
  // Initialise the locale-enabled clocks
  //initInternationalClocks();
  // Initialise any local time clocks
  initLocalClocks();
  // Start the seconds container moving
  //moveSecondHands();
  // Set the intial minute hand container transition, and then each subsequent step
  //setUpMinuteHands();
})();
 function initLocalClocks() {
   //get the local time using javascript
   var date = new Date();
   var seconds = date.getSeconds();
   var minutes = date.getMinutes();
   var hours = date.getHours();
  
   var hands = [
     {
       hand: "hours",
       angle: (hours * 30) + (minutes/2)
     },
     {
       hand: "minutes",
       angle: (minutes * 6)
     },
     {
       hand: "seconds",
       angle: (seconds * 6)
     },
   ];

   for (var j = 0; j < hands.length; j++){
         
     var elements = document.querySelectorAll('.' + hands[j].hand);

     //  window.alert(elements.length);
          
    for (var k = 0; k < elements.length; k++)
        {
      // window.alert(elements[k]);
       elements[k].style.webkitTransform = 'rotateZ(' + hands[j].angle + 'deg)';
          
       elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
       if (hands[j].hand === 'minutes'){
         elements[k].parentNode.setAttribute('data-second-angle', hands[j+1].angle)
       }
    }
   }
 }


// Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that

function setUpMinuteHands() {
  // Find out how far into the minute we are
  var containers = document.querySelectorAll('.minutes-container');
  var secondAngle = containers[0].getAttribute("data-second-angle");
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}


