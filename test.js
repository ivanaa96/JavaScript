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

//JS Array
let colors = ["red", "green", "blue"];

//for loop
for (let i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

//forEach
colors.forEach((color) => console.log(color));

//1. Write a function that will rotate an array to the right by a certain number of "steps".
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function rotateArray(array, step) {
	for (let i = 0; i < step; i++) {
		array.unshift(array.pop());
	}
	return array;
}

console.log(rotateArray(arr1, 5));

//2. Write a function that uses the native Array .reduce method to sum up an array of numbers, but starting at 50.
function sumArray(array) {
	return array.reduce((sum, curr) => sum + curr, 50);
}

console.log(sumArray(arr1));

//3.Create a function that takes a number as an argument and returns an array. The first element of the array should be 0, and then each element should increase by 1 until it reaches the input number. Then, each element should count back down to 0.
function createArray(number) {
	let array = [number];

	for (let i = number - 1; i >= 0; i--) {
		array.push(i);
		array.unshift(i);
	}

	return array;
}

console.log(createArray(3));

//4. Write a function zooInventory that takes a zoo's inventory of animals (represented using nested arrays) and returns an array of strings that describe each animal's name, species, and age.
var myZoo = [
	["King Kong", ["gorilla", 42]],
	["Nemo", ["fish", 5]],
	["Punxsutawney Phil", ["groundhog", 11]],
];

function arrayOfStrings(arr) {
	let array = arr.map((el) => {
		const flattened = el.flat(3);
		flattened.splice(2, 0, "is");
		return flattened.join(" ");
	});
	console.log(array);
}

arrayOfStrings(myZoo);

//JS/JSON Objects
/*Create a JS person object which contains firstName, lastName and age.
Create that same object but in JSON format
Use JSON.parse to convert the second object to a JS object
Use JSON.stringify to convert the first object to a JSON object */

let personOne = {
	firstName: "Ivana",
	lastName: "Stanic",
	age: 25,
};

let personJSON =
	'{"firstName" : "Ivana", "lastName" : "Stanic", "age" : "25"  }';

let personParse = JSON.parse(personJSON);
// console.log(typeof personParse);
let personStringify = JSON.stringify(personOne);
// console.log(typeof personStringify);

/* Create a JS array of numbers
Create a JSON array of numbers
Convert the second array to a JS array and loop over it.  */
let jsArray = [1, 2, 3, 4];
let JsonArray = '{"array":[1,2,3,4]}';

let convertedArray = JSON.parse(JsonArray);
let finalArray = Object.values(convertedArray);

for (let i = 0; i < finalArray.length; i++) {
	console.log(finalArray[i]);
}
