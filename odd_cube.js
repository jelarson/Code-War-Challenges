// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript

function cubeOdd(arr) {
  const array = []
  for(let i = 0; i < arr.length; i++){
    if (isNaN(arr[i])){
      return undefined
    }
    if (arr[i]%2 != 0){
      array.push(arr[i]**3)
    }
  }
  
  return array.reduce((a,b)=>a+b,0);
  }