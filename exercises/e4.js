// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {
  // Your code goes here...
  let min;
  for(let i = 0; i < array.length; i++) {
    if(array[i] < min || min === undefined) {
      min = array[i];
    }
  }
  return min;
}

export function findMaxValueInArray(array) {
  // Your code goes here...
  let max;
  for(let i = 0; i < array.length; i++) {
    if(array[i] > max || max === undefined) {
      max = array[i];
    }
  }
  return max;
}

console.log(findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]));
console.log(findMinValueInArray([2, 45, 32, 3, 0, 46, 12]));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
