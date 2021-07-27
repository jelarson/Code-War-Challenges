// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

function rentalCarCost(d) {
  return d > 6 ? d * 40 - 50 : d > 2 ? d * 40 - 20 : d * 40
}