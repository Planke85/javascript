document.getElementById("btn").addEventListener("click", getAge);

function getAge(){
    let age = parseInt(document.getElementById("age").value);
    let convertAge = document.getElementById("convertAge").value;

    if(isNaN(age)){
        document.getElementById("massage").innerHTML = "Age must be a number!";
    }
    else if(age <= 0){
        document.getElementById("massage").innerHTML = "Age must be a positive number!";
    }
    else {
        if(convertAge === "humanAge"){
            let resultAge = age * 7;
            document.getElementById("massage").innerHTML = `Dog have ${resultAge} years`;
        }
        else if(convertAge === "dogAge"){
            let resultAge = age / 7;
            document.getElementById("massage").innerHTML = `Human have ${parseInt(resultAge)} years`;
        }
        else {
            document.getElementById("massage").innerHTML = "Please select option from dropdown list!";
        }
    }
}


