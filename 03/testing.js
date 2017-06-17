var ary = [1, 2, 3, 4 ]

var q2 = ary.reduce( function sum (total, amount) {
	return total + amount
})

console.log("total is: ", q2 / (ary.length+!))