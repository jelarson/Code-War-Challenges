const obj = {
  a: 1,
  b: 1,
  c: {
    a1: 1,
    b1: 1,
    c1: {
      a2: 1
      }
    }
  }

  function leaf(goofy) {
    const matching = Object.values(goofy)[0]
    const arr = []

    function checker(arr1){
      Object.values(arr1).forEach((item) => {
        if (typeof item === 'number'){
          arr.push(item)
        }
        if (typeof item === 'object'){
          checker(item)
        }
      })
    }
    checker(goofy)

    return new Set(arr).size === 1
  }

  console.log(leaf(obj))