let navigationService = {
    peopleBtn : document.getElementById("peopleBtn"),
    planetBtn : document.getElementById("planetBtn"),
    shipBtn : document.getElementById("shipsBtn"),
    nextBtn : document.getElementById("nextBtn"),
    previousBtn : document.getElementById("prevBtn"),
    pageLimit: false,
    day: "",
    counter: 0,
    currentPage: 1,
    pageType: "",
    clickCounter: function(){
        if(this.counter < 50 && this.day === new Date().getDay()){
            navigationService.counter++
            return navigationService.pageLimit = true;
        }
        else if(this.day !== new Date().getDay()){
            navigationService.day = new Date().getDay();
            navigationService.counter = 0;
            return navigationService.pageLimit = true;
        }
        else{
            return navigationService.pageLimit = false;
        }
    },
    registerListeners: function() {
        this.peopleBtn.addEventListener("click", function() {
            if(navigationService.pageType === "people") return;
            navigationService.clickCounter();
            uiService.toggleLoader(true);
            if(navigationService.pageLimit){
                starWarsApiService.getPeople(1);
            }else {
                uiService.loadErrorMessage();
                uiService.toggleLoader(false);
            }
            navigationService.currentPage = 1
            navigationService.pageType = "people"
        }),

        this.planetBtn.addEventListener("click", function() {
            if(navigationService.pageType === "planets") return;
            navigationService.clickCounter();
            uiService.toggleLoader(true);
            if(navigationService.pageLimit){
                starWarsApiService.getPlanets(1);
            }else{
                uiService.loadErrorMessage();
                uiService.toggleLoader(false);
            }
            navigationService.currentPage = 1
            navigationService.pageType = "planets"
        }),

        this.shipBtn.addEventListener("click", function() {
            if(navigationService.pageType === "ships") return;
            navigationService.clickCounter();
            uiService.toggleLoader(true);
            if(navigationService.pageLimit){
                starWarsApiService.getShips(1);
            }else{
                uiService.loadErrorMessage();
                uiService.toggleLoader(false);
            }
            navigationService.currentPage = 1
            navigationService.pageType = "ships"
        }),
        this.nextBtn.addEventListener("click", this.nextPage),
        this.previousBtn.addEventListener("click", this.previousPage)
    },
    nextPage: function() {
        navigationService.currentPage++;
        uiService.toggleLoader(true)
        navigationService.clickCounter();
            if(navigationService.pageLimit){
                if (navigationService.pageType === "people") starWarsApiService.getPeople(navigationService.currentPage)
                if (navigationService.pageType === "planets") starWarsApiService.getPlanets(navigationService.currentPage)
                if (navigationService.pageType === "ships") starWarsApiService.getShips(navigationService.currentPage)
            }
            else{
                uiService.loadErrorMessage();
                uiService.toggleLoader(false);
            }
    },
    previousPage: function() {
        navigationService.currentPage--;
        uiService.toggleLoader(true)
        navigationService.clickCounter();
            if(navigationService.pageLimit){
                if (navigationService.pageType === "people") starWarsApiService.getPeople(navigationService.currentPage)
                if (navigationService.pageType === "planets") starWarsApiService.getPlanets(navigationService.currentPage)
                if (navigationService.pageType === "ships") starWarsApiService.getShips(navigationService.currentPage)
            }
            else{
                uiService.loadErrorMessage();
                uiService.toggleLoader(false);
            }
    },
    navButtonsCheck: function(response) {
        if (response.next === null) {
            this.nextBtn.style.display = "none"
        } else {
            this.nextBtn.style.display = "block"
        }

        if (response.previous === null) {
            this.previousBtn.style.display = "none"
        } else {
            this.previousBtn.style.display = "block"
        }
    }
}


let starWarsApiService = {
    url: "https://swapi.dev/api/",
    getPeople: function(page) {
        let peopleUrl = `${this.url}people/?page=${page}`;
        $.ajax({
            url: peopleUrl,
            success: function(response) {
                navigationService.navButtonsCheck(response)
                uiService.loadPeoplePage(response.results)
            },
            error: function(response) {
                uiService.loadErrorMessage();
            },
            complete: function() {
                uiService.toggleLoader(false)
            }
        })
    },

    getPlanets: function(page) {
        let planetsUrl = `${this.url}planets/?page=${page}`;
        $.ajax({
            url: planetsUrl,
            success: function(response) {
                navigationService.navButtonsCheck(response)
                uiService.loadPlanetsPage(response.results)
            },
            error: function(response) {
                uiService.loadErrorMessage();
            },
            complete: function() {
                uiService.toggleLoader(false)
            }
        })
    },

    getShips: function(page) {
        let shipsUrl = `${this.url}starships/?page=${page}`;
        $.ajax({
            url: shipsUrl,
            success: function(response) {
                navigationService.navButtonsCheck(response)
                uiService.loadShipsPage(response.results)
            },
            error: function(response) {
                uiService.loadErrorMessage();
            },
            complete: function() {
                uiService.toggleLoader(false)
            }
        })
    }
}

let uiService = {
    resultElement: document.getElementById("result"),
    loader: document.getElementById("loader"),
    loadPeoplePage: function(data) {
        dataPeople = data;
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3" id="sortPeople">Name</div>
                <div class="col-md-2">Height</div>
                <div class="col-md-2">Mass</div>
                <div class="col-md-2">Gender</div>
                <div class="col-md-2">Birth Year</div>
                <div class="col-md-1">Films</div>
            </div>
        `;
        for (let person of data) {
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${person.name}</div>
                <div class="col-md-2">${person.height}</div>
                <div class="col-md-2">${person.mass}</div>
                <div class="col-md-2">${person.gender}</div>
                <div class="col-md-2">${person.birth_year}</div>
                <div class="col-md-1">${person.films.length}</div>
            </div>
            `;
        }
        let sortPeople = document.getElementById("sortPeople");
        sortPeople.addEventListener("click", function(){
            dataPeople.sort(function(a,b){
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            });
            uiService.loadPeoplePage(dataPeople);
        });
    },

    loadPlanetsPage: function(data) {
        dataPlanets = data;
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3" id="sortPlanets">Name</div>
                <div class="col-md-2">Population</div>
                <div class="col-md-2">Climate</div>
                <div class="col-md-2">Diameter</div>
                <div class="col-md-2">Gravity</div>
                <div class="col-md-1">Terrain</div>
            </div>
        `;

        for (let planet of data) {
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${planet.name}</div>
                <div class="col-md-2">${planet.population}</div>
                <div class="col-md-2">${planet.climate}</div>
                <div class="col-md-2">${planet.diameter}</div>
                <div class="col-md-2">${planet.gravity}</div>
                <div class="col-md-1">${planet.terrain}</div>
            </div>
            `;
        }
        let sortPlanets = document.getElementById("sortPlanets");
        sortPlanets.addEventListener("click", function(){
            dataPlanets.sort(function(a,b){
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            });
            uiService.loadPlanetsPage(dataPlanets);
        });
    },

    loadShipsPage: function(data) {
        dataShips = data;
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3" id="sortShips">Name</div>
                <div class="col-md-2">Model</div>
                <div class="col-md-2">Manufacturer</div>
                <div class="col-md-2">Cost</div>
                <div class="col-md-2">Capacity</div>
                <div class="col-md-1">Class</div>
            </div>
        `;
        for (let ship of data) {
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${ship.name}</div>
                <div class="col-md-2">${ship.model}</div>
                <div class="col-md-2">${ship.manufacturer}</div>
                <div class="col-md-2">${ship.cost_in_credits}</div>
                <div class="col-md-2">${ship.passengers}</div>
                <div class="col-md-1">${ship.starship_class}</div>
            </div>
            `;
        }
        let sortShips = document.getElementById("sortShips");
        sortShips.addEventListener("click", function(){
            dataShips.sort(function(a,b){
                if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                return 0;
            });
            uiService.loadShipsPage(dataShips);
        });
    },
    toggleLoader: function(toggle) {
        if (toggle) this.loader.style.display = "block";
        else this.loader.style.display = "none";
    },
    loadErrorMessage: function(){
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `<div class="row">
                                            <div class="col-md-2"></div>
                                            <div class="col-md-8">
                                                <img src="src/img/error.jpg">
                                            <div class="col-md-2"></div>
                                            </div>
                                        </div>`;
        navigationService.previousBtn.style.display = "none";
        navigationService.nextBtn.style.display = "none";
    }
}

navigationService.registerListeners()