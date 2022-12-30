// https://www.codewars.com/kata/53d16bd82578b1fb5b00128c/train/javascript

function grader(s) {
  return s < 0.6 || s > 1 ? "F" : s < 0.7 ? "D" : s < 0.8 ? "C" : s < 0.9 ? "B" : "A" 
}

grader = s => s > 1 || s < 0.6 ? 'F' : s < 0.7 ? 'D' : s < 0.8 ? 'C' : s < 0.9 ? 'B' : 'A';

function grader(score) {
  if (score === 1) return "A";
  return ["D", "C", "B", "A"][Math.floor(score*10) - 6] || "F";
}
