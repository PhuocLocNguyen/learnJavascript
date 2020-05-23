var numberArr = [0, 2, 8, 5, 3, 10];
function fiveAndGreaterOnly(arr) {
		// return arr.filter(function(x){
        //     return x >= 5;
        // });
        return arr.filter(x => x >= 5);  //ES6
};

function evensOnly(arr) {
	// return arr.filter(function(x){
    //     return x % 2 === 0;
    // });
    return arr.filter(x => x % 2 === 0);
};

function findFirstEvenNumber(arr) {
    // return arr.find(function(x){
    //     return x % 2 === 0;
    // });
    return arr.find(x => x % 2 === 0);
};
function findDivisibleNum(arr, x) {
    // return arr.find(function(y){
    //     return y % x === 0;
    // });
    return arr.find(y => y % x  === 0);
};
  
console.log(fiveAndGreaterOnly(numberArr));
console.log(evensOnly(numberArr));
console.log(findFirstEvenNumber(numberArr));
console.log(findDivisibleNum([1, 3, 4], 2));

