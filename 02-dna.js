var pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};

function DNAStrand(dna){
  return dna.split("").map(function(symbol){
    return pairs[symbol];
  }).join("");
}
//Call DNAStrand("ATCG") took 8.599999994039536 milliseconds