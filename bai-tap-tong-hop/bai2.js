// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
// console.log(capitalize("abc def"));

function capitalize(str) {
    var cutStr = str.split(" ");
    var newStr ='';
    var i;
    for(i of cutStr){
        newStr += i.charAt(0).toUpperCase() + i.slice(1).toLowerCase() + " ";
    }
    return newStr;
}
console.log(capitalize("aBD aaa"));