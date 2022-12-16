// https://www.codewars.com/kata/59126992f9f87fd31600009b/train/javascript

function whoseMove(lastPlayer, win) {
  return win ? lastPlayer : ['black', 'white'].filter(x=>x!=lastPlayer)[0]
}