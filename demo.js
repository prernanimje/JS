((Promise) => {
    const originalThen = Promise.prototype.then;
    const originalCatch = Promise.prototype.catch;
  
    Promise.prototype.then = function (...args) {
      console.log("Called .then on %o with arguments: %o", this, args);
      return originalThen.apply(this, args);
    };
    Promise.prototype.catch = function (...args) {
      console.error("Called .catch on %o with arguments: %o", this, args);
      return originalCatch.apply(this, args);
    };
  })(Promise);
  
  // calling catch on an already resolved promise
  Promise.resolve().catch(function XXX() {});