// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/train/javascript

function validateUsr(username) {
  console.log(username)
  res =  /^[a-z0-9_]+$/i.test(username)
  return res && username.length > 3 && username.length < 17 && username === username.toLowerCase()
}

// best answer

function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}