function nbYear(p0, percent, aug, p, years = 0) {
  return (p0 < p) ? nbYear(p0 * (1 + percent/100) + aug, percent, aug, p, years + 1) : years;
}
// Call to nbYear(1500, 5, 100, 5000) took 7.629999999888241 milliseconds.