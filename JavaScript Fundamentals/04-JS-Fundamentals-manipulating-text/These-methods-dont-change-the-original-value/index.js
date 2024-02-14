let original = "the original is not Capitalized CorrectlY.";
console.log(original);

original.toLowerCase();
console.log(original);

original.replace("the", "The");
console.log(original);

let lowerCased = original.toLowerCase();
let capitalized = lowerCased.replace("the", "The");
let corrected = capitalized.replace("not ", "");

// 'original' is still what it was at the start!
// the changed versions are stored in lowerCased, capitalized, and corrected
console.log("original variable:");
console.log(original);

console.log("lowerCased variable:");
console.log(lowerCased);

console.log("capitalized variable:");
console.log(capitalized);

console.log("corrected variable:");
console.log(corrected);