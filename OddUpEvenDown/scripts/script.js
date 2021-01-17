let myArray = [];
let myNewArray = [];

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

function convert(){

    if(myArray[0] === undefined){
        document.getElementById("massage").innerHTML = "Your array is empty please add number in array!";
        resetInput();
    }
    else{
        for(let i = 0; i < myArray.length; i++){
            if(myArray[i] % 2 !== 0){
                myNewArray.push(myArray[i] + 1);
            }
            else{
                myNewArray.push(myArray[i] - 1);
            }
        }
        document.getElementById("newArray").innerHTML = `Convert numbers [${myNewArray}]`;
    }
}

document.getElementById("add").addEventListener("click", createArray);
document.getElementById("get").addEventListener("click", convert);
