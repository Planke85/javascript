let myArray = [];

function createArray(){
    let numInArray = parseInt(document.getElementById("numInArray").value);

    if(isNaN(numInArray)){
        document.getElementById("massage").innerHTML = "Please enter valid number!";
    }
    else if(numInArray < 1){
        document.getElementById("massage").innerHTML = "Number must be greater than 0!";
    }
    else {
        for(let i = 1; i <= numInArray; i++){
            myArray.push(i);
        }
        document.getElementById("massage").innerHTML = `New array numbers = [${myArray}]`;
        myArray = [];
    }
}
document.getElementById("btn").addEventListener("click", createArray);