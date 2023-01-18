// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

function sameCase(a, b){
  return (a.toUpperCase() === a && b.toUpperCase() === b) || (a.toLowerCase() === a && b.toLowerCase() === b) ? 1 : 0;
}

function sameCase(a, b){
 if(a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()){
    return -1
  }else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
      return 1
  }else{
    return 0
  }
}