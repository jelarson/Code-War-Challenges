// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count (string) {  
  const obj = {}
   string.split('').forEach(let => {
     obj[let] ? obj[let]++ : obj[let] = 1
   })
   return obj
}

console.log(count("aba"))

// top answers

// reducer 

function count (string) {  
  return string.split("").reduce(function(obj, elem) {
    if (elem in obj)
      obj[elem]++;
    else
      obj[elem] = 1;
    return obj;
  }, {});
}

// short answer same logic

function count (string) {  
  r = {};
  string.split('').forEach(c => r[c] = (r[c] || 0) + 1);
  return r;
}

// outside library

const count = require('lodash').countBy;

// one line reducer

function count (string) {  
  return string.split('').reduce(function(o,v){ o[v] ? o[v]++ : (o[v] = 1); return o; }, {});
}