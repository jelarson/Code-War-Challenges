// https://www.codewars.com/kata/575fa9afee048b293e000287/train/javascript

function howMuchWater(water, load, clothes){
  return clothes > 2*load ? 'Too much clothes' : clothes < load ? 'Not enough clothes' : Number((water * 1.1**(clothes-load)).toFixed(2))
}