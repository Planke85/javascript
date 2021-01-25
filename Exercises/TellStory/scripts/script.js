let name = document.getElementById("name");
let mood = document.getElementById("mood");
let activity = document.getElementById("activity");

function tellStory(name, mood, activity){
    if(name === ""){
        document.getElementById("massage").innerHTML = "Please enter your name!";
    }
    else if(!isNaN(parseInt(name))){
        document.getElementById("massage").innerHTML = "Your name must be a string!";
    }
    else if(mood === ""){
        document.getElementById("massage").innerHTML = "Please enter your mood!";
    }
    else if(!isNaN(parseInt(mood))){
        document.getElementById("massage").innerHTML = "Your mood must be a string!";
    }
    else if(activity === ""){
        document.getElementById("massage").innerHTML = "Please enter your activity!";
    }
    else if(!isNaN(parseInt(activity))){
        document.getElementById("massage").innerHTML = "Your activity must be a string!";
    }
    else{
        document.getElementById("massage").innerHTML = `This is ${name}. ${name} is a nice person. <br>
                                                        Today they are ${mood}. They are ${activity} all day. <br>
                                                        The end.`;
    }
}

document.getElementById("btn").addEventListener("click", function(){
    tellStory(name.value, mood.value, activity.value);
})