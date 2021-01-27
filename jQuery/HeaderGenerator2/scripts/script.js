let title = $("#title");
let color = $("#color");
let btn = $("#btn");
let error = $(".error");
let message = $("#message");


function generateHeader(title,color){
    if(title.trim() === ""){
        error.eq(0).html(" * Please enter some text!");
    }
    else if(!isNaN(parseInt(title))){
        error.eq(0).html(" * Text must be a string!");
    }
    else{
        error.eq(0).html("");
        message.css("color", color).html(title);
    }
}

btn.click(function(){
   generateHeader(title.val(),color.val());
})