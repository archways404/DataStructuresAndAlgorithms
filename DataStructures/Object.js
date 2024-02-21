let person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
};

console.log(person.firstName); // Access property

// Adding properties
person.email = 'john.doe@example.com';
console.log(person);

// Deleting properties
delete person.age;
console.log(person);

console.log(person.lastName); // Access property
