// https://www.codewars.com/kata/58880c6e79a0a3e459000004/train/javascript

function houseNumbersSum(inputArray) {
  let toAdd = [];
  let button = "on";
  inputArray.forEach((num) => {
    if (button === "on" && num !== 0) {
      toAdd.push(num);
    } else {
      button = "off";
    }
  });
  return toAdd.reduce((a, b) => a + b, 0);
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));

// top answer

function houseNumbersSum(inputArray) {
  return inputArray.slice(0, inputArray.indexOf(0)).reduce((s, v) => s + v, 0);
}
