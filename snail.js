// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
array1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
array2 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

function snail(array) {
  if (array.length > 0) {
    const square = array.length;
    let tempSquare = square - 1;
    let results = [];
    function trim(array) {
      results.push(...array[0]);
      array.shift();
      if (results.length < square ** 2) {
        lastNums = [];
        array.forEach((vals) => {
          let lastNum = vals[tempSquare];
          lastNums.push(lastNum);
          vals.pop();
        });
        results.push(...lastNums);
        tempSquare += -2;

        if (results.length < square ** 2) {
          results.push(...array[array.length - 1].reverse());
          array.pop();

          if (results.length < square ** 2) {
            firstNums = [];
            array.forEach((vals) => {
              firstNums.push(vals[0]);
              vals.shift();
            });
            results.push(...firstNums.reverse());

            if (results.length < square ** 2) {
              return trim(array);
            } else {
              return results;
            }
          }
        }
      }
      return results;
    }
  }
  if (array.length <= 1) {
    return array[0];
  }
  return trim(array);
}

console.log(snail(array2));
// console.log(snail(array1));
// console.log(snail(array));
// console.log(snail([[]]));
// console.log(snail([[2]]));
// console.log(
//   snail([
//     [1, 2],
//     [3, 4],
//   ])
// );
