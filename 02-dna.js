var pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};

function DNAStrand(dna){
  // map belongs to Array.prototype, and need to 'split' before and 'joint' after
  // while replace belongs to String.prototype, takes and returns a string
  dna.replace(/./g, function(match){
    return pairs[match]
  });
}
//Call DNAStrand("ATCG") took 0.1599999964237213 milliseconds