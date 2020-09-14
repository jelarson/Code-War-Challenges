// https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript

function smaller(nums) {
  const ans = []

  nums.forEach((num, idx)=> {
    let smaller = 0
    for (let i = idx + 1; i < nums.length; i++){
      if (nums[i] < num){
        smaller++
      }
    }
    ans.push(smaller)
  })
    return ans
  }


console.log(smaller([5, 4, 3, 2, 1]))

// top answer - one-liner

const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);

