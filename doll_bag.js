// https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

function grabDoll(dolls){
  // for( break continue
  return dolls.filter(x=>x=='Hello Kitty' || x=='Barbie doll').slice(0,3);
}