// function sortNumbers(arr) {
//     arr.sort((a,b) => a - b);
//     console.log(arr);
// }
// sortNumbers([5, 1, 3, 2]); 


// function lengthSort(arr) {
//     arr.sort((a,b) => a.length - b.length);
//     console.log(arr);
//   }
//   lengthSort(["abc", "a", "abcd", "ab"]);

var students = [
    { name: 'A', score: 100 },
    { name: 'B', score: 10 },
    { name: 'C', score: 101 },
    { name: 'D', score: 50 },
    { name: 'E', score: 75 }
  ];

function getTopStudents(students) {
    students.sort((a,b) => b.score - a.score);
    var a = students.slice(0,3);
    console.log(a);
}
getTopStudents(students);
  