let navbar = $("#navbar");
navbar.hide();
let formLogin = $(".formLogin");
let welcome = $("#welcome");
let formRegister = $(".formRegister");
formRegister.hide();
let loginView = $("#loginView");
let registerView = $("#registerView");
let errorLog = $(".errorLog");
let errorReg = $(".errorReg");
let btnLog = $("#btnLog");
let btnReg = $("#btnReg");
let users = [{username: "Administrator", password: "admin1234", role: "Admin"},
             {username: "Planke85", password: "planic85", role: "User"},
             {username: "Petar90", password: "pero1234", role: "User"},
];


//---------- Login inputs -------------
let uname = $("#uname");
let pass = $("#pass");

//---------- Register inputs -------------
let username = $("#username");
let password = $("#password");


//--------- Login/Register View ------------------
registerView.click(function(){
    formLogin.hide();
    formRegister.show();
});

loginView.click(function(){
    formLogin.show();
    formRegister.hide();
});

//---------- Validate register user --------------

function validateRegUser(username, password){
    if(username.trim() === ""){
        errorReg.eq(0).html(`Please enter username!`);
    }
    else if(username.length < 6){
        errorReg.eq(0).html(`Username must have min 6 characters!`);
    }
    else if(!isNaN(parseInt(username))){
        errorReg.eq(0).html(`Username must be a Text!`);
    }
    else if(password.trim() === ""){
        errorReg.eq(0).html("");
        errorReg.eq(1).html(`Please enter password`);
    }
    else if(password.trim().length < 8){
        errorReg.eq(1).html(`Password must have min 8 characters!`);
    }
    else {
        errorReg.eq(1).html("");
        registerUser(username,password);
    }
}

//--------------- Validate Login user --------------

function validateLogUser(uname,pass){
    if(uname.trim() === ""){
        errorLog.eq(0).html(`Please enter username!`);
    }
    else if(pass.trim() === "" || pass.length < 8){
        errorLog.eq(0).html("");
        errorLog.eq(1).html(`Please enter valid password!`);
    }
    else {
        errorLog.eq(1).html("");
        clearInputs();
        loginUser(uname,pass);
    }
}


//------------ Clear Inputs -------------------
function clearInputs(){
    uname.val("");
    pass.val("");
    username.val("");
    password.val("");
}

//---------- User constructor ----------------------

function UserRegister(username,password){
    this.username = username;
    this.password = password;
    this.role = role;
}

function registerUser(username,password){
    role = "User";
    let user = new UserRegister(username,password,role);
    users.push({username: user.username, password: user.password, role: user.role});
    clearInputs();
}


function loginUser(uname,pass){
    for(let user of users){
           if(user.username == uname && user.password == pass){
                if(user.role === "Admin"){
                    welcome.html(`Welcome admin ${user.username}`);
                    formLogin.hide();
                    navbar.show();
                    break;
                }
                else{
                    welcome.html(`Welcome user ${user.username}`);
                    formLogin.hide();
                    navbar.show();
                    break;
                }
           }
           else{
               $("#errorText").html("Wrong username or password!")
           }
    }
}


btnLog.click(function(){
    validateLogUser(uname.val(),pass.val());
})

btnReg.click(function(){
    validateRegUser(username.val(),password.val());
})

