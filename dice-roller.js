// Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice.

const args = process.argv;
//const arr = args.slice(2);
//console.log(args)

const numberOfLoops = args[2];

// create a function that takes that one parameter as an argument

const rollDice = function(n) {
  let total = n;
  // for (let number of arr) {
  //   total += Number(number);
  // } 

  let randomNumber = [];

  for (let i = 0; i < total; i++) {
    // create a function that will randomly return a number between 1 and 6 (inclusive)
    randomNumber.push(Math.floor(Math.random() * 6) + 1);
    //console.log(randomNumber);  
  } 
  let final = randomNumber.join(", ")
  return (`Rolled ${total} dice: ${final}`);
};



console.log(rollDice(numberOfLoops));

