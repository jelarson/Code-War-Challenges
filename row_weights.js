// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

function rowWeights(array){
  let num1 = 0
  let num2 = 0
  for(let i = 0; i < array.length; i++){
    i % 2 === 0 ? num1+=array[i] : num2+=array[i]
  }
  return [num1, num2]
}

console.log(rowWeights([50,60,70,80]))

// top answers

// filter evens and odds, then reduce and return
function rowWeights(array){
  let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
  let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  
  return [t1, t2]
}

// short answer 
// one liner

rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])

// array instead of 2 variables

function rowWeights(array){
  var arr = [0, 0];
  for (var i = 0; i < array.length; i++) {
    i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
  }
  return arr;
}