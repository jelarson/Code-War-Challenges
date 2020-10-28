// https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript

function dashatize(num) {
  if (isNaN(num)){
    return String(num)
  }
  let ans = []
  const arr = [...String(Math.abs(num))]
  let previousOdd = true
  arr.forEach(c => {
    if (c % 2 !== 0){
      if(!previousOdd){
        ans.push('-')
        }
      ans.push(c)
      ans.push('-')
      previousOdd = true
    } else {
      ans.push(c)
      previousOdd = false
    }
  })
  if (ans[ans.length -1] === '-'){
    ans = ans.slice(0, ans.length -1)
  }
  return ans.join('')
}

console.log(dashatize(274))
console.log(dashatize(5311))
console.log(dashatize(86320))

// top answer - regex
function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}

// no regex
function dashatize(num) {
  return num = num.toString().split("").map(function(c){
    return c % 2 ? "-" + c + "-" :  c ;
  }).join("").split("-").filter(a => a != "").join("-");
  
};

function dashatize(num) {
  var dashed=Math.abs(num).toString().split('').map(a=> +a%2==1? '-'+a+'-':a).join('');
  if (dashed[0]=='-') {
    dashed=dashed.slice(1);
  } 
  if (dashed[dashed.length-1]=='-') {
    dashed=dashed.slice(0,dashed.length-1);
  }
  for(var i=0;i<dashed.length;i++) {
    if (dashed[i]=='-') {
      if (dashed[i+1]=='-') {
        dashed=dashed.substring(0,i+1)+dashed.substring(i+2);
      }
    }
  }
  return dashed;
};