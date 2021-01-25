let firstNames = [];
let lastNames = [];
let fullNames = [];
let counter = 1;

let fname = document.getElementById("fname");
let lname = document.getElementById("lname");

function add(fname, lname){
    if(fname.trim() === ""){
        document.getElementById("massage").innerHTML = "Please enter valid first name";
    }
    else if(!isNaN(parseInt(fname))){
        document.getElementById("massage").innerHTML = "First name must be a string";
    }
    else if(lname.trim() === ""){
        document.getElementById("massage").innerHTML = "Please enter valid last name";
    }
    else if(!isNaN(parseInt(lname))){
        document.getElementById("massage").innerHTML = "Last name must be a string";
    }
    else{
        firstNames.push(fname);
        lastNames.push(lname);
        fullNames.push(`${counter++}. ${fname} ${lname}<br>`);
        document.form.reset();
        document.getElementById("massage").innerHTML = `First names in arrays: [${firstNames}]<br>
                                                        Last names in arrays: [${lastNames}]<br>`;
        document.getElementById("fullName").innerHTML = `Full Names: <br> ${fullNames.join("")}`;
    }
}

document.getElementById("btn").addEventListener("click", function(){
    add(fname.value, lname.value);
});