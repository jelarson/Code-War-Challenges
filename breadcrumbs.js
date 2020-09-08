// https://www.codewars.com/kata/563fbac924106b8bf7000046/train/javascript

// generateBC("mysite.com/pictures/holidays.html", " : ") == '<a href="/">HOME</a> : <a href="/pictures/">PICTURES</a> : <span class="active">HOLIDAYS</span>'
// generateBC("www.codewars.com/users/GiacomoSorbi", " / ") == '<a href="/">HOME</a> / <a href="/users/">USERS</a> / <span class="active">GIACOMOSORBI</span>'
// generateBC("www.microsoft.com/docs/index.htm", " * ") == '<a href="/">HOME</a> * <span class="active">DOCS</span>'

function generateBC(url, separator) {
  const urlArr = url.split('.com/')[1].split('/').map(function(a){
      return a.split('.')[0]
  }).filter(function(a){
    if (!a.includes('index')){
      return true
    }
  })
  let finalArr = ['<a href="/">HOME</a>', separator]
  for (let i = 0; i < urlArr.length; i++){
    if(i < urlArr.length - 1){
      finalArr.push(`<a href="/${urlArr[i]}/">${urlArr[i].toUpperCase()}</a>`)
      finalArr.push(separator)
    }
    if (i === urlArr.length - 1){
      finalArr.push(`<span class="active">${urlArr[i].toUpperCase()}</span>`)
    }
  }
  return finalArr.join('')
}

console.log(generateBC("mysite.com/pictures/holidays.html", ' : '))
console.log(generateBC("www.codewars.com/users/GiacomoSorbi", " / "))
console.log(generateBC("www.microsoft.com/docs/index.htm", " * "))