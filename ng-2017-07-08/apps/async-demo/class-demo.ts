class Student {
    id: number;
    name: string;

    display() {
        console.log('Student id:', this.id, ', name:', this.name);
    }
}

let obj = new Student();
obj.id = 10;
obj.name = 'naveen';
obj.display();
