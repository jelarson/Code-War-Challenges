// Converting a 24-hour time like "0830" or "2030" to a
// 12-hour time (like "8:30 am" or "8:30 pm")

function to12hourtime(time) {
  let timeNum = Number(time)

  if (timeNum >= 1200) {
    return time.slice(0, 2) + ':' + time.slice(2, 4) + ' PM'
  } else {
    return time.slice(1, 2) + ':' + time.slice(2, 4) + ' AM'
  }
}

console.log(to12hourtime('0400'))
console.log(to12hourtime('1400'))

function to12hourtimeTwo(time) {
  let timeNum = Number(time)

  if (timeNum >= 2400 || timeNum < 0) {
    return 'Not a valid time. Plese enter a number between 0000 and 2359'
  }
  if (Number(time.substring(time.length - 2)) >= 60) {
    return 'Minutes must be less than 60'
  }
  if (Number(time.substring(0, 2)) === 12) {
    return '12:' + time.slice(2, 4) + ' PM'
  }
  if (timeNum >= 1300) {
    return Number(time.slice(0, 2) - 12) + ':' + time.slice(2, 4) + ' PM'
  }
  if (time === '') {
    return ''
  }
  if (Number(time.substring(0, 2)) >= 10) {
    return time.slice(0, 2) + ':' + time.slice(2, 4) + ' AM'
  }
  else {
    return time.slice(1, 2) + ':' + time.slice(2, 4) + ' AM'
  }
}