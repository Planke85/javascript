let numbers = [];
let totalNumbers;

function validateNumber(){
   let number = parseInt(document.getElementById("number").value);

   if(isNaN(number)){
       document.getElementById("massage").innerHTML = "Please enter a valid number";
   }
   else{
       numbers.push(number);
       document.getElementById("massage").innerHTML = `Array has numbers: ${numbers}`;
       sumNumbers();
   }
}

function sumNumbers(){
    totalNumbers = 0;

    for(let i = 0; i < numbers.length; i++){
        totalNumbers += numbers[i];
        document.getElementById("result").innerHTML = `Total result nubers in array is: ${totalNumbers}`;
        document.getElementById("number").value = "";
    }
}

document.getElementById("addNum").addEventListener("click", validateNumber);