let recipeName = document.getElementById("recipeName");
let ingredientsName = document.getElementById("ingredientsName");
let ingrediants = [];



function resetInput(){
    document.form.reset();
}

function printIngrediants(){
    if(ingrediants.length < 1){
        document.getElementsByClassName("error")[2].innerHTML = "You don't insert ingredients!";
    }
    else{
        let counter = 1;
        document.getElementById("table").innerHTML = `<table>`;
        for(let i = 0; i < ingrediants.length; i++){
            document.getElementsByTagName("table")[0].innerHTML +=  `<tr><td>${counter}</td><td>${ingrediants[i]}</td></tr>`;
            counter++;
        }
        document.getElementsByTagName("table")[0].innerHTML += `</table>`;
    }
}

function getIngrediantsName(ingredientsName){
    if(ingredientsName.trim() === ""){
        document.getElementsByClassName("error")[2].innerHTML = " Please enter ingredients name!";
    }
    else if(!isNaN(parseInt(ingredientsName.trim()))){
        resetInput();
        document.getElementsByClassName("error")[2].innerHTML = " Ingredients name must be a string!";
    }
    else {
        document.getElementsByClassName("error")[2].innerHTML = "";
        ingrediants.push(ingredientsName);
        resetInput();
        printIngrediants();
    }
}

function getRecipeName(recipeName){
    let ingrediantsNum = parseInt(document.getElementById("ingredientsNumber").value);


    if(recipeName.trim() === ""){
        document.getElementsByClassName("error")[0].innerHTML = " Please enter recipe name!";
    }
    else if(!isNaN(parseInt(recipeName.trim()))){
        resetInput();
        document.getElementsByClassName("error")[0].innerHTML = " Recipe name must be a string!";
    }
    else if(isNaN(ingrediantsNum)){
        document.getElementsByClassName("error")[0].innerHTML = "";
        document.getElementsByClassName("error")[1].innerHTML = " Please enter number!";
    }
    else {
        document.getElementsByClassName("error")[1].innerHTML = "";
        resetInput();
        document.getElementById("title").innerHTML = `Recipe title: ${recipeName}.`;
        document.getElementById("text").innerHTML = `${recipeName} has ${ingrediantsNum} ingredients.`
    }
}



document.getElementById("add").addEventListener("click", function(){
    getRecipeName(recipeName.value);
});

document.getElementById("addIngredients").addEventListener("click", function(){
    getIngrediantsName(ingredientsName.value);
});
