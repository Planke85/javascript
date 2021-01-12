function legCalculator(){
    let numbersOfChickens = parseInt(document.getElementById("numbersOfChickens").value);
    let numbersOfCows = parseInt(document.getElementById("numbersOfCows").value);
    let numbersOfPigs = parseInt(document.getElementById("numbersOfPigs").value);

    if(isNaN(numbersOfChickens)){
        document.getElementById("massage").innerHTML = "Please enter validate numbers of chickens!";
    }
    else if(isNaN(numbersOfCows)){
        document.getElementById("massage").innerHTML = "Please enter validate numbers of cows!";
    }
    else if(isNaN(numbersOfPigs)){
        document.getElementById("massage").innerHTML = "Please enter validate numbers of pigs!";
    }
    else if(numbersOfChickens < 0){
        document.getElementById("massage").innerHTML = "Numbers of chickens must be a positive number!";
    }
    else if(numbersOfCows < 0){
        document.getElementById("massage").innerHTML = "Numbers of cows must be a positive number!";
    }
    else if(numbersOfPigs < 0){
        document.getElementById("massage").innerHTML = "Numbers of pigs must be a positive number!";
    }
    else{
        let totalAnimals = numbersOfChickens + numbersOfCows + numbersOfPigs;
        let totalAnimalsLegs = (numbersOfChickens * 2) + (numbersOfCows * 4) + (numbersOfPigs * 4);

        document.getElementById("massage").innerHTML = `Total animals number is: ${totalAnimals} <br> Total animals legs is: ${totalAnimalsLegs}`;
    }
}

document.getElementById("btn").addEventListener("click" , legCalculator);
