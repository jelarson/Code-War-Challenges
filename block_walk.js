// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  let vert = 0;
  let horz = 0;
  walk.forEach((element) => {
    if (element === "n") {
      vert += 1;
    }
    if (element === "s") {
      vert += -1;
    }
    if (element === "e") {
      horz += 1;
    }
    if (element === "w") {
      horz += -1;
    }
  });
  if (horz === 0 && vert === 0 && walk.length === 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));

// top answer

function isValidWalk(walk) {
  function count(val) {
    return walk.filter(function (a) {
      return a == val;
    }).length;
  }
  return (
    walk.length == 10 && count("n") == count("s") && count("w") == count("e")
  );
}
