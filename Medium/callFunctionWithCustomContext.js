/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function (context, ...args) {
    const fn = this;
    if (typeof context !== "object" || context === null) {
      context = window || global;
    }
    const key = Symbol();
    context[key] = fn;
    const result = context[key](...args);
    delete context[key];
    return result;
  };
  
  /**
   * function increment() { this.count++; return this.count; }
   * increment.callPolyfill({count: 1}); // 2
   */
  