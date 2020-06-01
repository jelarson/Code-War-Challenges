// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript

function high(x) {
  let arr = x.split(" ").map((word) => {
    let i = 0;
    let value = 0;
    word.split("").forEach((letter) => {
      value += letter.charCodeAt(0) - 96;
    });
    return value;
  });
  return x.split(" ")[arr.indexOf(Math.max(...arr))];
}

console.log(high("man i need a taxi up to ubud"));

// Top answer

function high(x) {
  //transform the input string into array & define a string of alphabetical latin characters
  var arr = x.split(" ");
  var str = "abcdefghijklmnopqrstuvwxyz";
  //Iterate through the array with input words to find the one with the greatest sum
  var newArr = arr.map(function (word) {
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))];
}
