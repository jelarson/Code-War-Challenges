// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str) {
  let ans = [];
  let count = 1;
  str.split("").forEach((letter) => {
    if (count % 2 === 0) {
      ans.push(letter);
      ans.push(" ");
    } else {
      ans.push(letter);
    }
    count++;
  });

  let updated = ans.join("").trim().split(" ");
  if (updated[updated.length - 1].length < 2) {
    let booty = updated[updated.length - 1].concat("_");
    updated.splice(updated.length - 1, 1);
    updated.push(booty);
  }
  return updated;
}

console.log(solution("abcdefgh"));

// top answer

function solution(str) {
  return (str.length % 2 ? str + "_" : str).match(/../g);
}
