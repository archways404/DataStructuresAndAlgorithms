async function bubbleSort(arr) {
	let n = arr.length;
	let swapped;
	do {
		swapped = false;
		for (let i = 1; i < n; i++) {
			if (arr[i - 1] > arr[i]) {
				[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]; // Swap elements
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
}

async function compareTest(arr, st) {
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

async function main() {
	// Generate the array
	const size = 25000; // 250k unique integers
	let uniqueArray = await generateUniqueArray(size);

	console.time('bubbleSort');
	await bubbleSort(uniqueArray);
	console.timeEnd('bubbleSort');

	newArray = await generateUniqueArray(size);
	let st;

	console.time('compareTest');
	await compareTest(newArray, st);
	console.timeEnd('compareTest');
}

main();
