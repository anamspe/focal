// const titleCase = function(string) {
//   string = string.toLowerCase().split(' ');

//   for(let i = 0; i < string.length; i++) {
//     string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
//   }

//   string = string.join(' ');
//   return string;
// }

const titleCase = function(text) {
  if (text === "") {
    return "";
  }

  text = text.toLowerCase().split(' ');
  let titleCasedWords = [];

  for (let word of text) {
    word = word[0].toUpperCase() + word.slice(1);
    titleCasedWords.push(word);
  }

  text = titleCasedWords.join(' ');
  return text;
};

console.log(titleCase("I'm alL fOr peOplE foLloWiNg tHEir dReAmS."));
console.log(titleCase("IF I WRITE THIS, IT LOOKS LIKE I'M SCREAMING!!!"))
console.log(titleCase("i don't remember where the shift or caps lock button are located in my keyboard"))