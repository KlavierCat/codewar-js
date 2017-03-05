Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
}

// example
Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});
