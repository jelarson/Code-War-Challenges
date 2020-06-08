// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words) {
  let nums = [];
  let ans = [];
  let wordArr = words.split(" ");
  wordArr.forEach((word) => {
    word.split("").forEach((char) => {
      if (Number(char)) {
        nums.push(Number(char));
      }
    });
  });
  console.log(nums);
  // console.log(wordArr);
  nums.sort().forEach((num) => {
    wordArr.forEach((word) => {
      if (word.includes(num)) {
        ans.push(word);
      }
    });
  });
  return ans.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

// top answer

function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}
