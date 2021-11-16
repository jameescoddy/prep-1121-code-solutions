var person = {
  firstName: 'Cody',
  lastName: 'Crawford',
  hobby: 'Video Games'
};
console.log(person);

var firstName = person.firstName;
var lastName = person.lastName;
var fullName = firstName + ' ' + lastName;
console.log("The person's name is:", fullName);

person.job = 'Superstar';
console.log("This person's current job is:", person.job);

person.previousJob = 'Ex-Race Car Driver';
console.log("This person's previous job is:", person.previousJob);

console.log(person);
