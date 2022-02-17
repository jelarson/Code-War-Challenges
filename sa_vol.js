// https://www.codewars.com/kata/565f5825379664a26b00007c/train/javascript

function getSize(width, height, depth) {
  return [2*(width*height+height*depth+depth*width),width*height*depth]
}