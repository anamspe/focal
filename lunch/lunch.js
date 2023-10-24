/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function(hungry, availableTime) {
  //console.log("I don't know what to do!");
  // if not hungry, get back to work
  if (!hungry) {
    console.log("If you're not feeling hungry, just get back to work ;)");
    // if hungry, decide what to do based on available time
  } else if (hungry) {
    if (availableTime < 20) {
      console.log("Pick something up and eat it in the lab :)");
    } else if (availableTime >= 20 && availableTime <= 30) {
      console.log("Try eating at a nearby place :D");
    } else if (availableTime > 30) {
      console.log(
        "Don't forget you're in a bootcamp, reconsider how much time you actually have to spare :')"
      );
    }
  }
};

/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);