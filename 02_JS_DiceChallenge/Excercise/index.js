// randomly set the dice image of player 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png"
var randomImageSource = "images/" + randomDiceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSource);

// randomly set the dice image of player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png"
var randomImageSource = "images/" + randomDiceImage;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImageSource);

// update heading to declare winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw! Play again!";
}
