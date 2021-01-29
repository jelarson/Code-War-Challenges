// https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/javascript

function solve(a,b){
  const ans = [];
  b.forEach(x=>{
    let counter = 0
    a.forEach(y=>{
      if(x === y) counter++
    })
    ans.push(counter)
  })
  return ans
}

const solve = (a,b) => b.map(x => a.filter(n => n === x).length);

console.log(solve(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']))