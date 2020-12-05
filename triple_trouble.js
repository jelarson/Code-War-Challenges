// https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

function tripledouble(num1, num2) {
  const tripNums = []
  let ans = 0
  String(num1).split('').forEach((num, idx, arr)=>{
    if (idx < arr.length -2){
      if (num === arr[idx +1] && num === arr[idx+2]){
        tripNums.push(Number(num))
      }
    }
  })
  String(num2).split('').forEach((num, idx, arr)=>{
    if (idx < arr.length -1){
      if (num === arr[idx +1]){
        if (tripNums.includes(Number(num))){
          ans = 1
        }
      }
    }
  })
  return ans
}

console.log(tripledouble(451999277,41177722899))

// top answer

// regex

function tripledouble(num1, num2) {
  for (let i = 0; i < 10; i++) {
    if (new RegExp(`${i}{3}`).test(num1) && new RegExp(`${i}{2}`).test(num2)) {
      return 1;
    }
  }
  return 0;
}

// .some and .repeat

function tripledouble(num1, num2) {
  let nums = [...Array(10).keys()];
    
  return +nums.some(num => 
    num1.toString().includes(num.toString().repeat(3)) &&
    num2.toString().includes(num.toString().repeat(2))
  );
}

// one liner

const tripledouble = (a, b) => +/(.)\1\1.*,.*\1\1/.test([a, b]);

// .filter

function tripledouble(num1, num2) {
  var first = [...JSON.stringify(num1).split('')];
  var second = [...JSON.stringify(num2).split('')];
  
  var triple = first.filter((v, k) => v === first[k+1] && v === first[k-1]);
  var double = second.filter((v, k) => v === second[k+1]);
  
  var result = triple.filter(trip => double.find(dub => dub === trip));
  
  return result.length >= 1 ? 1 : 0;
}