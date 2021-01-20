let myArray = [];
let sumNum;

function sumNumbers(){
    sumNum = 0;
    for(let i = 0; i < myArray.length; i++){
        sumNum += myArray[i];
    }
    return sumNum;
}

function createArray(){
    let numInArray = parseInt(document.getElementById("numInArray").value);

    if(isNaN(numInArray)){
        document.getElementById("massage").innerHTML = "Please enter valid number!";
    }
    else {
        myArray.push(numInArray);
        document.form.reset();
        if(myArray.length === 1){
            document.getElementById("massage").innerHTML = `${myArray}`;
        }
        else{
            sumNumbers();
            document.getElementById("massage").innerHTML = `${myArray.join(" + ")} = ${sumNum}`;
        }
    }
}

document.getElementById("add").addEventListener("click", createArray);

