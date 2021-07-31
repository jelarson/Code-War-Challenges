// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/javascript

function howMuchILoveYou(nbPetals) {
  const idx = nbPetals > 6 ? nbPetals % 7 : nbPetals - 1
  return ['I love you','a little', 'a lot', 'passionately', 'madly', 'not at all'][idx]
}