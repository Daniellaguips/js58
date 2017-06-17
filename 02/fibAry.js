var fibAry = [1, 2]
var currentElement
var secondLast
var sum

do {
	currentElement = fibAry[fibAry.length-1]
 	secondLast = fibAry[fibAry.length-2]
	sum = currentElement + secondLast
	fibAry.push(sum) 
	

} while(currentElement + secondLast < 4000001) {

		console.log([fibAry])
	}

	// [1, 2, 3]