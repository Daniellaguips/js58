var numberList = [ 1 , 5 , 2 , 20 , 7 , 90 , 3 ]

function bigOne(number) { 
	numberList.sort(function(a, b){return a-b})
	console.log(numberList.pop())
}

bigOne() 