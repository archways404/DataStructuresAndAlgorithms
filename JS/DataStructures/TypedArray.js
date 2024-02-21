let buffer = new ArrayBuffer(16); // create a buffer of 16 bytes
let int32View = new Int32Array(buffer); // view the buffer as an array of 32-bit integers

int32View[0] = 42;
console.log(int32View[0]);
