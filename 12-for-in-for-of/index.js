// var a = 1;
// function multiply(arr) {
//     for (var i of arr) {
//         a *= i;
//     }
//     return a;
// }
// console.log(multiply([2, 3, 4]));

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };

function getkey(object){
    for (var key in object) {
        console.log(key);
        for (var key2 in object[key]) {
            console.log(key2);
            var childObject  = object[key];
            for (var key3 in childObject[key2]) {
                console.log(key3);
            }    
        }    
    }
}

getkey(apartment);


