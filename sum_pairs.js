// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

var sum_pairs=function(ints, s){
  for (let b = 0; b < ints.length; b++){
    for (let i = b + 1; i < ints.length; i++){
      const val = [ints[b], ints[i]].reduce(function(a, b){return a + b}, 0)
      if (val === s){
        return [ints[b], ints[i]]
      }
    }
  }
}

// console.log(sum_pairs([1, 4, 8, 7, 3, 15], 8))
// [1, 7]
// console.log(sum_pairs([1,2,3,4,1,0], 2))
console.log(sum_pairs([10,5,2,3,7,5], 10))