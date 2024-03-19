//DICE 1 FOR PLAYER 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1; //a random dice num of 1-6
let randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

//DICE 1 FOR PLAYER 1
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

//TO KNOW WHICH PLAYER WINS
if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML = "Player 1 wins";
} else if(randomNumber1 < randomNumber2){
   document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
   document.querySelector("h1").innerHTML = "Oops its a draw";
}



