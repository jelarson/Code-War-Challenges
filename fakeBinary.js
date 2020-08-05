// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

function fakeBin(x){
  return x.split('').map(digit => {
    if(digit >= 5){
      return 1
    } else {
      return 0
    }
  }).join('')
}

// top answer

function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}