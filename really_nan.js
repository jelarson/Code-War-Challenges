// https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/javascript

const isReallyNaN = (val) => {
  return isNaN(Number(val)) && typeof val !== 'undefined';
};