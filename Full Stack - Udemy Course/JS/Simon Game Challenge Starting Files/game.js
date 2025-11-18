let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

//Click function
$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

//Sequence function
function nextSequence() {
    let randomNumbber = Math.floor(Math.random()*4)
    let randomChosenColor = buttonColors[randomNumbber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

//Sounds function
function playSound(name) {
        const audio = new Audio('sounds/'+name+'.mp3')
    switch (name) {
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

//Animations when clicked function
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
};