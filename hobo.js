// https://www.codewars.com/kata/57efab9acba9daa4d1000b30/train/javascript

function bald(x){
  const num = x.split('').filter(b=>b=='/').length
  const term = num == 0 ? "Clean!" : num == 1 ? "Unicorn!" : num == 2 ? "Homer!" : num >5 ? "Hobo!" : "Careless!"
  return [Array(x.length).fill('-').join(''), term]
}

const bald=x=>[(y=x.split("/")).join("-"),["Clean!","Unicorn!","Homer!","Careless!","Careless!","Careless!"][y.length-1]||"Hobo!"]