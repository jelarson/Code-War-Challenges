// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript

function songDecoder(song) {
  return song
    .split("WUB")
    .filter((word) => {
      return word.trim();
    })
    .join(" ");
}

console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));

// Top Answer

function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim();
}
