let currentMood = document.getElementById("currentMood");

function getMood(param1){

    if(param1.trim() === ""){
        document.getElementById("massage").innerHTML = "You must enter your current mood!";
    }
    else if(param1.toLowerCase() === "happy"){
        document.getElementById("massage").innerHTML = "Today, I am feeling happy.";
    }
    else{
        document.getElementById("massage").innerHTML = "Today, I am feeling neutral.";
    }
}

document.getElementById("btn").addEventListener("click" , function(){
    getMood(currentMood.value)
});