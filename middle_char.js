// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  if (s.length > 2) {
    if (s.length % 2 === 0) {
      let even = s.length / 2;
      return s.slice(even - 1, even + 1);
    } else {
      return s.charAt(s.length / 2);
    }
  } else {
    return s;
  }
}

console.log(getMiddle("hello"));
console.log(getMiddle("helloo"));
