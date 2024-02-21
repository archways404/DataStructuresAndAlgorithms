let weakSet = new WeakSet();
let obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true

let weakMap = new WeakMap();
let key = {};
weakMap.set(key, 'value');
console.log(weakMap.get(key)); // "value"
