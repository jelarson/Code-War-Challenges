// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript

function multiTable(number) {
  let ans = `1 * ${number} = ${number}`;
  for (let i = 2; i <= 10; i++){
    ans += `\n${i} * ${number} = ${number * i}`
  }
  return ans
}