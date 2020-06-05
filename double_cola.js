// https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript

function whoIsNext(names, r) {
  for (let i = 1; i < r; i++) {
    names.push(names[0]);
    names.push(names[0]);
    names.shift();
  }
  return names[0];
}

let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];

console.log(whoIsNext(names, 200));
