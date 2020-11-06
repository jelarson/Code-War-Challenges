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

// top answer

const MENU = {
  Burger:     1,
  Fries:      2,
  Chicken:    3,
  Pizza:      4,
  Sandwich:   5,
  Onionrings: 6,
  Milkshake:  7,
  Coke:       8,
};
const REG_CMD = new RegExp(Object.keys(MENU).join('|'), 'gi');

function getOrder(cmd) {
  return cmd.match(REG_CMD)
            .map(s=>s.charAt(0).toUpperCase()+s.slice(1))
            .sort((x,y)=>MENU[x]-MENU[y])
            .join(' ');
}

// one liner

getOrder=a=>['burger','fries','chicken','pizza','sandwich','onionrings','milkshake','coke'].map(e=>(e+' ').repeat(a.split(e).length-1)).join``.split` `.map(e=>e[0]?e[0].toUpperCase()+e.slice(1):'').join` `.trim()

// fill according to object values

const getOrder = (input) => {
  let reg = /(burger)|(fries)|(chicken)|(pizza)|(sandwich)|(onionrings)|(milkshake)|(coke)/g;
  let obj = {burger: 0, fries: 0, chicken: 0, pizza: 0, sandwich: 0, onionrings: 0, milkshake: 0, coke: 0};
  input.replace(reg, x => {
    obj[x]++;
  });
  return Object.keys(obj).map(x => `${x[0].toUpperCase()}${x.slice(1)} `.repeat(obj[x])).join('').slice(0, -1);
};
