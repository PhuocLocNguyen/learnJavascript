// var a = [1, 2, 4, 8, 16]
// for(var i = a.length; i > 0; i--){
// console.log(a[i]);
// };

// var a = [1, 2, 3, 4, 5];
// var b = [10, 20, 30];
// for(var i = 0; i < a.length; i++){
//     if(i < b.length){
//         for(var j = 0; j < b.length; j++){
//             console.log(a[i] * b[j]);
//         }
//         console.log('...');
//     }
//     else{
//         console.log(a[i]);
//         console.log('...');
//     }
    
// }
var a = 1;
function calculate(start, end){
    for(start; start < end; start++){
         a *= start;
    }
    return a;
}
console.log(calculate(2, 5));