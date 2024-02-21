let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5); // This will not be added as 5 is already in the set

console.log(mySet.has(1)); // Check if a value exists
console.log(mySet.size); // Get the size of the set

mySet.delete(5); // Remove a value
console.log(mySet);
