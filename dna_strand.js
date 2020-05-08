// In DNA strings, symbols "A" and "T" are complements
// of each other, as "C" and "G". You have function with
// one side of the DNA (string, except for Haskell); you
// need to get the other complementary side. DNA strand
// is never empty or there is no DNA at all (again, except
// for Haskell).

function DNAStrand(dna) {
  newStrand = []
  dna.split('').forEach(element => {
    if (element === 'A') {
      newStrand.push('T')
    }
    if (element === 'T') {
      newStrand.push('A')
    }
    if (element === 'G') {
      newStrand.push('C')
    }
    if (element === 'C') {
      newStrand.push('G')
    }
  });
  return newStrand.join('')
}

console.log(DNAStrand('ATTGC'))