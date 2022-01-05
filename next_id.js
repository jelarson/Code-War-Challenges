// https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript

function nextId(ids){
  return !ids.includes(0) ? 0 : ids.sort((a,b)=>a-b,0).filter((x,y,z)=>!z.includes(x+1))[0]+1;
}