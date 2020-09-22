// https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/train/javascript

function solve(s){
  if (s.split('').reverse().join('') === s){
    return 'OK'
  } else {
    for (let i = 0; i < s.length; i++){
      const newStr = s.slice(0, i).concat(s.slice(i+1, s.length))

      if (newStr === newStr.split('').reverse().join('')){
        return 'remove one'
      }
    }
    return 'not possible'
  }
 };

 console.log(solve('abba'))
 console.log(solve('abbaa'))
 console.log(solve('abbaab'))

 // top answer

 const solve = (str) => {
  if (isPalindrome(str)) {
    return 'OK';
  }
  return [...str].some((_, i) => {
    const modified = str.slice(0, i) + str.slice(++i);
    return isPalindrome(modified);
  }) ? 'remove one' : 'not possible';
};

const isPalindrome = (str, len = str.length) => {
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
};