// https://www.codewars.com/kata/57fb4b289610ce39f70000de/train/javascript

function slot(s){
  var c = s.match(/([?!])\1*/g).map(e=>e.length).sort((a,b)=>b-a);
  switch(c.length) {
    case 1: return 1000;
    case 2: return c[0]===4?800:500;
    case 3: return c[0]===3?300:200;
    case 4: return 100;
    case 5: return 0;
  }
}