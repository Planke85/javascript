let title = document.getElementById("title");
let author = document.getElementById("author");
let readStatus = document.getElementById("readStatus");

function Book(title,author,readStatus){
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.isRead = function(){
        if(this.readStatus === "read"){
            return document.getElementById("text").innerHTML = `Already read '${this.title}' by ${this.author}.`;
        }
        else{
            return document.getElementById("text").innerHTML = `You still need to read '${this.title}' by ${this.author}.`;
        }
    }
}

function validate(title,author,readStatus){
    if(title.trim() === ""){
        document.getElementsByClassName("error")[0].innerHTML = `* Please enter title!`;
    }
    else if(!isNaN(parseInt(title))){
        document.getElementsByClassName("error")[0].innerHTML = `* Title must be a string!`;
    }
    else if(author.trim() === ""){
        document.getElementsByClassName("error")[0].innerHTML = "";
        document.getElementsByClassName("error")[1].innerHTML = `* Please enter author!`;
    }
    else if(!isNaN(parseInt(author))){
        document.getElementsByClassName("error")[1].innerHTML = `* Author must be a string!`;
    }
    else if(readStatus === "noSelect"){
        document.getElementsByClassName("error")[1].innerHTML = "";
        document.getElementsByClassName("error")[2].innerHTML = `* Please select one value from dropdown!`;
    }
    else{
        document.getElementsByClassName("error")[2].innerHTML = "";
        readingStatus(title,author,readStatus);
    }
}

function readingStatus(title,author,readStatus,isRead){
    let book = new Book(title,author,readStatus,isRead);
    book.isRead();
}

document.getElementById("btn").addEventListener("click", function(){
    validate(title.value, author.value, readStatus.value);
});