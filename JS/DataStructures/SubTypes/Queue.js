class Queue {
	constructor() {
		this.items = [];
	}

	// Add element to the queue
	enqueue(element) {
		this.items.push(element);
	}

	// Remove element from the queue
	dequeue() {
		if (this.isEmpty()) return 'Underflow';
		return this.items.shift();
	}

	// Check if the queue is empty
	isEmpty() {
		return this.items.length == 0;
	}

	// View the first element
	front() {
		if (this.isEmpty()) return 'No elements in Queue';
		return this.items[0];
	}

	// View the queue
	printQueue() {
		let str = '';
		for (let i = 0; i < this.items.length; i++) str += this.items[i] + ' ';
		return str;
	}
}

// Using the queue
let queue = new Queue();
console.log(queue.dequeue()); // Underflow
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.front()); // 20
console.log(queue.printQueue()); // 20 30
