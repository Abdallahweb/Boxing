function Character(e,t,r){this.name=e,this.strength=t,this.health=r,this.attackBtn=document.querySelector(`#${this.name}-attack`),this.player=document.querySelector(`#${this.name}-player`),this.progress=document.querySelector(`#${this.name}-progress span`)}var winner=document.getElementById("winner"),gameOver=document.getElementById("gameOver");Character.prototype.attack=function(e){e.health>=100?(e.health-=this.strength,e.progress.style.width=e.health+"px"):50==e.health&&(e.health-=this.strength,e.progress.style.backgroundColor="red",e.progress.style.width="20px",e.health=20,e.attackBtn.remove(),e.player.style.display="none",winner.textContent=`The Winner Is : ${this.name}`,gameOver.style.display="block",setTimeout((function(){window.location.reload()}),1e3))};var Usyk_health=document.getElementById("Usyk_health"),Crawford_health=document.getElementById("Crawford_health"),player1_name=document.getElementById("player1_name"),player2_name=document.getElementById("player2_name");Character.prototype.status=function(){Usyk_health.innerText=`score : ${Usyk.health}`,Crawford_health.innerText=`score : ${Crawford.health}`,player1_name.innerText=Usyk.name,player2_name.innerText=Crawford.name},Character.prototype.makeHealth=function(){this.health<100?this.health+=10:this.health=100};let Usyk=new Character("Usyk",50,300),Crawford=new Character("Crawford",50,300);var Player1=document.getElementById("Usyk-player"),Player2=document.getElementById("Crawford-player");function AttacUsyk(){Usyk.attack(Crawford),Player1.setAttribute("src","./Attac1.gif"),Player1.style.width="500px",Player1.style.height="450px",Player1.style.marginRight="-300px",Usyk.status(),Player2.setAttribute("src","./Crawford.jpg"),Player2.style.width="300px",Player2.style.height="450px",Player2.style.marginLeft="0px",setTimeout((function(){Player1.setAttribute("src","./Usyk.jpg"),Player1.style.width="300px",Player1.style.height="500px",Player1.style.marginRight="0px"}),1e4)}function AttacCrawford(){Crawford.attack(Usyk),Player2.setAttribute("src","./Attac2.gif"),Player2.style.width="400px",Player2.style.marginLeft="-200px",Crawford.status(),Player1.setAttribute("src","./Usyk.jpg"),Player1.style.width="300px",Player1.style.height="500px",Player1.style.marginRight="0px",setTimeout((function(){Player2.setAttribute("src","./Crawford.jpg"),Player2.style.width="300px",Player2.style.height="450px",Player2.style.marginLeft="0px"}),1e4)}Usyk.status(),Crawford.status();var gameStart=document.getElementById("gameStart");function startGame(){gameStart.style.display="none"}document.onkeydown = function(e) {
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

