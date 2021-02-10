let buttons = document.getElementsByTagName("button");
for(const button of buttons){
    button.setAttribute("onclick", "getInputValue()");
}

function getInputValue(){
    let input = event.target.innerText;
    printValue(input);
}

function printValue(value){
    let output = document.getElementsByClassName("result")[0];

    if(value != "CLEAR" && value != "="){
        output.innerHTML += value;
    }

    if(value == "CLEAR"){
        output.innerHTML = "";
    }

    if(value == "="){
        let totalResult = output.innerHTML;
        output.innerHTML = eval(totalResult);
    }
}

