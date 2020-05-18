// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
  let xArr = [];
  let oArr = [];

  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (char === "x") {
        xArr.push(char);
      }
      if (char === "o") {
        oArr.push(char);
      }
    });

  if (xArr.length - oArr.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("harp"));

// Top Answer

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
