// function removeEnd(arr, n) {
// 	for (var i = 0 ; i < arr.length; i++) {
//         if(arr[i] === n){
//             arr.splice(i, 1);
//         }
//     }

//     return arr;
// }

// console.log(removeEnd([2, 3, 1, 8, 9, 7], 7));
var a =[];
function first(arr, n) {
  for(var i = 0; i < n; i++){
    a.push(arr[i]);
  }
  return a;
}

console.log(first([1, 2, 3], 2)); // expect [1, 2]
