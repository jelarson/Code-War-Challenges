// https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript

function explode(x){
  var score = 0;
  var numbers = 0;
  x.forEach(b=>{
    if (typeof b == 'number'){
      score += b
      numbers ++
    }
  })
  return numbers > 0 ? Array(score).fill(x) : 'Void!'
}