'use strict';

function max(numbers) {
  let currentMax = numbers[0];
  let i = 1;
  while (i < numbers.length) {
    if (currentMax < numbers[i]) {
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}

console.log(max([1, 10, 100, -100, 1000]));
