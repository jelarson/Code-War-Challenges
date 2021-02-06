// https://www.codewars.com/kata/5ff6060ed14f4100106d8e6f/train/javascript

function uncensor(infected, discovered) {
  let counter = 0
  let ans = infected.split('')
  ans.forEach((x,idx)=>{
    if (x === '*'){
      ans[idx] = discovered.split('')[counter]
      counter++
    }
  })
  return ans.join('')
}

console.log(uncensor('*h*s *s v*ry *tr*ng*', 'Tiiesae'))