// https://www.codewars.com/kata/568018a64f35f0c613000054/train/javascript

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    return false;
  }
}

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (!this.lives) throw Error
    this.lives--
    return n === this.number
  }
}