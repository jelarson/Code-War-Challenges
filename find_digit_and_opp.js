// https://www.codewars.com/kata/56b5dc75d362eac53d000bc8/train/javascript

// Input: "gdfgdf234dg54gf*23oP42"
// Output: "54929268" (because 23454*2342=54929268)

function calculateString(st) {
  newStr = st
    .replace(/[a-z]/gi, "")
    .replace(/[\[\]\{\}\(\)\?\;\%\§\^\$\|]/gi, "")
    .replace("*", " * ")
    .replace("/", " / ")
    .replace("+", " + ")
    .replace("-", " - ")
    .split(" ");
  console.log(newStr);
  if (newStr[1] === "*") {
    return String(Math.round(Number(newStr[0]) * Number(newStr[2])));
  }
  if (newStr[1] === "/") {
    return String(Math.round(Number(newStr[0]) / Number(newStr[2])));
  }
  if (newStr[1] === "+") {
    return String(Math.round(Number(newStr[0]) + Number(newStr[2])));
  }
  if (newStr[1] === "-") {
    return String(Math.round(Number(newStr[0]) - Number(newStr[2])));
  }
}

console.log(calculateString("gdfgdf234dg54gf*23oP42"));
console.log(calculateString(";$%§fsdfsd235??df/sdfgf5gh.000kk0000"));
console.log(calculateString("fsdfsd235???34.4554s4234df-sdfgf2g3h4j442"));
console.log(calculateString("fsdfsd234.4554s4234df+sf234442"));

// Top Answer

function calculateString(s) {
  return eval(s.replace(/[^\d+*/.()-]/g, "")).toFixed();
}
