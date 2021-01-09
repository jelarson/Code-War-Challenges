// https://www.codewars.com/kata/56d5166ec87df55dbe000063/train/javascript

const sumAverage = (arr) => {
  let result = 0
  arr.forEach(c=>{
    result += c.reduce((a,b)=>(a+b),0)/c.length
  })
  return Math.floor(result);
}

console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]))