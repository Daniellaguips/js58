var Person = function(aName, age) {
	this.name = aName
	this.age = age
	// this.age = Math.ceil(math.random() * 100)
}

Person.prototype.canDrive = function(age) { 
	return this.age >= 16
	}

}

var robert = new Person("Robert", 16)

console.log ('The person is:', robert.name)
console.log ('This persons age is: ', robert.age)

console.log("Can they drive?", robert.canDrive())
