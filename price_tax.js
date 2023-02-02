// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript

function excludingVatPrice(price){
  return price || price === 0 ? Math.round(price * 100 / 1.15) / 100 : -1;
}

excludingVatPrice = p => p === null ? -1 : +(p / 1.15).toFixed(2);