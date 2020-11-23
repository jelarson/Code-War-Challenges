// https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/train/javascript

function waveSort(arr) {
  const ans = []
  const first = arr.sort((a,b)=>a-b).slice(0,arr.length/2)
  const second = arr.sort((a,b)=>a-b).slice(arr.length/2)
  for (let i =0; i <arr.length/2; i++){
    ans.push(second[i])
    ans.push(first[i])
  }
  return ans
}

console.log(waveSort([1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4]))
console.log(waveSort([1, 2]))

// top answers

// seperate sort logic

function ascending(a, b) {
  return a - b;
}

function waveSort(arr) {
  arr.sort(ascending);
  for (var i = 0; i < arr.length - 1; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
  }
}

// short answer - using for each index 

function waveSort(arr){
  var t=arr.slice().sort((a,b)=>a-b);
  arr.forEach((_,i)=>arr[i]=i%2?t.shift():t.pop())
}

// for loop - is lower or higher than prev

function waveSort(arr){
  const wave = arr.sort((a, b) => a - b);

  for (let i = 1; i < wave.length; i += 2) {
    const isLowPrev = wave[i - 1] < wave[i];
    const isLowNext = wave[i + 1] < wave[i];
    
    if (isLowPrev || isLowNext) {
      const current = wave[i];
      const replaceIndex = isLowPrev ? i - 1 : i + 1; 
      wave[i] = wave[replaceIndex];
      wave[replaceIndex] = current;
    }
    
  }
  return wave;
}