// https://www.codewars.com/kata/54f9c37106098647f400080a/train/javascript

function dropWhile(arr, pred) {
  var bool = true;
  return arr.filter(x=>{
    if (bool) {
      bool = pred(x);
      return !pred(x)
    } else {
      return true;
    }
  })
}

function dropWhile(arr, pred) {
  for (var i = 0; i < arr.length && pred(arr[i]); ++i) ;
  return arr.slice(i)
}