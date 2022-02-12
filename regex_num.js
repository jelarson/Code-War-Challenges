// https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/javascript

String.prototype.digit = function() {
  return this.replace(/\D/g,'').length == 1 && this.length == 1;
};