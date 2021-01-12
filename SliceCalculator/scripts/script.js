function calculateSlices(){
    let totalSlices = parseInt(document.getElementById("totalSlices").value);
    let numberRecipients = parseInt(document.getElementById("numberRecipients").value);
    let slicesEach = parseInt(document.getElementById("slicesEach").value);

    if(isNaN(totalSlices)){
        document.getElementById("massage").innerHTML = "Total slices must be a number!";
    }
    else if(totalSlices <= 0){
        document.getElementById("massage").innerHTML = "You dont have a slices!";
    }
    else if(isNaN(numberRecipients)){
        document.getElementById("massage").innerHTML = "Number of recipients must be a number!";
    }
    else if(numberRecipients <= 0){
        document.getElementById("massage").innerHTML = "You dont have a recipients!";
    }
    else if(isNaN(slicesEach)){
        document.getElementById("massage").innerHTML = "Slices each must be a number!";
    }
    else if(slicesEach <= 0){
        document.getElementById("massage").innerHTML = "Recipients don't want slices!";
    }
    else {
        if((numberRecipients * slicesEach) <= totalSlices){
            document.getElementById("massage").innerHTML = `Every recepients get ${slicesEach} slices.`;
        }
        else {
            document.getElementById("massage").innerHTML = "Sorry, there are not enough slices for all!";
        }
    }
}

document.getElementById("btn").addEventListener("click" , calculateSlices);