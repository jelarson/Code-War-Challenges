// https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

function dup(s) {
  return s.map((word)=> {
    const wordArr = word.split('')
    const newWord = []
    for (let i = 0; i < wordArr.length; i++){
      if (wordArr[i] !== wordArr[i+1]){
        newWord.push(wordArr[i])
      }
    }
    return newWord.join('')
  })
  };

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))

// top answer with regex

function dup(s) {
  return s.map(x => x.replace(/(.)\1+/g,'$1'))
};

// top answer with filter

const dup = (s) =>
  s.map((str) =>
    str
      .split('')
      .filter((c, i) => c !== str[i - 1])
      .join('')
  );