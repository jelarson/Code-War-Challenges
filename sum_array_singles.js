// https://www.codewars.com/kata/59f11118a5e129e591000134

function repeats(arr){
  const ans = []
  arr.forEach((num)=> {
    if (arr.indexOf(num) === arr.lastIndexOf(num)){
      ans.push(num)
    }
  })
  return ans[0] + ans[1]
  };

console.log(repeats([4,5,7,5,4,8]))

// top answer

// one liner

function repeats(arr){
  return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};

// my answer with summing during loop

function repeats(arr){
  let ans = 0
  arr.forEach((num)=> {
    if (arr.indexOf(num) === arr.lastIndexOf(num)){
      ans+=num
    }
  })
  return ans
  };