let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let start = false;
let level = 0;

//Compare both patterns function
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function() {
                nextSequence();
                userClickedPattern = [];
            }, 1000);
        }
    } else {
        console.log("wrong");
    }
};

//Key pressed function
$(document).keypress(function() {
    if (start !== true) {
        $('h1').text("Level"+" "+level);
        nextSequence();
        start = true;
    };
});

//Click function
$(".btn").click(function() {
    let userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1 );
    console.log(userClickedPattern);
    console.log(gamePattern);
});

//Sequence function
function nextSequence() {
    let randomNumbber = Math.floor(Math.random()*4)
    let randomChosenColor = buttonColors[randomNumbber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    $('h1').text("Level"+" "+level);
    level++;
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