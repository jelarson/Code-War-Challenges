// https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript

function getOrder(input) {
  // let copy = input.slice()
  // const array = ['burger', 'fries', 'chicken', 'pizza', 'sandwich', 'onionrings', 'milkshake', 'coke']
  // array.forEach(el => {
    // var re = new RegExp(".(?=.{" + el + "})", "g");
    // input.replace(re, `${el.toUpperCase()}`)
    // copy.replace(re, `pppp`)
  // })
  // for (let i = 0; i < 8; i++){
  //   var re = new RegExp(".(?=.{" + array[i] + "})", "g");
  //   copy = copy.replace(re, `pppp`)
  // }
  // input.replace('milkshake', "Burger ")
  // return copy;
  return input.replace(/burger/gi, 'Burger ').replace(/sandwich/gi, 'Sandwich ').replace(/milkshake/gi, 'Milkshake ').replace(/pizza/gi, 'Pizza ').replace(/chicken/gi, 'Chicken ').replace(/fries/gi, 'Fries ').replace(/coke/gi, 'Coke ').trim().split(' ').sort().join(' ')
}

function getOrder2(input) {
  const orderArr = input.replace(/burger/gi, 'Burger ').replace(/onionrings/gi, 'Onionrings').replace(/sandwich/gi, 'Sandwich ').replace(/milkshake/gi, 'Milkshake ').replace(/pizza/gi, 'Pizza ').replace(/chicken/gi, 'Chicken ').replace(/fries/gi, 'Fries ').replace(/coke/gi, 'Coke ').trim().split(' ')
  const ans = []
  const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke']
  menu.forEach(item => {
    orderArr.forEach(el => {
      if (item === el){
        ans.push(el)
      }
    })
  })
  return ans.join(' ')
}

// console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"))
// console.log(getOrder2("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"))
console.log(getOrder2("milkshakechickenmilkshakemilkshakecokechickenburgerburgeronionringsonionrings"))