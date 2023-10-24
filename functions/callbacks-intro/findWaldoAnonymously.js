const findWaldo = function(names, actionWhenFound) {
  names.forEach( (name, index) => {
    if (name === "Waldo") {
      actionWhenFound(index);
    }
  })
  
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log(`Found Waldo at index ${index}!`);
});