import { gameBoard } from './gameBoard.js';

let testBoard = gameBoard();

test('creating the board itself 0', () => {
    expect(testBoard.board[0])
    .toEqual({"interact": false, "ship": "none", x: 1, y: 1});
  });
test('creating the board itself 15th spot', () => {
    expect(testBoard.board[15])
    .toEqual({"interact": false, ship: "none", x: 6, y: 2});
  });

  test('place logic right over side', () => {
    expect(testBoard.placeLogic(7,5,"right",5))
    .toEqual(false);
  });

  test('place logic right', () => {
    expect(testBoard.placeLogic(4,5,"right",5))
    .toEqual(true);
  });

  test('place logic left over', () => {
    expect(testBoard.placeLogic(3,5,"left",5))
    .toEqual(false);
  });

  test('place logic up over', () => {
    expect(testBoard.placeLogic(3,3,"up",5))
    .toEqual(false);
  });

  test('place logic down over', () => {
    expect(testBoard.placeLogic(3,7,"down",5))
    .toEqual(false);
  });


testBoard.placeShip(3,5,"Carrier",5,"right");
  test('place a ship right', () => {
    expect(testBoard.board[42])
    .toEqual({"interact": false, ship: "Carrier", "x": 3, "y": 5});
  });

  test('test to see if ship goes to end point right', () => {
    expect(testBoard.board[46])
    .toEqual({"interact": false, ship: "Carrier", "x": 7, "y": 5});
  });

  let testBoard2 = gameBoard();
  testBoard2.placeShip(5,1,"testPlace2",5,"left");
  test('place a ship left', () => {
    expect(testBoard2.board[4])
    .toEqual({"interact": false, ship: "testPlace2", "x": 5, "y": 1});
  });

  test('place a ship left end point', () => {
    expect(testBoard2.board[0])
    .toEqual({"interact": false, ship: "testPlace2", "x": 1, "y": 1});
  });
  let testBoard3 = gameBoard();
  testBoard3.placeShip(5,1,"testPlace3",5,"down");
  test('place a ship down', () => {
    expect(testBoard3.board[4])
    .toEqual({"interact": false, ship: "testPlace3", "x": 5, "y": 1});
  });
  test('place a ship down end', () => {
    expect(testBoard3.board[44])
    .toEqual({"interact": false, ship: "testPlace3", "x": 5, "y": 5});
  });


  let testBoard4 = gameBoard();
  testBoard4.placeShip(5,6,"testPlace4",5,"up");
  test('place a ship up', () => {
    expect(testBoard4.board[54])
    .toEqual({"interact": false, ship: "testPlace4", "x": 5, "y": 6});
  });

  test('place a ship up end', () => {
    expect(testBoard4.board[14])
    .toEqual({"interact": false, ship: "testPlace4", "x": 5, "y": 2});
  });

  test('place a ship up middle', () => {
    expect(testBoard4.board[34])
    .toEqual({"interact": false, ship: "testPlace4", "x": 5, "y": 4});
  });
  test('test if already attacked', () => {
    expect(testBoard4.receiveAttack(5,4))
    .toEqual(true);
  });

  test('hit ship', () => {
    expect(testBoard4.receiveAttack(5,2))
    .toEqual(true);
  });
  test('miss ship', () => {
    expect(testBoard4.receiveAttack(7,7))
    .toEqual(false);
  });
  let testBoard5 = gameBoard();
  testBoard5.placeShip(5,6,"testPlace4",5,"up");
  testBoard5.receiveAttack(5,2);
  testBoard5.receiveAttack(5,3);
  testBoard5.receiveAttack(5,4);
  testBoard5.receiveAttack(5,5);
  testBoard5.receiveAttack(5,6);

  test('hit state change', () => {
    expect(testBoard5.board[14].interact)
    .toEqual("hit");
  });
  test('hit counter on specific ship change', () => {
    expect(testBoard5.ships[0].hits)
    .toEqual(5);
  });

  test('hit state change', () => {
    expect(testBoard5.board[24].interact)
    .toEqual("hit");
  });


  testBoard5.receiveAttack(7,7);
  test('miss state change', () => {
    expect(testBoard5.board[66].interact)
    .toEqual("miss");
  });
  test('test if already attacked', () => {
    expect(testBoard5.receiveAttack(7,7))
    .toEqual(false);
  });

  test('sunk all', () => {
    expect(testBoard5.isAllSunk())
    .toEqual(true);
  });

  
