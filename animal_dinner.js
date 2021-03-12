// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

function feast(beast, dish) {
  return beast[beast.length -1] == dish[dish.length -1] && dish[0] == beast[0]
}

console.log(feast("great blue heron", "garlic naan"))