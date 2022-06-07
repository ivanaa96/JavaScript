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

// ES6
//let and const vs. var
//var - global or function scope (if declared inside a function). Can be updated and re-declared. Because of hoisting can be used before initialization, default value is undefined.
var globalVariable = 1;
globalVariable = 3;
console.log(globalVariable);

//let - function/block scope. Can be updated, cannot be re-declared. Can be declared without initialization. Hoisting is not supported.
let number = 2;
number = 4;
console.log(number);

//const - function/block scope. Cannot be updated or re-declared. Cannot be declared without initialization. Hoisting is not supported.
const objOne = {
	age: 25,
	fullName: "Ivana Stanic",
};

//cannot change const object's properties, but we can update its values
objOne.age = 24;
console.log(objOne);

const test = "Hello, world!";

try {
	//error
	test = "Good morning, world!";
	console.log(test);
} catch (error) {
	console.log(error);
}

//ES6 classes vs. class functions
//class function
let createPerson = function (firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
};

let person = new createPerson("Ivana", "Stanic");
console.log(person, typeof person);

//class
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		console.log(this.firstName + " " + this.lastName);
	}
}

let humanOne = new Person("Marko", "Markovic");
console.log(humanOne, typeof humanOne);
humanOne.getFullName();

// Arrow functions vs. ES5 functions (Read about `this` context)
let russianLiterature = {
	books: [
		"Crime and Punishment",
		"The Idiot",
		"Demons",
		"The Brothers Karamazov",
	],
	writer: "Fyodor Dostoevsky",
	getFullInfo: function () {
		return this.books.map(function (book) {
			//this.writer - undefined because ‘this’ is referring to the function that called it which doesn’t know who is the writer. Solution: bind()
			return `${this.writer} wrote some amazing books like for example ${book}.`;
		});
	},
};
console.log(russianLiterature.getFullInfo());

let colombianLiterature = {
	books: [
		"One Hundred Years of Solitude",
		"Chronicle of a Death Foretold",
		"Love in the Time of Cholera ",
	],
	writer: "Gabriel García Márquez",
	getFullInfo: function () {
		return this.books.map((book) => {
			//a. function doesn't have its own context; 'this' refers to the scope where the function is
			return `${this.writer} wrote some amazing books like for example ${book}.`;
		});
	},
};
console.log(colombianLiterature.getFullInfo());

//Promise.then()
var buyNewLaptop = new Promise(function (resolvePromise, rejectPromise) {
	let savings = 2000;
	let priceOfLaptop = 1999;
	if (savings > priceOfLaptop) {
		resolvePromise({
			brand: "Acer",
			model: "Aspire",
		});
	} else {
		rejectPromise("I don't have enough money now.");
	}
});

buyNewLaptop.then((value) => {
	console.log("I finally got this laptop!", JSON.stringify(value));
});

buyNewLaptop.catch((reason) => {
	console.log("I couldn't buy the laptop because", reason);
});

console.log(buyNewLaptop);

//async/await
function getRandomPromise() {
	return new Promise((resolvePromise, rejectPromise) => {
		setTimeout(() => {
			Math.floor(Math.random() * 11) >= 5
				? resolvePromise({ status: "success" })
				: rejectPromise(new Error("Oops! Something happened!"));
		}, 2000);
	});
}

async function tryPromise() {
	try {
		const result = await getRandomPromise();
		console.log(result);
	} catch (error) {
		console.log(error);
	}
}
tryPromise();
