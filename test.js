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
console.log(q); //not visible, outside of the scope
