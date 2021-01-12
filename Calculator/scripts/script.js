function calculator(){
    let firstNumber = parseInt(document.getElementById("number1").value);
    let secondNumber = parseInt(document.getElementById("number2").value);
    let calculate = document.getElementById("calculate").value;

    if(isNaN(firstNumber)){
        document.getElementById("massage").innerHTML = "Please enter valid first number!";
    }
    else if(isNaN(secondNumber)){
        document.getElementById("massage").innerHTML = "Please enter valid second number!";
    }
    else{
        if(calculate === "sum"){
            document.getElementById("massage").innerHTML = `Result FirstNumber + SecondNumber is: ${firstNumber + secondNumber}`;
        }
        else if(calculate === "sub"){
            document.getElementById("massage").innerHTML = `Result FirstNumber - SecondNumber is: ${firstNumber - secondNumber}`;
        }
        else if(calculate === "mul"){
            document.getElementById("massage").innerHTML = `Result FirstNumber * SecondNumber is: ${firstNumber * secondNumber}`;
        }
        else if(calculate === "div"){
            document.getElementById("massage").innerHTML = `Result FirstNumber / SecondNumber is: ${firstNumber / secondNumber}`;
        }
        else if(calculate === "mod"){
            document.getElementById("massage").innerHTML = `Result FirstNumber % SecondNumber is: ${firstNumber % secondNumber}`;
        }
        else{
            document.getElementById("massage").innerHTML = "Please select one value from dropdown";
        }
    }
}

document.getElementById("btn").addEventListener("click" , calculator);