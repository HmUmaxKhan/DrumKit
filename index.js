$("button").click(function () {
    var text = $(this).html();
    sound(text);
    animate(text);
});

$(document).keypress(function (event) {
    sound(event.key);
    animate(event.key);
});


function sound(clicked) {
    switch (clicked) {
        case "w":
            var audio1 = new Audio("./sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            var audio1 = new Audio("./sounds/tom-2.mp3");
            audio1.play();
            break;

        case "s":
            var audio1 = new Audio("./sounds/tom-3.mp3");
            audio1.play();
            break;

        case "d":
            var audio1 = new Audio("./sounds/tom-4.mp3");
            audio1.play();
            break;


        case "j":
            var audio1 = new Audio("./sounds/snare.mp3");
            audio1.play();
            break;


        case "k":
            var audio1 = new Audio("./sounds/kick-bass.mp3");
            audio1.play();
            break;

        case "l":
            var audio1 = new Audio("./sounds/crash.mp3");
            audio1.play();
            break;

        default:
            break;
    }
}

function animate(click1) {
    $("." + click1).addClass("pressed");

    setTimeout(function () {
    $("." + click1).removeClass("pressed");
    }, 200);

}