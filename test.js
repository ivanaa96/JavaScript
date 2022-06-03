//variable scope
let a = "variable outside the function";

function scopeOfVariable() {
	var q = "variable inside the function";
	for (let i = 0; i <= 3; i++) {
		var x = "test var variable";
		let y = "test let variable";
	}
	console.log(x); //visible
	// console.log(y); //outside of the scope
	console.log(a); //visible
}
scopeOfVariable();
// console.log(q); //not visible, outside of the scope

//anonymous function
//1. Using the built-in map array function and an anonymous function, square all items in a number array
let array = [1, 2, 3];
console.log(array.map((el) => el * el));

// 2. Write an IIFE function using an anonymous function which sums two numbers and logs the sum out to the console
((el1, el2) => {
	console.log(el1 + el2);
})(5, 10);

//3. Make this function an arrow function
let timesTwo = (num) => num * 2;
console.log(timesTwo(5));
