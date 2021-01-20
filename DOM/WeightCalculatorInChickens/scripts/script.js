let title = document.getElementsByClassName("title")[0].innerHTML = "Be amazed! See how much you weight in Chickens";

function calculateWeight(){
    let humanWeight = parseInt(document.getElementById("weight").value);

    if(isNaN(humanWeight)){
        document.getElementById("result").innerHTML = "Your weight must be a number!";
    }
    else if(humanWeight < 1){
        document.getElementById("result").innerHTML = "Your weight must be a positive number!";
    }
    else {
        let weightResult = humanWeight / 0.5;
        document.getElementById("result").innerHTML = `Human ${humanWeight}Kg is ${weightResult} chickens.`;
    }
}

document.getElementById("btn").addEventListener("click" , calculateWeight);