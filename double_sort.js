// https://www.codewars.com/kata/57cc79ec484cf991c900018d/train/javascript

function dbSort(a){
  const numArr = []
  const strArr = []
  a.forEach(x=> typeof x === 'number' ? numArr.push(x) : strArr.push(x))
  return [...numArr.sort((a,b)=>a-b), ...strArr.sort()]
}

console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]))