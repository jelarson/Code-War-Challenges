// https://www.codewars.com/kata/5a40c250c5e284a76400008c/train/javascript

function bouncingBall(initial, proportion) {
  for (let i = 1; initial > 1; i++) {
    initial *= proportion
    if (initial <= 1) {
      return i
    }
  }
};