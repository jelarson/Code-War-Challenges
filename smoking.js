// https://www.codewars.com/kata/5a0aae48ba2a14cfa600016d/train/javascript

function startSmoking(bars,boxes){
  let total = bars * 180 + boxes * 18
  let rolled = Math.floor(total / 5)
  let remaining = total % 5
    console.log(rolled, remaining)
  while (rolled + remaining >= 5) {
    let add = Math.floor(rolled)
    total += add
    rolled = Math.floor((rolled + remaining)/5)
    remaining = (rolled + remaining)%5
    console.log(add)
  }
  return total;
}

function startSmoking(bars,boxes){
  let smoked = bars * 180 + boxes * 18
  let rolled = Math.floor(smoked / 5)
  let remaining = smoked % 5
  while (rolled >= 1) {
    let add = rolled
    smoked += add
    rolled = Math.floor((rolled + remaining)/5)
    remaining = (add + remaining) % 5
  }
  return smoked;
}