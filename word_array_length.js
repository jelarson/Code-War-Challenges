// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

function addLength(str) {
  return str.split(' ').map(x=>x + ' ' + x.length)
}

function addLength(str) {
  return str.split(" ").reduce((acc, cur) => [...acc, cur.concat(` ${cur.length}`)], []);
}