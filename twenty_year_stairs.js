function stairsIn20(s){
  return [].concat.apply([], s).reduce((a,b)=>a+b)*20
}