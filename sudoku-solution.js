// https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript

function validSolution(board){
  const gridArr = [[[], [], []], [[], []], [[],[],[]]]
  for(let i = 0; i < 9; i++){
    const copy = [...board[i]]
    // if ((i+1) % 3 === 0){
      if(i === 2){
      let gridNum = (i+1) /3
      let gridBox = 0
      gridArr[gridNum][gridBox].push(...board[i].slice(i -2,i + 1))
      gridBox ++
      gridArr[gridNum][gridBox].push(...board[i].slice(i + 1,i + 4))
      gridBox ++
      gridArr[gridNum][gridBox].push(...board[i].slice(i +4,i + 7))
      
    }
    if (copy.sort()[i] !== i + 1){
      return false
    }
    const arr = []
    for(let b = 0; b < 9; b++){
      arr.push(board[b][i])
    }
    for(let c = 0; c < 9; c++){
      if (arr.sort()[c] !== c + 1){
        return false
      }
    }
  }
  // let gridTop = 3
  // let gridBottom = 0
  // for(let i = gridBottom; i < gridTop; i++){
    
    // }
    console.log(gridArr)
  // return true
}

// console.log(validSolution([ 
//   [ 1, 2, 6, 3, 4, 7, 5, 9, 8 ],
//   [ 7, 3, 5, 8, 1, 9, 6, 4, 2 ],
//   [ 1, 9, 4, 2, 7, 5, 8, 6, 3 ],
//   [ 3, 1, 7, 5, 8, 4, 2, 6, 9 ],
//   [ 7, 5, 9, 1, 6, 2, 4, 3, 8 ],
//   [ 4, 8, 2, 9, 3, 6, 7, 1, 5 ],
//   [ 1, 4, 8, 7, 5, 9, 3, 2, 6 ],
//   [ 5, 6, 1, 4, 2, 3, 9, 8, 7 ],
//   [ 2, 7, 3, 6, 9, 1, 8, 5, 4 ] ]))
console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]))

// console.log(validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]))
