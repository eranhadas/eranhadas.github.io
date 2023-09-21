function sayHi() {
	alert("Hi there!");
}

function saySomething(someText) {
	alert(someText);
}

function sayHi2() {
	saySomething("Hi there 2!");
}

function logHi() {
	console.log("Hello there!");
	console.log ("On: " + Date());
}

function sayHiAndLogHi() {
	sayHi();
	console.log("What's up?");
	logHi();
}

