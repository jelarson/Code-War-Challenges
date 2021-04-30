// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

function bmi(weight, height) {
  const bmi = weight/height**2
  const percent = [18.5, 25, 30, 100]
  const health = ['Underweight', 'Normal', 'Overweight', 'Obese']
  for (let i = 0; i <= 3; i++) {
    if (percent[i] >= bmi){
      return health[i]
    }
  }
}

function bmi(weight, height) {
  const $ = weight / height**2;
  return $ <= 18.5 ? 'Underweight' : $ <= 25.0 ? 'Normal' : $ <= 30.0 ? 'Overweight' : 'Obese';
}
