const swapper = function (key1, object1, key2, object2) {
  console.log("Swap!");

  // Put your solution here
const arr1 = Object.keys(object1);
const arr2 = Object.keys(object2);

let v1 = 0;
let k1 = 0;
for (let keyA of arr1) {

  if (keyA === key1) {
    k1 = keyA;
    v1 = object1[k1];
  }
}
// console.log(v1); 

let v2 = 0;
let k2 = 0;
for (let keyB of arr2) {

  if (keyB === key2) {
    k2 = keyB
    v2 = object2[k2];
  }
}
// console.log(v2);

object1[k1] = v2;
object2[k2] = v1;

  console.log("object1: ", object1);
  console.log("object2: ", object2);
};



swapper("a", { a: 1, b: 2, c: 3 }, "c", { a: 4, b: 3, c: 5 });
swapper("b", { a: 8, b: 7, c: 6 }, "d", { a: 5, b: 1, c: 2, d: 12 });
swapper("c", { a: 1, b: 3, c: 3, d: 7 }, "c", { a: 4, b: 0, c: 5 });


