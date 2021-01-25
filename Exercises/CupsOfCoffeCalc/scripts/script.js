function calculateCups(){
    let totalCups = parseInt(document.getElementById("totalCups").value);

    if(isNaN(totalCups)){
        document.getElementById("massage").innerHTML = "Total cups input must be a number!";
    }
    else if(totalCups <= 0){
        document.getElementById("massage").innerHTML = "Total cups input must be a positive number!";
    }
    else {
        let cupsResult = totalCups + parseInt(totalCups / 6);
        document.getElementById("massage").innerHTML = `You buy ${cupsResult} cups of cofee.`;
    }
}

document.getElementById("btn").addEventListener("click" , calculateCups);