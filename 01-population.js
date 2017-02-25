function nbYear(p0, percent, aug, p) {
    var year;

    for (year = 0; p0 < p; year++) {
      p0 += p0 * (percent/100) + aug;
    }

    return year;
}
// Call to nbYear(1500, 5, 100, 5000) took 0.1849999998230487 milliseconds.