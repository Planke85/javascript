let content = document.getElementById("content");
let searchBar = document.getElementById("search");
let idResult = document.getElementById("idResult");
let users = [];

let loadPeople = async () => {
    try{
        let result = await fetch("https://jsonplaceholder.typicode.com/users");
        users = await result.json();
        renderUsers(users)
    } catch (error){
        console.log(error);
    }
};

let renderUsers = (users) => {
    let renderUser = users.map((user) => {
        return `
        <div class="card m-3  col-md-5">
            <div class="row mb-2">
                <div class="col-md-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/User_font_awesome.svg" alt="userImg">
                    <p class="card-text text-center">${user.id}</p>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text">${user.email}</p>
                        <p class="card-text">${user.phone}</p>
                    </div>
                </div>
            </div>
        </div>`;
    })
    .join("")
    content.innerHTML = renderUser;
}
loadPeople();

searchBar.addEventListener("keyup", (input) => {
    let searchUsers = input.target.value;
    let filterUsers = users.filter((user) => {
        return (
                user.name.toLowerCase().includes(searchUsers.toLowerCase()) ||
                user.email.toLowerCase().includes(searchUsers.toLowerCase()) ||
                user.phone.toLowerCase().includes(searchUsers.toLowerCase())
        );
    });
    let finalResult = filterUsers.reduce((total, user) => total += parseInt(user.id), 0);
    idResult.innerHTML = `Sum users id: ${finalResult}`;
    renderUsers(filterUsers);
});
