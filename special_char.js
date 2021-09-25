// https://www.codewars.com/kata/56bcaedfcf6b7f2125001118/train/javascript

function htmlspecialchars(formData) {
  const obj = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;'
  }
  return formData.split('').map(x=>{
    return Object.keys(obj).includes(x) ? obj[x] : x
  }).join('')
}