
var elDiceOne       = document.getElementById('dice1');
var elDiceTwo       = document.getElementById('dice2');
var elComeOut       = document.getElementById('roll');

elComeOut.onclick   = function () {rollDice();};

function rollDice() {

  var diceOne   = Math.floor((Math.random() * 6) + 1);
  var diceTwo   = Math.floor((Math.random() * 6) + 1);
  var mySound = new sound("sounds/amthanh.mp3");

  mySound.play();
 


  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
      elDiceOne.classList.add('show-' + i);
    }
  }

  for (var k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove('show-' + k);
    if (diceTwo === k) {
      elDiceTwo.classList.add('show-' + k);
    }
  } 

  setTimeout(result,1000,diceOne,diceTwo);
  

  
}

function result(diceOne,diceTwo) {

  if (diceOne > diceTwo) {
    document.querySelector("h1").innerHTML = "Người chơi  1 Wins!";
  }
  else if (diceTwo > diceOne) {
    document.querySelector("h1").innerHTML = "Người Chơi 2 Wins! ";
  }
  else {
    document.querySelector("h1").innerHTML = "Hòa!";
  }
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}