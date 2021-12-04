// https://www.codewars.com/kata/5a360620f28b82a711000047/train/javascript

function defineSuit(card) {
  const obj = {
    '♣': 'clubs',
    '♠': 'spades',
    '♦': 'diamonds',
    '♥': 'hearts'
  }
  return obj[card.slice(-1)]
}