// https://www.codewars.com/kata/56019d3b2c39ccde76000086/train/javascript

function doTurn () {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

function doTurn () {
  var actions = [rollDice, move, combat, getCoins, buyHealth, printStatus];
  actions.forEach(e => e());
}