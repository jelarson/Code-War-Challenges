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

// top answers

// reducer

const removeDuplicateIds = o => {
  var i = Object.keys(o).reduce((i,k) => ((o[k] = [...new Set(o[k])]).forEach(v => i[v] = k), i),{});
  return Object.keys(o).reduce((o,k) => (o[k] = o[k].filter(v => k==i[v]), o),o);
};

// one liner

removeDuplicateIds=Q=>Object.entries(Q).sort(([Q],[S])=>S-Q).map(([F,V])=>Q[F]=V.filter(V=>!U.has(V)&&U.add(V)),Q={},U=new Set)&&Q

const removeDuplicateIds = (obj) => {
  const seen = {};
  return Object.keys(obj)
    .sort((a, b) => b - a)
    .reduce((acc, key) => {
      acc[key] = obj[key].filter(v => v in seen ? false : (seen[v] = 1));
      return acc;
    }, {});
};