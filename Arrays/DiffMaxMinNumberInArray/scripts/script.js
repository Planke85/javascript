let myArray = [];
let maxNumber = 0;
let minNumber = 0;

function resetInput(){
    document.form.reset();
}

function getMaxNumber(){
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] >= maxNumber){
            maxNumber = myArray[i];
        }
    }
}

function getMinNumber(){
    minNumber = myArray[0];
    for(let i = 0; i < myArray.length; i++){
        if(myArray[i] < minNumber){
            minNumber = myArray[i];
        }
    }
}

function createArray(){
    let numInArray = parseInt(document.getElementById("numInArray").value);

    if(isNaN(numInArray)){
        document.getElementById("massage").innerHTML = "Please enter valid number!";
    }
    else {
        myArray.push(numInArray);
        resetInput();
        getMaxNumber();
        getMinNumber();
        document.getElementById("massage").innerHTML = `Array numbers = [${myArray}]`;
    }
}

function getResult(){

    if(myArray[0] === undefined){
        document.getElementById("massage").innerHTML = "Your array is empty please add number in array!";
        resetInput();
    }
    else{
        let result = 0;

        if(minNumber < 0){
            result = Math.abs(maxNumber) + Math.abs(minNumber);
            document.getElementById("result").innerHTML = `Smallest number is ${minNumber}, biggest is: ${maxNumber}.<br>Difference between min and max number is: ${result}.`;
        }
        else{
            result = Math.abs(maxNumber) - Math.abs(minNumber);
            document.getElementById("result").innerHTML = `Smallest number is ${minNumber}, biggest is: ${maxNumber}.<br>Difference between min and max number is: ${result}.`;
        }
    }
}

document.getElementById("add").addEventListener("click", createArray);
document.getElementById("get").addEventListener("click", getResult);
