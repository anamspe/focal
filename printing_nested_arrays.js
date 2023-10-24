const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      //Print out all its items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
};

const array = ["A", [["B", ["C"]], [[["D"]], "E"]]];
printItems(array);