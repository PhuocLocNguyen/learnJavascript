//var a = 10;

//var x = --a + a++;
// --a giảm 1 đơn vị --> trả về giá trị đã giảm rồi. 
// a++ trả về giá trị ban đầu --> rồi mới tăng 1 đơn vị
// x = 9 + 9
// x = 18
//console.log(x);


var a = 10;
var b = 18;

var x = a-- + b++ - ++b - ++a;          //a = 10, b = 18
//     x = 10 + b++ - ++b - ++a         a = 9, b = 18
//       = 10 + 18 - ++b - ++a          a = 9, b = 19 
//       = 10 + 18 - 20 - ++a           a = 9, b = 20
//       = 10 + 18 - 20 - 10            a = 10, b = 20
//       = -2
console.log(x);
