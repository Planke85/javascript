let name = document.getElementById("name");
let kind = document.getElementById("animKind");

function Animal(name,kind){
    this.name = name;
    this.kind = kind;
    this.speak = function(){
        return document.getElementById("text").innerHTML = `${this.kind} with name ${this.name} says: Hey Bro :) !!!!`;
    }
}

function validate(name,kind){
    if(name.trim() === ""){
        document.getElementsByClassName("error")[0].innerHTML = `* Please enter name!`;
    }
    else if(!isNaN(parseInt(name))){
        document.getElementsByClassName("error")[0].innerHTML = `* Name must be a string!`;
    }
    else if(kind.trim() === ""){
        document.getElementsByClassName("error")[0].innerHTML = "";
        document.getElementsByClassName("error")[1].innerHTML = `* Please enter kind!`;
    }
    else if(!isNaN(parseInt(kind))){
        document.getElementsByClassName("error")[1].innerHTML = `* Kind must be a string!`;
    }
    else{
        document.getElementsByClassName("error")[1].innerHTML = "";
        createAnimal(name,kind);
    }
}

function createAnimal(name,kind,speak){
    let animal = new Animal(name, kind, speak);
    animal.speak();
}

document.getElementById("btn").addEventListener("click", function(){
    validate(name.value, kind.value);
});