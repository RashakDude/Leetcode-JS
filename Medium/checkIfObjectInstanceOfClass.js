/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    if (
      obj === null ||
      classFunction === null ||
      obj === undefined ||
      classFunction === undefined ||
      !(classFunction instanceof Function)
    ) {
      return false; // classFunction must be function and both values should be not null,undefined.
    }
    if (classFunction === Object) {
      // just to handle primitive inheritance
      return true;
    }
  
    // rest will be handled by instanceOf method
    if (obj.constructor === classFunction || obj instanceof classFunction) {
      return true;
    }
    return false;
  };
  
  /**
   * checkIfInstanceOf(new Date(), Date); // true
   */
  