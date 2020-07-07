// I need you to write a function that will take in an array of numbers and print out the maximum profit you could make by buying the item on one day (by index) and selling it at a later day.
// For example, for input you would buy at index 1 (2) and sell at index 4 (8) and print out 6
// For input2 you would always lose money so you would not buy, and it would print out 0
const input = [9,2,4,3,8,5]
const input2 = [9,8,7,6,5]

function maxProfit(input){
  let ans = 0
  let diffArr = []
  for(let i = 1; i < input.length; i++){
    diffArr.push(input[i] - input[i-1])
  }
  for (let i =0; i< diffArr.length -1; i++){
    for(let u = diffArr.length -1; u > i; u--){
      const val = diffArr.slice(i, u).reduce((a,b)=> a +b, 0)
      if (val > ans){
        ans = val
      }
    }
  }
  return ans
}

console.log(maxProfit(input))
console.log(maxProfit(input2))

// Ryan's Answer

const getMaxProfits = (arr) => {
  return arr.reduce((max, current, idx, fixedArr) => {
    fixedArr.slice(idx + 1).forEach((num) => {
      const profit = num - current
      profit > max && (max = profit)
    })
    return max
  }, 0)
}

// Article Answer

const getMaxProfit = (prices) => {
  let maxProfit = 0;
  for (let buyDay = 0; buyDay < prices.length; buyDay++) {
    const buyPrice = prices[buyDay];
    for (let sellDay = buyDay + 1; sellDay < prices.length; sellDay++) {
      const sellPrice = prices[sellDay];
      const currentProfit = sellPrice - buyPrice;
      maxProfit = Math.max(maxProfit, currentProfit);
    }
  }
  return maxProfit;
};

// Most efficient answer

const getMaxProfit = (prices) => {
  let minPrice = prices[0];
  let maxProft = 0;
  for (const price of prices) {
    const currentProfit = price - minPrice;
    minPrice = Math.min(minPrice, price);
    maxProft = Math.max(maxProft, price - minPrice);
  }
  return maxProft;
};

