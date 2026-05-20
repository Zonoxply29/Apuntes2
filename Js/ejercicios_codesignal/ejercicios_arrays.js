// Start by creating an array representing suitcase items
let suitcase = ["shirt", "shorts", "toothbrush", "shoes"];

// Let's add "sunglasses" at the end of our suitcase
suitcase.push("sunglasses");

// Oops! We forgot socks. Let's insert socks at index 2
suitcase.splice(2, 0, "socks");
console.log("Updated suitcase: ", suitcase);

// Now, let's get the first and the last item from the suitcase
let firstItem = suitcase[0]; // 'shirt'
let lastItem = suitcase[suitcase.length - 1]; // 'sunglasses'
console.log(firstItem + " " + lastItem);

// Finally, let's remove "toothbrush" as we prefer to buy a new one at our destination
let indexOfToothbrush = suitcase.indexOf("toothbrush");
if (indexOfToothbrush > -1) {
    suitcase.splice(indexOfToothbrush, 1);
}
console.log("Final suitcase contents: ", suitcase);
// Expected output:
// Final suitcase contents: ["shirt", "shorts", "socks", "shoes", "sunglasses"]

