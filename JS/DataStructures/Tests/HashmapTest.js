// Number of elements to test with
const ELEMENTS_COUNT = 1000000; // 1 million elements

// Generate test data
let testMap = new Map();
let testArray = [];

console.time('indexing');
for (let i = 0; i < ELEMENTS_COUNT; i++) {
	let key = `key${i}`;
	let value = `value${i}`;
	testMap.set(key, value);
	testArray.push({ key: key, value: value });
}
console.timeEnd('indexing');

// Key to search for
const searchKey = `key${ELEMENTS_COUNT - 1}`; // Worst-case scenario for array

// Test Map
console.time('Map search');
let mapValue = testMap.get(searchKey);
console.timeEnd('Map search'); // This should be very fast

// Test Array
console.time('Array search');
let arrayValue = testArray.find((obj) => obj.key === searchKey).value;
console.timeEnd('Array search'); // This will take noticeably longer
