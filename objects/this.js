// const person = {
//   firstName: 'Bob',  // <= property containing data
//   lastName: 'Smith' // <= ditto
// };

// console.log('Hello, ' + person.firstName + ' ' + person.lastName);

const person = {
  firstName: 'Bob',
  lastName: 'Smith',
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

// Nice, now I can just say:
console.log('Hello, ' + person.fullName());
// And it's much "cleaner" every time I need their full name!