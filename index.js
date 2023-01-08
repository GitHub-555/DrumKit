//Button Click
var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var whichButton = this.innerHTML;
    handleSound(whichButton);
    addAnimation(whichButton);
  });
}

//Keyboard keys press
document.addEventListener("keydown", function (event) {
  var whichKey = event.key;
  handleSound(whichKey);
  addAnimation(whichKey);
});

//Detect which button OR keyboard key was pressed
function handleSound(input) {
  switch (input) {
    case "w":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;
    case "a":
      var kickBass = new Audio("kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var snare = new Audio("snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("tom-4.mp3");
      tom4.play();
      break;
  }
}

function addAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  //To remove added animation after 100 ms
  setTimeout(function () {
    document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
}
