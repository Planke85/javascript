let navigationService = {
    search: document.getElementById("search"),
    content: document.getElementById("content"),
    ascFirstName: document.getElementById("ascFirstName"),
    descFirstName: document.getElementById("descFirstName"),
    ascLastName: document.getElementById("ascLastName"),
    descLastName: document.getElementById("descLastName"),
    ascGender: document.getElementById("ascGender"),
    descGender: document.getElementById("descGender"),
    ascCity: document.getElementById("ascCity"),
    descCity: document.getElementById("descCity"),
    ascAvgGrade: document.getElementById("ascAvgGrade"),
    descAvgGrade: document.getElementById("descAvgGrade"),
    ascAge: document.getElementById("ascAge"),
    descAge: document.getElementById("descAge"),
    students: [],
    registerListeners: () => {
        search.addEventListener("keyup", (input) => {
            let searchStudent = input.target.value;
            let filterStudent = navigationService.students.filter((student) => {
                return (
                    student.firstName.toLowerCase().includes(searchStudent.toLowerCase()) ||
                    student.lastName.toLowerCase().includes(searchStudent.toLowerCase()) ||
                    student.email.toLowerCase().includes(searchStudent.toLowerCase()) ||
                    student.city.toLowerCase().includes(searchStudent.toLowerCase())
                );
            })
            uiService.renderStudents(filterStudent)
        }),
        ascFirstName.addEventListener("click", () => {
            let ascSortFirstName = navigationService.students.sort((a,b) => {if(a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1})
            uiService.renderStudents(ascSortFirstName);
        }),
        descFirstName.addEventListener("click", () => {
            let descSortFirstName = navigationService.students.sort((a,b) => {if(a.firstName.toLowerCase() > b.firstName.toLowerCase()) return -1})
            uiService.renderStudents(descSortFirstName);
        }),
        ascLastName.addEventListener("click", () => {
            let ascSortLastName = navigationService.students.sort((a,b) => {if(a.lastName.toLowerCase() < b.lastName.toLowerCase()) return -1})
            uiService.renderStudents(ascSortLastName);
        }),
        descLastName.addEventListener("click", () => {
            let descSortLastName = navigationService.students.sort((a,b) => {if(a.lastName.toLowerCase() > b.lastName.toLowerCase()) return -1})
            uiService.renderStudents(descSortLastName);
        }),
        ascGender.addEventListener("click", () => {
            let ascSortGender = navigationService.students.sort((a,b) => {if(a.gender.toLowerCase() < b.gender.toLowerCase()) return -1})
            uiService.renderStudents(ascSortGender);
        }),
        descGender.addEventListener("click", () => {
            let descSortGender = navigationService.students.sort((a,b) => {if(a.gender.toLowerCase() > b.gender.toLowerCase()) return -1})
            uiService.renderStudents(descSortGender);
        }),
        ascCity.addEventListener("click", () => {
            let ascSortCity = navigationService.students.sort((a,b) => {if(a.city.toLowerCase() < b.city.toLowerCase()) return -1})
            uiService.renderStudents(ascSortCity);
        }),
        descCity.addEventListener("click", () => {
            let descSortCity = navigationService.students.sort((a,b) => {if(a.city.toLowerCase() > b.city.toLowerCase()) return -1})
            uiService.renderStudents(descSortCity);
        }),
        ascAvgGrade.addEventListener("click", () => {
            let ascSortAvgGrade = navigationService.students.sort((a,b) => {if(a.averageGrade < b.averageGrade) return -1})
            uiService.renderStudents(ascSortAvgGrade);
        }),
        descAvgGrade.addEventListener("click", () => {
            let descSortAvgGrade = navigationService.students.sort((a,b) => {if(a.averageGrade > b.averageGrade) return -1})
            uiService.renderStudents(descSortAvgGrade)
        }),
        ascAge.addEventListener("click", () => {
            let ascSortAge = navigationService.students.sort((a,b) => {if(a.age < b.age) return -1});
            uiService.renderStudents(ascSortAge);
        }),
        descAge.addEventListener("click", () => {
            let descSortAge = navigationService.students.sort((a,b) => {if(a.age > b.age) return -1});
            uiService.renderStudents(descSortAge)
        })
    }
};

let apiService = {
    url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
    loadStudents: async () => {
        try {
            let result = await fetch(apiService.url);
            navigationService.students = await result.json();
            console.log(navigationService.students)
            uiService.renderStudents(navigationService.students)
        } catch (error){
            console.log(error);
        }
    }
};

let uiService = {
    renderStudents: (students) => {
        let renderStudent = students.map((student) => {
                return `
                    <tr>
                        <td>${student.firstName}</td>
                        <td>${student.lastName}</td>
                        <td>${student.email}</td>
                        <td>${student.gender}</td>
                        <td>${student.city}</td>
                        <td>${student.averageGrade}</td>
                        <td>${student.age}</td>
                    <tr>
                `;
        })
        .join("");
        navigationService.content.innerHTML = renderStudent;
    }
}

navigationService.registerListeners();
apiService.loadStudents();