function validateRow(){
    let rows = parseInt(document.getElementById("row").value);

    if(isNaN(rows)){
        document.getElementsByClassName("error")[0].innerHTML = "* Please enter valid number of rows!";
    }
    else if(rows < 1){
        document.getElementsByClassName("error")[0].innerHTML = "* Row number must be greater than zero!";
    }
    else{
        document.getElementsByClassName("error")[0].innerHTML = "";
    }
}

function validateColumn(){
    let columns = parseInt(document.getElementById("column").value);

    if(isNaN(columns)){
        document.getElementsByClassName("error")[1].innerHTML = "* Please enter valid number of columns!";
    }else if(columns < 1){
        document.getElementsByClassName("error")[1].innerHTML = "* Column number must be greater than zero!";
    }
    else{
        document.getElementsByClassName("error")[1].innerHTML = "";
    }
}

function createTable(){
    let rows = parseInt(document.getElementById("row").value);
    let columns = parseInt(document.getElementById("column").value);

    if(isNaN(rows)){
        document.getElementsByClassName("error")[0].innerHTML = "* Please enter valid number of rows!";
    }
    else if(isNaN(columns)){
        document.getElementsByClassName("error")[1].innerHTML = "* Please enter valid number of columns!";
    }
    else{
        let myTable = `<table>`;

        for(let i = 1; i <= rows; i++){
            myTable += `<tr>`;

            for(let j = 1; j <= columns; j++){
                myTable += `<td>Row ${i} Col ${j}</td>`;
            }
            myTable += `</tr>`;
        }
        myTable += `</table>`;
        document.getElementById("table").innerHTML = myTable;
    }
}

document.getElementById("row").addEventListener("blur", validateRow);
document.getElementById("column").addEventListener("blur", validateColumn);
document.getElementById("btn").addEventListener("click", createTable);
