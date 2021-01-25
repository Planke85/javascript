let myArray = [];

function resetInput(){
    document.form.reset();
}

function createArray(){
    let numInArray = parseInt(document.getElementById("numInArray").value);

    if(isNaN(numInArray)){
        document.getElementById("massage").innerHTML = "Please enter valid number!";
    }
    else {
        myArray.push(numInArray);
        resetInput();
        document.getElementById("massage").innerHTML = `Array numbers = [${myArray}]`;
    }
}

function findIndex(){
    let indexToFind = parseInt(document.getElementById("indexToFind").value);

    if(isNaN(indexToFind)){
        document.getElementById("searchIndex").innerHTML = "Search index must be number!";
    }
    else if(myArray[0] === undefined){
        document.getElementById("searchIndex").innerHTML = "Your array is empty please add number in array!";
        resetInput();
    }
    else if(myArray.indexOf(indexToFind) === -1){
        document.getElementById("searchIndex").innerHTML = `Your search number ${indexToFind} is not in array!`;
        resetInput();
    }
    else {
        document.getElementById("searchIndex").innerHTML = `Your search number ${indexToFind} is in array on position ${myArray.indexOf(indexToFind)}.`;
        resetInput();
    }
}

document.getElementById("add").addEventListener("click", createArray);
document.getElementById("get").addEventListener("click", findIndex);
