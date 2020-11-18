// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

function solve(arr){  
  return arr.map(item=> {
    let count = 0
    item.toLowerCase().split('').forEach((letter, idx)=>{
      if (letter.charCodeAt(0) - 97 === idx){
        count++
      }
    })
    return count
  })
  };

console.log(solve(["abode","ABc","xyzD"]))

// top answers

// with alphabet var

function solve(arr){  
  var alphabeth = "abcdefghijklmnopqrstuvwxyz";
  return arr.map(x => x.toLowerCase().split('').filter((y,i) => i==alphabeth.indexOf(y)).length);
};

// with reducer

function solve(arr) {  
  return arr.map(x => [...x.toLowerCase()].reduce((s,v,i) => s + (v.charCodeAt() == i + 97), 0))
}

// nested for loop

function solve(arr){  
  var ans=[];
  for (var i=0; i<arr.length; ++i)
  {
    var c=0;
    for (var j=0; j<arr[i].length; ++j)
      if (arr[i][j].toLowerCase().charCodeAt()-'a'.charCodeAt()==j)
        c++;
    ans.push(c);
  }
  return ans;
};