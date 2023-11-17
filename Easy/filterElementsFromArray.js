/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  var filtered = [];
  arr.forEach((element, index) => {
    if (fn(element, index)) {
      filtered.push(element);
    }
  });
  return filtered;
};
