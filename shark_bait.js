// https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  var dist1 = pontoonDistance/youSpeed
  var dist2 = dolphin? sharkDistance/(sharkSpeed/2) : sharkDistance/sharkSpeed
  return  dist1 < dist2 ? 'Alive!' : 'Shark Bait!'  
}