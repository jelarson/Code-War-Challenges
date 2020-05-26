// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let len = 0;
  let cab = s.split("");
  let abc = [];
  cab.forEach((letter) => {
    abc.push(letter.toUpperCase() + letter.toLowerCase().repeat(len));
    len += 1;
  });
  return abc.join("-");
}

console.log(accum("abcd"));
