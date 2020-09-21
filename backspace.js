// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {
  function backspacer(str){
    const idx = str.indexOf('#')
    let bottomIdx = str.indexOf('#') -1
    if (bottomIdx < 0) {
      bottomIdx = 0
    }
    const newStr = str.slice(0, bottomIdx).concat(str.slice(idx + 1, str.length))
    return newStr.includes('#') ? backspacer(newStr) : newStr
  }
	return s.includes('#') ? backspacer(s) : s
};

console.log(cleanString("abc#d##c"))
console.log(cleanString('abc####d##c#'))

// simple for loop solution

function clean_string(s) {
  const result = []
  for (const c of s) {
    if (c === "#") {
      result.pop()
    } else {
      result.push(c)
    }
  }
  return result.join("")
}

// one liner with reducer

clean_string = s => s.split('').reduce((r, e) => e == '#' ? r.slice(0, -1) : r + e, '');  

// map solution

function cleanString(s) {
  let result = [];
  [...s].map((char) => (char === "#" ? result.pop() : result.push(char)));
  return result.join("");
}