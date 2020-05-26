// https://www.codewars.com/kata/570db6dade4dc8966600051c/train/javascript

let arr = [
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1],
];

function sc(watermelon) {
  let totalSeedsSpit = 0;
  function bite(array) {
    let wmBite = [
      ...array[0].splice(0, 4),
      ...array[1].splice(0, 4),
      ...array[2].splice(0, 4),
      ...array[3].splice(0, 4),
    ];
    let seedCount = 0;
    if (array[0].length === 0) {
      array.shift();
      array.shift();
      array.shift();
      array.shift();
    }

    wmBite.forEach((seed) => {
      if (seed === 1) {
        seedCount += 1;
      }
    });
    if (seedCount > 5) {
      totalSeedsSpit += seedCount;
    }
    if (array.length > 0) {
      return bite(array);
    } else {
      return totalSeedsSpit;
    }
  }
  return bite(watermelon);
}

console.log(sc(arr));

// Top Answer

function sc(w) {
  a = b = c = d = 0;
  for (y = 4; y--; ) {
    for (x = 4; x--; ) {
      a += w[y][x];
      b += w[y][x + 4];
      c += w[y + 4][x];
      d += w[y + 4][x + 4];
    }
  }
  return a * (a > 5) + b * (b > 5) + c * (c > 5) + d * (d > 5);
}
