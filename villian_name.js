// https://www.codewars.com/kata/536c00e21da4dc0a0700128b/train/javascript

function getVillainName(birthday){
  const month = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"]
    const day = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"]
  return [month[birthday.getMonth()], day[String(birthday.getDate()).slice(-1)]].join(' ')    
}

console.log(getVillainName(new Date('June 17')))
console.log(getVillainName(new Date('October 30')))
console.log(new Date("April 21").getDate())

// top answers

// modulo 10 to get last digit

function getVillainName(birthday){
  firstNames = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
  lastNames = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"];
  return firstNames[birthday.getMonth()] + ' ' + lastNames[birthday.getDate() % 10]
}

// .replace

function getVillainName(birthday){
  var first = birthday.toString().split(' ')[1]
  .replace("Jan" , "The Evil")
  .replace("Feb", "The Vile")
  .replace("Mar", "The Cruel")
  .replace("Apr", "The Trashy")
  .replace("May", "The Despicable")
  .replace("Jun", "The Embarrassing")
  .replace("Jul", "The Disreputable")
  .replace("Aug", "The Atrocious")
  .replace("Sep", "The Twirling")
  .replace("Oct", "The Orange")
  .replace("Nov", "The Terrifying")
  .replace("Dec", "The Awkward");
  var last = birthday.toString().split(' ')[2][1]
  .replace("0", "Mustache")
  .replace("1", "Pickle")
  .replace("2", "Hood Ornament")
  .replace("3", "Raisin")
  .replace("4", "Recycling Bin")
  .replace("5", "Potato")
  .replace("6", "Tomato")
  .replace("7", "House Cat")
  .replace("8", "Teaspoon")
  .replace("9", "Laundry Basket");
  return first+' '+last;
  }