// https://www.codewars.com/kata/59971e64bfccc70748000068

function convergence(n, k){
  const ans = [n]
  for (let i = 0; i < k; i++){
    if (String(ans[i]).length > 1){
      console.log(String(ans[i]).split('0').join('').split(''))
      ans.push(String(ans[i]).split('0').join('').split('').reduce(function(a,b){return a*b}, 1) + ans[i])
    } else {
      ans.push(ans[i] + ans[i])
    }
  }
  console.log(['1', '6'].reduce(function(a,b){return Number(a)*Number(b)}, 0))
  return ans
}

console.log(convergence(1, 15))