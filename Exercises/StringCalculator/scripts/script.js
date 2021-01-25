let string1 = document.getElementById("string1");
let string2 = document.getElementById("string2");

function calculateString(str1, str2){

    if(str1 === ""){
        document.getElementById("massage").innerHTML = "String 1 input must have a value!";
    }
    else if(str2 === ""){
        document.getElementById("massage").innerHTML = "String 2 input must have a value!";
    }
    else{
        if(str1.length > str2.length){
            document.getElementById("massage").innerHTML = "String 1 is a greater than String 2";
        }
        else if(str1.length === str2.length){
            document.getElementById("massage").innerHTML = "String 1 and String 2 is equal";
        }
        else{
            document.getElementById("massage").innerHTML = "String 2 is a greater than String 1";
        }
    }
}

document.getElementById("btn").addEventListener("click", function () {
    calculateString(string1.value, string2.value)
});
