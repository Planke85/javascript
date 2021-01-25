function checkNumber(){
    let inputNum = parseInt(document.getElementById("inputNum").value);

    if(isNaN(inputNum)){
        document.getElementById("massage").innerHTML = "Please enter valid number!";
    }
    else if(inputNum <= 0){
        document.getElementById("massage").innerHTML = "Number must be a positive value!";
    }
    else {
        let result = (inputNum % 2 == 0) ? "even" : "odd";
        document.getElementById("massage").innerHTML = `This number is ${result}.`;
    }
}
document.getElementById("btn").addEventListener("click" , function(){
    checkNumber(inputNum)
});