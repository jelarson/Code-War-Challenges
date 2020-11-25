// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

function expandedForm(num) {
  const ans = []
  String(num).split('').forEach((c, idx, arr)=>{
    if (c > 0)ans.push(c + Array(arr.length-idx-1).fill(0).join(''))
  })
  return ans.join(' + ')
}

console.log(expandedForm(12))
console.log(expandedForm(70304))

// top answers

// one liner

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

// reverse string and use for loop

var expandedForm = (num) => {
  var arr = num.toString().split('').reverse();
  var result = [];
  for(var i = 0; i < arr.length; i++){
    arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
  }
  return result.reverse().join(' + ')
}

// map and regex to filter out 0's

function expandedForm(num) {
  var x = -1;
  num = num.toString().split('').reverse().map(function(i) {
    x++;
    return i + '0'.repeat(x)
  })
  return num.filter((i => !(/^0+$/.test(i)))).reverse().join(' + ');
}

