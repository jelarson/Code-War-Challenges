// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

function alphabetWar(fight)
{
  const left = [0,'s','b','p','w']
  const right = [0,'z','d','q','m']
  let count = 0
  fight.split('').forEach(x=>{
    if (left.includes(x)){
      count+=left.indexOf(x)
    }
    if (right.includes(x)){
      count-=right.indexOf(x)
    }
  })
  return count > 0 ? "Left side wins!" : count < 0 ? "Right side wins!" : "Let's fight again!";
}

console.log(alphabetWar("zdqmwpbs"))