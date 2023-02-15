// https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript

function fuelPrice(litres, pricePerLiter) {
  for (var i = 2; i <= 10; i +=2) { //discount loop
    if (litres >= i) {
      pricePerLiter -= 0.05;
    }
  }
  return Math.round(litres * pricePerLiter * 100) / 100;;
}

function fuelPrice(litres, pricePerLiter) {
  var discount = Math.min(Math.floor(litres/2) * 0.05, 0.25);
  var price = litres * (pricePerLiter - discount);
  return Math.round(price*100) / 100;
}