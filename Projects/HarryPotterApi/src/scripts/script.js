let navigationService = {
    search: document.getElementById("search"),
    content: document.getElementById("content"),
    characters: [],
    registerListeners: () => {
        search.addEventListener("keyup", (input) => {
            let searchCharacter = input.target.value;
            let filterCharacter = navigationService.characters.filter((character) => {
                return (
                    character.name.toLowerCase().includes(searchCharacter.toLowerCase()) ||
                    character.species.toLowerCase().includes(searchCharacter.toLowerCase()) ||
                    character.gender.toLowerCase().includes(searchCharacter.toLowerCase()) ||
                    character.dateOfBirth.toLowerCase().includes(searchCharacter.toLowerCase()) ||
                    character.house.toLowerCase().includes(searchCharacter.toLowerCase())
                    );
            })
            uiService.renderCharacters(filterCharacter);
        })
    }
};

let apiService = {
    url: "https://hp-api.herokuapp.com/api/characters",
    loadCharacters : async () => {
        try{
            let result = await fetch(apiService.url);
            navigationService.characters = await result.json();
            console.log(navigationService.characters)
            uiService.renderCharacters(navigationService.characters);
        } catch (error){
            console.log(error);
        }
    }
};

let uiService = {
    renderCharacters: (characters) => {
        let renderCharacter = characters.map((character) => {
            return `
                <div class="card m-3" style="max-width: 500px;">
                    <div class="row">
                        <div class="col-md-5">
                            <img src="${character.image}" width="163" height="227" alt="${character.name}">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">${character.name}</h5>
                                <p class="card-text">Species: ${character.species}</p>
                                <p class="card-text">Gender: ${character.gender}</p>
                                <p class="card-text">Date of birth: ${character.dateOfBirth}</p>
                                <p class="card-text">House: ${character.house}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
        .join("");
        navigationService.content.innerHTML = renderCharacter;
    }
};

apiService.loadCharacters();
navigationService.registerListeners();