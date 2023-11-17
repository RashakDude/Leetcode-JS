/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let count = 0;
  let a = 0;
  let b = 1;
  while (true) {
    if (count == 0) {
      yield a;
      count++;
    } else if (count == 1) {
      yield b;
      count++;
    } else {
      yield a + b;
      const sum = a + b;
      a = b;
      b = sum;
    }
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
