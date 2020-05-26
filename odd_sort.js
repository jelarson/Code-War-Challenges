// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

// ([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
  let odds = [];
  let oddsIdx = [];
  array.forEach((num) => {
    if (num % 2 === 1) {
      odds.push(num);
      oddsIdx.push(array.indexOf(num));
    }
  });
  odds
    .sort(function (a, b) {
      return a - b;
    })
    .forEach((num) => {
      array[oddsIdx[0]] = num;
      oddsIdx.shift();
    });
  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));

// top answer

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? odd.shift() : x));
}
