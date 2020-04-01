// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5

function findOdd(A) {
  const uniqueNumsArray = [...new Set(A)]
  let indexOfOdd = 0
  arr = []
  let occurenceCount = Array(uniqueNumsArray.length).fill(0)

  A.forEach((item) => {
    if (item === item) {
      let counter = 0
      const itemIndex = uniqueNumsArray.indexOf(item)
      counter++
      occurenceCount[itemIndex] += counter
    }
  })
  occurenceCount.forEach(occurence => {
    arr.push(occurence % 2)
  })
  arr.forEach(odd => {
    if (odd === 1) {
      indexOfOdd += arr.indexOf(odd)
    }
  })
  return uniqueNumsArray[indexOfOdd]
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))

// times.splice(indexToReplace, 1, times[indexToReplace] + customer)
// myArr[whereNextCustomerGoes] += customers

// var myArray = ['a', 1, 'a', 2, '1'];

// let unique = [...new Set(myArray)]; 

// Ryan's Solution

function findOdd1(A) {
  let answer;
  A.forEach(num => {
    const newArray = A.filter(item => item === num);
    if (newArray.length % 2 === 1) {
      answer = newArray[0];
    }
  });
  return answer;
}

console.log(findOdd1([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
