// https://www.codewars.com/kata/5e8dd197c122f6001a8637ca/train/javascript

const removeDuplicateIds = (obj) => {
  const used = []
  Object.keys(obj).reverse().forEach(key=> {
    obj[key] = [... new Set(obj[key])].filter(c=>!used.includes(c))
    used.push(...obj[key])
  })
  return obj
};

console.log(removeDuplicateIds({
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}))