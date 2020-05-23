var a = [1, 2];
var b = [1, 2];
console.log(a === b);   //false
//So sánh object với arraylisit là so sánh vùng nhớ với nhau
// a,b là 2 mảng được khai báo ở 2 vùng nhớ khác nhau vì vậy chúng không bằng nhau
var a = {
    foo: 'bar'
  };
  
  var b = {
    foo: 'bar'
  };
  
  console.log(a === b);  //false
 // a,b là 2 object được khai báo ở 2 vùng nhớ khác nhau vì vậy chúng không bằng nhau
var a = '1000';
var b = '200';

console.log(a > b); //false
// So sánh chuỗi là so sánh các ký tự theo unicode
// So sánh những kí tự đầu tiên của 2 chuỗi.
// Nếu kí tự của chuỗi đầu lớn hơn (hay nhỏ hơn) chuỗi sau, ta sẽ tính luôn chuỗi đầu lớn hơn (hay nhỏ hơn) chuỗi sau.
// Nếu kí tự đầu của 2 chuỗi bằng nhau, ta sẽ so sánh kí tự thứ hai của hai chuỗi tương tự như trước.
// Lặp lại cho tới khi kết thúc chuỗi bất kì.
// Nếu cả hai chuỗi kết thúc cùng lúc thì cả hai chuỗi bằng nhau. Còn không chuỗi dài hơn sẽ lớn hơn.

// a, b là 2 chuỗi ---> lấy ký tự đầu là 1 < 2 trong bảng mã unicode  