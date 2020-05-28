// argument number
// levels of pyramid
// print astericks
//   *
//  ***
// *****

function pyramid(num) {
  for (let i = 1; i <= num; i++) {
    let ast = -1 + i * 2;
    let dif = num - i;
    const level = [];
    level.push(" ".repeat(dif));
    level.push("*".repeat(ast));
    console.log(level.join(""));
  }
}

// pyramid(3);
pyramid(27);

// let str = "string";
// console.log(str);
// str = str.slice(1, 2);
// console.log(str);

// let setty = new Set([2, 3, 4, 3]);
// console.log(Array.from("hello", (letter) => letter.toUpperCase()));
// console.log(setty);
