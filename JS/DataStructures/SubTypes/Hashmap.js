let hashmap = new Map();

// Setting key-value pairs
hashmap.set('key1', 'value1');
hashmap.set('key2', 'value2');

console.log(hashmap.get('key1')); // value1
console.log(hashmap.has('key2')); // true

// Iterating through a Map
for (let [key, value] of hashmap) {
	console.log(key + ' = ' + value);
}

// Remove a key-value pair
hashmap.delete('key2');
console.log(hashmap.has('key2')); // false
