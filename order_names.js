// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

function list(names) {
  let values = [];
  names.forEach((obj) => {
    values.push(Object.values(obj)[0]);
  });
  if (values.length === 0) {
    return "";
  }
  if (values.length === 1) {
    return `${values[0]}`;
  }
  if (values.length === 2) {
    return values.join(" & ");
  }
  if (values.length > 2) {
    return `${values.slice(0, values.length - 1).join(", ")} & ${
      values[values.length - 1]
    }`;
  }
}

// Top answer
function list(names) {
  return names.reduce(function (prev, current, index, array) {
    if (index === 0) {
      return current.name;
    } else if (index === array.length - 1) {
      return prev + " & " + current.name;
    } else {
      return prev + ", " + current.name;
    }
  }, "");
}
