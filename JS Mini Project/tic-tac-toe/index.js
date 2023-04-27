const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newgamebtn=document.querySelector(".btn");

let currentPlayer;
let gamegrid;

const winingPlayer=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
]
function initGame(){
    currentPlayer="X";
    gamegrid=["","","","","","","","",""];
    boxes.forEach((box,index)=>{
        box.innerHTML="";
        // box.style.pointerEvents="all"; 
    })
    newgamebtn.classList.remove("active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}
initGame();
function swapTurn(){
    if(currentPlayer=="X"){
        currentPlayer="0";
    }
    else{
        currentPlayer="X";
    }
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}
function checkGameOver(){
    newgamebtn.classList.add("active")
}
function handleClick(index){
    if(gamegrid[index]==""){
        //update UI
        boxes[index].innerHTML=currentPlayer;
        //update gamefrid
        gamegrid[index]=currentPlayer;
        boxes[index].style.pointerEvents="none"; 
        //swap the turn means X and 0
        swapTurn();
        //check who is win the game
        checkGameOver();
    }
}
boxes.forEach((box,index) => {
    box.addEventListener("click",()=>{
        handleClick(index);
    })
});
newgamebtn.addEventListener("click",initGame);
    