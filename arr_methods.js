// https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript

function blackAndWhite(arr){
  return Array.isArray(arr) ? arr.includes(5) && arr.includes(13) ? "It's a black array" : "It's a white array" : "It's a fake array"
}

const blackAndWhite = arr =>
  `It's a ${!Array.isArray(arr) ? `fake` : arr.includes(5) && arr.includes(13) ? `black` : `white`} array`;