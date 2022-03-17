// https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript

function howManydays(month){
  // switch
  return month == 2 ? 28 : [4,6,9,11].includes(month) ? 30 : 31;
}