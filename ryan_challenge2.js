// Good morning sir. I have an issue I need your help with.
// I have some students test scores, and I would like your help figuring out who did well this year.
// Test Scores
const scores1 = {
  name: "jimmy",
  math: 90,
  science: 80,
  english: 75,
  gym: 95,
  history: 90,
};
const scores2 = {
  name: "suzy",
  math: 90,
  science: 70,
  english: 95,
  gym: 80,
  history: 80,
};
const scores3 = {
  name: "bobby",
  math: 9,
  science: 90,
  english: 70,
  gym: 90,
  history: 70,
};
const scores4 = {
  name: "sally",
  math: 70,
  science: 78,
  english: 100,
  gym: 90,
  history: 95,
};
const scores5 = {
  name: "mindy",
  math: 95,
  science: 85,
  english: 80,
  gym: 85,
  history: 85,
};
const testScores = [scores1, scores2, scores3, scores4, scores5];
// Before we begin, I must say that our school is very picky with their functions, and for this reason we cannot have you using any if statements or ternaries in your code today. Sorry about that. Object methods and array methods will help greatly.
// Could you please take these and make a function that will take in a score, and return me a new object telling me the students name, and then giving me only the subjects they scored above 90 in?
// Example:
// { jimmy: { math: 90, gym: 95, history: 90 } }
// In addition, (and don’t worry if you cannot complete this part, I know it’s difficult and you’re a busy man) could you write me a function that uses the testScores variable above and prints out a sorted array of student score objects, sorted by number of subjects they scored well in? (This list will be used externally, so do not print our their numerical subject scores in this function).
// Example:
// [
//   { jimmy: [ 'math', 'gym', 'history' ] },
//   { sally: [ 'english', 'gym', 'history' ] },
//   { suzy: [ 'math', 'english' ] },
//   { bobby: [ 'science', 'gym' ] },
//   { mindy: [ 'math' ] }
// ]
// Thank you so much for your help good sir. Let me know if you have any questions!!

function highTest(student) {
  let scoreTitle = Object.keys(student);
  let highScores = Object.values(student);
  let test = highScores.filter((score) => {
    return score >= 90;
  });
  let test3 = scoreTitle.filter((key) => {
    return student[key] >= 90;
  });
  const obj = {};
  let count = 0;
  for (const key of test3) {
    obj[key] = test[count];
    count++;
  }
  let nameyName = student.name;
  const ans = {
    [nameyName]: obj,
  };
  return ans;
}

console.log(highTest(scores1));
console.log(highTest(scores2));
console.log(highTest(scores3));
console.log(highTest(scores4));
console.log(highTest(scores5));
