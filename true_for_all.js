// https://www.codewars.com/kata/54598d1fcbae2ae05200112c/train/javascript

function all( arr, fun ){
  return arr.filter(x=>fun(x)).length > 0
}

function all( arr, fun ){
  return arr.every(fun)
}

function all(arr, fun)
{
  var length = arr.length;
  
  for (var i=0; i<length; ++i)
    if (!fun(arr[i]))
      return false;
  
  return true;
}