// https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

function nextBigger(n){
 const splitStr = String(n).split('').reverse()
 let startingReaarangedNum = -1
 for (let i = 0; i <= splitStr.length - 1; i ++){
   if (Number(splitStr[i]) > Number(splitStr[i + 1])){
     startingReaarangedNum = (splitStr[i + 1])
     break
   }
 }
 if (startingReaarangedNum === -1){
   return startingReaarangedNum
 }
 let slicedArr = splitStr.slice(0, splitStr.indexOf(startingReaarangedNum)+1).sort()
 console.log(slicedArr)
 let remainingSlicedArr = splitStr.slice(splitStr.indexOf(startingReaarangedNum)+1)
 return Number([...remainingSlicedArr.reverse(), ...slicedArr.reverse()].join(''))
}

console.log(nextBigger(145))
console.log(nextBigger(21581957621))