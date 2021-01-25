let numInArray = [];
let maxNumber = 0;
let minNumber = 0;

function getMaxNumber(){
    for(let i = 0; i < numInArray.length; i++){
        if(numInArray[i] >= maxNumber){
            maxNumber = numInArray[i];
        }
    }
}

function getMinNumber(){
    minNumber = numInArray[0];
    for(let i = 0; i < numInArray.length; i++){
        if(numInArray[i] < minNumber){
            minNumber = numInArray[i];
        }
    }
}

function calculate(){
    let inputNum = parseInt(document.getElementById("inputNum").value);

    if(isNaN(inputNum)){
        document.getElementById("massage").innerHTML = "Please enter valid number!";
    }
    else {
        numInArray.push(inputNum);
        document.form.reset();
        getMaxNumber();
        getMinNumber();
        document.getElementById("massage").innerHTML = `Num in array: [${numInArray}] <br>
                                                        Max number: ${maxNumber} <br>
                                                        Min number: ${minNumber} <br>
                                                        Min number + Max number = ${minNumber + maxNumber}`;
    }
}

document.getElementById("btn").addEventListener("click", calculate);