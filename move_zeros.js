// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(array) {
  zeroArr = []
  const newStr = array.filter((item) => {
    if (item === 0) {
      zeroArr.push(0)
      return false
    }
    return true
  })
  return newStr.concat(zeroArr)
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros1 = arr => arr.reduceRight((newArr, elem) => elem === 0 ? [...newArr, elem] : [elem, ...newArr], [])

console.log(moveZeros1([false, 1, 0, 1, 2, 0, 1, 3, "a"])) // returns[false,1,1,2,1,3,"a",0,0]


var myArray = ['a', '1', 'a', 2, '1'];

let unique = [...new Set(myArray)];

console.log(unique)