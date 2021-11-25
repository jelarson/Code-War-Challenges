// https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript

function uniTotal(a)
{
  return a.split('').map(b=>b.charCodeAt()).reduce((c,d)=>c+d,0)
}