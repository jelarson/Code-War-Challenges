// https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

function correct(string)
{
	let obj = {
    0:'O',
    1:'I',
    5:'S'
  }
  return string.split('').map(x=>{
    return Object.keys(obj).includes(x) ? obj[x] : x
  }).join('')
}