function serveDrinks(){
    let customerAge = parseInt(document.getElementById("customerAge").value);
    let bartenderWork = document.getElementById("bartenderWork").value;

    if(isNaN(customerAge)){
        document.getElementById("massage").innerHTML = "Customer age must be a number!";
    }
    else if(customerAge < 18){
        document.getElementById("massage").innerHTML = "You must have min 18 years!";
    }
    else{
        if(bartenderWork === "bartenderWorks"){
            document.getElementById("massage").innerHTML = "You can get a beer :)";
        }
        else if(bartenderWork === "bartenderBreak"){
            document.getElementById("massage").innerHTML = "You must weit bartender is on the break!";
        }
        else{
            document.getElementById("massage").innerHTML = "Please select one value from dropdown!";
        }
    }
}

document.getElementById("btn").addEventListener("click" , serveDrinks);