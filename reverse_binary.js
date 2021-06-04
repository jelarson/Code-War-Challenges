// https://www.codewars.com/kata/57ed56657b45ef922300002b/train/javascript

function broken(x){
  return x.split('').map(c=>c == '1' ? '0' : '1').join('')
}