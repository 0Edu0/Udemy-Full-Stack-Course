let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence() {
    let randomNumbber = Math.floor(Math.random()*4)
    let randomChosenColor = buttonColors[randomNumbber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    const audio = new Audio('sounds/'+randomChosenColor+'.mp3')
    switch (randomChosenColor) {
        case "green":
            audio.play();
            break;
        case "red":
            audio.play();
            break;
        case "yellow":
            audio.play();
            break;
        case "blue":
            audio.play();
        default:
            break;
    }
}

$(".btn").click(function handler() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
});