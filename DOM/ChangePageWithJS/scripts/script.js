//------------------------ First way ---------------------------------
/*
let firstDiv = document.getElementById("first");

let firstDivH1 = firstDiv.firstElementChild;
firstDivH1.innerText = "This is a new H1 title";

let firstDivParagraph = firstDiv.lastElementChild;
firstDivParagraph.innerText = "First Div paragraph";

let secondDivParagraph = firstDiv.nextElementSibling.firstElementChild;
secondDivParagraph.innerText = "Second Div paragraph";

let secondDivTextTag = secondDivParagraph.nextElementSibling;
secondDivTextTag.innerText = `Second Div some text in "Text" tag.`;

let lastDiv = firstDiv.nextElementSibling.nextElementSibling;
let lastDivH1 = lastDiv.firstElementChild;
lastDivH1.innerText = "Last Div H1";

let lastDivH3 = lastDiv.lastElementChild;
lastDivH3.innerText = "Last Div H3";
*/
//---------------------------- Second way -------------------------------

document.getElementById("myTitle").innerText = "This is a new H1 title";
document.getElementsByClassName("paragraph")[0].innerText = "First Div paragraph";
document.getElementsByClassName("paragraph")[1].innerText = "Second Div paragraph";
document.getElementsByClassName("paragraph")[1].nextElementSibling.innerText = `Second Div some text in "Text" tag.`;
document.getElementsByTagName("h1")[1].innerText = "Last Div H1";
document.getElementsByTagName("h3")[0].innerText = "Last Div H3";
