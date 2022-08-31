// https://www.codewars.com/kata/55e4c52ad58df7509c00007e/train/javascript

function validate(username, password){
  var valid = new Validator();
  return valid.login(username, escape(password));
}

// encode URI
function validate(username, password){
  var database = new Database();
  return database.login(username, encodeURI(password));
}