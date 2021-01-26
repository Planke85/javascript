let name = $("#name");
let btn = $("#btn");
let error = $(".error");
let message = $("#message");

function User(name){
    this.name = name;
}

function hello(name){
    let user = new User(name);
        message.html(`Hello there ${name}!`)
        resetInput();
}

function resetInput(){
    name.val("");
}

function validate(name){
    if(name.trim() === ""){
        resetInput();
        error.html(" * Please enter name!");
    }
    else if(!isNaN(parseInt(name))){
        resetInput();
        error.html(" * Name must be a string!");
    }
    else{
        error.html("");
        hello(name);
    }
}

btn.click(function(){
    validate(name.val());
})