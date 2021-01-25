let bankCash = 150;
document.getElementById("btn").addEventListener("click" , getCash);

function getCash(){
    let myCash = parseInt(document.getElementById("cashValue").value);

    if(isNaN(myCash)){
        document.getElementById("massage").innerHTML = "Wrong input please try again!";
    }
    else if(myCash <= 0){
        document.getElementById("massage").innerHTML = "Input must be a positive number!";
    }
    else{
        if(bankCash >= myCash){
            let resultCash = bankCash - myCash
            document.getElementById("massage").innerHTML = `In your account you hawe ${resultCash} $.`;
            bankCash = resultCash;
        }
        else {
            document.getElementById("massage").innerHTML = `You don't have that much money, try with a smaller amount`;
        }
    }
}