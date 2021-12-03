// https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript

function validateHello(greetings) {
  let arr = ['hello','ciao','salut','hallo','hola','ahoj','czesc']
  for (let i = 0; i < arr.length; i++){
    if (greetings.toLowerCase().includes(arr[i])){
      return true
    }
  }
  return false
}

// one liner with regex
const validateHello = greetings => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);
