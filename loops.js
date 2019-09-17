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

function min(numbers) {
  let currentMin = numbers[0];
  let i = 1;
  while (i < numbers.length) {
    if (currentMin > numbers[i]) {
      currentMin = numbers[i];
    }
    i++;
  }
  return currentMin;
}

console.log(min([1, 10, 100, -100, 1000]));
