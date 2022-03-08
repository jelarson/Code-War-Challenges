// https://www.codewars.com/kata/58d248c7012397a81800005c/train/javascript

var cubeChecker = function(volume, side){
  return side > 0 && volume > 0 && side**3 == volume;
};