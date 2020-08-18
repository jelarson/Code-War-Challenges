// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

// must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 


function cakes(recipe, available) {
  let answer = []
  const keys = Object.keys(recipe)
  // const earlyOut = keys.every((key) => {
  //   return available.hasOwnProperty(key);
  // });
  // if (earlyOut === false){
  //   return 0
  // } else {
    keys.forEach(key => {
      answer.push(Math.floor(available[key] / recipe[key]))
    })
    return Math.min(...answer)
  // }
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))

// top answer

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
  }, Infinity)  
}

// short answer

function cakes(recipe, available) {
  return Math.min(...Object.keys(recipe).map(e => available[e]/recipe[e]>>0));
}

// Ryan's solution

function cakes(recipe, available) {
  let cakes = 0
  const check = (obj) => Object.keys(obj).every(key => obj[key] >= 0)
  const bake = () => {
    for(ingredient in recipe){
      available[ingredient] = available[ingredient] - recipe[ingredient]
    }
    if(check(available)){
      cakes++
      return bake()
    } else {
      return cakes
    }
  }
  return bake()
}

// hard coded answer

function cakes(recipe, available) {
  let answer = 100000000000
  for(ingredient in recipe){
    if(!available[ingredient]) return 0
    const num = Math.floor(available[ingredient] / recipe[ingredient])
    answer = Math.min(answer, num)
  }
  return answer
}

// no hard code

function cakes(recipe, available) {
  let answer
  for(ingredient in recipe){
    if(!available[ingredient]) return 0
    const num = Math.floor(available[ingredient] / recipe[ingredient])
    if(answer){
      answer = Math.min(answer, num)
    } else {
      answer = num
    }
  }
  return answer
}


function cakes(recipe, available) {
  let answer
  for(ingredient in recipe){
    if(!available[ingredient]) return 0
    const num = Math.floor(available[ingredient] / recipe[ingredient])
      answer && (answer = Math.min(answer, num))
      !answer && (answer = num)
  }
  return answer
}