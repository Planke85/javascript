let button = document.getElementById("btn");
let tableBody = document.getElementsByTagName("tbody")[0];
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let pageLink = document.getElementsByClassName("page-link")[1];
let pagination = document.getElementsByTagName("nav")[0];
pagination.style.display = "none";
let page = 1;
let pageLimit;


function getPlanets(){

    let url = `https://swapi.dev/api/planets/?page=${page}`;

    fetch(url)
        .then(function(result){
            if(result.ok){
                return result.json();
            }else {
                throw new Error(result.status);
            }
        })
        .then(function(planets){
            renderPlanets(planets);
            pageLimit = Math.ceil(planets.count / 10);
        })
        .catch(function(error){
            console.log(error);
        })
}

function renderPlanets(planets){
    let tableRow = "";
    for(const planet of planets.results){
        tableRow += `<tr>`;
        tableRow += `<td>${planet.name}</td>`;
        tableRow += `<td>${planet.population}</td>`;
        tableRow += `<td>${planet.climate}</td>`;
        tableRow += `<td>${planet.gravity}</td>`;
        tableRow += `</tr>`;
    }
    tableBody.innerHTML = `${tableRow}`;
    pagination.style.display = "block";
    pageLink.innerHTML = `Page ${page}`;


}

function nextPage(){
    if(page < pageLimit){
        page++;
        getPlanets();
    }
    else{
        getPlanets();
    }
}

function previousPage(){
    if(page > 1){
        page--;
        getPlanets();
    }
    else{
        getPlanets();
    }
}

button.addEventListener("click", getPlanets);
next.addEventListener("click", nextPage);
previous.addEventListener("click", previousPage);