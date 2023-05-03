const gameBoard = require('./gameBoard');

let testBoard = gameBoard();

test('creating the board itself 0', () => {
    expect(testBoard.board[0])
    .toEqual({"interact": false, "ship": "none", x: 1, y: 1});
  });
test('creating the board itself 15th spot', () => {
    expect(testBoard.board[15])
    .toEqual({"interact": false, ship: "none", x: 6, y: 2});
  });
testBoard.placeShip(7,2,"Carrier",5,"right");
  test('place a ship', () => {
    expect(testBoard.board[16])
    .toEqual({"interact": false, ship: "Carrier", "x": 7, "y": 2});
  });