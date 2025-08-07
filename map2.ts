let map = new Map<string, number>();
map.set("apple", 2);
map.set("banana", 5);

console.log(map.get("apple")); // Output: 2

let userAge = new Map<string, number>();
userAge.set("Ankit", 22);

console.log(`Ankit's age is ${userAge.get("Ankit")}`); // Output: Ankit's age is 22
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Output:
// apple: 2
// banana: 5
