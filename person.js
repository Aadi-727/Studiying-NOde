class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greeting() {
		console.log(`My name is ${this.name}, and I am ${this.age}`);
	}
	getAge() {
		console.log(`I am ${this.age} years old`);
	}
	getDate() {
		const date = new Date().getFullYear();
		console.log(date);
	}
}

module.exports = Person;
