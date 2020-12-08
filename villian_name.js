// https://www.codewars.com/kata/536c00e21da4dc0a0700128b/train/javascript

function getVillainName(birthday){
  const month = ["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing", "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"]
    const day = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket"]
  return [month[birthday.getMonth()], day[String(birthday.getDate()).slice(-1)]].join(' ')    
}

console.log(getVillainName(new Date('June 17')))
console.log(getVillainName(new Date('October 30')))
console.log(new Date("April 21").getDate())