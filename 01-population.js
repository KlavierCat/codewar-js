function nbYear(p0, percent, aug, p) {
     var year = 1;

     while ((p0 * (1 + percent/100) + aug) < p) {
         p0 = p0 * (1 + percent/100) + aug;
         year += 1;
     }

     return year;
}
// Call to nbYear(1500, 5, 100, 5000) took 8.234999999869615 milliseconds.