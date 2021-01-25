function convert(){
    let timeNumber = parseInt(document.getElementById("timeNumber").value);
    let convertTime = document.getElementById("convertTime").value;

    if(isNaN(timeNumber)){
        document.getElementById("massage").innerHTML = "Please enter valid time number!";
    }
    else if(timeNumber <= 0){
        document.getElementById("massage").innerHTML = "Time must be a positive value!";
    }
    else {
        if(convertTime == "minToSec"){
            let resultTime = timeNumber * 60;
            document.getElementById("massage").innerHTML = `Result is: ${resultTime} seconds.`;
        }
        else if (convertTime == "secToMin"){
            let resultTime = timeNumber / 60;
            document.getElementById("massage").innerHTML = `Result is: ${resultTime} minutes.`;
        }
        else {
            document.getElementById("massage").innerHTML = "Please select one value from dropdown!";
        }
    }
}

document.getElementById("btn").addEventListener("click" , convert);