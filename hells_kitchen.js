// https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript

function gordon(a){
  const vowels = ['E','I', 'O', 'U']
  return a.split(' ').map(x=>{
    return x.toUpperCase().split('').map(c=>{
      if (vowels.includes(c)){
        return '*'
      }
      if (c === 'A'){
        return '@'
      }
      else {
        return c
      }
    }).join('')
  }).join('!!!!').concat('!!!!')
}

console.log(gordon('What feck damn cake'))