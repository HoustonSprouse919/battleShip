const shipFactory = require('./ship');
function boardNode(xCoord,yCoord,shipPresent = "none",interactState =false) {
return{
    x:xCoord,
    y:yCoord,
    ship:shipPresent,
    interact:interactState
}
}
function gameBoard(size=10){
    let boardNodes=[];
    for(let i =1;i<=size;i++){
        for(let j =1;j<=size;j++){
            boardNodes.push(boardNode(j,i))
        }
    }
    let shipsArray =[];
return{
    board:boardNodes,
    ships:shipsArray,
    placeShip(x,y,name,length,oreintation = "right"){
        let position = ((x-1) + ((y-1)*10))
        this.ships.push(shipFactory(name,length));
        this.board[position].ship = name;
    }
}
}

module.exports = gameBoard;