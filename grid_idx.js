// https://www.codewars.com/kata/5f5802bf4c2cc4001a6f859e/train/javascript

function gridIndex(grid, indices) {
  return indices.map((idx) => {
    const first = (idx / grid.length) % 1 !== 0 ? Math.floor(idx / grid.length) : Math.floor(idx / grid.length) -1
    const second = idx % grid.length === 0 ? grid.length -1 : idx % grid.length -1 
    return grid[first][second]
  }).join('')
}

console.log(gridIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9]))

// top anwer
// flattening the grid... duh!
const gridIndex = (grid, indices) => {
  const flattened = grid.flat();
  return indices.map(i => flattened[i-1]).join('');
}

// one liner flattening
const gridIndex = (grid, indices) => indices.map(c => grid.flat(2)[c-1]).join('')

// without flat

function gridIndex(grid, indices) {
  if (!grid.length)
    return "";
  let output = "";
  let ln = grid[0].length;
  indices.forEach(indice => {
    output += grid[Math.floor((indice - 1) / ln)][(indice - 1) % ln];
  });
  return output;
}