// function reverse(str) {
// 	console.log(str.split('').reverse().join(''));
// }
// reverse("abc");

function reverse(str) {
    var newStr ="";
    var i = 0;
	for(i = str.length -1; i >= 0; i--){
        newStr += str[i] ;
    }
    console.log(newStr);
}
reverse("abc");


