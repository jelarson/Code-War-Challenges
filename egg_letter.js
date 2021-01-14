// https://www.codewars.com/kata/55ea5304685da2fb40000018/train/javascript

function heggeleggleggo(word){
  const vowels = ['a','e', 'i', 'o', 'u', ' ']
  return word.split('').map(x=>{
    const c = x.toLowerCase()
    return vowels.includes(c) ? x : x + 'egg';
  }).join('')
}

console.log(heggeleggleggo('hello'))