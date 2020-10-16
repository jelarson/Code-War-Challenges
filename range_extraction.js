// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list){
  const arr = []
  let strkStart
  let strkEnder
  let currentStrk = 0
  for(let i = 0; i < list.length; i++){
    if (i < list.length -2){
      if (list[i + 1] === list[i] + 1){
        currentStrk++
        function recur(b){
          if(b < list.length - 1){
            if (list[b + 1] === list[b] + 1){
              currentStrk++
              recur(b + 1)
            } else {
              strkEnder = list[b]
            }
          } else {strkEnder = list[b]}
        }
        strkStart = list[i]
        recur(i)
        if(currentStrk === 2){
          arr.push(strkStart)
          arr.push(strkEnder)
        } else {
          arr.push(`${strkStart}-${strkEnder}`)
        }
        i+=currentStrk -1
        currentStrk = 0
        } else {
          if (currentStrk === 0){
            arr.push(list[i])
          }
    }
  } else {
    arr.push(list[i])
  }
}
  return arr.join(',')
 }

 console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

 "-6,-3-1,3-5,7-11,14,15,17-20"

 console.log(solution([ -91, -88, -87, -86, -83, -82, -81, -80, -79, -76, -73, -72, -71, -68 ]))

 // top answer - while loop

 function solution(list){
  for(var i = 0; i < list.length; i++){
     var j = i;
     while(list[j] - list[j+1] == -1) j++;
     if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
 }
 return list.join();
}

// top answer map and filter

function solution(nums){
  nums = nums.map((v, i) => nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? '-' : v);
     return nums.filter((v, i) => v != '-' || nums[i - 1] != '-').join(',').replace(/,-,/g, '-');
 }

 // top answer reducer

 function solution(list){
  return list
    .reduce((acc, n, i, arr) => {
      if(n !== arr[i - 1] + 1) {
        acc.push([n]);
      } else {
        acc[acc.length - 1].push(n);
      }
      return acc;
    }, [])
    .map(arr => arr.length > 2 ? `${arr[0]}-${arr[arr.length-1]}` : arr)
    .join(',');
}

// ryan's solutions

function solution(list){
  let str = ''
  const temp = []
  list.forEach(item => {
    const check = temp[temp.length -1] || ''
     if(check === (item - 1)){
       let num = temp.pop()
       temp.push({from: num, to: item})
     } else {
       check.to === (item - 1) ? (check.to = item) : temp.push(item)
     }
   })
    temp.forEach(item => {
      if(typeof item === 'object'){
        (item.to > item.from + 1) ? (str += `${item.from}-${item.to},`) : str += `${item.from},${item.to},`
      } else {
        str += `${item},`
      }
    })
  return str.slice(0, -1)
}

function solution(list){
  const temp = list.reduce((arr, item) => {
    const check = arr[arr.length -1] || ''
     if(check === (item - 1)){
       let num = arr.pop()
       return [...arr, {from: num, to: item}]
     }
    check.to === (item - 1) ? (check.to = item) : arr.push(item)
    return arr
   }, [])
  const final = temp.reduce((arr, item) => {
      if(typeof item === 'object'){
        return [...arr, (item.to > item.from + 1) ? `${item.from}-${item.to}` : `${item.from},${item.to}`] 
      }
      return [...arr, item]
    }, [])
  return final.join(',')
}