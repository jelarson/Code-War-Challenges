// https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

function shortcut (string) {
  return [...string].filter(x=>!['a', 'e', 'i', 'o', 'u'].includes(x)).join('');
}

function shortcut (string) {
  return [...string].filter(x=>!'aeiou'.includes(x)).join('');
}

function shortcut(string){
  return string.replace(/[aeiou]/gi, '');
}

function shortcut(string){
  var vowels = "aeiou";
  var output = "";
  for (var i = 0; i < string.length; i++) {
    if (!(vowels.indexOf(string[i]) > -1)) {
      output += string[i];
    }
  }
  return output;
}