// https://www.codewars.com/kata/529bf0e9bdf7657179000008/train/javascript

function validSolution(board){
  const gridArr = [[[], [], []], [[], [], []], [[],[],[]]]
  for(let i = 0; i < 9; i++){
    const copy = [...board[i]]
    let spacer = 0
    if(i > 2){
      spacer++
      if (i>5){
        spacer++
      }
    }
    gridArr[spacer][0].push(...board[i].slice(0,3))
    gridArr[spacer][1].push(...board[i].slice(3,6))
    gridArr[spacer][2].push(...board[i].slice(6,9))
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
  for (let i = 0; i < 3; i++){
    for (let b = 0; b < 3; b++){
      const mySet = new Set(gridArr[i][b])
      if ([...mySet].length !== 9){
        return false
      }
    } 
  }
  return true
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


// ryan's solution in progress
function validSolution(board){
  let isValid = true
  let spacer = 0
  const grids = [[],[],[],[],[],[],[],[],[]]
  board.forEach((row, idx) => {
    const mySet = new Set(row)
    if(mySet.size !== 9){
      isValid = false
    }
    const vert = []
    for(let i = 0; i < 9; i++){
      vert.push(board[i][idx])
      switch(row){
       case row <= 2:
          grids[spacer].push(board[row][i])
       case row > 2 && row <= 5:
       case row > 5:
      }
    }
    const mySet2 = new Set(vert)
    if(mySet2.size !== 9){
      isValid = false
    }
  })
  return isValid
}

// top Solution

function equals45(n){
  return n == 45;
}

function validSolution(board){
  var sumh = [0,0,0,0,0,0,0,0,0];
  var sumv = [0,0,0,0,0,0,0,0,0];
  osums = [[0,0,0],[0,0,0],[0,0,0]];
  for (var i=0;i<9;i++){
    for (var j=0;j<9;j++){
      sumh[i] += board[i][j];
      sumv[j] += board[i][j];
      osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
    }
  }
  for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
  return (sumh.every(equals45) && sumv.every(equals45));
}