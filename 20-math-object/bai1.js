// function powerup(arr){
//     var i = 0;
//     for(i ;i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             arr[i] = Math.pow(arr[i],2)
//         }
//     }
//     return arr;  
// }
// console.log(powerup([1,2,3,4,5,6]));


// function average(arr) {
    
//     var sumArr = arr.reduce((a,b) => a + b) ;
//     var ave = Math.ceil(sumArr / arr.length);
//     console.log(ave);
    
// }
// average([8, 8 , 6.75]) // 8

// function positiveNumber(arr) {
//     // your code here
//     var i = 0;  
//     for(i; i< arr.length; i++)  arr[i] = Math.abs(arr[i])
//     console.log(arr);
//   }

//   positiveNumber([-1,2,5,3,-9])

  

// function rightTriangle(a, b, c) {
//     // your code here
//     var canhHuyen = Math.max(a,b,c);
//     if((Math.pow(canhHuyen,2) === (Math.pow((a+b),2)))){
//         console.log('là tam giác vuông')
//     }
//     else console.log('không là tam giác vuông')
    
// }

// rightTriangle(1,2,3);


function trigonim(number) {
    // your code here
    var arr = [];
    arr.push(Math.sin(number).toFixed(3));
    arr.push(Math.cos(number).toFixed(3));
    arr.push(Math.tan(number).toFixed(3));
    console.log(arr);
  }
  
trigonim(45);
  


  
  
  

