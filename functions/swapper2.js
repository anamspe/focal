// function swapper(key1, object1, key2, object2) {
//   console.log("Swap!");

//   if (key1 in object1 && key2 in object2) {
//     let value1 = object1[key1];
//     let value2 = object2[key2];

//     object1[key1] = value2;
//     object2[key2] = value1;
//   } else {
//     console.log("One or both of the keys do not exist in the objects.");
//   }

//   console.log("object1: ", object1);
//   console.log("object2: ", object2);
// }

function swapper(key1, object1, key2, object2) {
  console.log("Swap!");

  // Iterate over the keys in object1
  for (let key of Object.keys(object1)) {
    if (key === key1) {
      // Swap values between object1 and object2
      object1[key] = object2[key2];
      object2[key2] = object1[key];
    }
  }

  // Iterate over the keys in object2
  for (let key of Object.keys(object2)) {
    if (key === key2) {
      // Swap values between object1 and object2
      object1[key1] = object2[key];
      object2[key] = object1[key1];
    }
  }

  console.log("object1: ", object1);
  console.log("object2: ", object2);
}

swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });