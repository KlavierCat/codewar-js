function DNAStrand(dna){
  var dnaPair = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  };
  var dnaOpp = "";
  for (var i = 0; i < dna.length; i++) {
    dnaOpp += dnaPair[dna[i]];
  }
  return dnaOpp;
}
//Call DNAStrand("ATCG") took 8.249999999068677 milliseconds