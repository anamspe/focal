// C-style For loop:

// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// const actionWhenFound = function(index) {
//   console.log(`Found Waldo at index ${index}!`);
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//For Each method:

const findWaldo = function(names, found) {
  names.forEach( (name, index) => {
    if (name === "Waldo") {
      found(index);
    }
  })
  
}

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);