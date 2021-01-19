// https://www.codewars.com/kata/57e2afb6e108c01da000026e/train/javascript

function expressionOut(expr) {
  const arr = ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten']
  const obj = {
    '+':'Plus',
    '-':'Minus',
    '*':'Times',
    '/':'Divided By',
    '**':'To The Power Of',
    '=':'Equals',
    '!=':'Does Not Equal'
  }
  const exprArr = expr.split(' ')
  return Object.keys(obj).includes(exprArr[1]) ? exprArr.map(x=>isNaN(x) ? obj[x] : arr[Number(x)]).join(' ') : "That's not an operator!";
}

console.log(expressionOut("1 + 3"))