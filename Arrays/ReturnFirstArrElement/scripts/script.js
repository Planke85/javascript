let myArray = [];

function createArray(){
    let numInArray = parseInt(document.getElementById("numInArray").value);

    if(isNaN(numInArray)){
        document.getElementById("massage").innerHTML = "Please enter valid number!";
    }
    else {
        myArray.push(numInArray);
        document.form.reset();
        document.getElementById("massage").innerHTML = `New array numbers = [${myArray}]`;
    }
}

function getFirstNumber(){
    if(myArray[0] === undefined){
        document.getElementById("massage").innerHTML = "Your array is empty please add number in array!";
    }
    else{
        document.getElementById("firstNumber").innerHTML = `First number in array is: ${myArray.shift()}`;
    }
}

document.getElementById("add").addEventListener("click", createArray);
document.getElementById("get").addEventListener("click", getFirstNumber);
