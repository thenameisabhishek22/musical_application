for (var i = 0; i < 7; i++) {
    const btn = document.getElementsByClassName("w");
    btn[i].addEventListener("click", function() {
        var btnText = this.innerHTML;
        console.log(btnText);
        makeSound(btnText);
    });
}

function makeAnimation(key) {
    var animation = document.querySelector("." + key);
    animation.classList.add("pressed");
    setTimeout(function() {
        animation.classList.remove("pressed");
    }, 100);
}


function makeSound(key) {
    switch (key) {
        case "w":
            var sound = new Audio("crash.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("crash.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("crash.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("crash.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("crash.mp3");
            sound.play();
            break;  
        case "k":
            var sound = new Audio("crash.mp3");
            sound.play();
            break;  
        case "l":
            var sound = new Audio("crash.mp3");
            sound.play();
            break;
        default:
            break;
    }

}