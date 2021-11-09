// https://www.codewars.com/kata/586560a639c5ab3a260000f3/train/javascript

function rotate(str){
  let ans = [];
  let copy = str;
  for (let i = 0; i < str.length; i++){
    copy = copy.slice(1) + copy.slice(0,1);
    ans.push(copy);
  }
  return ans;
}