'use strict';
// hello goodbye
function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}
function hello() {
  console.log('Hello world');
}
function goodbye() {
  console.log('Goodbye world');
}

// repeat(hello, 5);
// repeat(goodbye, 5);

function filter(arr, fn) {
  let newArray = [];
  arr.forEach(arritem => {
    if (fn(arritem) === true) {
      newArray.push(arritem);
    }
  });
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that
  // only returns a boolean
  return name[0] === 'R';
});

// console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// Functions as Return Values

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter += 1;
    let times = 'time';
    if (warningCounter > 1) {
      times = 'times';
    }
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(
      `The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`
    );
  };
}

const warning = hazardWarningCreator('Rocks on the Road');
// warning('Dallas');
// warning('St Pete');
// warning('Denver');

function turtleSteps(arr) {
  let newArray = arr.filter(item => item[0] >= 0 && item[1] >= 0);

  let numSteps = newArray.map(step => step[0] + step[1]);
  let i;
  let totalSteps = numSteps.forEach((steps, i) => {
    let stepcounter = 'steps';
    if (steps <= 1) {
      stepcounter = 'step';
    }
    i += 1;
    console.log(`Movement #${i}: ${steps} ${stepcounter}`);
  });
}

// turtleSteps([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]);

function reducer(finalSent, word) {
  // console.log(word);
  if (word.length == 3) {
    return finalSent.concat(' ');
  } else {
    return finalSent.concat(word.charAt(word.length - 1).toUpperCase());
  }
}

let sentence =
  'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const newArr = sentence.split(' ');
// console.log(newArr);
console.log(newArr.reduce(reducer, ''));
