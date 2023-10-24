const raisinAlarm = function (cookie) {
  // Put your solution here
  for (let each of cookie) {
    if (each === '🍇') {
      return 'Raisin alert!';
    }
  } return 'All good!';
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const israisinthere = function(cookies){
  for (let x = 0; x < cookies.length; x++){
    if (cookies[x] === "🍇"){
      return true;
    } 
  }
  return false; 
} 

const raisinAlarmArray = function (cookies) {
  let alertarray = [];
  for (let i = 0; i < cookies.length; i++){
    if (israisinthere(cookies[i])){
      alertarray.push("Raisin alert!");
    } else {
      alertarray.push("All good!");
    }
  } 
  return alertarray;
}

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
);