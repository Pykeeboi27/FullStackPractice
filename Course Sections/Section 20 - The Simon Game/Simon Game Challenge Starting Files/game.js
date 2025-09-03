let userClickedPattern = [];
let gamePattern = [];
let level = 0;

const buttonColors = ["red", "blue", "green", "yellow"];


function playSound(soundfile){
    const audio = new Audio("sounds/"+soundfile+".mp3")
    audio.play();
}

function animatePress(currentColor){
    $("." + currentColor).addClass("pressed");
    setTimeout(function(){
         $("." + currentColor).removeClass("pressed");
    }, 100);
}

function nextSequence(){
    const randomNumber = Math.floor(Math.random() * 4);

    const pcSelectedColor = buttonColors[randomNumber];

    $("." + pcSelectedColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(pcSelectedColor);
    gamePattern.push(pcSelectedColor);

    level ++;

    $("#level-title").text("Level "+ level);

    console.log(gamePattern);
}

function checkGame(current){
    if(userClickedPattern[current] === gamePattern[current]){
        if (userClickedPattern.length  === gamePattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
            userClickedPattern = []; 
        }
    }
    else{
        $(".btn").off("click");
        gameOver();
    }
}

function gameOver(){
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 100);

    $("#level-title").text("Game Over, Press 'A' or tap the screen to Restart");
    playSound("wrong");

    gameReset();
    game();
}


function gameReset(){
    userClickedPattern = [];
    gamePattern = [];
    level = 0;
}

function game(){
    $(document).on("keydown", start);
    $(document).on("touchstart", start);
    
}

function start(event) {
    // If triggered by keyboard
    if (event.type === "keydown" && event.key === "a") {
        $(document).off("keydown");
        $(document).off("touchstart");
        initGame();
    }

    // If triggered by touch
    if (event.type === "touchstart") {
        $(document).off("keydown");
        $(document).off("touchstart");
        initGame();
    }
}

function initGame() {
    nextSequence();

    $(".btn").on("click", function () {
        const currentButton = this.id;
        $("." + currentButton).addClass("pressed");

        setTimeout(function () {
            $("." + currentButton).removeClass("pressed");
        }, 100);

        userClickedPattern.push(currentButton);
        console.log(userClickedPattern);
        checkGame(userClickedPattern.length - 1);
    });
}



game();