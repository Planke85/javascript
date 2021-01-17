let myArray = [];
let maxNumber = 0;

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

function createArray(){
    let numInArray = parseInt(document.getElementById("numInArray").value);

    if(isNaN(numInArray)){
        document.getElementById("massage").innerHTML = "Please enter valid number!";
    }
    else if(numInArray < 1){
        document.getElementById("massage").innerHTML = "Hurdler must be a greater than zero!";
    }
    else {
        myArray.push(numInArray);
        getMaxNumber();
        resetInput();
        document.getElementById("massage").innerHTML = `Hardler value = [${myArray}]`;
    }
}

function hurdleJump(){
    let jumperValue = parseInt(document.getElementById("jumpersValue").value);

    if(isNaN(jumperValue)){
        document.getElementById("result").innerHTML = "Jump value must be number!";
    }
    else if(myArray[0] === undefined){
        document.getElementById("result").innerHTML = "Zero hurdles means that any jump height can clear them";
        resetInput();
    }
    else if(maxNumber > jumperValue){
        document.getElementById("result").innerHTML = `Height of the jumpers is not enough to overcome the hardler!`;
        resetInput();
    }
    else {
        document.getElementById("result").innerHTML = `You have successfully overcome all hardlers.`;
        resetInput();
    }
}

document.getElementById("add").addEventListener("click", createArray);
document.getElementById("get").addEventListener("click", hurdleJump);