var pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};

function DNAStrand(dna){
  dna.replace(/\D/g, function(match){
    return pairs[match]
  });
}
//Call DNAStrand("ATCG") took 0.41499999910593033 milliseconds