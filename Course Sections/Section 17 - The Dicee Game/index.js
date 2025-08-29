
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "dice" + randomNumber1 + ".png";

let randomDiceSource = "images/" + randomDiceImage;

document.querySelector(".img1").setAttribute("src",randomDiceSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomDiceSource2 = "images/" + randomDiceImage2;

document.querySelector(".img2").setAttribute("src",randomDiceSource2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent = "It's a Draw!";
}