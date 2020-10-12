// https://www.codewars.com/kata/59f11118a5e129e591000134

function repeats(arr){
  const ans = []
  arr.forEach((letter)=> {
    if (arr.indexOf(letter) === arr.lastIndexOf(letter)){
      ans.push(letter)
    }
  })
  return ans[0] + ans[1]
  };

console.log(repeats([4,5,7,5,4,8]))