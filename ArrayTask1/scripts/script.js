let itemsInArray = [];
let item = document.getElementById("string");

function addString(item){
    if(item.trim() === ""){
        document.getElementById("massage").innerHTML = "String input must have a value!";
    }
    else{
        itemsInArray.push(item);
        document.form.reset();
        document.getElementById("massage").innerHTML = `Items in array: [${itemsInArray}]`;
    }
}

function viewResult(param){
    document.getElementById("massage").innerHTML = itemsInArray.join(" ");
}

document.getElementById("add").addEventListener("click", function () {
    addString(item.value)
});

document.getElementById("view").addEventListener("click", function(){
    viewResult(itemsInArray);
});