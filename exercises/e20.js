
// EXERCISE 20
// Return an array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  let arr = [[], []];
  let pushed = false;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === "a") {
        arr[0].push(array[i]);
        pushed = true;
        break;
      }
    }
    if (pushed === false) {
      arr[1].push(array[i]);
    }
    pushed = false;
  }
  return arr;
}

console.log(separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
