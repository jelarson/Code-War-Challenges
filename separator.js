// https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

function splitAndMerge(string, separator) {
  return string.split(' ').map(x=>x.split('').join(separator)).join(' ')
}
