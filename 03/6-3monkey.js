var monkey = function(name, species, foodsEaten) {
	this.name = name
	this.species = species
	this.foodsEaten = foodsEaten
}

var monkey1 = new monkey('Tom', 'madrill', 'bananas') 
var monkey2 = new monkey('jerry', 'howler', 'berries')
var monkey3 = new monkey('greg', 'proboscis', 'nuts')
var monkeys = [ monkey1, monkey2 , monkey3]

monkey.prototype.eatSomething = function() {
	console.log(this.name , 'ate', this.foodsEaten)
}

monkey.prototype.introduce = function() {
	console.log('I am', this.name, 'of the', this.species, 'and I eat', this.foodsEaten)
}

for (i=0, i = monkeys, i++) {

 console.log(monkey[].eatSomething)
 console.log(monkey[].introduce)

}
