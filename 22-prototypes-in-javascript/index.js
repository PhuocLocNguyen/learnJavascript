// function Student(name, level){
//     this.name = name;
//     this.level = level;
// }
// Student.prototype.school = "KhoaPham";

// var hs1 = new Student('Loc', '1');
// console.log(hs1);
// console.log(hs1.school);


function Student(diemToan, diemLy, diemHoa) {
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
}
Student.prototype.average = function(){
    return Math.round((this.diemToan + this.diemLy + this.diemHoa) / 3);
}
var student1 = new Student(6, 7, 7);
var student2 = new Student(8, 9, 6);

console.log(student1.average()); // 7
console.log(student2.average()); // 8
