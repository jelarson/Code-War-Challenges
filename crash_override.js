// https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f/train/javascript

function aliasGen(){
  // Code Here
}

function aliasGen(first, last) {
  if('0123456789'.indexOf(first[0]) != -1 || '0123456789'.indexOf(last[0]) != -1) {
    return 'Your name must start with a letter from A - Z.';
  }
  first = first.toUpperCase();
  last = last.toUpperCase();
  return firstName[first[0]] + ' ' + surname[last[0]];
}