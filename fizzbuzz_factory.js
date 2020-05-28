// https://www.codewars.com/kata/5645d1a4d907bd6009000052/train/javascript

// var myFizz = fizzBuzzFactory([[3, "Fizz"], [5, "Buzz"], [15, "FizzBuzz"]])
// myFizz(3)  === "Fizz"
// myFizz(4)  === "4"
// myFizz(5)  === "Buzz"
// myFizz(15) === "FizzBuzz"

function fizzBuzzFactory(arr, arg) {
  let valueArr = [];
  let wordArr = [];

  arr.forEach((item) => {
    valueArr.push(item[0]);
    wordArr.push(item[1]);
  });

  let maxInd = valueArr.indexOf(Math.max(...valueArr));
  let minInd = valueArr.indexOf(Math.min(...valueArr));
  let midInd = 0;
  if (maxInd + minInd === 1) {
    midInd += 2;
  }
  if (maxInd + minInd === 2) {
    midInd += 1;
  }

  if (arg % Number(valueArr[maxInd]) === 0) {
    return wordArr[maxInd];
  }
  if (
    arg % Number(valueArr[midInd]) === 0 &&
    arg % Number(valueArr[maxInd]) !== 0
  ) {
    return wordArr[midInd];
  }
  if (
    arg % Number(valueArr[minInd]) === 0 &&
    arg % Number(valueArr[maxInd]) !== 0 &&
    arg % Number(valueArr[midInd]) !== 0
  ) {
    return wordArr[minInd];
  } else {
    return String(arg);
  }
}

console.log(
  fizzBuzzFactory(
    [
      [3, "Fizz"],
      [5, "Buzz"],
      [15, "FizzBuzz"],
    ],
    16
  )
);

// console.log(Math.max(3, 5, 15, 21, 99, 100));
// console.log(Math.min(3, 5, 15, 21, 99, 100));
