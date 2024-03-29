// https://www.codewars.com/kata/55c933c115a8c426ac000082/solutions/javascript

function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b; break
    case'-': result = value.a - value.b; break
    case'/': result = value.a / value.b; break
    case'*': result = value.a * value.b; break
    case'%': result = value.a % value.b; break
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}

// top answer

const evalObject = value =>
  ({'+': val => val.a + val.b,
    '-': val => val.a - val.b,
    '/': val => val.a / val.b,
    '*': val => val.a * val.b,
    '%': val => val.a % val.b,
    '^': val => val.a ** val.b,
  })[value.operation](value);
  