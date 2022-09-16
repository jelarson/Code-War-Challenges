// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript

function match(candidate, job) {
  return candidate.minSalary * .9 <= job.maxSalary
}