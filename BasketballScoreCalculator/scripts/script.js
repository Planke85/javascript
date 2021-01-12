function calculateScore(){
    let twoPointScore = parseInt(document.getElementById("twoPointScore").value);
    let threePointScore = parseInt(document.getElementById("threePointScore").value);

    if(isNaN(twoPointScore)){
        document.getElementById("massage").innerHTML = "Two point score must be a valid number!";
    }
    else if(isNaN(threePointScore)){
        document.getElementById("massage").innerHTML = "Three point score must be a valid number!";
    }
    else if(twoPointScore < 0){
        document.getElementById("massage").innerHTML = "Two point score must be a positive number!";
    }
    else if(threePointScore < 0){
        document.getElementById("massage").innerHTML = "Three point score must be a positive number!";
    }
    else{
        let totalScore = (twoPointScore * 2) + (threePointScore * 3);
        document.getElementById("massage").innerHTML = `Total score is: ${totalScore} points.`;
    }
}

document.getElementById("btn").addEventListener("click" , calculateScore);