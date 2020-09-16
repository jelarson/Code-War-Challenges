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

  // Ryan's answer

  const objChecker = (obj) => {
    const arr = [...Object.values(obj)]
    const getValues = (list) => {
      const check = list.every(val => typeof val !== 'object')
      if(check) {
        return list.every(val => val === list[0])
      }
      for(let i = 0; i < list.length; i++){
        if(typeof list[i] === 'object'){
          list = [...list.slice(0, i),...Object.values(list[i]) ,...list.slice(i + 1)]
          return getValues(list)
        }
      }
    }
    return getValues(arr)
  }