// https://www.codewars.com/kata/56121f3312baa28c8500005b/train/javascript

// biggest([1, 2, 3]) === '321'
// biggest([3, 30, 34, 5, 9]) === '9534330'

// function biggest(nums) {
//   arr = [];
//   nums.forEach((num) => {
//     let arrTwo = [];
//     arr.push(String(num).split(""));
//   });
//   if (arr.length > 0) {
//     let greatest = [0];
//     let greatestInd = 0;
//     arr.forEach((abc) => {
//       if (
//         Number(abc[0]) === Number(greatest[0]) &&
//         abc.length < greatest.length
//       ) {
//         greatest = abc;
//       }
//       if (Number(abc[0]) > Number(greatest[0])) {
//         greatest = abc;
//       }
//       console.log(greatest);
//     });
//   }
//   return arr;
// }

// loop first digits - if bigger, goes first
// if tied - go to next digit, bigger first, continue through all digits
// if different lengths, compare last digit of each, largest first
// if last digits equal, last digit of longer greater than first of shorter goes first
// function biggest1(nums) {
//   return nums.sort((num1, num2) => {
//     const str1 = String(num1);
//     const str2 = String(num2);
//     if (str1.length !== str2.length) {
//       // Reverse compare
//       const comp1 = str1.split("").reverse().join("");
//       const comp2 = str2.split("").reverse().join("");
//       for (let i = 0; i < str2.length; i++) {
//         const c1 = comp1[i];
//         const c2 = comp2[i];
//         if (c1 !== c2) {
//           const value = c1 < c2 ? 1 : -1;
//           return value;
//         }
//       }
//     } else {
//       // Normal compare
//       for (let i = 0; i < str2.length; i++) {
//         const comp1 = str1[i];
//         const comp2 = str2[i];
//         if (comp1 !== comp2) {
//           const value = comp1 < comp2 ? 1 : -1;
//           return value;
//         }
//       }
//     }
//   });
// }
// console.log(biggest1([3, 30, 34, 5, 9]));
// console.log(biggest1([122, 12]))
// console.log(biggest1([121, 12]))
// console.log(biggest1([8308, 830]))
// console.log(biggest1([824, 938, 1399, 5607, 6973, 5703, 9609, 4398, 8247])); //9609 938 824 8247 6973 5703 5607 4398 1399
// 9609 8247 6973 5703 5607 4398 1399 938 824

// function biggest(nums) {
//   let nummy = nums.sort().reverse();
//   let largest = [];
//   function itir(num) {
//     let large = 0;
//     let largeIdx = 0;
//     for (let i = 1; i <= num.length; i++) {
//       let lego = [[num[0]].concat(num[i]).join("")];
//       if (lego > large) {
//         large = lego;
//         largeIdx = i;
//       }
//     }
//     largest.push(Number(large));
//     num.shift();
//     num.splice(largeIdx - 1, 1);
//     if (num.length > 0) {
//       return itir(num);
//     } else {
//       return largest;
//     }
//   }
//   return itir(nummy);
// }

// function biggest1(nums) {
//   let large = [];

//   nums.forEach((num) => {
//     large.push(String(num).split("").reverse().join(""));
//   });
//   return large
//     .sort()
//     .reverse()
//     .map((num) => {
//       return num.split("").reverse().join("");
//     })
//     .join("");
// }

// console.log(biggest([1, 2, 3]));
// console.log(biggest([3, 30, 34, 5, 9]));
// console.log(biggest([3, 30, 34, 5, 9]));
// console.log([3, 30, 34, 5, 9].sort().reverse().join(""));

// loop first digits - if bigger, goes first
// if tied - go to next digit, bigger first, continue through all digits
// if different lengths, compare last digit of each, largest first
// if last digits equal, last digit of longer greater than first of shorter goes first

// console.log(biggest1([122, 12]))
// console.log(biggest1([121, 12]))
// console.log(biggest1([8308, 830]))
// console.log(biggest1([8300, 830]))

// 122 12 = 12212
// 121 12 = 12121
// 830 8308 = 8308830
// 830 8300 = 8308300

// function biggest(nums) {
//   let final = [];
//   let highest = [];
// let lens = [];
// let nummy = [];
// let greatestLen = 0;
// nums.forEach((num) => {
//   let pusher = String(num);
//   nummy.push(pusher);
//   lens.push(pusher.length);
// });
// let highestLen = Math.max(...lens);
// let lowestLen = Math.min(...lens);
// nummy = nummy.sort().reverse();
// let firstNums = [];
// nummy.forEach((num) => {
//   firstNums.push(Number(num[0]));
// firstNumsIdx.push(idx);
// idx++;
// });
// console.log(firstNums);
// let firstNumsHighest = Math.max(...firstNums);
// let highCount = 0;
// let firstNumsHighestArr = [];
// let idx = 0;
// let firstNumsIdx = [];

// firstNums.forEach((num) => {
//   if (num === firstNumsHighest) {
//     firstNumsHighestArr.push(num);
//     highCount++;
//     firstNumsIdx.push(idx);
//     idx++;
//   } else {
//     idx++;
//   }
// });
// if (highCount === 1) {
//   final.push(firstNumsHighestArr[0]);
//   nummy.splice(firstNumsIdx[0], 1);
// } else {
//   let tiedArr = firstNumsIdx.map((num) => {
//     return nummy[num];
//   });
//   console.log("tied", tiedArr);
// }
// if (nummy.length > 1) {
//   return;
// }
// console.log(firstNumsIdx);
// console.log(highCount);
// console.log(firstNumsHighestArr);
// console.log(final);
//   return nummy;
// }

// console.log(biggest([3, 30, 96, 994, 34, 5, 9, 99, 97, 98]));

// sort map join

// function biggest(nums) {
//   let possibilities = [];
//   let range = [];
//   let idx = 0;
//   nums.forEach((num) => {
//     range.push(idx);
//     idx++;
//   });
//   for (let i = 0; i < nums.length; i++){
//     let temp
//     let marker = []
//     range.forEach(pencil => {
//       if (i !== pencil){

//       }
//     })
//   }
//   return range;
// }

function biggest(nums) {
  var results = [];

  function permute(arr, memo) {
    var cur,
      memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur).join(""));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return String(Math.max(...results));
  }

  return permute(nums);
}

console.log(biggest([3, 30, 96, 994, 34, 5, 9, 99, 97, 98]));
// console.log(biggest([3, 30, 96]));

// top answer
const biggest = (nums) =>
  nums
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("")
    .replace(/^0+(.)/, "$1");
