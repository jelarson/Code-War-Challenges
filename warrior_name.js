// https://www.codewars.com/kata/53f9ee9f64b19d4b1d0001ed/train/javascript

function Warrior(n){
  var name = n;
  this.name = function(n){
    if( n ) name=n;
    return name;
  }  
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}

function Warrior(n){
  this.n = n;
}

Warrior.prototype.name = function(n){
  if (n) this.n = n;
  return this.n;
}

Warrior.prototype.toString = function(){
  return "Hi! my name's " + this.n;
}