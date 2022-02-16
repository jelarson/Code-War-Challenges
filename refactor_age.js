// https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript

function describeAge(a) {
  var s = "You're a(n) "
  return a < 13 ? s+"kid" : a < 18 ? s+"teenager" : a < 65 ? s+"adult" : s+"elderly"
}