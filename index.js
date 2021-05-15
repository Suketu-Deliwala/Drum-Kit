

// Fetch the Mouse button press on which image and run makesound function.
var numberOfButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {

      var buttonInnerHTML = this.innerHTML;

      makesound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);

    });
}

// Fetch the key press and run makesound function.
document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});



// Make sound if clicked or key pressed from keyboard
function makesound(key) {

  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "j":
    var tom5 = new Audio("sounds/snare.mp3");
    tom5.play();
    break;

    case "k":
    var tom6 = new Audio("sounds/crash.mp3");
    tom6.play();
    break;

    case "l":
    var tom7 = new Audio("sounds/kick-bass.mp3");
    tom7.play();
    break;

    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);  //FInd out the button object to add class animation to it.
  activeButton.classList.add("pressed");  // Add class pressed from CSS style file which has animatio effect.

  setTimeout(function(){                        // Tim out/interval for delay.
    activeButton.classList.remove("pressed");  // Remove class pressed from CSS style file after certsin time interval, which has animatio effect.
  },100);

}

// Higher Order Function Example - CALCULATOR
// function add(num1, num2) {
//     return num1 + num2;
// }
// undefined
// function minus(num1, num2) {
//     return num1 - num2;
// }
// undefined
// function multiply(num1, num2) {
//     return num1 * num2;
// }
// undefined
// function divide(num1, num2) {
//     return num1 / num2;
// }
// undefined
// function calulator(num1, num2, operator) {
//     return operator(num1, num2);
// }
// bbb
