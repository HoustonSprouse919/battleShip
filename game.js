import { player } from './player.js';

let currentPlayer;
let player1 = player("player1",1,false);
let player2 = player("player2",2,false);
export function gameCreation() {
    document.getElementById('player1Title').innerHTML = player1.name;
    document.getElementById('player2Title').innerHTML = player2.name;
    currentPlayer =1;
    createDivs(10,"player1Sec",player1)
    createDivs(10,"player2Sec",player2)
//ask first player to place their ships
player1.playerBoard.placeShip(1,1,"Carrier",5,"right");
player2.playerBoard.placeShip(1,1,"Carrier",5,"right");
//ask second player to place their ships
//cycle through turns until somone returns all of their ships are sunk
}

export function takeTurn(x,y){
if(currentPlayer==1){
   if(player2.playerBoard.receiveAttack(x,y)== false){
    return "NO"
    } else{
        currentPlayer=2;
    }
} else if(currentPlayer ==2){
   if(player1.playerBoard.receiveAttack(x,y)== false){
    window.alert("that spot has been used");
} else{
    currentPlayer=2;
}
}
}
function createDivs(grid,containerName, player){
    const container = document.querySelector(`#`+ containerName);  //selects section as container
    container.innerHTML = ''
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)` //changes css to make correct grid of divs
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`
    let gridNum = grid * grid;
    for(var i = 0; i< gridNum; i++){
        const content = document.createElement('div');
        content.classList.add('content');
        content.innerText= i;
        if(player.playerBoard.board[i].interact== false){
            content.style.backgroundColor = "#0096FF"
        } else if(player.playerBoard.board[i].interact== "hit"){
            content.style.backgroundColor = "red"
        } else if(player.playerBoard.board[i].interact== "miss"){
            content.style.backgroundColor = "gray"
        }
        container.appendChild(content);
    }
}

export function gameStatus(){
if(player1.playerBoard.isAllSunk()== true){
    //say that player 2 won
} else if(player2.playerBoard.isAllSunk()== true){
    //say player 1 has won
}
}
document.getElementById('open-playerInfo').addEventListener("click", function(){ document.getElementById('playerInfoForm').style.display = 'block';})
document.getElementById('btn-cancel').addEventListener("click", 
function(){ 
    document.getElementById('playerInfoForm').style.display = 'none';
    document.getElementById("form-container").reset();})

function changePlayerInfo(player1Name,turnNum,player2Name){
    player1.name = player1Name;
    player1.turn = turnNum;
    player2.name = player2Name;
    if(turnNum =="1st"){
        player2.turn = "2nd"
    } else {
        player2.turn = "1st"
    }
    gameCreation();
  }
document.getElementById('btnContinue').addEventListener("click", 
function(){
    getPlayerInfo();
    document.getElementById('playerInfoForm').style.display = 'none';
    document.getElementById("form-container").reset()})
function getPlayerInfo(){
    let player1Name = document.getElementById("player1Name").value
    let turnNum;
   if(document.getElementById("1st").checked){
    turnNum="1st"
   } else if(document.getElementById("2nd").checked){
    turnNum="2nd"
   }
   let player2Name = document.getElementById("player2Name").value
   changePlayerInfo(player1Name,turnNum,player2Name)
}

gameCreation()