const args = process.argv;
let important = args.slice(2);

//AI suggestion
/*if (important.length < 2) {
  console.error('Please provide at least two arguments');
  process.exit(1);
}*/

function sum(important) {
  let total = 0;
  for (let number of important) {
    // AI suggestion:
    /*  if (isNaN(number)) {
      console.error(`"${number}" is not a number.`);
      process.exit(1);
    }*/
    total += Number(number);
  }
  return total;
}

console.log(sum(important));
