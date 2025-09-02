
/*
    To Do List:
    1. Add images to each button (DONE)
    2. Add an event listener to each button that listens for a click
    3. Add an event listener to the whole document that listens for a keypress
    4. Assign a sound to the buttons
    5. Add animation to the buttons when pressed

*/

// 2. Add an event listener to each button that listens for a click
const numberOfDrumButton = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",
        function(){
            makeSound(this.innerHTML);
            buttonAnimation(this.innerHTML)
        }
    );
}

//3. Add an event listener to the whole document that listens for a keypress
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key)
});

// 4. Assign a sound to the buttons
function makeSound(key){
    if(key === "w"){
        const tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
    }
    else if(key === "a"){
        const tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    }
    else if(key === "s"){
        const tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    }
    else if(key === "d"){
        const tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    }
    else if(key === "j"){
        const crash = new Audio("sounds/crash.mp3");
        crash.play();
    }
    else if(key === "k"){
        const kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
    }
    else if(key === "l"){
        const snare = new Audio("sounds/snare.mp3");
        snare.play();
    }
}


//5. Add animation to the buttons when pressed
function buttonAnimation(currentKey){
    const activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        // Code to be executed after the delay
        activeButton.classList.remove("pressed");;
    }, 100); // 3000 milliseconds = 3 seconds
}

//just for the streak since ill be working on this later but i still want to commit my progress