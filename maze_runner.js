// https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript

var maze = [[1,1,1,1,1,1,1],
            [1,0,0,0,0,0,3],
            [1,0,1,0,1,0,1],
            [0,0,1,0,0,0,1],
            [1,0,1,0,1,0,1],
            [1,0,0,0,0,0,1],
            [1,2,1,0,1,0,1]];

function mazeRunner(maze, directions) {
  let vert = 0
  let horiz = 0
  maze.forEach((row, vertIdx) => {
    row.forEach((num, horizIdx) => {
      if (num === 2){
        vert = vertIdx
        horiz = horizIdx
      }
    })
  })
  directions.forEach((direction) => {
    if (vert === maze.length || horiz === maze.length || horiz < 0 || vert < 0){
      return 'Dead'
    }
    if (maze[vert][horiz] === 1){
      return 'Dead'
    }
    if (maze[vert][horiz] === 3){
      return 'Finish'
     }
    if (direction === 'N'){
      vert--
    }
    if (direction === 'E'){
      horiz++
    }
    if (direction === 'S'){
      vert++
    }
    if (direction === 'W'){
      horiz--
    }
  })
  if (vert === maze.length || horiz === maze.length || horiz < 0 || vert < 0){
    return 'Dead'
  }
  if (maze[vert][horiz] === 1){
    return 'Dead'
  }
  if (maze[vert][horiz] === 3){
    return 'Finish'
   }
  return 'Lost'
}

console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","E","E","N","N","E"]))
console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","E","E","E","W","W"]))
console.log(mazeRunner(maze, ["N","N","N","N","N","E","E","S","S","S","S","S","S"]))

// top answer

function mazeRunner(maze, dirs) {
  var y = maze.findIndex(arr => arr.includes(2));
  var x = maze[y].indexOf(2);
  var curPos;
  for (var i = 0; i < dirs.length; i++) {
    if (dirs[i] === 'N') y--;
    if (dirs[i] === 'S') y++;
    if (dirs[i] === 'W') x--;
    if (dirs[i] === 'E') x++;
    if (!maze[y]) return 'Dead';
    curPos = maze[y][x];
    if (curPos === 3) return 'Finish';
    if (curPos === 1 || curPos === undefined) return 'Dead';
  }
  return 'Lost';
}