// https://www.codewars.com/kata/586538146b56991861000293/train/javascript

function to_nato(words) {
  const obj = {
    a: 'Alfa',
    b: 'Bravo',
    c: 'Charlie',
    d: 'Delta',
    e: 'Echo',
    f: 'Foxtrot',
    g: 'Golf',
    h: 'Hotel',
    i: 'India',
    j: 'Juliett',
    k: 'Kilo',
    l: 'Lima',
    m: 'Mike',
    n: 'November',
    o: 'Oscar',
    p: 'Papa',
    q: 'Quebec',
    r: 'Romeo',
    s: 'Sierra',
    t: 'Tango',
    u: 'Uniform',
    v: 'Victor',
    w: 'Whiskey',
    x: 'Xray',
    y: 'Yankee',
    z: 'Zulu'
  }
	return words.toLowerCase().split(' ').join('').split('').map(x=>['.','!','?'].includes(x) ? x : obj[x]).join(' ')
}

console.log(to_nato('If you can read'))