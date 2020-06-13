// https://www.codewars.com/kata/56eff1e64794404a720002d2/train/javascript

function testit(s) {
  let wordArr = [0, 0, 0, 0];
  s.split(" ")
    .join("")
    .split("")
    .forEach((letter) => {
      if (letter.toLowerCase() === "w") {
        wordArr[0]++;
      }
      if (letter.toLowerCase() === "o") {
        wordArr[1]++;
      }
      if (letter.toLowerCase() === "r") {
        wordArr[2]++;
      }
      if (letter.toLowerCase() === "d") {
        wordArr[3]++;
      }
    });
  return Math.min(...wordArr);
}

function testit1(s) {
  return s.match(/[word]/g);
}

console.log(testit("My cat waiting for a dog."));
console.log(testit1("My cat waiting for a dog."));
console.log(testit1("I love codewars."));

// top answer

function testit(s) {
  return (s.match(/w.*?o.*?r.*?d/gi) || []).length;
}
