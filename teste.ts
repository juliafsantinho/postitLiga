class Student{
    constructor(name: string, age: number, isGradueted: boolean) {
        this.name = name;
        this.age = age;
        this.isGraduated = this.isGraduated;
    }
    public name: string = '';
    public age: number = 0;
    public isGraduated: boolean = false;

    public studentFormattedDate(): string {
        return 'nome: ' + this.name + 'idade: '
    }
}

const student = new Student('Bianca', 18, false)

console.log(student.studentFormattedDate());