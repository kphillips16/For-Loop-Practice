
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let arr = [];
  let depositSum = 0;
  let withdrawalSum = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i].hasOwnProperty("deposits")) {
      for(let j = 0; j < array[i].deposits.length; j++) {
        depositSum += array[i].deposits[j];
      }
    }
    if(array[i].hasOwnProperty("withdrawals")) {
      for(let j = 0; j < array[i].withdrawals.length; j++) {
        withdrawalSum += array[i].withdrawals[j];
      }
    }
    if(Math.abs(depositSum - withdrawalSum) !== array[i].balance) {
      arr.push(array[i]);
    }
    depositSum = 0;
    withdrawalSum = 0;
  }
  return arr;
}

console.log(getClientsWithWrongBalance([
  {
    id: 1,
    name: "Susan",
    balance: 100.32,
    deposits: [150, 30, 221],
    withdrawals: [110, 70.68, 120],
  },
  { id: 2, name: "Morgan", balance: 1100.0, deposits: [1100] },
  {
    id: 3,
    name: "Joshua",
    balance: 18456.57,
    deposits: [4000, 5000, 6000, 9200, 256.57],
    withdrawals: [1500, 1400, 1500, 1500],
  },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: 18, deposits: [100, 18], withdrawals: [100] },
]));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
