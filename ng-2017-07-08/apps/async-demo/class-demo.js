var Student = (function () {
    function Student() {
    }
    Student.prototype.display = function () {
        console.log('Student id:', this.id, ', name:', this.name);
    };
    return Student;
}());
var obj = new Student();
obj.id = 10;
obj.name = 'naveen';
obj.display();
