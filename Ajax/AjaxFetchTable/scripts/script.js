let button = document.getElementById("btn");
let tableBody = document.getElementsByTagName("tbody")[0];

function getAllUsers(){

    let url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
        .then(function(result){
            if(result.ok){
                return result.json();
            }else {
                throw new Error(result.status);
            }
        })
        .then(function(allUsers){
            renderAllUsers(allUsers);
        })
        .catch(function(error){
            console.log(error);
        })

}

function renderAllUsers(allUsers){
    let tableRow = "";

    for(const user of allUsers){
        tableRow += `<tr>`;
        tableRow += `<th>${user.id}</th>`;
        tableRow += `<td>${user.name}</td>`;
        tableRow += `<td>${user.username}</td>`;
        tableRow += `<td>${user.email}</td>`;
        tableRow += `<td>${user.address.street}</td>`;
        tableRow += `<td>${user.address.city}</td>`;
        tableRow += `<td>${user.company.name}</td>`;
    }
    tableBody.innerHTML = `${tableRow}`;
}

button.addEventListener("click", getAllUsers);