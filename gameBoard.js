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
    placeLogic(x,y,ore,length){
        let legal = null;
        if(ore == "right"){
            let endPos =x+length-1;
            if(endPos >=11){
               legal = false;
            } else{
                legal = true;
            }
            } else if(ore=="left"){
                let endPos =x-length+1;
            if(endPos<=0){
               legal = false;
            } else{
                legal = true;
            }
            }
            else if(ore=="up"){
                let endPos =y-length+1;
            if(endPos<=0){
                legal = false;
            }else{
                legal = true;
            }
            } else if(ore == "down"){
                let endPos =y+length-1;
                if(endPos >=11){
                   legal = false;
             }else{
                legal = true;
            }
    }
    return legal
},

    placeShip(x,y,name,length,oreintation = "right"){
        let position = ((x-1) + ((y-1)*10))
        if(this.placeLogic(x,y,oreintation,length)== true){
        this.ships.push(shipFactory(name,length));
        this.board[position].ship = name;

        if(oreintation =="right"){
        for(let i=0;i<length;i++){
                this.board[position+i].ship=name;
            } 
        }else if(oreintation =="left"){
            for(let i=0;i<length;i++){
                this.board[position-i].ship=name;
            }
            } else if(oreintation =="down"){
                for(let i=0;i<length;i++){
                this.board[position+(i*10)].ship=name;
                }
            } else if(oreintation =="up"){
                for(let i=0;i<length;i++){
                this.board[position-(i*10)].ship=name;
                }
            }
        }else{
            return false;
        }
    },
    receiveAttack(x,y){
        let position = ((x-1) + ((y-1)*10))
        let hitStat;
        if(this.board[position].ship != "none"){
            this.board[position].interact = "hit";
            let shipName =  this.board[position].ship;
            this.ships.find(({name }) => name == shipName).hit()
            hitStat = true;
        } else{
            this.board[position].interact = "miss";
            hitStat = false
        }
        if(this.ships.every(({sunk}) => sunk == true)){
            //run a function here to end the game
        }
        return hitStat
    }
}
}

module.exports = gameBoard;