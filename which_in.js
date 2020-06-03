// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

function inArray(array1, array2) {
  let r = [];
  array1.forEach((substr) => {
    if (array2.join(" ").includes(substr)) {
      r.push(substr);
    }
  });
  return r.sort();
}

let a1 = ["arp", "live", "strong"];

let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

console.log(inArray(a1, a2));

// Top Answer

function inArray(arr1, arr2) {
  return arr1
    .filter(function (needle) {
      return arr2.some(function (haystack) {
        return haystack.indexOf(needle) > -1;
      });
    })
    .sort();
}
