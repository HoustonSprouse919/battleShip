const shipFactory = require('./ship');

test('creating a Carrier', () => {
  expect(shipFactory("Carrier",5))
  .toMatchObject({name:"Carrier",length:5,hits:0,sunk:false});
});

let practiceShip = shipFactory("Carrier",5);
let practiceShip2 = shipFactory("Carrier",5,5);
test('shipFactory hit', () => {
    expect(practiceShip.hit())
    .toEqual(1);
  });

  test('shipFactory not sunk', () => {
    expect(practiceShip.isSunk())
    .toEqual(false);
  });

  test('shipFactory2 sunk', () => {
    expect(practiceShip2.isSunk())
    .toEqual(true);
  });