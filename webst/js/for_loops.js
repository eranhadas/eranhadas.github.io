console.log("-----------------------------");
//Print numbers from 0 to 9
for (i=0; i < 10 ; i++) {
	console.log(i);
}
console.log("-----------------------------");
//Print all animals
var animals = ["monkey", "fish", "donkey", "goat"];
for (i=0; i < animals.length ; i++) {
	console.log(animals[i]);
}
console.log("-----------------------------");
//Print just monkey and donkey
var animals = ["monkey", "fish", "donkey", "goat"];
for (i = 0; i < animals.length ; i+=2) {
	console.log(animals[i]);
}
console.log("-----------------------------");
//Print just fish and donkey
var animals = ["monkey", "fish", "donkey", "goat"];
for (i = 1; i < 3 ; i++) {
	console.log(animals[i]);
}
console.log("-----------------------------");
//Print all animals backwards
var animals = ["monkey", "fish", "donkey", "goat"];
for (i = animals.length - 1; i >= 0 ; i--) {
	console.log(animals[i]);
}
console.log("-----------------------------");
var numbers = [1,2,3,4,5];
var sum = 0;
for (i = 0; i < numbers.length ; i++) {
	sum = sum + numbers[i];
}
console.log("sum: " + sum);
console.log("-----------------------------");