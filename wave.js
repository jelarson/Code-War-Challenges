// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

function wave(str){
  const ans = []
  for (let i = 0; i < str.length; i++){
    if(str[i] !== ' '){
      ans.push(str.slice(0, i).concat(str[i].toUpperCase().concat(str.slice(i + 1, str.length))))
    }
  }
  return ans
}

console.log(wave('hello'))

// top answer

function wave(str){
  let result = [];
  
  str.split("").forEach((char, index) => {
      if (/[a-z]/.test(char)) {
          result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
      }
  });
  
  return result;
}

// one liner

var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)