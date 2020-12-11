// https://www.codewars.com/kata/562e98755e9214cd2500003d/train/javascript

function yourFutureCareer() {
	var career = Math.random()
		if (career <= 0.32) {
			return 'FrontEnd Developer'
		 } else if (career <= 0.65) {
			return 'BackEnd Developer'
		} else {
			return 'Full-Stack Developer'
		}
}

// my one liner

const arr = ['FrontEnd Developer', 'BackEnd Developer', 'Full-Stack Developer']

const yourFutureCareer = () => arr[Math.floor(Math.random()*3)]

// top answers

const yourFutureCareer = () => {
  let career = Math.random();
  return `${ career <= 0.32 ? 'FrontEnd' : (career <= 0.65 ? 'BackEnd' : 'Full-Stack') } Developer`;
}

const randomChoice = arr => arr[Math.floor(Math.random() * arr.length)];
const yourFutureCareer = () =>randomChoice(['FrontEnd Developer', 'BackEnd Developer', 'Full-Stack Developer']);

// ryan's answer

const yourFutureCareer = () => ['FrontEnd Developer', 'BackEnd Developer', 'Full-Stack Developer'][Math.floor(Math.random() * 3)]