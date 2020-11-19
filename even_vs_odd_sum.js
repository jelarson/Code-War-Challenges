// https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript

function evenOrOdd(str) {
  const even = []
  const odd = []
  str.split('').forEach(num=>{
    num%2 === 0 ? even.push(Number(num)) : odd.push(Number(num))
  })
  const count = [even.reduce((a,b)=>a+b,0), odd.reduce((a,b)=>a+b,0)]
  return count[0] > count[1] ? "Even is greater than Odd" : count[0] < count[1] ? "Odd is greater than Even" : "Even and Odd are the same"
}
console.log(evenOrOdd('123'))
console.log(evenOrOdd('1223'))
console.log(evenOrOdd('12223'))

// top answers

// 2 filter loops
function evenOrOdd(str) {
  var odd = str.split('').filter(o => o % 2 != 0).reduce((a,b) => (+a) + (+b));
  var even = str.split('').filter(e => e % 2 == 0).reduce((a,b) => (+a) + (+b));
  if(even > odd) {
    return 'Even is greater than Odd';
  } else if(even < odd) {
    return 'Odd is greater than Even';
  } else {
    return 'Even and Odd are the same';
  }
}

// ternary inside reducer

function evenOrOdd(str) {
  
  const diff = [ ...str ]
    .map(Number)
    .reduce((a, b) => b % 2 ? a - b : a + b, 0);
  
  if (diff > 0)
    return 'Even is greater than Odd';
  
  if (diff < 0)
    return 'Odd is greater than Even';
  
  return 'Even and Odd are the same';
  
}

// one liner

const evenOrOdd=s=>(x=eval(s.replace(/./g,x=>(+x%2?"+":"-")+x)))<0?'Even is greater than Odd':x>0?'Odd is greater than Even':'Even and Odd are the same'

// regex

function evenOrOdd(str) {
  let [even, odd] = [/[13579]/g, /[02468]/g].map(re => str.replace(re, '').split``.reduce((s,i) => s + +i, 0))
  if (even > odd) return 'Even is greater than Odd'
  if (even < odd) return 'Odd is greater than Even'
  return 'Even and Odd are the same'
}