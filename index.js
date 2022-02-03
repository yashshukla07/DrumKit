var len = document.querySelectorAll(".drum").length;

//  DETECTING BUTTON PRESS

for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var clickedButton = this.innerHTML;
    myFun(clickedButton);
    getAnimation(clickedButton);
  });
}

//  DETECTING KEYBOARD PRESS

document.addEventListener("keypress", function(event) {

   myFun(event.key);
   getAnimation(event.key);
});

function myFun(key) {
  switch (key) {
    case "y":
      var audio1 = new Audio('sounds/tom-1.mp3');
      audio1.play();
      break;

    case "a":
      var audio2 = new Audio('sounds/tom-2.mp3');
      audio2.play();
      break;

    case "s":
      var audio3 = new Audio('sounds/tom-3.mp3');
      audio3.play();
      break;

    case "h":
      var audio4 = new Audio('sounds/tom-4.mp3');
      audio4.play();
      break;

    case "n":
      var audio5 = new Audio('sounds/snare.mp3');
      audio5.play();
      break;

    case "i":
      var audio6 = new Audio('sounds/crash.mp3');
      audio6.play();
      break;

    case "t":
      var audio7 = new Audio('sounds/kick.wav');
      audio7.play();
      break;

    default: alert("Invalid Key Pressed !!");
  }
}

//   ADDING ANIMATION TO BUTTONS

function getAnimation(currntKey)
{
  var activeKey = document.querySelector("." + currntKey);
  activeKey.classList.add("pressed");

 setTimeout(function(){
   activeKey.classList.remove("pressed");
 },200);

}
