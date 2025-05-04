function Character(name, strength, health) {
  this.name = name;
  this.strength = strength;
  this.health = health;
  this.attackBtn = document.querySelector(`#${this.name}-attack`);
   this.player = document.querySelector(`#${this.name}-player`);
  this.progress = document.querySelector(`#${this.name}-progress span`);
}
var winner = document.getElementById("winner");

var gameOver = document.getElementById("gameOver");


Character.prototype.attack = function (enemy) {
  if (enemy.health >= 100) {
    enemy.health -= this.strength;
  enemy.progress.style.width = enemy.health + "px";
  } 
 else if(enemy.health == 50){
  enemy.health -= this.strength;
enemy.progress.style.backgroundColor = "red";
enemy.progress.style.width = "20px";
enemy.health = 20;
enemy.attackBtn.remove();
enemy.player.style.display = "none";
winner.textContent = `The Winner Is : ${this.name}`;
gameOver.style.display = "block";
setTimeout(function(){
  window.location.reload();
}, 1000);

 }
  
};


var Usyk_health = document.getElementById("Usyk_health");
var Crawford_health = document.getElementById("Crawford_health");
var player1_name = document.getElementById("player1_name");
var player2_name = document.getElementById("player2_name");


Character.prototype.status = function () {
  // return this.health;

  Usyk_health.innerText = `score : ${Usyk.health}`;
  Crawford_health.innerText = `score : ${Crawford.health}`;
  player1_name.innerText = Usyk.name;
  player2_name.innerText = Crawford.name;


};

Character.prototype.makeHealth = function () {
  if (this.health < 100) {
    this.health += 10;
    //this.progress.style.width = `${this.health}%`;
  } else {
    this.health = 100;
  }
};

let Usyk = new Character("Usyk", 50, 300);
let Crawford = new Character("Crawford", 50, 300);


var Player1 = document.getElementById("Usyk-player");
var Player2 = document.getElementById("Crawford-player");


Usyk.status();
Crawford.status();

function AttacUsyk() {
  // Usyk.makeHealth();

   Usyk.attack(Crawford);
  Player1.setAttribute("src", "./Attac1.jpg");
  Player1.style.width = "500px";
  Player1.style.height = "450px";
  Player1.style.marginRight = "-300px";
  Usyk.status();

  Player2.setAttribute("src", "./Crawford.jpg");
  Player2.style.width = "300px";
  Player2.style.height = "450px";
  Player2.style.marginLeft = "0px";

  setTimeout(function(){

    Player1.setAttribute("src", "./Usyk.jpg");
    Player1.style.width = "300px";
    Player1.style.height = "500px";
    Player1.style.marginRight = "0px";
  
  }, 200);

}
  

function AttacCrawford() {
  // Usyk.makeHealth();
  Crawford.attack(Usyk);
  Player2.setAttribute("src", "./Attac2.jpg");
  Player2.style.width = "400px";
  Player2.style.marginLeft = "-200px";

  Crawford.status();

  Player1.setAttribute("src", "./Usyk.jpg");
  Player1.style.width = "300px";
  Player1.style.height = "500px";
  Player1.style.marginRight = "0px";

  setTimeout(function(){
  Player2.setAttribute("src", "./Crawford.jpg");
  Player2.style.width = "300px";
  Player2.style.height = "450px";
  Player2.style.marginLeft = "0px";
  
  }, 200);
}

var gameStart =  document.getElementById("gameStart");

function startGame(){
gameStart.style.display = "none";
}
//  document.getElementById("Usyk-attack").addEventListener("click", AttacUsyk);
//  document.getElementById("Crawford-attack").addEventListener("click", AttacCrawford);


$(document).onkeydown = function(e) {
  if (e.ctrlKey && 
      (e.keyCode === 67 || 
       e.keyCode === 86 || 
       e.keyCode === 85 || 
       e.keyCode === 117)) {
      return false;
  } else {
      return true;
  }
};
$(document).keypress("u",function(e) {
if(e.ctrlKey)
{
return false;
}
else
{
return true;
}
});

document.addEventListener("contextmenu", function (e){
e.preventDefault();
}, false);


$(document).keydown(function (event) {
if (event.keyCode == 123) { // Prevent F12
  return false;
} else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
  return false;
}
});
