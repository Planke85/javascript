let colors = ["black","white","red","green","yellow","magenta","blue"];
let title = $("#title");
let color = $("#color");
let btn = $("#btn");
let error = $(".error");
let message = $("#message");

function Header(title,color){
    this.title = title;
    this.color = color;
}

function clearInputs(){
    title.val("");
    color.val("");
}

function generateHeader(title,color){
    let header = new Header(title,color);
        if(colors.indexOf(color) === -1){
            message.html("Try again with another color");
        }
        else{
            message.css('color', color).html(title);
            clearInputs();
        }
}


function validate(title,color){
    if(title.trim() === ""){
        error.eq(0).html(" * Please enter some text!");
    }
    else if(!isNaN(parseInt(title))){
        error.eq(0).html(" * Text must be a string!");
    }
    else if(color.trim() === ""){
        error.eq(0).html("");
        error.eq(1).html(" * Please enter color!");
    }
    else if(!isNaN(parseInt(color))){
        error.eq(1).html(" * Color must be a string!");
    }
    else{
        error.eq(1).html("");
        generateHeader(title,color);
    }
}

btn.click(function(){
    validate(title.val(),color.val());
})