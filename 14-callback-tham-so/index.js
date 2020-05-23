// function double(num) {
//     var a = num * 2
//     return a;
// }

// function sumAndDo(nums, callback) {
//     var sumArray = 0;  
//     for (var i of nums) {
//         sumArray += i; 
//     }
//     console.log(callback(sumArray));

// }

// sumAndDo([1, 2, 3], double);

function transform(numbers, callback) {
    var result = [];
    for(var i of numbers){
        result.push(callback(i));
    }
    return(result);
}
    
function double(num) {
    return num * 2;
}
    
var output = transform([2, 4, 6], double);
console.log(output);
    
