import { player } from './player.js';
let player1 = player("Houston",1,false)
let player2 = player("Mark",1,false)

test('testing if player works and generates their own board', () => {
    expect(player1.playerBoard.board[0])
    .toEqual({"interact": false, "ship": "none", "x": 1, "y": 1});
  });

  test('testing if player works and generates their own board', () => {
    expect(player2.playerBoard.board[0])
    .toEqual({"interact": false, "ship": "none", "x": 1, "y": 1});
  });
