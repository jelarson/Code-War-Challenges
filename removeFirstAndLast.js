// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str){
  return str.split('').slice(1, str.length -1).join('')
 };

 // top answer 

 function removeChar(str) {
  return str.slice(1, -1);
}