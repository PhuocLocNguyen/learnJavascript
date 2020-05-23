function removeDuplicate(array) {
    var i = 0;

    for(i; i < array.length; i++){
        var idx = array.indexOf(array[i]);
        while (idx != -1) {
              idx = array.indexOf(array[i], idx + 1);
              if(idx != -1){
                  array.splice(idx, 1);
              }
            }
        
    }
    console.log(array);
  }
  removeDuplicate([1, 1, 2, 3, 1, 1, 3]);


// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);