function bubbleSort(arr) {
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
