var B = 99 

for ( B = 99; B > 1; B--) {
	console.log (B, 'bottles of beer on the wall, ' + B, 'bottles of beer. Take one down and pass it around, ' + (B-1), 'bottles of beer on the wall.')
}

console.log ("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall. No more bottles of beer on the wall, no more bottles of beer.  Go to the store and buy some more, 99 bottles of beer on the wall.")

// -------------------------

var Chance = require('chance')
var chance = new Chance()

var add = [chance.address(), chance.city(), chance.state(), chance.zip()] 
	console.log(add)

