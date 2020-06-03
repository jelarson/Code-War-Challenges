// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

function iqTest(numbers) {
  oddArr = [];
  evenArr = [];
  numbers.split(" ").forEach((num) => {
    if (num % 2 === 1) {
      oddArr.push(num);
    } else {
      evenArr.push(num);
    }
  });
  if (oddArr.length < evenArr.length) {
    return numbers.split(" ").indexOf(oddArr[0]) + 1;
  } else {
    return numbers.split(" ").indexOf(evenArr[0]) + 1;
  }
}

console.log(iqTest("2 4 7 8 10"));

function iqTest1(numbers) {
  let oddArr = numbers.split(" ").filter((num) => {
    return num % 2 === 1 ? true : false;
  });
  let evenArr = numbers.split(" ").filter((num) => {
    return num % 2 === 1 ? false : true;
  });
  let minArr = oddArr.length < evenArr.length ? oddArr : evenArr;
  return numbers.split(" ").indexOf(minArr[0]) + 1;
}

console.log(iqTest1("2 4 7 8 10"));

function iqTest2(numbers) {
  let oddArr = [];
  let evenArr = [];
  numbers.split(" ").forEach((num) => {
    num % 2 === 0 ? evenArr.push(num) : oddArr.push(num);
  });
  let minArr = oddArr.length < evenArr.length ? oddArr : evenArr;
  return numbers.split(" ").indexOf(minArr[0]) + 1;
}

console.log(iqTest2("2 4 7 8 10"));

// Top Answer

function iqTest(numbers) {
  numbers = numbers.split(" ").map(function (el) {
    return parseInt(el);
  });

  var odd = numbers.filter(function (el) {
    return el % 2 === 1;
  });
  var even = numbers.filter(function (el) {
    return el % 2 === 0;
  });

  return odd.length < even.length
    ? numbers.indexOf(odd[0]) + 1
    : numbers.indexOf(even[0]) + 1;
}
