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
