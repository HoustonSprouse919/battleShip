
import { gameBoard } from './gameBoard.js';
export function player(playerName,turnNum,isComputer = false) {
return{
    name:playerName,
    turn:turnNum,
    isComputer:isComputer,
    playerBoard:gameBoard()
}
}
