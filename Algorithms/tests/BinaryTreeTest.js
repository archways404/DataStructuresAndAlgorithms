function binarySearch(arr, st) {
	arr.sort((a, b) => a - b);
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);

		if (arr[mid] === st) {
			return mid; // Found the search term, return the index
		} else if (arr[mid] < st) {
			left = mid + 1; // Search in the right half
		} else {
			right = mid - 1; // Search in the left half
		}
	}

	return -1; // Search term not found
}

function compareTest(arr, st) {
	arr.sort((a, b) => a - b);
	for (i in arr) {
		if (arr[i] === st) {
			return i;
		}
	}
}

async function generateUniqueArray(size) {
	let arr = Array.from({ length: size }, (_, index) => index + 1); // Create an array of size 'size' with unique values
	for (let i = size - 1; i > 0; i--) {
		// Shuffle the array
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
	}
	return arr;
}

async function getRandomElement(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

async function main() {
	// Generate the array
	const size = 550000; // 550k unique integers
	let uniqueArray = await generateUniqueArray(size);
	let searchValue = await getRandomElement(uniqueArray);

	console.time('binarySearch');
	await binarySearch(uniqueArray, searchValue);
	console.timeEnd('binarySearch');

	uniqueArray = await generateUniqueArray(size);
	searchValue = await getRandomElement(uniqueArray);

	console.time('compareTest');
	await compareTest(uniqueArray, searchValue);
	console.timeEnd('compareTest');
}

main();
