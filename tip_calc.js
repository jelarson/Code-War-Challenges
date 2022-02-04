// https://www.codewars.com/kata/56598d8076ee7a0759000087/train/javascript

function calculateTip(amount, rating) {
  const obj = {
    terrible: 0,
    poor: .05,
    good: .1,
    great: .15,
    excellent: .2
  }
  return obj.hasOwnProperty(rating.toLowerCase()) ? Math.ceil(amount * obj[rating.toLowerCase()]) : 'Rating not recognised'
}