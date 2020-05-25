// https://www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

// ("4556364607935616") == "############5616"

function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  } else {
    return (
      new Array(cc.length - 4).fill("#").join("") +
      cc.slice(cc.length - 4, cc.length)
    );
  }
}

console.log(maskify("4556364607935616"));

// Top Answer

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
