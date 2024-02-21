async function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[arr.length - 1];
	const leftArr = [];
	const rightArr = [];

	for (const el of arr.slice(0, arr.length - 1)) {
		el < pivot ? leftArr.push(el) : rightArr.push(el);
	}

	return [...(await quickSort(leftArr)), pivot, ...(await quickSort(rightArr))];
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
	const size = 1200000; // 1.2m unique integers
	let uniqueArray = await generateUniqueArray(size);

	console.time('quickSort');
	await quickSort(uniqueArray);
	console.timeEnd('quickSort');

	newArray = await generateUniqueArray(size);
	let st;

	console.time('compareTest');
	await compareTest(newArray, st);
	console.timeEnd('compareTest');
}

main();
