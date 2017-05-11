var x = 'Hello ';

console.log(x + 'Robert');
console.log(x + 'James');

var age = 65;

if (age >= 21) {
	console.log("You may legally have a drink!");

	if (age < 25) { console.log("You probably want Jaeger"); }
    if (age >= 25 && age <60) { console.log("You want an old fashion"); }
    if (age >= 60) { console.log("You want brandy"); }
}

var counter = 1;

while (counter < 10) {
	console.log("woohoo!" + counter);
	
	if(counter % 3 == 0){
		console.log("pro tip")
		break
	}

	counter++ 
}