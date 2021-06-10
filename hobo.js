// https://www.codewars.com/kata/57efab9acba9daa4d1000b30/train/javascript

function bald(x){
  const num = x.split('').filter(b=>b=='/').length
  return num == 0 ? "Clean!" : num == 1 ? "Unicorn!" : num == 2 ? "Homer!" : num >5 ? "Hobo!" : "Careless!"
}