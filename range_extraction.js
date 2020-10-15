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
        // console.log(currentStrk)
        if(currentStrk === 2){
          arr.push(strkStart)
          arr.push(strkEnder)
        } else {
          arr.push(`${strkStart}-${strkEnder}`)
        }
        i+=currentStrk -1
        currentStrk = 0
        // console.log('i have an active streak!')
        } else {
          if (currentStrk === 0){
            arr.push(list[i])
          }
    }
  }}
  return arr.join(',')
 }

 console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

 "-6,-3-1,3-5,7-11,14,15,17-20"