// https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript

function solve(s){
  const ans = [0,0,0,0]
  s.split('').forEach(letter=>{
    const charCode = letter.charCodeAt(0)
    if (65 <= charCode && charCode <= 90) ans[0]++
    else if (97 <= charCode && charCode <= 122) ans[1]++
    else if (48 <= charCode && charCode <= 57) ans[2]++
    else (ans[3]++)
  })
  return ans
 }

 console.log(solve("Codewars@codewars123.com"))

 // top answer

 // regex

 const solve = (str) => (
  [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
);

// else if

function solve(s){
  let res = Array.from({length:4}, ()=> 0)
  for(let v of s){
    let vl = v.toLowerCase(), vu = v.toUpperCase()
    if(!Number.isNaN(+v)) res[2]++
    else if(vl === vu)    res[3]++
    else if(v === vl)     res[1]++
    else if(v === vu)     res[0]++
  }
  return res
}

// char code with for loop

function solve(s){
  let arr = [0, 0, 0, 0];
  
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) arr[0]++;
    if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) arr[1]++;
    if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) arr[2]++;
    if (s.charCodeAt(i) >= 33 && s.charCodeAt(i) <= 47) arr[3]++;
    if (s.charCodeAt(i) >= 58 && s.charCodeAt(i) <= 64) arr[3]++;
  }
  return arr;
}