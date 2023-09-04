
let drum = document.querySelectorAll(".drum")
for (var i = 0; i < drum.length; i++) {
    drum[i].addEventListener("click", function () {
        // this.style.color = 'white'

        // // var audio = new Audio('sounds/tom-1.mp3');
        // // audio.play();

        let buttonInnerHTML = this.innerHTML;

        makeAudio(buttonInnerHTML)
        animated(buttonInnerHTML)


    });
}


document.addEventListener('keypress',function(event){
    console.log(event.key);
    makeAudio(event.key)
    animated(event.key)
})


function makeAudio(key) {
    switch (key) {
        case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
        case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
  
        default:
          break;
  }
  
}


function animated (currentKey){
    document.querySelector(`.${currentKey}`).classList.add('pressed')
    setTimeout(() => {
        document.querySelector(`.${currentKey}`).classList.remove('pressed')
      }, "10");
}