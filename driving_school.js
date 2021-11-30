// https://www.codewars.com/kata/589b1c15081bcbfe6700017a/train/javascript

function cost (mins) { 
  return mins < 30 ? 30 : Math.ceil((mins*2-10)/60)*10+10
} 