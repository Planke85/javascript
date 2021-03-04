function Person(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = () => console.log(`Full name is: ${this.firstName} ${this.lastName}`);
}

function Student (firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = () => console.log(`The student ${this.firstName} is studying in the ${this.academyName}`)
}

let alex = new Student("Aleksandar", "Planic", 35, "SEDC", 1);
let pera = new Student("Pera", "Peric", 30, "SEDC", 2);
alex.study()
pera.study()
console.log(pera)
console.log(alex)


function DesignStudent(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth){
    Object.setPrototypeOf(this, new Student(firstName,lastName,age,academyName,studentId));
    this.academyName = "Design Academy";
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = () => console.log(`The student ${this.firstName} is doing an adobe exam!`);
}

function CodeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.academyName = "Code Academy";
    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.doProject = (type) => {
        if(type === "individual"){
            console.log(`The student ${this.firstName} works on ${type} project.`);
            this.hasIndividualProject = true;
        }
        else if(type === "group"){
            console.log(`The student ${this.firstName} works on ${type} project.`);
            this.hasGroupProject = true;
        }
        else console.log(`Student ${this.firstName} don't have a project!`);
    }
}

function NetworkStudent(firstName, lastName, age, academyName, studentId, academyPart){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));
    this.academyName = "Network Academy";
    this.academyPart = academyPart;
    this.attendCiscoExam = () => console.log(`The student ${firstName} is doing a cisco exam!`);
}

let aleksandar = new DesignStudent("Aleksandar", "Planic", 35, "SEDC", 1, true);
console.log(aleksandar)
aleksandar.attendAdobeExam()

let pero = new CodeStudent("Pera", "Peric", 30, "", 2, true, "");
console.log(pero);
pero.doProject("individual");
pero.doProject("group");
pero.doProject()

let petar = new NetworkStudent("Petar", "Petrovic", 35, "", 3, 1)
console.log(petar);
petar.attendCiscoExam();